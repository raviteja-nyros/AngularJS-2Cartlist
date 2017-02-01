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
var core_1 = require("@angular/core");
var angular2_jwt_1 = require("angular2-jwt");
var router_1 = require("@angular/router");
var auth_config_1 = require("./auth.config");
var Auth = (function () {
    function Auth(router) {
        this.router = router;
        // Configure Auth0
        this.auth0 = new Auth0({
            domain: auth_config_1.myConfig.domain,
            clientID: auth_config_1.myConfig.clientID,
            callbackOnLocationHash: true,
            callbackURL: auth_config_1.myConfig.callbackURL,
        });
        var result = this.auth0.parseHash(window.location.hash);
        if (result && result.idToken) {
            localStorage.setItem('id_token', result.idToken);
            this.router.navigate(['/products']);
        }
        else if (result && result.error) {
            alert('error: ' + result.error);
        }
    }
    Auth.prototype.signUp = function (username, password) {
        this.auth0.signup({
            connection: 'ng2-ecommerce',
            responseType: 'token',
            email: username,
            password: password,
        }, function (err) {
            if (err)
                alert("something went wrong: " + err.message);
        });
    };
    ;
    Auth.prototype.login = function (username, password) {
        this.auth0.login({
            connection: 'ng2-ecommerce',
            responseType: 'token',
            email: username,
            password: password,
        }, function (err) {
            if (err)
                alert("something went wrong: " + err.message);
        });
    };
    ;
    Auth.prototype.googleLogin = function () {
        this.auth0.login({
            connection: 'google-oauth2'
        }, function (err) {
            if (err)
                alert("something went wrong: " + err.message);
        });
    };
    ;
    Auth.prototype.authenticated = function () {
        // Check if there's an unexpired JWT
        // It searches for an item in localStorage with key == 'id_token'
        return angular2_jwt_1.tokenNotExpired();
    };
    ;
    Auth.prototype.logout = function () {
        // Remove token from localStorage
        localStorage.removeItem('id_token');
    };
    ;
    return Auth;
}());
Auth = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router])
], Auth);
exports.Auth = Auth;
//# sourceMappingURL=auth.service.js.map