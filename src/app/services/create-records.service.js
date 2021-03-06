"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/timeout");
require("rxjs/add/observable/forkJoin");
var CreateRecordService = (function () {
    function CreateRecordService(http) {
        this.http = http;
        this.Url = "http://localhost:8080/fcdr/webapi/myresource";
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    CreateRecordService.prototype.createProduct = function (queryString) {
        console.log('here', queryString);
        return this.http
            .post('http://localhost:8080/fcdr-rest-service/rest/ProductService/create', queryString, this.options)
            .map(function (response) { return response.json(); });
    };
    CreateRecordService.prototype.createSales = function (queryString) {
        console.log('here', queryString);
        return this.http
            .post('http://localhost:8080/fcdr-rest-service/rest/SalesService/insert', queryString, this.options)
            .map(function (response) { return response.json(); });
    };
    CreateRecordService.prototype.createLabel = function (queryString) {
        console.log('here', queryString);
        return this.http
            .post('http://localhost:8080/fcdr-rest-service/rest/PackageService/insert', queryString, this.options)
            .map(function (response) { return response.json(); });
    };
    CreateRecordService.prototype.createNft = function (queryString) {
        console.log('here', queryString);
        return this.http
            .post('http://localhost:8080/fcdr-rest-service/rest/PackageService/insertNft', queryString, this.options)
            .map(function (response) { return response.json(); });
    };
    CreateRecordService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], CreateRecordService);
    return CreateRecordService;
}());
exports.CreateRecordService = CreateRecordService;
//# sourceMappingURL=create-records.service.js.map