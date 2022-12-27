import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class CommonService {
    constructor(
        private router: Router,
    ) { }
    getApiPath(){
        return '';
    }
    goNavigate(nav: string, params?: any) {
        // 存当前路由地址 方便回退调用
        localStorage.setItem('previousRouter', location.pathname);
        if (params) {
          localStorage.setItem('routerParams', params);
        }
        this.router.navigate([nav]);
    }
    goNavigateAboutData(nav: string, params?: any, data?: any) {
        // 存当前路由地址 方便回退调用
        localStorage.setItem('previousRouter', location.pathname);
        if (data) {
          localStorage.setItem('nextPageData', JSON.stringify(data));
        }
        this.router.navigate([nav], { queryParams: params });
    }
    goBack(){
        const path = localStorage.getItem('previousRouter');
        if(path){
            this.router.navigate([path]);
        }
    }
    
}
