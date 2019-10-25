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

module.exports = ".centre {\ntext-align:center;\n}\n\n.tableaux{\ndisplay:inline-block;\nvertical-align:top;\n}\t"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\">Golf Data Tournaments</a>\n    </div>\n    <ul class=\"nav navbar-nav\" routerLinkActive=\"active\">\n      <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"home\">Home</a></li>\n      <li class=\"nav-item\" *ngFor=\"let link of links\">\n        <a class=\"nav-link\" [routerLink]=\"link.path\">{{ link.text }}</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"isLoggedIn\">\n        <a class=\"nav-link\" routerLink=\"logout\" (click)=\"logout()\">Logout</a>\n      </li>\n      <li class=\"nav-item \" *ngIf=\"!isLoggedIn\" style=\"text-align: center;\">\n        <input type=\"text\" placeholder=\"Username\" name=\"username\" required >\n      </li>\n      <li class=\"nav-item \" *ngIf=\"!isLoggedIn\" style=\"text-align: center;\">\n      <input type=\"password\" placeholder=\"Password\" name=\"password\" required required >\n      </li>\n      <li class=\"nav-item \" *ngIf=\"!isLoggedIn\" style=\"text-align: center;\">\n        <button class=\"btn btn-primary\" (click)=\"verfiyLogin()\" required >Login</button> \n      </li>\n    </ul>\n  </div>\n</nav> -->\n\n<nav class=\"navbar navbar-inverse\">\n  \n  <div class=\"tableaux\">\n    <a class=\"navbar-brand\" href=\"#\">Golf Data Tournaments</a>\n  </div>\n  \n  <div class=\"tableaux\">\n    <ul class=\"nav navbar-nav\" routerLinkActive=\"active\">\n        <li class=\"nav-item\" *ngFor=\"let link of links\">\n          <a class=\"nav-link\" [routerLink]=\"link.path\">{{ link.text }}</a>\n        </li>\n    </ul>\n\n  </div>\n  \n  <div class=\"tableaux\"  style=\"float: right;\">\n\n      <input type=\"text\"      placeholder=\"Username\" [(ngModel)]=\"username\" name=\"username\" required *ngIf=\"!isLoggedIn\"><br>\n      <input type=\"password\"  placeholder=\"Password\" [(ngModel)]=\"password\"   name=\"password\" required required  *ngIf=\"!isLoggedIn\"><br>\n\n         \n      <label *ngIf=\"!isLoggedIn\"><input type=\"checkbox\" checked=\"checked\" name=\"remember\" > Remember me</label>.\n      <button class=\"btn btn-primary\" (click)=\"verfiyLogin(username,password)\" required *ngIf=\"!isLoggedIn\" >Login</button> \n      <button class=\"btn btn-primary\" routerLink=\"logout\" (click)=\"logout()\" *ngIf=\"isLoggedIn\" >Logout</button> \n  </div>\n</nav>\n<!-- class=\"container\" -->\n<div >\n  <router-outlet></router-outlet>\n</div>"

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
/* harmony import */ var _atelier_atelier_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./atelier/atelier.component */ "./src/app/atelier/atelier.component.ts");
/* harmony import */ var _services_navbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/navbar.service */ "./src/app/services/navbar.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");
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
    function AppComponent(router, navbarService, authenticationService) {
        this.router = router;
        this.navbarService = navbarService;
        this.authenticationService = authenticationService;
        this.isLoggedIn = false;
        this.logged = false;
        this.router.config.unshift(
        /* { path: 'login', component: LoginComponent },*/
        /* { path: 'user', component: UserComponent },
         { path: 'admin', component: AdminComponent },*/
        { path: 'atelier', component: _atelier_atelier_component__WEBPACK_IMPORTED_MODULE_2__["AtelierComponent"] });
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.links = this.navbarService.getLinks();
        this.navbarService.getLoginStatus().subscribe(function (status) { return _this.isLoggedIn = status; });
        if (this.logged == false) {
            this.router.navigate(['home']);
        }
    };
    AppComponent.prototype.logout = function () {
        this.navbarService.updateLoginStatus(false);
        this.router.navigate(['home']);
    };
    AppComponent.prototype.verfiyLogin = function () {
        /*  if(this.username == 'admin' && this.password == 'admin'){
            alert('yesss !')
            //his.authenticationService.loginUser();
          }*/
        //this.authenticationService.loginAdmin();
        if (this.authenticationService.verification(this.username, this.password)) {
            this.authenticationService.loginAdmin();
            this.logged = true;
        }
        else {
            alert('dsl !');
            //his.authenticationService.loginUser();
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_navbar_service__WEBPACK_IMPORTED_MODULE_3__["NavbarService"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]
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

module.exports = ".page {\n    size: 21cm 29.7cm;\n    margin: 30mm 45mm 30mm 45mm;\n     /* change the margins as you want them to be. */\n}\n\n.viewable{\n    width: 210mm;\n    /*height: 297mm;*/\n    height: 309mm;\n    margin-left: 30px;\n    margin-right: auto;\n    border-color: coral;\n    border-style: solid; \n}\n\n.printable{\n    /*width: 210mm;\n    height: 320mm;\n    margin-left: 30px;\n    margin-right: auto;*/\n    width: 210mm;\n    /*height: 297mm;*/\n    height: 309mm;\n    margin-left: 30px;\n    margin-right: auto;\n    border-color: white;\n    border-style: solid; \n}\n\n#fichier {\n    float:left; /* Le cadre sort du flux */\n   \n    width:300px; \n    /*\n     border:1px solid #DAA520;\n     height:200px;\n    width:200px; \n    background-color:#DAA520;*/\n }"

/***/ }),

/***/ "./src/app/atelier/atelier.component.html":
/*!************************************************!*\
  !*** ./src/app/atelier/atelier.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin: 30px 30px 30px 30px\">\n  <h1>Impression des cartes atelier</h1>\n</div>\n<hr>\n<div style=\"margin: 30px 30px 30px 30px\">\n  <div id=\"fichier\">Fichiers BFGT :&nbsp;</div>\n  <div id=\"fichier\"><input type=\"file\" name=\"img\" (change)=\"handleFileInput2($event.target.files)\" multiple></div>\n  <div id=\"fichier\">&nbsp;Nombre de fiches joueur : {{tabPlayerInfos?.length}} &nbsp;</div>\n  <div id=\"fichier\">\n    <input type=\"number\" id=\"tentacles\" name=\"tentacles\" min=\"1\" max=\"1000\" [(ngModel)]=\"nbElementTab\">\n  </div>\n</div>\n<div style=\"clear: both\"></div>\n<br>\n<div style=\"clear: both\"></div>\n<div style=\"clear: both\"></div>\n\n<div style=\"margin: 30px 30px 30px 30px\">\n  <div id=\"fichier\">\n    <button (click)=\"removeDouble()\">Suppression des doubles par N°license</button>&nbsp;\n  </div>\n  <div id=\"fichier\">\n    <button (click)=\"onClickMe()\">Edition du document par catégorie d'age !</button>&nbsp;\n  </div>\n  <div id=\"fichier\">\n    <button (click)=\"docuReload()\">Raz de la page</button>&nbsp;\n  </div>\n\n  <div id=\"fichier\">\n    <select id=\"logo\" [(ngModel)]=\"logo\">\n      <option value=\"logoBFGT.png\">BFGT</option>\n      <option value=\"logoMistral.png\">BFGTMistral</option>\n    </select>\n  </div>\n</div>\n<div style=\"clear: both\"></div>\n<br>\n\n<div style=\"margin: 30px 30px 30px 30px\">\n  <div id=\"fichier\">\n    <button (click)=\"getmailList()\">Liste des e-mails</button>&nbsp;\n  </div>\n  <div id=\"fichier\">\n    <button (click)=\"viewAllInformation()\">Information d'inscription</button>&nbsp;\n  </div>\n  <div id=\"fichier\">\n    <button (click)=\"prePrintDiv()\">bordure impression</button>&nbsp;\n  </div>\n  <div id=\"fichier\">\n    <button (click)=\"printDiv('printableArea0')\">impression</button>&nbsp;\n  </div>\n</div>\n<div style=\"clear: both\"></div>\n<br>\n\n\n<div style=\"margin: 30px 30px 30px 30px\">\n  <textarea rows=\"15\" cols=\"180\" ng *ngIf=\"emails.length > 0\">{{emails?.join('; ')}}</textarea>\n</div>\n\n<div style=\"margin: 30px 30px 30px 30px\">\n  <table *ngIf=\"isViewInformation\" style=\"margin: 30px 0 0 0\">\n    <thead>\n      <tr style=\"border:1px solid black\">\n        <th style=\"border:1px solid black\">N° Licence</th>\n        <th style=\"border:1px solid black\">Prénom</th>\n        <th style=\"border:1px solid black\">Nom</th>\n        <th style=\"border:1px solid black\">Circuit</th>\n        <th style=\"border:1px solid black\">Catégorie</th>\n        <th style=\"border:1px solid black\">Nbr round</th>\n        <th style=\"border:1px solid black\">Email</th>\n        <th style=\"border:1px solid black\">Téléphone</th>\n        <th style=\"border:1px solid black\">Commentaire</th>\n        <th style=\"border:1px solid black\">Date inscription</th>\n      </tr>\n    </thead>\n    <tbody style=\"border:1px solid black\">\n      <tr *ngFor=\"let hero of tabPlayerInfos\" style=\"border:1px solid black\">\n        <td style=\"border:1px solid black\">{{hero.ffgNumber}} &nbsp;</td>\n        <td style=\"border:1px solid black\">{{hero.prenom}}&nbsp;</td>\n        <td style=\"border:1px solid black\">{{hero.nom}}&nbsp;</td>\n        <td style=\"border:1px solid black\">{{hero.circuit}}&nbsp;</td>\n        <td style=\"border:1px solid black\">{{hero.categorie}}&nbsp;</td>\n        <td style=\"border:1px solid black\">{{hero.nbrRoundThisYear}}&nbsp;</td>\n        <td style=\"border:1px solid black\">{{hero.email}}&nbsp;</td>\n        <td style=\"border:1px solid black\">{{hero.phoneNumber}}&nbsp;</td>\n        <td style=\"border:1px solid black\">{{hero.comment}}&nbsp;</td>\n        <td style=\"border:1px solid black\">{{hero.date}}&nbsp;</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n\n\n<div id=\"printableArea0\">\n  <div id=\"printableArea1\" [ngClass]=\"{'viewable': step=='view', 'printable':step=='print' }\">\n    <div *ngFor=\"let item of categorie\">\n      <app-header-tableau [currentcategorie]=\"item\"\n        [tabPlayersInfos]=getElementListByCategorie(item,tabPlayerInfosList1)\n        [printHeader]=defineifHeader(item,tabPlayerInfosList1) [logo]=\"logo\"></app-header-tableau>\n    </div>\n  </div>\n  <div id=\"printableArea2\" *ngIf=\"tabPlayerInfosList2.length > 0\"\n    [ngClass]=\"{'viewable': step=='view', 'printable':step=='print' }\">\n    <div *ngFor=\"let item of categorie\">\n      <app-header-tableau [currentcategorie]=\"item\"\n        [tabPlayersInfos]=getElementListByCategorie(item,tabPlayerInfosList2)\n        [printHeader]=defineifHeader(item,tabPlayerInfosList2) [logo]=\"logo\"></app-header-tableau>\n    </div>\n  </div>\n  <div id=\"printableArea3\" *ngIf=\"tabPlayerInfosList3.length > 0\"\n    [ngClass]=\"{'viewable': step=='view', 'printable':step=='print' }\">\n    <div *ngFor=\"let item of categorie\">\n      <app-header-tableau [currentcategorie]=\"item\"\n        [tabPlayersInfos]=getElementListByCategorie(item,tabPlayerInfosList3)\n        [printHeader]=defineifHeader(item,tabPlayerInfosList3) [logo]=\"logo\"></app-header-tableau>\n    </div>\n  </div>\n  <div id=\"printableArea4\" *ngIf=\"tabPlayerInfosList4.length > 0\"\n    [ngClass]=\"{'viewable': step=='view', 'printable':step=='print' }\">\n    <div *ngFor=\"let item of categorie\">\n      <app-header-tableau [currentcategorie]=\"item\"\n        [tabPlayersInfos]=getElementListByCategorie(item,tabPlayerInfosList4)\n        [printHeader]=defineifHeader(item,tabPlayerInfosList4) [logo]=\"logo\"></app-header-tableau>\n    </div>\n  </div>\n  <div id=\"printableArea5\" *ngIf=\"tabPlayerInfosList5.length > 0\"\n    [ngClass]=\"{'viewable': step=='view', 'printable':step=='print' }\">\n    <div *ngFor=\"let item of categorie\">\n      <app-header-tableau [currentcategorie]=\"item\"\n        [tabPlayersInfos]=getElementListByCategorie(item,tabPlayerInfosList5)\n        [printHeader]=defineifHeader(item,tabPlayerInfosList5) [logo]=\"logo\"></app-header-tableau>\n    </div>\n  </div>\n  <div id=\"printableArea6\" *ngIf=\"tabPlayerInfosList6.length > 0\"\n    [ngClass]=\"{'viewable': step=='view', 'printable':step=='print' }\">\n    <div *ngFor=\"let item of categorie\">\n      <app-header-tableau [currentcategorie]=\"item\"\n        [tabPlayersInfos]=getElementListByCategorie(item,tabPlayerInfosList6)\n        [printHeader]=defineifHeader(item,tabPlayerInfosList6) [logo]=\"logo\"></app-header-tableau>\n    </div>\n  </div>\n</div>\n\n\n<!-- <button (click)=\"printDiv('printableArea3')\">print a div!</button>\n<div id=\"printableArea3\"\n      style=\"width: 210mm; height: 297mm; margin-left: auto;margin-right: auto; border-color: coral; border-style: solid; \">\n                         \n      <app-header-tableau [currentcategorie]=\"10\" \n                          [printAreaBottom]=div1BottomValue\n                          [tabPlayersInfos]=getElementListByCategorie(10)\n                          [logo]=true></app-header-tableau>    \n\n      <app-header-tableau [currentcategorie]=\"8\" \n                          [printAreaBottom]=div1BottomValue\n                          [tabPlayersInfos]=getElementListByCategorie(8)\n                          [logo]=false></app-header-tableau> \n \n      \n  \n</div> \n\n\n<table>\n    <thead>\n        <tr style=\"border:1px solid black\">\n            <th style=\"border:1px solid black\">N° Licence</th>\n            <th style=\"border:1px solid black\" >Prénom</th>\n            <th style=\"border:1px solid black\">Nom</th>\n            <th style=\"border:1px solid black\">Circuit</th>\n            <th style=\"border:1px solid black\">Catégorie</th>\n            <th style=\"border:1px solid black\">Nbr round</th>\n            <th style=\"border:1px solid black\">Email</th>\n            <th style=\"border:1px solid black\">Téléphone</th>\n            <th style=\"border:1px solid black\">Commentaire</th>\n            <th style=\"border:1px solid black\">Date inscription</th>\n        </tr>\n    </thead>\n    <tbody style=\"border:1px solid black\">\n        <tr *ngFor=\"let hero of tabPlayerInfos\" style=\"border:1px solid black\">\n            <td style=\"border:1px solid black\">{{hero.ffgNumber}} &nbsp;</td>\n            <td style=\"border:1px solid black\">{{hero.prenom}}&nbsp;</td>\n            <td style=\"border:1px solid black\">{{hero.nom}}&nbsp;</td>\n            <td style=\"border:1px solid black\">{{hero.circuit}}&nbsp;</td>\n            <td style=\"border:1px solid black\">{{hero.categorie}}&nbsp;</td>\n            <td style=\"border:1px solid black\">{{hero.nbrRoundThisYear}}&nbsp;</td>\n            <td style=\"border:1px solid black\">{{hero.email}}&nbsp;</td>\n            <td style=\"border:1px solid black\">{{hero.phoneNumber}}&nbsp;</td>\n            <td style=\"border:1px solid black\">{{hero.comment}}&nbsp;</td>\n            <td style=\"border:1px solid black\" >{{hero.date}}&nbsp;</td>\n        </tr>\n    </tbody>\n  </table>\n\n-->\n<!-- <hr>\n\n<hr>\n\n\n<button (click)=\"printDiv('printableArea1')\">print a div!</button>\n<div id=\"printableArea1\"\n      style=\"width: 210mm; height: 297mm; margin-left: auto;margin-right: auto; border-color: coral; border-style: solid; \">\n    \n  <table  style=\"width: 100%;margin-top: 30px;\"> \n     \n    <tbody >\n      <tr style=\"text-align: center;\">\n        <td style=\"width: 50%;\">&nbsp;<img width=\"250\" src=\"assets/img/logoMistral.png\">&nbsp;</td>\n        <td style=\"width: 50%; text-align: center;\">\n            <p><span style=\"text-decoration: underline;\"><strong> Atelier </strong></span></p>\n            <p><strong>&nbsp;Stadium&nbsp;</strong> <input id=\"scales\" name=\"scales\" type=\"checkbox\" />&nbsp;<strong>&nbsp;Putting&nbsp;</strong> <input id=\"scales\" name=\"scales\" type=\"checkbox\" /></p>\n            <p><strong>Approche&nbsp;</strong> <input id=\"scales\" name=\"scales\" type=\"checkbox\" />&nbsp;<strong>&nbsp;Trackman&nbsp;</strong> <input id=\"scales\" name=\"scales\" type=\"checkbox\" /></p>\n        </td> \n      </tr>\n      <tr>\n          <td colspan=\"2\">&nbsp;</td> \n      </tr> \n      <tr>\n      <td colspan=\"2\">\n        <table style=\"width: 90%; margin-left: auto; margin-right: auto;\">\n             <tbody *ngFor=\"let currentCategorie of categorie\">\n\n                  <tr style=\"border:1px solid black;text-align: center;\">\n                      <th style=\"border:1px solid black ; text-align: center;\">U{{ currentCategorie}}</th>\n                      <th style=\"border:1px solid black; text-align: center;\" colspan=\"3\">Score</th>\n                      <th style=\"border:1px solid black; text-align: center;\">Classement</th>\n                  </tr>\n                  <tr *ngFor=\"let hero of getElementListByCategorie(currentCategorie)\" \n                      [attr.id]=\"hero.ffgNumber\"\n                      style=\"border:1px solid black\">\n                    <td style=\"border:1px solid black; width: 40%;\" >&nbsp;{{hero.nom}} {{hero.prenom}}&nbsp;</td>\n                    <td style=\"border:1px solid black; width: 15%;\">&nbsp;&nbsp;</td>\n                    <td style=\"border:1px solid black; width: 15%;\">&nbsp;&nbsp;</td>\n                    <td style=\"border:1px solid black; width: 15%\">&nbsp;&nbsp;</td>\n                    <td style=\"border:1px solid black; width: 20%;\">&nbsp;&nbsp;{{controleDivPosition('printableArea1', hero.ffgNumber)}}</td>\n                  </tr>\n                  <tr>\n                      <td style=\"border:1px solid black;\" colspan=\"5\">&nbsp;</td> \n                  </tr>\n            </tbody>\n\n          </table>  \n        </td>\n      </tr>\n    </tbody>\n  </table> \n</div>-->"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_player_info_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/player-info.model */ "./src/app/models/player-info.model.ts");
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
    function AtelierComponent(document, router) {
        this.document = document;
        this.router = router;
        this.tabPlayerInfos = [];
        this.categorie = [16, 14, 12, 10, 8];
        this.startCategorie = 16;
        this.sliceValue = 0;
        this.logo = "logoMistral.png";
        this.step = "view";
        this.nbElementTab = 35;
        this.tabPlayerInfosList1 = [];
        this.tabPlayerInfosList2 = [];
        this.tabPlayerInfosList3 = [];
        this.tabPlayerInfosList4 = [];
        this.tabPlayerInfosList5 = [];
        this.tabPlayerInfosList6 = [];
        this.emails = [];
        this.isViewInformation = false;
    }
    AtelierComponent.prototype.ngOnInit = function () {
    };
    AtelierComponent.prototype.reloadComponent = function () { };
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
        if ((nbElementTotalTraiter + nbElementTraiter) > this.nbElementTab) {
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
                this.tabPlayerInfos.push(new _models_player_info_model__WEBPACK_IMPORTED_MODULE_3__["PlayerInfo"]()
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
    /* force replace encoding error */
    AtelierComponent.prototype.stringReplaceSpecial = function (maChaine) {
        if (maChaine) {
            maChaine = maChaine.replace('�', 'é');
        }
        return maChaine;
    };
    /* capitablise string parameter */
    AtelierComponent.prototype.stringToLowerCase = function (maChaine) {
        if (maChaine) {
            maChaine = maChaine.toLowerCase();
            var nameCapitalized = maChaine.charAt(0).toUpperCase() + maChaine.slice(1);
            return nameCapitalized;
        }
        return maChaine;
    };
    /* uppercas string parameter */
    AtelierComponent.prototype.stringToUpperCase = function (maChaine) {
        if (maChaine) {
            var nameCapitalized = maChaine.toUpperCase();
            return nameCapitalized;
        }
        return maChaine;
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
        var calculeNumber = 0;
        var calculeNumber2 = calculeNumber + this.nbElementTab;
        this.tabPlayerInfosList1 = this.tabPlayerInfos.slice(calculeNumber, calculeNumber2);
        calculeNumber = calculeNumber2;
        calculeNumber2 = calculeNumber + this.nbElementTab;
        this.tabPlayerInfosList2 = this.tabPlayerInfos.slice(calculeNumber, calculeNumber2);
        calculeNumber = calculeNumber2;
        calculeNumber2 = calculeNumber + this.nbElementTab;
        this.tabPlayerInfosList3 = this.tabPlayerInfos.slice(calculeNumber, calculeNumber2);
        calculeNumber = calculeNumber2;
        calculeNumber2 = calculeNumber + this.nbElementTab;
        this.tabPlayerInfosList4 = this.tabPlayerInfos.slice(calculeNumber, calculeNumber2);
        calculeNumber = calculeNumber2;
        calculeNumber2 = calculeNumber + this.nbElementTab;
        this.tabPlayerInfosList5 = this.tabPlayerInfos.slice(calculeNumber, calculeNumber2);
        calculeNumber = calculeNumber2;
        calculeNumber2 = calculeNumber + this.nbElementTab;
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
        if (maChaine && maChaine.length > 0) {
            maChaine = maChaine.replace('"', '').replace('"', '');
            try {
                // If the string is UTF-8, this will work and not throw an error.
                fixedstring = decodeURIComponent(escape(maChaine));
            }
            catch (e) {
                // If it isn't, an error will be thrown, and we can assume that we have an ISO string.
                fixedstring = maChaine;
            }
        }
        return fixedstring;
    };
    AtelierComponent.prototype.removeDouble = function () {
        this.tabPlayerInfos = this.getUnique(this.tabPlayerInfos, 'ffgNumber');
    };
    AtelierComponent.prototype.getUnique = function (arr, comp) {
        var unique = arr
            .map(function (e) { return e[comp]; })
            .map(function (e, i, final) { return final.indexOf(e) === i && i; })
            .filter(function (e) { return arr[e]; }).map(function (e) { return arr[e]; });
        return unique;
    };
    AtelierComponent.prototype.printDiv = function (divName) {
        this.step = 'print';
        var printContents = document.getElementById(divName).innerHTML;
        var originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
    };
    AtelierComponent.prototype.docuReload = function () {
        window.location.reload(true);
        /*this.router.routeReuseStrategy.shouldReuseRoute = function () {
          return false;
        };*/
        //this.router.navigate(['atelier']);
    };
    AtelierComponent.prototype.reloadDIV = function () {
        //document.getElementById("printableArea0").innerHTML.reload();
    };
    AtelierComponent.prototype.prePrintDiv = function () {
        if (this.step == 'print') {
            this.step = 'view';
        }
        else {
            this.step = 'print';
        }
    };
    AtelierComponent.prototype.getmailList = function () {
        if (this.emails.length > 0) {
            this.emails = [];
        }
        else {
            for (var propt in this.tabPlayerInfos) {
                console.log(propt + ': ' + this.tabPlayerInfos[propt]);
                this.emails.push(this.tabPlayerInfos[propt].email);
            }
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
        __metadata("design:paramtypes", [Document, _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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

module.exports = "\n<table style=\"width: 100%;margin-top: 30px;\" *ngIf=\"printHeader==true && tabPlayersInfos.length > 0\" >\n  <!-- style=\"height:100%; width:100%; margin: 0; padding: 0;\" -->\n  <tbody>\n    <tr style=\"text-align: center;\">\n      <td style=\"width: 50%;\">&nbsp;<img width=\"250\" src=\"assets/img/{{logo}}\">&nbsp;</td>\n      <td style=\"width: 50%; text-align: center;\">\n        <p><span style=\"text-decoration: underline;\"><strong> Atelier </strong></span></p>\n        <p><strong>&nbsp;Stadium&nbsp;</strong> <input id=\"scales\" name=\"scales\"\n            type=\"checkbox\" />&nbsp;<strong>&nbsp;Putting&nbsp;</strong> <input id=\"scales\" name=\"scales\"\n            type=\"checkbox\" /></p>\n        <p><strong>Approche&nbsp;</strong> <input id=\"scales\" name=\"scales\"\n            type=\"checkbox\" />&nbsp;<strong>&nbsp;Trackman&nbsp;</strong> <input id=\"scales\" name=\"scales\"\n            type=\"checkbox\" /></p>\n      </td>\n    </tr>\n    <tr>\n      <td colspan=\"2\">&nbsp;</td>\n    </tr>\n  </tbody>\n</table>\n\n<table style=\"width: 90%; margin-left: auto; margin-right: auto;\" *ngIf=\"tabPlayersInfos.length > 0\">\n    <tbody>\n         <tr style=\"border:1px solid black;text-align: center;\">\n             <th style=\"border:1px solid black ; text-align: center;\">U{{ currentcategorie}}</th>\n             <th style=\"border:1px solid black; text-align: center;\" colspan=\"3\">Score</th>\n             <th style=\"border:1px solid black; text-align: center;\">Total</th>\n             <th style=\"border:1px solid black; text-align: center;\">Classement</th>\n         </tr>\n         <tr *ngFor=\"let hero of tabPlayersInfos\" \n             [attr.id]=\"hero.ffgNumber\"\n             style=\"border:1px solid black\">\n           <td style=\"border:1px solid black; width: 45%;\" >&nbsp;{{hero.nom}} {{hero.prenom}}&nbsp;</td>\n           <td style=\"border:1px solid black; width: 10%;\">&nbsp;&nbsp;</td>\n           <td style=\"border:1px solid black; width: 10%;\">&nbsp;&nbsp;</td>\n           <td style=\"border:1px solid black; width: 10%\">&nbsp;&nbsp;</td>\n           <td style=\"border:1px solid black; width: 10%\">&nbsp;&nbsp;</td>\n           <td style=\"border:1px solid black; width: 15%;\">&nbsp;&nbsp;</td>\n\n         </tr>\n         <tr>\n            <td style=\"width: 45%;\" >&nbsp;&nbsp;</td>\n            <td style=\"width: 10%;\">&nbsp;&nbsp;</td>\n            <td style=\"width: 10%;\">&nbsp;&nbsp;</td>\n            <td style=\"width: 10%\">&nbsp;&nbsp;</td>\n            <td style=\"width: 10%\">&nbsp;&nbsp;</td>\n            <td style=\"width: 15%;\">&nbsp;&nbsp;</td>\n         </tr>\n         \n<!-- {{controleDivPosition('printableArea1', hero.ffgNumber)}} -->\n   </tbody>\n\n </table>  "

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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HeaderTableauComponent.prototype, "logo", void 0);
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

module.exports = "/* Bordered form */\nform {\n    border: 3px solid #f1f1f1;\n  }\n/* Full-width inputs */\ninput[type=text], input[type=password] {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n  }\n/* Set a style for all buttons */\nbutton {\n    background-color: darkblue;\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    cursor: pointer;\n    width: 100%;\n  }\n/* Add a hover effect for buttons */\nbutton:hover {\n    opacity: 0.8;\n  }\n/* Extra style for the cancel button (red) */\n.cancelbtn {\n    width: auto;\n    padding: 10px 18px;\n    background-color: #f44336;\n  }\n/* Center the avatar image inside this container */\n.imgcontainer {\n    text-align: center;\n    margin: 24px 0 12px 0;\n  }\n/* Avatar image */\nimg.avatar {\n    width: 40%;\n    border-radius: 50%;\n  }\n/* Add padding to containers */\n.container {\n    padding: 16px;\n  }\n/* The \"Forgot password\" text */\nspan.psw {\n    float: right;\n    padding-top: 16px;\n  }\n/* Change styles for span and cancel button on extra small screens */\n@media screen and (max-width: 300px) {\n    span.psw {\n      display: block;\n      float: none;\n    }\n    .cancelbtn {\n      width: 100%;\n    }\n  }"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isLoggedIn; else loggedOut\">\n  Logged in as {{role}}.\n</div>\n\n<ng-template #loggedOut>\n\n  \n    <div class=\"container\">\n      <label for=\"username\"><b>Username</b></label>\n      <input type=\"text\" placeholder=\"Enter Username\" name=\"username\" required>\n  \n      <label for=\"password\"><b>Password</b></label>\n      <input type=\"password\" placeholder=\"Enter Password\" name=\"password\" required>\n  \n      <!-- <button type=\"submit\">Login</button> -->\n      <button class=\"btn btn-primary\" (click)=\"verfiyLogin()\">Login as Admin</button>\n      <label>\n        <input type=\"checkbox\" checked=\"checked\" name=\"remember\"> Remember me\n      </label>\n    </div>\n   \n\n  <!-- <button class=\"btn btn-secondary\" (click)=\"loginUser()\">Login as User</button>\n  <button class=\"btn btn-primary\" (click)=\"loginAdmin()\">Login as Admin</button>\n  <hr />\n  <p>Don't have an account?</p>\n  <a href=\"signup\" class=\"btn btn-success\">Sign Up</a> -->\n</ng-template>\n"

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
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
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
    function LoginComponent(navbarService, authenticationService) {
        var _this = this;
        this.navbarService = navbarService;
        this.authenticationService = authenticationService;
        this.isLoggedIn = false;
        this.role = '';
        this.username = undefined;
        this.password = undefined;
        this.navbarService.getLoginStatus().subscribe(function (status) { return _this.isLoggedIn = status; });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.verfiyLogin = function () {
        this.loginAdmin();
        /*if (this.authenticationService.verification(this.username, this.password)) {
          this.loginAdmin();
        } else{
          this.loginUser()
        }*/
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
        __metadata("design:paramtypes", [_services_navbar_service__WEBPACK_IMPORTED_MODULE_1__["NavbarService"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
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

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
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


var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(navbarService) {
        var _this = this;
        this.navbarService = navbarService;
        this.isLoggedIn = false;
        this.role = '';
        this.navbarService.getLoginStatus().subscribe(function (status) { return _this.isLoggedIn = status; });
    }
    AuthenticationService.prototype.verification = function (user, password) {
        if (user == "btmistral" && password == "bfgt") {
            return true;
        }
        return false;
    };
    AuthenticationService.prototype.loginUser = function () {
        this.navbarService.updateNavAfterAuth('user');
        this.navbarService.updateLoginStatus(true);
        this.role = 'user';
    };
    AuthenticationService.prototype.loginAdmin = function () {
        this.navbarService.updateNavAfterAuth('admin');
        this.navbarService.updateLoginStatus(true);
        this.role = 'admin';
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_navbar_service__WEBPACK_IMPORTED_MODULE_1__["NavbarService"]])
    ], AuthenticationService);
    return AuthenticationService;
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
        //this.addItem({ text: 'Login', path: 'login' });
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
            //this.addItem({ text: 'Login', path: 'login' });
        }
    };
    NavbarService.prototype.updateNavAfterAuth = function (role) {
        //this.removeItem({ text: 'Login' });
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