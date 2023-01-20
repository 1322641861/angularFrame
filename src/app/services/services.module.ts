import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';
import { httpInterceptorProvides } from './interceptors';


export const API_CONFIG = new InjectionToken('ApiConfigToken');

@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ],
    providers: [
        { provide: API_CONFIG, useValue: environment.production ? '' : '' },
        httpInterceptorProvides,
    ]
})
export class ServicesModule { }
