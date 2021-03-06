import { Component, OnChanges, Input, Output, EventEmitter, AfterViewChecked } from '@angular/core';
import { classificationList, Classification_name, Classification_number, Response, AllSalesFieldsView } from '../../data-model';
import { EditRecordService } from '../../services/edit-records.service';
import { SearchService } from '../../services/search.service';
import { GetRecordService } from '../../services/getRecord.service';
import { DatePipe } from '@angular/common';

import { Observable } from 'rxjs/Observable';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

const NUMBER_REGEX = '^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$';

@Component({
    selector: 'edit-sales',
    templateUrl: './edit-sales.component.html',
    styleUrls: ['./edit-sales.component.css'],
    providers: [EditRecordService]

})

export class EditSalesComponent implements OnChanges {

    minDate = new Date(2000, 0, 1);
    maxDate = new Date(2020, 0, 1);

    isLoading: boolean = false;
    submitted: boolean = false;
    @Output() callP = new EventEmitter<number>();

    offset: number = 0;
     salesField: AllSalesFieldsView;
    id: number;

    listOfClass: classificationList[];
    serverDown: boolean = false;

    flag: number = null;
    salesForm: FormGroup;
    sales_collection_date_validation: string = null;
    constructor(private fb: FormBuilder,
        private searchService: SearchService,
        private getRecordService: GetRecordService,
        private editRecordService: EditRecordService,
        private router: Router,
        private route: ActivatedRoute) {

        this.createForm();
        

    }
    ngOnInit(): void {
  this.route.paramMap
            .switchMap((param: ParamMap) =>
        this.getRecordService.getSalesRecordsAndClassification(param.get('id'))).subscribe(response => {
            const {data, message, status} = response[1];
            this.listOfClass = data.dataList;
             this.salesField = response[0].data.dataList[0];
             this.ngOnChanges();
            

        }
        );


    }



    ngOnChanges() {
        this.flag = null;
        this.submitted = false;
        this.salesForm.reset({
            sales_description: this.salesField.sales_description,
            sales_upc: this.salesField.sales_upc,
            sales_brand: this.salesField.sales_brand,
            sales_manufacturer: this.salesField.sales_manufacturer,
            dollar_rank: this.salesField.dollar_rank,
            dollar_volume: this.salesField.dollar_volume,
            dollar_share: this.salesField.dollar_share,
            dollar_volume_percentage_change: this.salesField.dollar_volume_percentage_change,
            kilo_volume: this.salesField.kilo_volume,
            kilo_share: this.salesField.kilo_share,
            kilo_volume_percentage_change: this.salesField.kilo_volume_percentage_change,
            average_ac_dist: this.salesField.average_ac_dist,
            average_retail_price: this.salesField.average_retail_price,
            sales_source: this.salesField.sales_source,
            nielsen_category: this.salesField.nielsen_category,
            sales_year: this.salesField.sales_year,
            control_label_flag: (this.salesField.control_label_flag == null ? "" : (this.salesField.control_label_flag == false ? '0' : '1')),
            kilo_volume_total: this.salesField.kilo_volume_total,
            kilo_volume_rank: this.salesField.kilo_volume_rank,
            dollar_volume_total: this.salesField.dollar_volume_total,
            cluster_number: this.salesField.cluster_number,
            product_grouping: this.salesField.product_grouping,
            sales_product_description: this.salesField.sales_product_description,
            classification_number: (this.salesField.classification_number == null?"":this.salesField.classification_number),
            classification_type: this.salesField.classification_type,
            sales_comment: this.salesField.sales_comment,
            sales_collection_date: this.salesField.sales_collection_date,
            number_of_units: this.salesField.number_of_units

        }
        );

    }


    createForm() {
        this.salesForm = this.fb.group({
            sales_description: ['', [Validators.required]],
            sales_upc: ['', [
                Validators.pattern('\\d+'),
                Validators.required

            ]],
            sales_brand: '',
            sales_manufacturer: '',
            dollar_rank: [null, [Validators.pattern(NUMBER_REGEX)]],
            dollar_volume: [null, [
                Validators.pattern(NUMBER_REGEX),
                Validators.required]],
            dollar_share: [null, [
                Validators.pattern(NUMBER_REGEX),
                Validators.required]],
            dollar_volume_percentage_change: [null, [
                Validators.pattern(NUMBER_REGEX),
                Validators.required]],
            kilo_volume: [null, [
                Validators.pattern(NUMBER_REGEX),
                Validators.required

            ]],
            kilo_share: ['', [
                Validators.pattern(NUMBER_REGEX),
                Validators.required]],
            kilo_volume_percentage_change: [null, [
                Validators.pattern(NUMBER_REGEX),
                Validators.required]],
            average_ac_dist: [null, [Validators.pattern(NUMBER_REGEX)]],
            average_retail_price: [null, [Validators.pattern(NUMBER_REGEX)]],
            sales_source: ['', [Validators.required]],
            nielsen_category: ['', [Validators.required]],
            sales_year: [null, [
                Validators.pattern('\\d+')]],
            control_label_flag: "",
            kilo_volume_total: [null, [
                Validators.pattern(NUMBER_REGEX),
                Validators.required]],
            kilo_volume_rank: [null, [Validators.pattern(NUMBER_REGEX)]],
            dollar_volume_total: [null, [
                Validators.pattern(NUMBER_REGEX),
                Validators.required]],
            cluster_number: [null, [Validators.pattern(NUMBER_REGEX)]],
            product_grouping: [null, [Validators.pattern(NUMBER_REGEX)]],
            sales_product_description: '',
            classification_number: "",
            classification_type: '',
            sales_comment: '',
            sales_collection_date:  '',
            number_of_units: [null, [Validators.pattern('\\d+')]]
            // kilo_rank: [null, [Validators.pattern(NUMBER_REGEX)]]
        });
        this.salesForm.valueChanges
            .subscribe(data => this.onValueChanged(data));

        this.onValueChanged();
    }




    onValueChanged(data?: any) {
        if (!this.salesForm) { return; }
        const form = this.salesForm;

        for (const field in this.formErrors) {
            this.formErrors[field] = '';
            const control = form.get(field);
            
            if (control && control.dirty && !control.valid) {
                const messages = this.validationMessages[field];
                for (const key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }

    }

    onSubmit() {



        this.flag = null;
        this.setValues();

        this.isLoading = true;

        this.editRecordService.updateSales(JSON.stringify(this.salesField)).finally(() => this.isLoading = false).subscribe(response => {

            const {message, status} = response;

            if (status === 202) {
                this.flag = 2;
                this.submitted = false;
            } else if (status === 203) {
                this.flag = 2;
                this.submitted = false;

            } else if (status === 204) {
                this.flag = 2;
                this.submitted = false;
            } else if (status === 200) {

                //this.callP.emit(1);
                this.flag = 1;
                setTimeout(() => {

                    this.router.navigate(['/view-sales', this.id]);
                },
                    4000);
            }
            else {
                this.flag = 2;
                this.submitted = false;
            }

        }, (error) => {
            this.serverDown = true;
            this.flag = 2;
            this.submitted = false;

        });

    }

    prepareSaveSales(): AllSalesFieldsView {
        return this.salesForm.value;
    }

    revert() {

        this.ngOnChanges();
    }


    formErrors = {
        'sales_description': '',
        'sales_upc': '',
        'dollar_rank': '',
        'dollar_volume': '',
        'dollar_share': '',
        'dollar_volume_percentage_change': '',
        'kilo_volume': '',
        'kilo_share': '',
        'kilo_volume_percentage_change': '',
        'average_ac_dist': '',
        'average_retail_price': '',
        'sales_source': '',
        'nielsen_category': '',
        'sales_year': '',
        'kilo_volume_total': '',
        'kilo_volume_rank': '',
        'dollar_volume_total': '',
        'cluster_number': '',
        'product_grouping': '',
        'number_of_units': '',
        // 'kilo_rank': '',
        'sales_collection_date':''
    }

    validationMessages = {
        'sales_description': {
            'required': 'Sales description is required'
        },
        'sales_upc': {
            'pattern': 'Must be a digit',
            'required': 'Sales UPC is required'
        },
        'dollar_rank': {
            'pattern': 'Must be a number'
        }
        ,
        'dollar_volume': {
            'pattern': 'Must be a number',
            'required': 'Dollar volume is required'
        },
        'dollar_share': {
            'pattern': 'Must be a number',
            'required': 'Dollar share is required'
        },
        'dollar_volume_percentage_change': {
            'pattern': 'Must be a number',
            'required': 'Dollar volume % change is required'
        },
        'kilo_volume': {
            'pattern': 'Must be a number',
            'required': 'Kilo volume is required'
        },
        'kilo_share': {
            'pattern': 'Must be a number',
            'required': 'Kilo share is required'
        },
        'kilo_volume_percentage_change': {
            'pattern': 'Must be a number',
            'required': 'Kilo volume % change is required'
        },
        'average_ac_dist': {
            'pattern': 'Must be a number'
        },
        'average_retail_price': {
            'pattern': 'Must be a number'
        },
        'sales_source': {
            'required': 'Sales source is required'
        },
        'nielsen_category': {
            'required': 'Nielsen Category is required',

        },
        'sales_year': {
            'pattern': 'Must be a digit',
            'required': 'Sales Year is required',
            'minLength': 'Minimum of 4 digis',
            'maxLength': 'Maximum of 4 digits'
        },
        'kilo_volume_total': {
            'pattern': 'Must be a number',
            'required': 'Kilo volume total is required'
        },
        'kilo_volume_rank': {
            'pattern': 'Must be a number'
        },
        'dollar_volume_total': {
            'pattern': 'Must be a number',
            'required': 'Dollar volume total is required'
        },
        'cluster_number': {
            'pattern': 'Must be a number'
        },
        'product_grouping': {
            'pattern': 'Must be a number'
        },
        'number_of_units': {
            'pattern': 'Must be a digit'
        },
        // 'kilo_rank': {
        //     'pattern': 'Must be a number'
        // },
        'sales_collection_date':{
            'pattern':'Invalid date'
        }
    }
    setValues(): void {
        this.submitted = true;
        this.id = this.salesField.sales_id;
        var date = new DatePipe('en-US');

        this.salesField = this.prepareSaveSales();
         this.salesField.sales_collection_date = this.salesField.sales_collection_date && this.salesField.sales_collection_date != "" ? this.salesField.sales_collection_date: null;

        this.salesField.sales_id = this.id;
        this.salesField.number_of_units = this.salesField.number_of_units == ""  && !this.salesField.number_of_units.toString.length? null : this.salesField.number_of_units;
        this.salesField.product_grouping = this.salesField.product_grouping == ""  && !this.salesField.product_grouping.toString.length? null : this.salesField.product_grouping;
        this.salesField.average_retail_price = this.salesField.average_retail_price == ""  && !this.salesField.average_retail_price.toString.length? null : this.salesField.average_retail_price;
        this.salesField.sales_year = this.salesField.sales_year == "" && !this.salesField.sales_year.toString.length? null : this.salesField.sales_year;
        this.salesField.classification_number = this.salesField.classification_number == "" && !this.salesField.classification_number.toString.length? null : this.salesField.classification_number;

        this.salesField.dollar_rank = this.salesField.dollar_rank == "" && !this.salesField.dollar_rank.toString.length? null : this.salesField.dollar_rank;
        this.salesField.dollar_volume = this.salesField.dollar_volume == "" && !this.salesField.dollar_volume.toString.length? null : this.salesField.dollar_volume;
        this.salesField.dollar_share = this.salesField.dollar_share == "" && !this.salesField.dollar_share.toString.length ? null : this.salesField.dollar_share;
        this.salesField.dollar_volume_percentage_change = this.salesField.dollar_volume_percentage_change == "" && !this.salesField.dollar_volume_percentage_change.toString.length? null : this.salesField.dollar_volume_percentage_change;
        this.salesField.kilo_volume = this.salesField.kilo_volume == "" && !this.salesField.kilo_volume.toString.length? null : this.salesField.kilo_volume;

        this.salesField.kilo_share = this.salesField.kilo_share == "" && !this.salesField.kilo_share.toString.length? null : this.salesField.kilo_share;
        this.salesField.kilo_volume_percentage_change = this.salesField.kilo_volume_percentage_change == "" && !this.salesField.kilo_volume_percentage_change.toString.length? null : this.salesField.kilo_volume_percentage_change;
        this.salesField.average_ac_dist = this.salesField.average_ac_dist == "" && !this.salesField.average_ac_dist.toString.length? null : this.salesField.average_ac_dist;

        this.salesField.kilo_volume_total = this.salesField.kilo_volume_total == "" && !this.salesField.kilo_volume_total.toString.length? null : this.salesField.kilo_volume_total;
        this.salesField.kilo_volume_rank = this.salesField.kilo_volume_rank == "" && !this.salesField.kilo_volume_rank.toString.length? null : this.salesField.kilo_volume_rank;

        this.salesField.dollar_volume_total = this.salesField.dollar_volume_total == "" && !this.salesField.dollar_volume_total.toString.length? null : this.salesField.dollar_volume_total;
        this.salesField.cluster_number = this.salesField.cluster_number == "" && !this.salesField.cluster_number.toString.length? null : this.salesField.cluster_number;

        this.salesField.control_label_flag = this.salesField.control_label_flag == "" && !this.salesField.control_label_flag.toString.length? null : this.salesField.control_label_flag;


    }
    valDate(val: any){


        var date = new DatePipe('en-US');
        
    
return console.log("invalid", val);

    }
     toFixed(x) {
        console.log("the number is: ", this.salesField.kilo_share)
        if (Math.abs(x) < 1.0) {
          var e = parseInt(x.toString().split('e-')[1]);
          if (e) {
              x *= Math.pow(10,e-1);
              x = '0.' + (new Array(e)).join('0') + x.toString().substring(2);
          }
        } else {
          var e = parseInt(x.toString().split('+')[1]);
          if (e > 20) {
              e -= 20;
              x /= Math.pow(10,e);
              x += (new Array(e+1)).join('0');
          }
        }
        console.log("the number is fixed: ", x)
        return x;
      }

}