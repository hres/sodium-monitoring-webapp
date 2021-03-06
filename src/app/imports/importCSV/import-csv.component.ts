import { Component, OnChanges, Input, Output, ViewChild} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DomSanitizer } from '@angular/platform-browser';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { CreateRecordService } from '../../services/create-records.service';
import { saveAs } from 'file-saver/FileSaver';
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, ResponseContentType } from '@angular/http';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/timeout';
import { environment } from '../../../environments/environment'
import { KeycloakHttp } from '../../keycloak/keycloak.http';



export const saveFile = (blobContent: Blob, fileName: string) => {
    const blob = new Blob([blobContent], { type: 'application/octet-stream' });
    saveAs(blob, fileName);
};
const maxFileSizeSales = 2046976;
const maxFileSizeLabel = 599040;

export const getFileNameFromResponseContentDisposition = (res: Response) => {
    const contentDisposition = res.headers.get('content-disposition') || '';
    const matches = /filename=([^;]+)/ig.exec(contentDisposition);
    const fileName = (matches[1] || 'untitled').trim();
   
    return fileName;
};

@Component({
    selector: 'import-csv',
    templateUrl: './import-csv.component.html',
    styleUrls: ['./import-csv.component.css']


})
@Injectable()
export class ImportCsvComponent {
    apiUrl = environment.apiUrl;

    @Input() flag: number;
    importCsvFileForm: FormGroup;
    isLoading: boolean = false;
    submitted = false;
    serverDown: boolean = false;
    errorMessage: string = null;
    file: File;
    validFile: boolean;
    validSize: boolean;
    sizeOfFile: string = "2 Mb";
    currentlySelectedValue: number = 1;
    currentMaxSize:  number = maxFileSizeSales;
    //this.importCsvFileForm.controls['type']



    @ViewChild('fileInput') fileInput;

    constructor(private fb: FormBuilder, 
                private createRecordService: CreateRecordService,  
                private keycloakHttp: KeycloakHttp) {
        this.createForm();
        this.importCsvFileForm.controls['type'].setValue(1);
    }



    createForm() {
        this.importCsvFileForm = this.fb.group({
            csv_file: null,
            type: ''
        });

    }

    onSubmit() {
        
       const options = new RequestOptions({responseType: ResponseContentType.Blob });
   // const options = {};
       // const header =  new Headers({ 'Content-Type: 'multipart/form-data' });
      

       let headers = new Headers();
      //headers.append('Content-Type', 'multipart/form-data');
       headers.append('Accept', 'text/plain');
      // let options = new RequestOptions({ headers: headers });
      let fileBrowser = this.fileInput.nativeElement;
       let formData:FormData = new FormData();
       formData.append('csv_file', fileBrowser.files[0], fileBrowser.files[0].name);
        this.submitted = true;
        this.isLoading = true
        var importValue = this.importCsvFileForm.controls['type'].value == '1'? 'importMarketShare': (this.importCsvFileForm.controls['type'].value == '2'?'importLabel':null);
        const reader: FileReader = new FileReader();


        this.keycloakHttp.post(this.apiUrl+`ImportService/${importValue}`, formData, options)

                .map( r => {  return  r.blob();  })
                .finally(() => {this.isLoading = false; this.submitted = false;})
                .subscribe (response => {
                  
            saveFile(response, "importReport.txt");
             this.importCsvFileForm.controls['csv_file'].setValue(null);
             this.validateSize();
        }
        , (error: Response) => {
            console.log("status: ",error.status);
            if(error.status == 400){
                this.errorMessage = "Failed uploading the file";
            }else if(error.status == 406){

                this.errorMessage = "Wrong file format";
            }else{
                this.errorMessage = "Unexpected error";
            }

                this.importCsvFileForm.controls['csv_file'].setValue(null);
                this.validateSize();
            }
        );
           

    }

    // downloadFile(data: Response){
    //     var blob = new Blob([data], { type: 'text/plain' });
    //     var url= window.URL.createObjectURL(blob);
    //     window.open(url);
    //   }
    validateFile(input: EventTarget) {
        
        this.validFile = true;
        this.validSize = true;


        let eventObj: MSInputMethodContext = <MSInputMethodContext> input;
        let target: HTMLInputElement = <HTMLInputElement> eventObj.target;
        let files: FileList = target.files;
        this.file = files[0];
        
        this.errorMessage = null;
        if(this.file == undefined) return;
        if(this.file.name.split('.').pop().toLowerCase() != 'csv'){
            this.validFile = false;
            this.errorMessage = "Must be a CSV file";
            return;

        }else{

    }
}
updateSelectedValue(n: number){
    console.log(n, "is the selected value");
    this.currentlySelectedValue = n;
    if(n == 2){
        this.sizeOfFile = "585 kb";
        this.currentMaxSize = maxFileSizeLabel;
    }else if(n == 1){
        this.sizeOfFile = "2 Mb";
        this.currentMaxSize = maxFileSizeSales;
    }
    console.log(this.currentMaxSize,"is the current max");
    this.validateSize();
}


  validateSize(){
      
    let fileBrowser = this.fileInput.nativeElement;
  
      if(fileBrowser.files[0]){
        this.errorMessage = null;
        this.validSize= true;
        if (fileBrowser.files[0].size > this.currentMaxSize || fileBrowser.files[0].size < 1){
            this.validSize= false;
            this.errorMessage = "File is too big";
        }
      }else{
        this.validSize= false;
        this.validFile = false;
          
      }
  }
}