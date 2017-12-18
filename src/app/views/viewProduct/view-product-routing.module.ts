import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ViewProductComponent} from './view-product.component';
import { EditProductComponent }  from '../../editForms/editProduct/edit-product.component';

const viewProductRoutes: Routes = [

    {
        path: 'viewproduct/:id', component: ViewProductComponent
    },


];

@NgModule({
  imports: [
            RouterModule.forRoot(
            viewProductRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )
  ],
  declarations: []
})
export class ViewProductRoutingModule {


 }
