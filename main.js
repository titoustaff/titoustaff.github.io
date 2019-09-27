(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  <strong>ADMIN page</strong> works!\n</p>\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\">Golf Data</a>\n    </div>\n    <ul class=\"nav navbar-nav\" routerLinkActive=\"active\">\n      <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"home\">Home</a></li>\n      <li class=\"nav-item\" *ngFor=\"let link of links\">\n        <a class=\"nav-link\" [routerLink]=\"link.path\">{{ link.text }}</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"isLoggedIn\">\n        <a class=\"nav-link\" routerLink=\"logout\" (click)=\"logout()\">Logout</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n<!-- class=\"container\" -->\n<div >\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _atelier_atelier_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./atelier/atelier.component */ "./src/app/atelier/atelier.component.ts");
/* harmony import */ var _services_navbar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/navbar.service */ "./src/app/services/navbar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppComponent = /** @class */ (function () {
    function AppComponent(router, navbarService) {
        this.router = router;
        this.navbarService = navbarService;
        this.isLoggedIn = false;
        this.router.config.unshift({ path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] }, { path: 'user', component: _user_user_component__WEBPACK_IMPORTED_MODULE_2__["UserComponent"] }, { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"] }, { path: 'atelier', component: _atelier_atelier_component__WEBPACK_IMPORTED_MODULE_5__["AtelierComponent"] });
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.links = this.navbarService.getLinks();
        this.navbarService.getLoginStatus().subscribe(function (status) { return _this.isLoggedIn = status; });
    };
    AppComponent.prototype.logout = function () {
        this.navbarService.updateLoginStatus(false);
        this.router.navigate(['home']);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_navbar_service__WEBPACK_IMPORTED_MODULE_6__["NavbarService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _atelier_atelier_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./atelier/atelier.component */ "./src/app/atelier/atelier.component.ts");
/* harmony import */ var _header_tableau_header_tableau_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header-tableau/header-tableau.component */ "./src/app/header-tableau/header-tableau.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _atelier_atelier_component__WEBPACK_IMPORTED_MODULE_8__["AtelierComponent"],
                _header_tableau_header_tableau_component__WEBPACK_IMPORTED_MODULE_9__["HeaderTableauComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            entryComponents: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"],
                _atelier_atelier_component__WEBPACK_IMPORTED_MODULE_8__["AtelierComponent"],
                _header_tableau_header_tableau_component__WEBPACK_IMPORTED_MODULE_9__["HeaderTableauComponent"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/atelier/atelier.component.css":
/*!***********************************************!*\
  !*** ./src/app/atelier/atelier.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/atelier/atelier.component.html":
/*!************************************************!*\
  !*** ./src/app/atelier/atelier.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  atelier works!\n</p>\n\nSelect images: <input type=\"file\" name=\"img\" (change)=\"handleFileInput2($event.target.files)\" multiple> &nbsp;\nNombre de participant : {{tabPlayerInfos?.length}} &nbsp;<button (click)=\"onClickMe()\">Trie moi !</button><BR>\n\n<div style=\"margin: 30px 30px 30px 30px\">\n  <button (click)=\"getmailList()\">Recuperer les mails</button><br>\n  <textarea rows=\"15\" cols=\"180\" ng *ngIf=\"emails.length > 0\">{{emails?.join('; ')}}</textarea>\n</div>\n\n<div style=\"margin: 30px 30px 30px 30px\">\n    <button (click)=\"viewAllInformation()\">Voir les information brutes</button><br>\n    <table *ngIf=\"isViewInformation\" style=\"margin: 30px 0 0 0\">\n        <thead>\n            <tr style=\"border:1px solid black\">\n                <th style=\"border:1px solid black\">N° Licence</th>\n                <th style=\"border:1px solid black\" >Prénom</th>\n                <th style=\"border:1px solid black\">Nom</th>\n                <th style=\"border:1px solid black\">Circuit</th>\n                <th style=\"border:1px solid black\">Catégorie</th>\n                <th style=\"border:1px solid black\">Nbr round</th>\n                <th style=\"border:1px solid black\">Email</th>\n                <th style=\"border:1px solid black\">Téléphone</th>\n                <th style=\"border:1px solid black\">Commentaire</th>\n                <th style=\"border:1px solid black\">Date inscription</th>\n            </tr>\n        </thead>\n        <tbody style=\"border:1px solid black\">\n            <tr *ngFor=\"let hero of tabPlayerInfos\" style=\"border:1px solid black\">\n                <td style=\"border:1px solid black\">{{hero.ffgNumber}} &nbsp;</td>\n                <td style=\"border:1px solid black\">{{hero.prenom}}&nbsp;</td>\n                <td style=\"border:1px solid black\">{{hero.nom}}&nbsp;</td>\n                <td style=\"border:1px solid black\">{{hero.circuit}}&nbsp;</td>\n                <td style=\"border:1px solid black\">{{hero.categorie}}&nbsp;</td>\n                <td style=\"border:1px solid black\">{{hero.nbrRoundThisYear}}&nbsp;</td>\n                <td style=\"border:1px solid black\">{{hero.email}}&nbsp;</td>\n                <td style=\"border:1px solid black\">{{hero.phoneNumber}}&nbsp;</td>\n                <td style=\"border:1px solid black\">{{hero.comment}}&nbsp;</td>\n                <td style=\"border:1px solid black\" >{{hero.date}}&nbsp;</td>\n            </tr>\n        </tbody>\n      </table>\n  </div>\n    \n\n<button (click)=\"printDiv('printableArea1')\">print page 1!</button>\n<button (click)=\"newpagePrintage('printableArea1')\">print page 1*!</button>\n<div id=\"printableArea1\"\n      style=\"width: 210mm; height: 297mm; margin-left: auto;margin-right: auto; border-color: coral; border-style: solid; \">\n      <div *ngFor=\"let item of categorie\">\n          <app-header-tableau [currentcategorie]=\"item\" \n                              [tabPlayersInfos]=getElementListByCategorie(item,tabPlayerInfosList1)\n                              [printHeader]=defineifHeader(item,tabPlayerInfosList1)></app-header-tableau>\n      </div>\n</div>\n<br><br>\n<hr>\n<button (click)=\"printDiv('printableArea2')\" *ngIf=\"tabPlayerInfosList2.length > 0\">print page 2!</button>\n<button (click)=\"newpagePrintage('printableArea2')\" *ngIf=\"tabPlayerInfosList2.length > 0\">print page 2*!</button>\n\n<div  id=\"printableArea2\"\n      *ngIf=\"tabPlayerInfosList2.length > 0\"\n      style=\"width: 210mm; height: 297mm; margin-left: auto;margin-right: auto; border-color: coral; border-style: solid; \">\n      <div *ngFor=\"let item of categorie\">\n          <app-header-tableau [currentcategorie]=\"item\" \n                              [tabPlayersInfos]=getElementListByCategorie(item,tabPlayerInfosList2)\n                              [printHeader]=defineifHeader(item,tabPlayerInfosList2)></app-header-tableau>\n      </div>\n</div>\n\n<button (click)=\"printDiv('printableArea3')\" *ngIf=\"tabPlayerInfosList3.length > 0\">print page 3!</button>\n<button (click)=\"newpagePrintage('printableArea3')\" *ngIf=\"tabPlayerInfosList3.length > 0\">print page 3*!</button>\n\n<div  id=\"printableArea3\"\n      *ngIf=\"tabPlayerInfosList3.length > 0\"\n      style=\"width: 210mm; height: 297mm; margin-left: auto;margin-right: auto; border-color: coral; border-style: solid; \">\n      <div *ngFor=\"let item of categorie\">\n          <app-header-tableau [currentcategorie]=\"item\" \n                              [tabPlayersInfos]=getElementListByCategorie(item,tabPlayerInfosList3)\n                              [printHeader]=defineifHeader(item,tabPlayerInfosList3)></app-header-tableau>\n      </div>\n</div>\n\n\n<button (click)=\"printDiv('printableArea4')\" *ngIf=\"tabPlayerInfosList4.length > 0\">print page 3!</button>\n<button (click)=\"newpagePrintage('printableArea4')\" *ngIf=\"tabPlayerInfosList4.length > 0\">print page 3*!</button>\n\n<div  id=\"printableArea4\"\n      *ngIf=\"tabPlayerInfosList4.length > 0\"\n      style=\"width: 210mm; height: 297mm; margin-left: auto;margin-right: auto; border-color: coral; border-style: solid; \">\n      <div *ngFor=\"let item of categorie\">\n          <app-header-tableau [currentcategorie]=\"item\" \n                              [tabPlayersInfos]=getElementListByCategorie(item,tabPlayerInfosList4)\n                              [printHeader]=defineifHeader(item,tabPlayerInfosList4)></app-header-tableau>\n      </div>\n</div>\n\n\n\n<!-- <button (click)=\"printDiv('printableArea3')\">print a div!</button>\n<div id=\"printableArea3\"\n      style=\"width: 210mm; height: 297mm; margin-left: auto;margin-right: auto; border-color: coral; border-style: solid; \">\n                         \n      <app-header-tableau [currentcategorie]=\"10\" \n                          [printAreaBottom]=div1BottomValue\n                          [tabPlayersInfos]=getElementListByCategorie(10)\n                          [printHeader]=true></app-header-tableau>    \n\n      <app-header-tableau [currentcategorie]=\"8\" \n                          [printAreaBottom]=div1BottomValue\n                          [tabPlayersInfos]=getElementListByCategorie(8)\n                          [printHeader]=false></app-header-tableau> \n \n      \n  \n</div> \n\n\n<table>\n    <thead>\n        <tr style=\"border:1px solid black\">\n            <th style=\"border:1px solid black\">N° Licence</th>\n            <th style=\"border:1px solid black\" >Prénom</th>\n            <th style=\"border:1px solid black\">Nom</th>\n            <th style=\"border:1px solid black\">Circuit</th>\n            <th style=\"border:1px solid black\">Catégorie</th>\n            <th style=\"border:1px solid black\">Nbr round</th>\n            <th style=\"border:1px solid black\">Email</th>\n            <th style=\"border:1px solid black\">Téléphone</th>\n            <th style=\"border:1px solid black\">Commentaire</th>\n            <th style=\"border:1px solid black\">Date inscription</th>\n        </tr>\n    </thead>\n    <tbody style=\"border:1px solid black\">\n        <tr *ngFor=\"let hero of tabPlayerInfos\" style=\"border:1px solid black\">\n            <td style=\"border:1px solid black\">{{hero.ffgNumber}} &nbsp;</td>\n            <td style=\"border:1px solid black\">{{hero.prenom}}&nbsp;</td>\n            <td style=\"border:1px solid black\">{{hero.nom}}&nbsp;</td>\n            <td style=\"border:1px solid black\">{{hero.circuit}}&nbsp;</td>\n            <td style=\"border:1px solid black\">{{hero.categorie}}&nbsp;</td>\n            <td style=\"border:1px solid black\">{{hero.nbrRoundThisYear}}&nbsp;</td>\n            <td style=\"border:1px solid black\">{{hero.email}}&nbsp;</td>\n            <td style=\"border:1px solid black\">{{hero.phoneNumber}}&nbsp;</td>\n            <td style=\"border:1px solid black\">{{hero.comment}}&nbsp;</td>\n            <td style=\"border:1px solid black\" >{{hero.date}}&nbsp;</td>\n        </tr>\n    </tbody>\n  </table>\n\n-->\n<hr>\nImpression des cartes atelier\n<hr>\n\n<!-- \n<button (click)=\"printDiv('printableArea1')\">print a div!</button>\n<div id=\"printableArea1\"\n      style=\"width: 210mm; height: 297mm; margin-left: auto;margin-right: auto; border-color: coral; border-style: solid; \">\n    \n  <table  style=\"width: 100%;margin-top: 30px;\"> \n     \n    <tbody >\n      <tr style=\"text-align: center;\">\n        <td style=\"width: 50%;\">&nbsp;<img width=\"250\" src=\"assets/img/logoMistral.png\">&nbsp;</td>\n        <td style=\"width: 50%; text-align: center;\">\n            <p><span style=\"text-decoration: underline;\"><strong> Atelier </strong></span></p>\n            <p><strong>&nbsp;Stadium&nbsp;</strong> <input id=\"scales\" name=\"scales\" type=\"checkbox\" />&nbsp;<strong>&nbsp;Putting&nbsp;</strong> <input id=\"scales\" name=\"scales\" type=\"checkbox\" /></p>\n            <p><strong>Approche&nbsp;</strong> <input id=\"scales\" name=\"scales\" type=\"checkbox\" />&nbsp;<strong>&nbsp;Trackman&nbsp;</strong> <input id=\"scales\" name=\"scales\" type=\"checkbox\" /></p>\n        </td> \n      </tr>\n      <tr>\n          <td colspan=\"2\">&nbsp;</td> \n      </tr> \n      <tr>\n      <td colspan=\"2\">\n        <table style=\"width: 90%; margin-left: auto; margin-right: auto;\">\n             <tbody *ngFor=\"let currentCategorie of categorie\">\n\n                  <tr style=\"border:1px solid black;text-align: center;\">\n                      <th style=\"border:1px solid black ; text-align: center;\">U{{ currentCategorie}}</th>\n                      <th style=\"border:1px solid black; text-align: center;\" colspan=\"3\">Score</th>\n                      <th style=\"border:1px solid black; text-align: center;\">Classement</th>\n                  </tr>\n                  <tr *ngFor=\"let hero of getElementListByCategorie(currentCategorie)\" \n                      [attr.id]=\"hero.ffgNumber\"\n                      style=\"border:1px solid black\">\n                    <td style=\"border:1px solid black; width: 40%;\" >&nbsp;{{hero.nom}} {{hero.prenom}}&nbsp;</td>\n                    <td style=\"border:1px solid black; width: 15%;\">&nbsp;&nbsp;</td>\n                    <td style=\"border:1px solid black; width: 15%;\">&nbsp;&nbsp;</td>\n                    <td style=\"border:1px solid black; width: 15%\">&nbsp;&nbsp;</td>\n                    <td style=\"border:1px solid black; width: 20%;\">&nbsp;&nbsp;{{controleDivPosition('printableArea1', hero.ffgNumber)}}</td>\n                  </tr>\n                  <tr>\n                      <td style=\"border:1px solid black;\" colspan=\"5\">&nbsp;</td> \n                  </tr>\n            </tbody>\n\n          </table>  \n        </td>\n      </tr>\n    </tbody>\n  </table> \n</div>-->\n\n\n"

/***/ }),

/***/ "./src/app/atelier/atelier.component.ts":
/*!**********************************************!*\
  !*** ./src/app/atelier/atelier.component.ts ***!
  \**********************************************/
/*! exports provided: AtelierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtelierComponent", function() { return AtelierComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _models_player_info_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/player-info.model */ "./src/app/models/player-info.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var AtelierComponent = /** @class */ (function () {
    function AtelierComponent(document) {
        this.document = document;
        this.tabPlayerInfos = [];
        this.categorie = [16, 14, 12, 10, 8];
        this.startCategorie = 16;
        this.sliceValue = 0;
        this.tabPlayerInfosList1 = [];
        this.tabPlayerInfosList2 = [];
        this.tabPlayerInfosList3 = [];
        this.tabPlayerInfosList4 = [];
        this.tabPlayerInfosList5 = [];
        this.emails = [];
        this.isViewInformation = false;
    }
    AtelierComponent.prototype.ngOnInit = function () {
    };
    AtelierComponent.prototype.defineTheContexte = function (categorie, arrayList) {
        var listeElementTraiter = this.getElementListByCategorie(categorie, arrayList);
        var nbElementTraiter = listeElementTraiter.length;
        var iterableNumber = 0;
        var nbElementTotalTraiter = 0;
        while (this.categorie[iterableNumber] >= categorie) {
            var currentCategorie = this.categorie[iterableNumber];
            nbElementTotalTraiter = nbElementTotalTraiter + this.getElementListByCategorie(currentCategorie, arrayList).length;
            iterableNumber++;
        }
        if ((nbElementTotalTraiter + nbElementTraiter) > 35) {
            this.startCategorie = categorie;
            console.log('RAS A FAIRE categorie = ' + categorie);
        }
        else {
            if (nbElementTotalTraiter > 0)
                this.sliceValue = this.sliceValue + 1;
        }
    };
    AtelierComponent.prototype.defineifHeader = function (categorie, arrayList) {
        if (arrayList.length > 0 && arrayList[0].categorie == categorie)
            return true;
    };
    /* read the current file of select file on liste */
    AtelierComponent.prototype.readFileToarray = function (value) {
        var splitted = value.split("\n");
        var splitted2 = splitted.shift();
        for (var i = 0; i < splitted.length; i++) {
            // split content based on comma  
            var data = splitted[i].split(';');
            if (data != undefined && data[0] != undefined && data[0].length > 2) {
                this.tabPlayerInfos.push(new _models_player_info_model__WEBPACK_IMPORTED_MODULE_2__["PlayerInfo"]()
                    .build(this.convertString(data[0]), this.convertString(this.stringToLowerCase(this.stringReplaceSpecial(data[1]))), this.convertString(this.stringToUpperCase(this.stringReplaceSpecial(data[2]))), this.convertString(data[3]), this.convertString(data[4]), this.convertString(data[5]), this.convertString(data[6]), this.convertString(data[7]), this.convertString(data[8]), this.convertString(data[9])));
            }
        }
    };
    AtelierComponent.prototype.uploadThisDocument = function (document) {
        var _this = this;
        var fileReader = new FileReader();
        fileReader.onload = function (e) {
            _this.readFileToarray(fileReader.result);
        };
        fileReader.readAsText(document);
    };
    AtelierComponent.prototype.handleFileInput2 = function (files) {
        for (var i = 0; i < files.length; i++) {
            this.uploadThisDocument(files.item(i));
        }
    };
    AtelierComponent.prototype.newpagePrintage = function (currentDiv) {
        /*var pageContent = document.getElementById(currentDiv).innerHTML;
        sessionStorage.setItem("page1content", pageContent);*/
        var printContents, popupWin;
        printContents = document.getElementById(currentDiv).innerHTML;
        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin.document.open();
        popupWin.document.write("\n      <html>\n        <head>\n          <title>Print tab</title>\n          <style>\n          //........Customized style.......\n          </style>\n        </head>\n    <body onload=\"window.print();window.close()\">" + printContents + "</body>\n      </html>");
        popupWin.document.close();
    };
    /* force replace encoding error */
    AtelierComponent.prototype.stringReplaceSpecial = function (maChaine) {
        maChaine = maChaine.replace('�', 'é');
        return maChaine;
    };
    /* capitablise string parameter */
    AtelierComponent.prototype.stringToLowerCase = function (maChaine) {
        maChaine = maChaine.toLowerCase();
        var nameCapitalized = maChaine.charAt(0).toUpperCase() + maChaine.slice(1);
        return nameCapitalized;
    };
    /* uppercas string parameter */
    AtelierComponent.prototype.stringToUpperCase = function (maChaine) {
        var nameCapitalized = maChaine.toUpperCase();
        return nameCapitalized;
    };
    AtelierComponent.prototype.getElementListByCategorie = function (categorie, listeArray) {
        return listeArray.filter(function (item) {
            if (item.categorie == categorie) {
                return true;
            }
            return false;
        });
    };
    /* sort string function and split array */
    AtelierComponent.prototype.onClickMe = function () {
        var u16 = this.getElementListByCategorie('16', this.tabPlayerInfos);
        var u16T = this.sortByName(u16);
        var u14 = this.getElementListByCategorie('14', this.tabPlayerInfos);
        var u14T = this.sortByName(u14);
        var u12 = this.getElementListByCategorie('12', this.tabPlayerInfos);
        var u12T = this.sortByName(u12);
        var u10 = this.getElementListByCategorie('10', this.tabPlayerInfos);
        var u10T = this.sortByName(u10);
        var u8 = this.getElementListByCategorie('8', this.tabPlayerInfos);
        var u8T = this.sortByName(u8);
        var nexTab = [];
        Array.prototype.push.apply(nexTab, u16T);
        Array.prototype.push.apply(nexTab, u14T);
        Array.prototype.push.apply(nexTab, u12T);
        Array.prototype.push.apply(nexTab, u10T);
        Array.prototype.push.apply(nexTab, u8T);
        this.tabPlayerInfos = nexTab;
        //split array value
        var temporytabPlayerInfos = this.tabPlayerInfos;
        this.tabPlayerInfosList1 = this.tabPlayerInfos.slice(0, 30);
        this.tabPlayerInfosList2 = this.tabPlayerInfos.slice(30, 60);
        this.tabPlayerInfosList3 = this.tabPlayerInfos.slice(60, 90);
        this.tabPlayerInfosList4 = this.tabPlayerInfos.slice(90, 120);
    };
    AtelierComponent.prototype.sortByName = function (listeArray) {
        return listeArray.sort(function (a, b) {
            if (a.nom < b.nom) {
                return -1;
            }
            if (a.nom > b.nom) {
                return 1;
            }
            return 0;
        });
    };
    AtelierComponent.prototype.convertString = function (maChaine) {
        var fixedstring = '';
        maChaine = maChaine.replace('"', '').replace('"', '');
        try {
            // If the string is UTF-8, this will work and not throw an error.
            fixedstring = decodeURIComponent(escape(maChaine));
        }
        catch (e) {
            // If it isn't, an error will be thrown, and we can assume that we have an ISO string.
            fixedstring = maChaine;
        }
        return fixedstring;
    };
    AtelierComponent.prototype.printDiv = function (divName) {
        var printContents = document.getElementById(divName).innerHTML;
        var originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
    };
    AtelierComponent.prototype.getmailList = function () {
        for (var propt in this.tabPlayerInfos) {
            console.log(propt + ': ' + this.tabPlayerInfos[propt]);
            this.emails.push(this.tabPlayerInfos[propt].email);
        }
    };
    AtelierComponent.prototype.viewAllInformation = function () {
        this.isViewInformation = !this.isViewInformation;
    };
    AtelierComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-atelier',
            template: __webpack_require__(/*! ./atelier.component.html */ "./src/app/atelier/atelier.component.html"),
            styles: [__webpack_require__(/*! ./atelier.component.css */ "./src/app/atelier/atelier.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [Document])
    ], AtelierComponent);
    return AtelierComponent;
}());



/***/ }),

/***/ "./src/app/header-tableau/header-tableau.component.css":
/*!*************************************************************!*\
  !*** ./src/app/header-tableau/header-tableau.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header-tableau/header-tableau.component.html":
/*!**************************************************************!*\
  !*** ./src/app/header-tableau/header-tableau.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table style=\"width: 100%;margin-top: 30px;\" *ngIf=\"printHeader==true && tabPlayersInfos.length > 0\" >\n  <!-- style=\"height:100%; width:100%; margin: 0; padding: 0;\" -->\n  <tbody>\n    <tr style=\"text-align: center;\">\n      <td style=\"width: 50%;\">&nbsp;<img width=\"250\" src=\"assets/img/logoMistral.png\">&nbsp;</td>\n      <td style=\"width: 50%; text-align: center;\">\n        <p><span style=\"text-decoration: underline;\"><strong> Atelier </strong></span></p>\n        <p><strong>&nbsp;Stadium&nbsp;</strong> <input id=\"scales\" name=\"scales\"\n            type=\"checkbox\" />&nbsp;<strong>&nbsp;Putting&nbsp;</strong> <input id=\"scales\" name=\"scales\"\n            type=\"checkbox\" /></p>\n        <p><strong>Approche&nbsp;</strong> <input id=\"scales\" name=\"scales\"\n            type=\"checkbox\" />&nbsp;<strong>&nbsp;Trackman&nbsp;</strong> <input id=\"scales\" name=\"scales\"\n            type=\"checkbox\" /></p>\n      </td>\n    </tr>\n    <tr>\n      <td colspan=\"2\">&nbsp;</td>\n    </tr>\n  </tbody>\n</table>\n\n<table style=\"width: 90%; margin-left: auto; margin-right: auto;\" *ngIf=\"tabPlayersInfos.length > 0\">\n    <tbody>\n         <tr style=\"border:1px solid black;text-align: center;\">\n             <th style=\"border:1px solid black ; text-align: center;\">U{{ currentcategorie}}</th>\n             <th style=\"border:1px solid black; text-align: center;\" colspan=\"3\">Score</th>\n             <th style=\"border:1px solid black; text-align: center;\">Classement</th>\n         </tr>\n         <tr *ngFor=\"let hero of tabPlayersInfos\" \n             [attr.id]=\"hero.ffgNumber\"\n             style=\"border:1px solid black\">\n           <td style=\"border:1px solid black; width: 40%;\" >&nbsp;{{hero.nom}} {{hero.prenom}}&nbsp;</td>\n           <td style=\"border:1px solid black; width: 15%;\">&nbsp;&nbsp;</td>\n           <td style=\"border:1px solid black; width: 15%;\">&nbsp;&nbsp;</td>\n           <td style=\"border:1px solid black; width: 15%\">&nbsp;&nbsp;</td>\n           <td style=\"border:1px solid black; width: 20%;\">&nbsp;&nbsp;</td>\n         </tr>\n         <tr>\n            <td style=\"width: 40%;\" >&nbsp;&nbsp;</td>\n            <td style=\"width: 15%;\">&nbsp;&nbsp;</td>\n            <td style=\"width: 15%;\">&nbsp;&nbsp;</td>\n            <td style=\"width: 15%\">&nbsp;&nbsp;</td>\n            <td style=\"width: 20%;\">&nbsp;&nbsp;</td>\n         </tr>\n<!-- {{controleDivPosition('printableArea1', hero.ffgNumber)}} -->\n   </tbody>\n\n </table>  "

/***/ }),

/***/ "./src/app/header-tableau/header-tableau.component.ts":
/*!************************************************************!*\
  !*** ./src/app/header-tableau/header-tableau.component.ts ***!
  \************************************************************/
/*! exports provided: HeaderTableauComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderTableauComponent", function() { return HeaderTableauComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var HeaderTableauComponent = /** @class */ (function () {
    function HeaderTableauComponent(document) {
        this.document = document;
        this.tabPlayersInfos = [];
        this.printHeader = false;
    }
    HeaderTableauComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], HeaderTableauComponent.prototype, "currentcategorie", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], HeaderTableauComponent.prototype, "tabPlayersInfos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], HeaderTableauComponent.prototype, "printHeader", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], HeaderTableauComponent.prototype, "printAreaBottom", void 0);
    HeaderTableauComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header-tableau',
            template: __webpack_require__(/*! ./header-tableau.component.html */ "./src/app/header-tableau/header-tableau.component.html"),
            styles: [__webpack_require__(/*! ./header-tableau.component.css */ "./src/app/header-tableau/header-tableau.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [Document])
    ], HeaderTableauComponent);
    return HeaderTableauComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  <strong>home page</strong> works!\n</p>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isLoggedIn; else loggedOut\">\n  Logged in as {{role}}.\n</div>\n\n<ng-template #loggedOut>\n  <button class=\"btn btn-secondary\" (click)=\"loginUser()\">Login as User</button>\n  <button class=\"btn btn-primary\" (click)=\"loginAdmin()\">Login as Admin</button>\n  <hr />\n  <p>Don't have an account?</p>\n  <a href=\"signup\" class=\"btn btn-success\">Sign Up</a>\n</ng-template>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_navbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/navbar.service */ "./src/app/services/navbar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(navbarService) {
        var _this = this;
        this.navbarService = navbarService;
        this.isLoggedIn = false;
        this.role = '';
        this.navbarService.getLoginStatus().subscribe(function (status) { return _this.isLoggedIn = status; });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginUser = function () {
        this.navbarService.updateNavAfterAuth('user');
        this.navbarService.updateLoginStatus(true);
        this.role = 'user';
    };
    LoginComponent.prototype.loginAdmin = function () {
        this.navbarService.updateNavAfterAuth('admin');
        this.navbarService.updateLoginStatus(true);
        this.role = 'admin';
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_navbar_service__WEBPACK_IMPORTED_MODULE_1__["NavbarService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/player-info.model.ts":
/*!*********************************************!*\
  !*** ./src/app/models/player-info.model.ts ***!
  \*********************************************/
/*! exports provided: PlayerInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerInfo", function() { return PlayerInfo; });
var PlayerInfo = /** @class */ (function () {
    function PlayerInfo() {
    }
    PlayerInfo.prototype.build = function (ffgNumber, prenom, nom, circuit, categorie, nbrRoundThisYear, email, phoneNumber, comment, date) {
        return new PlayerInfo()
            .setFfgNumber(ffgNumber)
            .setPrenon(prenom)
            .setNom(nom)
            .setCircuit(circuit)
            .setCategorie(categorie)
            .setNbrRoundThisYear(nbrRoundThisYear)
            .setEmail(email)
            .setPhoneNumber(phoneNumber)
            .setComment(comment)
            .setDate(date);
    };
    PlayerInfo.prototype.setDate = function (date) {
        this.date = date;
        return this;
    };
    PlayerInfo.prototype.setComment = function (comment) {
        this.comment = comment;
        return this;
    };
    PlayerInfo.prototype.setPhoneNumber = function (phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    };
    PlayerInfo.prototype.setEmail = function (email) {
        this.email = email;
        return this;
    };
    PlayerInfo.prototype.setFfgNumber = function (ffgNumber) {
        this.ffgNumber = ffgNumber;
        return this;
    };
    PlayerInfo.prototype.setPrenon = function (prenom) {
        this.prenom = prenom;
        return this;
    };
    PlayerInfo.prototype.setNom = function (nom) {
        this.nom = nom;
        return this;
    };
    PlayerInfo.prototype.setCircuit = function (circuit) {
        this.circuit = circuit;
        return this;
    };
    PlayerInfo.prototype.setCategorie = function (categorie) {
        this.categorie = categorie;
        return this;
    };
    PlayerInfo.prototype.setNbrRoundThisYear = function (nbrRoundThisYear) {
        this.nbrRoundThisYear = nbrRoundThisYear;
        return this;
    };
    return PlayerInfo;
}());



/***/ }),

/***/ "./src/app/services/navbar.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/navbar.service.ts ***!
  \********************************************/
/*! exports provided: NavbarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarService", function() { return NavbarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarService = /** @class */ (function () {
    function NavbarService() {
        this.links = new Array();
        this.isLoggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.addItem({ text: 'Login', path: 'login' });
        this.isLoggedIn.next(false);
    }
    NavbarService.prototype.getLinks = function () {
        return this.links;
    };
    NavbarService.prototype.getLoginStatus = function () {
        return this.isLoggedIn;
    };
    NavbarService.prototype.updateLoginStatus = function (status) {
        this.isLoggedIn.next(status);
        if (!status) {
            this.clearAllItems();
            this.addItem({ text: 'Login', path: 'login' });
        }
    };
    NavbarService.prototype.updateNavAfterAuth = function (role) {
        this.removeItem({ text: 'Login' });
        if (role === 'user') {
            this.addItem({ text: 'User Board', path: 'user' });
        }
        else if (role === 'admin') {
            this.addItem({ text: 'Admin Board', path: 'admin' });
            this.addItem({ text: 'Atelier', path: 'atelier' });
        }
    };
    NavbarService.prototype.addItem = function (_a) {
        var text = _a.text, path = _a.path;
        this.links.push({ text: text, path: path });
    };
    NavbarService.prototype.removeItem = function (_a) {
        var _this = this;
        var text = _a.text;
        this.links.forEach(function (link, index) {
            if (link.text === text) {
                _this.links.splice(index, 1);
            }
        });
    };
    NavbarService.prototype.clearAllItems = function () {
        this.links.length = 0;
    };
    NavbarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], NavbarService);
    return NavbarService;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  <strong>USER page</strong> works!\n</p>\n"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/xpia057/dev/golfApp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map