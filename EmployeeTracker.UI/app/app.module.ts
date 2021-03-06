﻿import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { SidebarComponent } from './layout/sidebar.component';

import { routing } from "./app.routing";

import { DashboardModule } from "./dashboard/dashboard.module";
import { EmployeeModule } from "./employees/employees.module";

@NgModule({
    imports: [BrowserModule, HttpModule, routing, DashboardModule, EmployeeModule],
    declarations: [AppComponent, SidebarComponent],
    bootstrap: [AppComponent]
})

export class AppModule { }
