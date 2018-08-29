import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { RouterModule } from '@angular/router';
// import { routing }        from './app.routing';

import {Http, HttpModule} from '@angular/http';
import { SchoolService } from './school.service';
import { DataService } from './data.service';
import { UserService } from './user.service';
import { AlertService } from './shared/services/alert.service';
import { AuthenticationService } from './shared/services/authentication.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';

// import { LoginComponent } from './login/login.component';
// import { SignupComponent } from './signup/signup.component';

import { JwtInterceptor } from './shared/services/jwt.interceptor';
import {  ErrorInterceptor } from './shared/services/error.interceptors';
import { AlertComponent } from './alert/alert.component';


// AoT requires an exported function for factories
export const createTranslateLoader = (http: HttpClient) => {
    /* for development
    return new TranslateHttpLoader(
        http,
        '/start-angular/SB-Admin-BS4-Angular-6/master/dist/assets/i18n/',
        '.json'
    ); */
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        BrowserModule,
        RouterModule,
        // RouterModule.forRoot(AppRoutes),
        ReactiveFormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        HttpModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        AppRoutingModule
    ],
    declarations: [
                    AppComponent,
                    AlertComponent,
                    // LoginComponent,
                    // SignupComponent
                ],

    providers: [
                SchoolService,DataService,UserService,
                AuthGuard,
                AlertService,
                AuthenticationService,
                { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
                { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
                ],
    bootstrap: [AppComponent]
})
export class AppModule {}
