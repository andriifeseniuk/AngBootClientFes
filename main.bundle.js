webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"padding-left: 0; padding-right: 0;\">\n  <header class=\"navbar navbar-light navbar-fixed-top navbar-expand-lg\">\n\n    <a class=\"navbar-brand\" [routerLink]=\"['/']\" (click)=\"navbarCollapsed = true\">API {{env}}</a>\n\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" (click)=\"navbarCollapsed = !navbarCollapsed\"\n            [attr.aria-expanded]=\"!navbarCollapsed\" aria-controls=\"navbarContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"navbar-collapse\" [ngbCollapse]=\"navbarCollapsed\" id=\"navbarContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n          <a class=\"nav-link\" [routerLink]=\"['/home']\" (click)=\"navbarCollapsed = true\">Home</a>\n        </li>\n        <li>\n          <div ngbDropdown class=\"d-inline-block\">\n            <button class=\"btn btn-light\" id=\"dropdownBasic1\" ngbDropdownToggle>CRUD</button>\n            <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n              <button class=\"dropdown-item\" [routerLink]=\"['/create']\">Create</button>\n              <button class=\"dropdown-item\" [routerLink]=\"['/read']\">Read</button>\n              <button class=\"dropdown-item\" [routerLink]=\"['/update']\">Update</button>\n              <button class=\"dropdown-item\" [routerLink]=\"['/delete']\">Delete</button>\n            </div>\n          </div>\n        </li>\n        <li>\n          <div ngbDropdown class=\"d-inline-block\">\n            <button class=\"btn btn-light\" id=\"dropdownBasic1\" ngbDropdownToggle>Join</button>\n            <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n              <button class=\"dropdown-item\" [routerLink]=\"['/join', 'Inner']\">INNER</button>\n              <button class=\"dropdown-item\" [routerLink]=\"['/join', 'LeftOuter']\">LEFT OUTER</button>\n              <button class=\"dropdown-item\" [routerLink]=\"['/join', 'RightOuter']\">RIGHT OUTER</button>\n              <button class=\"dropdown-item\" [routerLink]=\"['/join', 'FullOuter']\">FULL OUTER</button>\n              <div class=\"dropdown-divider\"></div>\n              <button class=\"dropdown-item\" [routerLink]=\"['/join', 'Cross']\">CROSS</button>\n            </div>\n          </div>\n        </li>\n      </ul>\n\n      <span *ngIf=\"isAuthenticated && currentUser\" class=\"navbar-text mr-sm-2\">Welcome {{currentUser}}</span>\n      <button *ngIf=\"!isAuthenticated\" class=\"btn btn-light float-right\" (click)=\"login()\" type=\"login\" placeholder=\"Login\" aria-label=\"Login\">Log in</button>\n      <button *ngIf=\"isAuthenticated\" class=\"btn btn-light float-right\" (click)=\"logout()\" type=\"logout\" placeholder=\"Logout\" aria-label=\"Logout\">Log out</button>\n    </div>\n  </header>\n</div>\n\n<div>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.isAuthenticated = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.env = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].production ? "PROD" : "DEV";
    };
    AppComponent.prototype.login = function () {
        this.currentUser = 'User';
        this.isAuthenticated = true;
    };
    AppComponent.prototype.logout = function () {
        this.currentUser = null;
        this.isAuthenticated = false;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_table__ = __webpack_require__("../../../../primeng/table.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_primeng_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_button__ = __webpack_require__("../../../../primeng/button.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_primeng_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_create_create_component__ = __webpack_require__("../../../../../src/app/components/create/create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_read_read_component__ = __webpack_require__("../../../../../src/app/components/read/read.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_update_update_component__ = __webpack_require__("../../../../../src/app/components/update/update.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_delete_delete_component__ = __webpack_require__("../../../../../src/app/components/delete/delete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_join_join_component__ = __webpack_require__("../../../../../src/app/components/join/join.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_crudApi__ = __webpack_require__("../../../../../src/app/services/crudApi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_joinApi__ = __webpack_require__("../../../../../src/app/services/joinApi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_modelsConvertingService__ = __webpack_require__("../../../../../src/app/services/modelsConvertingService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_create_create_component__["a" /* CreateComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_read_read_component__["a" /* ReadComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_update_update_component__["a" /* UpdateComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_delete_delete_component__["a" /* DeleteComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_join_join_component__["a" /* JoinComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_routing__["a" /* appRoutes */]),
                __WEBPACK_IMPORTED_MODULE_6_primeng_table__["TableModule"],
                __WEBPACK_IMPORTED_MODULE_7_primeng_button__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_16__services_crudApi__["a" /* CrudApi */], __WEBPACK_IMPORTED_MODULE_17__services_joinApi__["a" /* JoinApi */], __WEBPACK_IMPORTED_MODULE_18__services_modelsConvertingService__["a" /* ModelsConvertingService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_create_create_component__ = __webpack_require__("../../../../../src/app/components/create/create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_read_read_component__ = __webpack_require__("../../../../../src/app/components/read/read.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_update_update_component__ = __webpack_require__("../../../../../src/app/components/update/update.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_delete_delete_component__ = __webpack_require__("../../../../../src/app/components/delete/delete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_join_join_component__ = __webpack_require__("../../../../../src/app/components/join/join.component.ts");






var appRoutes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'create', component: __WEBPACK_IMPORTED_MODULE_0__components_create_create_component__["a" /* CreateComponent */] },
    { path: 'read', component: __WEBPACK_IMPORTED_MODULE_2__components_read_read_component__["a" /* ReadComponent */] },
    { path: 'update', component: __WEBPACK_IMPORTED_MODULE_3__components_update_update_component__["a" /* UpdateComponent */] },
    { path: 'delete', component: __WEBPACK_IMPORTED_MODULE_4__components_delete_delete_component__["a" /* DeleteComponent */] },
    { path: 'join/:joinType', component: __WEBPACK_IMPORTED_MODULE_5__components_join_join_component__["a" /* JoinComponent */] }
];


/***/ }),

/***/ "../../../../../src/app/components/create/create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/create/create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"padding-left: 0; padding-right: 0;\">\n  <div class=\"row mt-2\">\n    <h4>\n        Table\n    </h4>\n  </div>\n  <div class=\"row mt-2\">\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"record.tableName\">\n  </div>\n  <div class=\"row mt-2\">\n    <h4>\n        New record\n    </h4>      \n  </div>\n\n  <div class=\"row\">\n    <p-table [value]=\"record.properties\" [resizableColumns]=\"true\">\n        <ng-template pTemplate=\"header\">\n            <tr>\n                <th>Key</th>\n                <th>Value</th>\n                <th style=\"width:3em\"></th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-property let-i=\"rowIndex\">\n            <tr>\n                <td pEditableColumn>\n                    <p-cellEditor>\n                        <ng-template pTemplate=\"input\">\n                            <input type=\"text\" [(ngModel)]=\"property.key\">\n                        </ng-template>\n                        <ng-template pTemplate=\"output\">\n                            {{property.key}}\n                        </ng-template>\n                    </p-cellEditor>\n                </td>\n                <td pEditableColumn>\n                    <p-cellEditor>\n                        <ng-template pTemplate=\"input\">\n                            <input type=\"text\" [(ngModel)]=\"property.value\">\n                        </ng-template>\n                        <ng-template pTemplate=\"output\">\n                            {{property.value}}\n                        </ng-template>\n                    </p-cellEditor>\n                </td>      \n                <td>\n                    <button pButton icon=\"fa-close\" (click)=\"deleteRow(i)\"></button>\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n  </div>\n\n  <div class=\"row mt-2\">\n    <div class=\"col-sm-6 px-0 text-left\" >\n        <button class=\"btn btn-success float-left\" (click)=\"addRow()\">Add</button>\n    </div>\n    <div class=\"col-sm-6 px-0 text-right\">\n        <button class=\"btn btn-primary\" (click)=\"create()\">Submit</button>\n        <button class=\"btn btn-dark ml-2\" (click)=\"cancel()\">Cancel</button>\n    </div>\n  </div>\n  <div *ngIf=\"error\" class=\"row mt-2\">\n    <div class=\"alert alert-danger\" role=\"alert\">\n        {{error.json().Message || error}}\n    </div>\n  </div>  \n  <div *ngIf=\"success\" class=\"row mt-2\">\n    <div class=\"alert alert-success\" role=\"alert\">\n        {{success.status}} {{success.statusText}}\n    </div>    \n  </div>  \n</div>"

/***/ }),

/***/ "../../../../../src/app/components/create/create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_crudApi__ = __webpack_require__("../../../../../src/app/services/crudApi.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateComponent = /** @class */ (function () {
    function CreateComponent(router, crud) {
        this.router = router;
        this.crud = crud;
        this.record = {
            tableName: "",
            properties: [{ key: "", value: "" }]
        };
    }
    CreateComponent.prototype.ngOnInit = function () {
    };
    CreateComponent.prototype.addRow = function () {
        this.record.properties.push({ key: "", value: "" });
    };
    CreateComponent.prototype.deleteRow = function (rowIndex) {
        this.record.properties.splice(rowIndex, 1);
    };
    CreateComponent.prototype.cancel = function () {
        this.router.navigate([""]);
    };
    CreateComponent.prototype.create = function () {
        var _this = this;
        console.log(this.record.tableName);
        console.log(this.record.properties);
        this.crud.create(this.record).subscribe(function (resp) {
            console.log(resp);
            _this.success = resp;
            _this.error = undefined;
        }, function (error) {
            console.log(error);
            console.log(error.json());
            _this.error = error;
            _this.success = undefined;
        });
    };
    CreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-create',
            template: __webpack_require__("../../../../../src/app/components/create/create.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/create/create.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_crudApi__["a" /* CrudApi */]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/delete/delete.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/delete/delete.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"padding-left: 0; padding-right: 0;\">\n  <div class=\"row mt-2\">\n    <h4>\n        Table\n    </h4>\n  </div>\n  <div class=\"row mt-2\">\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"table\">\n  </div>\n  <div class=\"row mt-2\">\n    <h4>\n        Record name\n    </h4>      \n  </div>\n\n  <div class=\"row mt-2\">\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"recordName\">\n  </div>\n\n  <div class=\"row mt-2\">\n    <div class=\"col-sm-12 px-0 text-right\">\n        <button class=\"btn btn-primary\" (click)=\"delete()\">Submit</button>\n        <button class=\"btn btn-dark ml-2\" (click)=\"cancel()\">Cancel</button>\n    </div>\n  </div>\n  <div *ngIf=\"error\" class=\"row mt-2\">\n    <div class=\"alert alert-danger\" role=\"alert\">\n        {{error.json().Message || error}}\n    </div>\n  </div>  \n  <div *ngIf=\"success\" class=\"row mt-2\">\n    <div class=\"alert alert-success\" role=\"alert\">\n        {{success.status}} {{success.statusText}}\n    </div>    \n  </div>  \n</div>"

/***/ }),

/***/ "../../../../../src/app/components/delete/delete.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_crudApi__ = __webpack_require__("../../../../../src/app/services/crudApi.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeleteComponent = /** @class */ (function () {
    function DeleteComponent(router, crud) {
        this.router = router;
        this.crud = crud;
    }
    DeleteComponent.prototype.ngOnInit = function () {
    };
    DeleteComponent.prototype.cancel = function () {
        this.router.navigate([""]);
    };
    DeleteComponent.prototype.delete = function () {
        var _this = this;
        console.log(this.table);
        console.log(this.recordName);
        this.crud.delete(this.table, this.recordName).subscribe(function (resp) {
            console.log(resp);
            _this.success = resp;
            _this.error = undefined;
        }, function (error) {
            console.log(error);
            console.log(error.json());
            _this.error = error;
            _this.success = undefined;
        });
    };
    DeleteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-delete',
            template: __webpack_require__("../../../../../src/app/components/delete/delete.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/delete/delete.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_crudApi__["a" /* CrudApi */]])
    ], DeleteComponent);
    return DeleteComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"padding-left: 0; padding-right: 0;\">\n  <div class=\"row mt-2\">\n    <h2>\n      API Home\n    </h2>\n  </div>  \n  \n  <div class=\"row mt-2\">\n    <div class=\"col-sm-2 px-0 text-left\" >\n      <button class=\"btn btn-success float-left\" [routerLink]=\"['/create']\">Create</button>\n    </div>\n    <div class=\"col-sm-4 px-0 ml-2 text-left\">\n      Create a new record in a table\n    </div>\n  </div>\n\n  <div class=\"row mt-2\">\n    <div class=\"col-sm-2 px-0 text-left\" >\n      <button class=\"btn btn-success float-left\" [routerLink]=\"['/read']\">Read</button>\n    </div>\n    <div class=\"col-sm-4 px-0 ml-2 text-left\">\n      Read records from a table\n    </div>\n  </div>\n\n  <div class=\"row mt-2\">\n    <div class=\"col-sm-2 px-0 text-left\" >\n      <button class=\"btn btn-success float-left\" [routerLink]=\"['/update']\">Update</button>\n    </div>\n    <div class=\"col-sm-4 px-0 ml-2 text-left\">\n      Update records in a table\n    </div>\n  </div>\n\n  <div class=\"row mt-2\">\n    <div class=\"col-sm-2 px-0 text-left\" >\n      <button class=\"btn btn-success float-left\" [routerLink]=\"['/delete']\">Delete</button>\n    </div>\n    <div class=\"col-sm-4 px-0 ml-2 text-left\">\n      Delete records from a table\n    </div>\n  </div>\n\n  <div class=\"row mt-2\">\n    <div class=\"col-sm-2 px-0 text-left\" >\n      <button class=\"btn btn-success float-left\" [routerLink]=\"['/join', 'Inner']\">Inner Join</button>\n    </div>\n    <div class=\"col-sm-4 px-0 ml-2 text-left\">\n      Perform Inner Join on the tables\n    </div>\n  </div>\n\n  <div class=\"row mt-2\">\n    <div class=\"col-sm-2 px-0 text-left\" >\n      <button class=\"btn btn-success float-left\" [routerLink]=\"['/join', 'LeftOuter']\">Left Outer Join</button>\n    </div>\n    <div class=\"col-sm-4 px-0 ml-2 text-left\">\n      Perform Left Outer Join on the tables\n    </div>\n  </div>\n\n  <div class=\"row mt-2\">\n    <div class=\"col-sm-2 px-0 text-left\" >\n      <button class=\"btn btn-success float-left\" [routerLink]=\"['/join', 'RightOuter']\">Right Outer Join</button>\n    </div>\n    <div class=\"col-sm-4 px-0 ml-2 text-left\">\n      Perform Right Outer Join on the tables\n    </div>\n  </div>\n\n  <div class=\"row mt-2\">\n    <div class=\"col-sm-2 px-0 text-left\" >\n      <button class=\"btn btn-success float-left\" [routerLink]=\"['/join', 'FullOuter']\">Full Outer Join</button>\n    </div>\n    <div class=\"col-sm-4 px-0 ml-2 text-left\">\n      Perform Full Outer Join on the tables\n    </div>\n  </div>\n\n  <div class=\"row mt-2\">\n    <div class=\"col-sm-2 px-0 text-left\" >\n      <button class=\"btn btn-success float-left\" [routerLink]=\"['/join', 'Cross']\">Full Outer Join</button>\n    </div>\n    <div class=\"col-sm-4 px-0 ml-2 text-left\">\n      Perform Cross Join on the tables\n    </div>\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/join/join.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/join/join.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"padding-left: 0; padding-right: 0;\">\n  <div class=\"row\">\n    <h4>\n      Table 1\n    </h4>\n  </div>\n  <div class=\"row mt-2\">\n    <input type=\"text\" class=\"form-control\" [(ngModel)] = \"table1\">\n  </div>\n  <div class=\"row\">\n    <h4>\n      Column 1\n    </h4>\n  </div>\n  <div class=\"row mt-2\">\n    <input type=\"text\" class=\"form-control\" [(ngModel)] = \"column1\">\n  </div>\n  <div class=\"row\">\n    <h4>\n      Table 2\n    </h4>\n  </div>\n  <div class=\"row mt-2\">\n    <input type=\"text\" class=\"form-control\" [(ngModel)] = \"table2\">\n  </div>\n  <div class=\"row\">\n    <h4>\n      Column 2\n    </h4>\n  </div>\n  <div class=\"row mt-2\">\n    <input type=\"text\" class=\"form-control\" [(ngModel)] = \"column2\">\n  </div>\n  <div class=\"row\">\n    <h4>\n      Join type\n    </h4>\n  </div>\n  <div class=\"row mt-2\">\n    {{joinType}}\n  </div>\n  <div class=\"row mt-2\">\n    <button class=\"btn btn-success\" (click)=\"join()\">Join</button>\n  </div>\n\n  <div *ngIf=\"records\" class=\"row mt-2\">\n    <h4>\n      Result\n    </h4>\n  </div>  \n  <div *ngIf=\"records\"  class=\"row mt-2\">\n    <p-table [columns]=\"columns\" [value]=\"records\" resizableColumns=\"true\">\n      <ng-template pTemplate=\"header\" let-columns>\n        <tr>\n            <th *ngFor=\"let col of columns\">\n                {{col}}\n            </th>\n        </tr>\n      </ng-template>\n      <ng-template pTemplate=\"body\" let-record>\n        <tr>\n            <td *ngFor=\"let prop of record.properties\">\n                    {{prop.value}}\n            </td>\n        </tr>\n      </ng-template>\n    </p-table>\n  </div>\n\n  <div *ngIf=\"error\" class=\"row mt-2\">\n    <div class=\"alert alert-danger\" role=\"alert\">\n      {{error.json().Message || error}}\n    </div>    \n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/join/join.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JoinComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_joinApi__ = __webpack_require__("../../../../../src/app/services/joinApi.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JoinComponent = /** @class */ (function () {
    function JoinComponent(activatedRoute, joinApi) {
        this.activatedRoute = activatedRoute;
        this.joinApi = joinApi;
    }
    JoinComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) { return _this.joinType = params['joinType']; });
    };
    JoinComponent.prototype.join = function () {
        var _this = this;
        this.joinApi.join(this.table1, this.column1, this.table2, this.column2, this.joinType).subscribe(function (resp) {
            console.log(resp);
            _this.records = resp;
            _this.columns = _this.records[0].properties.map(function (p) { return p.key; });
            _this.error = undefined;
        }, function (error) {
            console.log(error);
            console.log(error.json());
            _this.error = error;
        });
    };
    JoinComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-join',
            template: __webpack_require__("../../../../../src/app/components/join/join.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/join/join.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_joinApi__["a" /* JoinApi */]])
    ], JoinComponent);
    return JoinComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/read/read.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/read/read.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"padding-left: 0; padding-right: 0;\">\n  <div class=\"row\">\n    <h4>\n      Table\n    </h4>\n  </div>\n  <div class=\"row mt-2\">\n    <input type=\"text\" class=\"form-control\" [(ngModel)] = \"tableName\">\n  </div>\n  <div class=\"row mt-2\">\n    <button class=\"btn btn-success\" (click)=\"read()\">Read</button>\n  </div>\n\n  <div *ngIf=\"records\" class=\"row mt-2\">\n    <h4>\n      Result\n    </h4>\n  </div>  \n  <div *ngIf=\"records\"  class=\"row mt-2\">\n    <p-table [columns]=\"columns\" [value]=\"records\" resizableColumns=\"true\">\n      <ng-template pTemplate=\"header\" let-columns>\n        <tr>\n            <th *ngFor=\"let col of columns\">\n                {{col}}\n            </th>\n        </tr>\n      </ng-template>\n      <ng-template pTemplate=\"body\" let-record>\n        <tr>\n            <td *ngFor=\"let prop of record.properties\">\n                    {{prop.value}}\n            </td>\n        </tr>\n      </ng-template>\n    </p-table>\n  </div>\n\n  <div *ngIf=\"error\" class=\"row mt-2\">\n    <div class=\"alert alert-danger\" role=\"alert\">\n      {{error.json().Message || error}}\n    </div>    \n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/read/read.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_crudApi__ = __webpack_require__("../../../../../src/app/services/crudApi.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReadComponent = /** @class */ (function () {
    function ReadComponent(router, crud) {
        this.router = router;
        this.crud = crud;
    }
    ReadComponent.prototype.ngOnInit = function () {
    };
    ReadComponent.prototype.read = function () {
        var _this = this;
        this.crud.read(this.tableName).subscribe(function (resp) {
            console.log(resp);
            _this.records = resp;
            _this.columns = _this.records[0].properties.map(function (p) { return p.key; });
            _this.error = undefined;
        }, function (error) {
            console.log(error);
            console.log(error.json());
            _this.error = error;
        });
    };
    ReadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-read',
            template: __webpack_require__("../../../../../src/app/components/read/read.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/read/read.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_crudApi__["a" /* CrudApi */]])
    ], ReadComponent);
    return ReadComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/update/update.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/update/update.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"padding-left: 0; padding-right: 0;\">\n  <div class=\"row mt-2\">\n    <h4>\n        Table\n    </h4>\n  </div>\n  <div class=\"row mt-2\">\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"record.tableName\">\n  </div>\n  <div class=\"row mt-2\">\n    <h4>\n        Values to update\n    </h4>      \n  </div>\n\n  <div class=\"row\">\n    <p-table [value]=\"record.properties\" [resizableColumns]=\"true\">\n        <ng-template pTemplate=\"header\">\n            <tr>\n                <th>Key</th>\n                <th>Value</th>\n                <th style=\"width:3em\"></th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-property let-i=\"rowIndex\">\n            <tr>\n                <td *ngIf=\"property.key=='name'\" pEditableColumn>\n                  {{property.key}}\n                </td>\n                <td *ngIf=\"property.key!='name'\" pEditableColumn>\n                    <p-cellEditor>\n                        <ng-template pTemplate=\"input\">\n                            <input type=\"text\" [(ngModel)]=\"property.key\">\n                        </ng-template>\n                        <ng-template pTemplate=\"output\">\n                            {{property.key}}\n                        </ng-template>\n                    </p-cellEditor>\n                </td>\n                <td pEditableColumn>\n                    <p-cellEditor>\n                        <ng-template pTemplate=\"input\">\n                            <input type=\"text\" [(ngModel)]=\"property.value\">\n                        </ng-template>\n                        <ng-template pTemplate=\"output\">\n                            {{property.value}}\n                        </ng-template>\n                    </p-cellEditor>\n                </td>      \n                <td *ngIf=\"property.key!='name'\">\n                    <button pButton icon=\"fa-close\" (click)=\"deleteRow(i)\"></button>\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n  </div>\n\n  <div class=\"row mt-2\">\n    <div class=\"col-sm-6 px-0 text-left\" >\n        <button class=\"btn btn-success float-left\" (click)=\"addRow()\">Add</button>\n    </div>\n    <div class=\"col-sm-6 px-0 text-right\">\n        <button class=\"btn btn-primary\" (click)=\"update()\">Submit</button>\n        <button class=\"btn btn-dark ml-2\" (click)=\"cancel()\">Cancel</button>\n    </div>\n  </div>\n  <div *ngIf=\"error\" class=\"row mt-2\">\n    <div class=\"alert alert-danger\" role=\"alert\">\n        {{error.json().Message || error}}\n    </div>\n  </div>  \n  <div *ngIf=\"success\" class=\"row mt-2\">\n    <div class=\"alert alert-success\" role=\"alert\">\n        {{success.status}} {{success.statusText}}\n    </div>    \n  </div>  \n</div>"

/***/ }),

/***/ "../../../../../src/app/components/update/update.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_crudApi__ = __webpack_require__("../../../../../src/app/services/crudApi.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UpdateComponent = /** @class */ (function () {
    function UpdateComponent(router, crud) {
        this.router = router;
        this.crud = crud;
        this.record = {
            tableName: "",
            properties: [{ key: "name", value: "" }, { key: "", value: "" }]
        };
    }
    UpdateComponent.prototype.ngOnInit = function () {
    };
    UpdateComponent.prototype.addRow = function () {
        this.record.properties.push({ key: "", value: "" });
    };
    UpdateComponent.prototype.deleteRow = function (rowIndex) {
        this.record.properties.splice(rowIndex, 1);
    };
    UpdateComponent.prototype.cancel = function () {
        this.router.navigate([""]);
    };
    UpdateComponent.prototype.update = function () {
        var _this = this;
        console.log(this.record.tableName);
        console.log(this.record.properties);
        this.crud.update(this.record).subscribe(function (resp) {
            console.log(resp);
            _this.success = resp;
            _this.error = undefined;
        }, function (error) {
            console.log(error);
            console.log(error.json());
            _this.error = error;
            _this.success = undefined;
        });
    };
    UpdateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-update',
            template: __webpack_require__("../../../../../src/app/components/update/update.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/update/update.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_crudApi__["a" /* CrudApi */]])
    ], UpdateComponent);
    return UpdateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/models/tableProperty.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableProperty; });
var TableProperty = /** @class */ (function () {
    function TableProperty(key, value) {
        this.key = key;
        this.value = value;
    }
    return TableProperty;
}());



/***/ }),

/***/ "../../../../../src/app/models/tableRecord.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableRecord; });
var TableRecord = /** @class */ (function () {
    function TableRecord() {
        this.properties = [];
        // constructor(tableName : string) {
        //     this.tableName = tableName;
        //     this.properties = [];
        // }
    }
    return TableRecord;
}());



/***/ }),

/***/ "../../../../../src/app/services/crudApi.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrudApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modelsConvertingService__ = __webpack_require__("../../../../../src/app/services/modelsConvertingService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CrudApi = /** @class */ (function () {
    function CrudApi(http, converter) {
        this.http = http;
        this.converter = converter;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].apiUrl;
    }
    CrudApi.prototype.create = function (record) {
        var json = this.converter.convertToJson(record);
        var url = this.apiUrl + "/crud?table=" + record.tableName;
        console.log(url);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(url, json, options);
    };
    CrudApi.prototype.read = function (tableName) {
        var _this = this;
        var url = this.apiUrl + "/crud?table=" + tableName;
        console.log(url);
        return this.http.get(url).map(function (resp) {
            console.log(resp.status);
            console.log(resp.statusText);
            console.log(resp.json());
            return _this.converter.convertFromObjectArray(resp.json());
        })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error);
        });
    };
    CrudApi.prototype.update = function (record) {
        var json = this.converter.convertToJson(record);
        var recordName = record.properties.filter(function (p) { return p.key == "name"; })[0].value;
        var url = this.apiUrl + "/crud?table=" + record.tableName + "&name=" + recordName;
        console.log(url);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put(url, json, options);
    };
    CrudApi.prototype.delete = function (table, recordName) {
        var url = this.apiUrl + "/crud?table=" + table + "&name=" + recordName;
        console.log(url);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.delete(url, options);
    };
    CrudApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_7__modelsConvertingService__["a" /* ModelsConvertingService */]])
    ], CrudApi);
    return CrudApi;
}());



/***/ }),

/***/ "../../../../../src/app/services/joinApi.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JoinApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modelsConvertingService__ = __webpack_require__("../../../../../src/app/services/modelsConvertingService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var JoinApi = /** @class */ (function () {
    function JoinApi(http, converter) {
        this.http = http;
        this.converter = converter;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].apiUrl;
    }
    JoinApi.prototype.join = function (table1, column1, table2, column2, joinType) {
        var _this = this;
        var url = this.apiUrl + "/join?table1=" + table1 + "&column1=" + column1 + "&table2=" + table2 + "&column2=" + column2 + "&joinType=" + joinType;
        console.log(url);
        return this.http.get(url).map(function (resp) {
            console.log(resp.status);
            console.log(resp.statusText);
            console.log(resp.json());
            return _this.converter.convertFromObjectArray(resp.json());
        })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error);
        });
    };
    JoinApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_7__modelsConvertingService__["a" /* ModelsConvertingService */]])
    ], JoinApi);
    return JoinApi;
}());



/***/ }),

/***/ "../../../../../src/app/services/modelsConvertingService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelsConvertingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_tableRecord__ = __webpack_require__("../../../../../src/app/models/tableRecord.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_tableProperty__ = __webpack_require__("../../../../../src/app/models/tableProperty.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModelsConvertingService = /** @class */ (function () {
    function ModelsConvertingService() {
    }
    ModelsConvertingService.prototype.convertToJson = function (record) {
        var jsonObject = {};
        for (var _i = 0, _a = record.properties; _i < _a.length; _i++) {
            var property = _a[_i];
            if (property.key && property.key != "" && property.value) {
                jsonObject[property.key] = property.value;
            }
        }
        var json = JSON.stringify(jsonObject);
        console.log(json);
        return json;
    };
    ModelsConvertingService.prototype.convertFromObjectArray = function (objArray) {
        var records = [];
        for (var _i = 0, objArray_1 = objArray; _i < objArray_1.length; _i++) {
            var jsonObject = objArray_1[_i];
            var record = new __WEBPACK_IMPORTED_MODULE_1__models_tableRecord__["a" /* TableRecord */]();
            for (var objProperty in jsonObject) {
                if (jsonObject.hasOwnProperty(objProperty)) {
                    var tableProperty = new __WEBPACK_IMPORTED_MODULE_2__models_tableProperty__["a" /* TableProperty */](objProperty, jsonObject[objProperty]);
                    record.properties.push(tableProperty);
                }
            }
            records.push(record);
        }
        return records;
    };
    ModelsConvertingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], ModelsConvertingService);
    return ModelsConvertingService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    apiUrl: "http://azuresqlfes.azurewebsites.net/api"
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map