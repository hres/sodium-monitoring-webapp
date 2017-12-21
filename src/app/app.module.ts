import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {Headers, HttpModule} from '@angular/http';
import {  MatIconRegistry} from '@angular/material';
import { CommonModule } from '@angular/common'; 
import {MatIconModule} from '@angular/material/icon';

import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {MatRadioModule} from '@angular/material/radio'



import { SearchService } from './services/search.service';
import { AddClassificationService } from './services/add-classification.service';
import { CreateRecordService } from './services/create-records.service';
import { EditRecordService } from './services/edit-records.service'
import { DeleteRecordService } from './services/delete-record.service'
import {CommunicationServiceService} from './services/communication-service.service'




import {FormModule} from './forms/productForm/form.module';

import { SalesFormModule }  from './forms/salesForm/sales-form.module'; 
import {ViewSalesModule} from './views/viewSales/view-sales.module';
import {CreateSalesModule} from './createRecords/createSales/create-sales.module'
import { EditSalesModule}  from './editForms/editSales/edit-sales.module'; 
import { EditLabelModule}  from './editForms/editPackage/edit-label.module'; 




import { LabelFormComponent }  from './forms/labelForm/label-form.component'; 
import { LabelFormModule}  from './forms/labelForm/label-form.module'; 
import { CreateLabelModule }  from './createRecords/createLabel/create-label.module'; 
import {ViewPackageModule} from './views/viewPackage/view-package.module';



import { SearchAllModule }  from './forms/searchAllForm/search-all.module'; 

import {ViewProductModule} from './views/viewProduct/view-product.module';

import { EditProductModule}  from './editForms/editProduct/edit-product.module'; 
import { CreateProductModule }  from './createRecords/createProduct/create-product.module'; 
import {FormsCenterModule} from './forms-center/forms-center.module'


import {EditNftModule} from './editForms/editNft/edit-nft.module'

import {PaginationModelModule} from './pagination/pagination.model'
import {CustumTableModule} from './table/table.module'
import {RadioButtonModule} from './radio-button/radio-button.module'
import {SharedModule} from './shared/shared.module';
import {ModalBoxModule} from './modal-box/modal-box.module'
import { AddClassificationModule }  from './classification-center/add-classification/add-classification.module'; 
 

import {CreateNftModule} from './createRecords/createNft/create-nft.module'

import {ConfirmBoxModule} from './confirmbox/confirm-box.module';




@NgModule({
  imports:      [ 
      BrowserAnimationsModule,
      BrowserModule,
      FormsCenterModule,
      FormModule,
      ConfirmBoxModule,
      EditSalesModule,
      AppRoutingModule,
      HttpModule,
      SalesFormModule,
      LabelFormModule,
     EditProductModule,
      CreateSalesModule,
      ViewSalesModule,
      MatRadioModule,
      SearchAllModule,
      CreateLabelModule,
      RadioButtonModule,
      CustumTableModule,
      PaginationModelModule,
      SharedModule,
      CommonModule,
      ViewProductModule,
      MatIconModule,
      ModalBoxModule,
      AddClassificationModule,
      CreateProductModule,
      CreateNftModule,
      EditLabelModule,
      EditNftModule
      
       ],
  declarations: [ 
    AppComponent
    
    ],
  exports: [

    // RadioButtonComponent,
    // CreateSalesComponent
  ],
   providers: [
        MatIconRegistry,
        SearchService,
        //CommunicationServiceService,
        
       // AddClassificationService,
        CreateRecordService
    

    ],
  bootstrap:    [ AppComponent]
})
export class AppModule { }
