import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, ResponseOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/timeoutWith';
import 'rxjs/add/operator/delay';
import { DeleteResponse,ImageModel} from '../data-model';


import 'rxjs/add/observable/forkJoin';
@Injectable()

export class DeleteRecordService {

    private Url = "http://localhost:8080/fcdr/webapi/myresource";
    headers = new Headers({ 'Content-Type': 'application/json' });
    options = new RequestOptions({ headers: this.headers });

    constructor(private http: Http) { }




   deleteSalesRecord(id: string | number): Observable<DeleteResponse> {

        return this.http
            .delete(`http://localhost:8080/fcdr-rest-service/rest/SalesService/delete/${id}`,  this.options)
            // .timeoutWith(2000,Observable.throw(new Error('time out')))
            .map(response => response.json() as DeleteResponse)
    }

    deleteLabelRecord(id: string | number): Observable<DeleteResponse> {

        return this.http
            .delete(`http://localhost:8080/fcdr-rest-service/rest/PackageService/delete/${id}`,  this.options)
            // .timeoutWith(2000,Observable.throw(new Error('time out')))
            .map(response => response.json() as DeleteResponse)
    }


   deleteProductRecord(id: string | number): Observable<DeleteResponse> {

    return this.http
        .delete(`http://localhost:8080/fcdr-rest-service/rest/ProductService/delete/${id}`,  this.options)
        // .timeoutWith(2000,Observable.throw(new Error('time out')))
        .map(response => response.json() as DeleteResponse)
}

reLinkRecord(queryString: string) {

    console.log('here', queryString);
            return this.http
                .post('http://localhost:8080/fcdr-rest-service/rest/ProductService/relinkRecord', queryString, this.options)
                .map(response => response.json() )
        }

        deleteImage(id: string | number) {

            return this.http
                .delete(`http://localhost:8080/fcdr-rest-service/rest/PackageService/deleteImage/${id}`,  this.options)
                // .timeoutWith(2000,Observable.throw(new Error('time out')))
                .map(response => response.json())
        }



}
