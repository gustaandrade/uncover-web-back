"use strict";

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.post("/register", "UserController.register");
Route.post("/authenticate", "UserController.authenticate");

Route.resource("/interest", "InterestController").apiOnly();
Route.resource("/company", "CompanyController").apiOnly();
Route.resource("/visitation", "VisitationController").apiOnly();
Route.resource("/imagesCompany", "ImagesCompanyController").apiOnly();
