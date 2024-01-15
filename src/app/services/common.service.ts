import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Toast } from 'ng-zorro-antd-mobile';
declare let ClipboardJS: any;

@Injectable({
    providedIn: 'root'
})
export class CommonService {
    constructor(
        private router: Router,
        private toast: Toast,
    ) { }
    getApiPath() {
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
    goBack() {
        const path = localStorage.getItem('previousRouter');
        if (path) {
            this.router.navigate([path]);
        }
    }

    // 倒计时
    countDown(count: number, callback: Function) {
        let countdown = count, timer: any;
        timer = setInterval(function () {
            if (countdown === 0) {
                clearInterval(timer);
                timer = null;
            } else {
                countdown--;
            }
            callback(countdown, timer);
        }, 1000);
    }

    /**
        * 返回字符串 为n个char构成
        * @param char 重复的字符
        * @param count 次数
        * @return String
        */
    charString(char: string, count: number): string {
        var str: string = "";
        while (count--) {
            str += char;
        }
        return str;
    }

    /**
     * 节流
     * @param delay 
     */
    throttle(fn: Function, delay = 1000): Function {
        let timer: any;
        let that = this;
        return function () {
            if (timer) return;
            timer = setTimeout(() => {
                clearTimeout(timer);
                timer = null;
                fn.apply(that);
            }, delay);
        }
    }

    /**
     * 防抖
     * @param delay 
     */
    debounce(fn: Function, delay = 800): Function {
        let timer: any;
        let flag = false;
        let that = this;
        return function () {
            if (flag) {
                clearTimeout(timer);
                timer = null;
            }
            flag = true;
            timer = setTimeout(() => {
                flag = false;
                fn.apply(that);
            }, delay);
        }
    }

    /**
     * 深拷贝
     * @param data
     * @returns 
     */
    deepCopy<T>(data: T): T {
        let type = Object.prototype.toString.call(data);
        let copyData: any;
        if (type === '[object Array]' || type === '[object Object]') {
            copyData = type == '[object Array]' ? [] : {};
            for (const key in data) {
                if (Object.hasOwnProperty.call(data, key)) {
                    const element = data[key];
                    if (typeof element === 'object') {
                        copyData[key] = this.deepCopy(element);
                    } else {
                        copyData[key] = element
                    }
                }
            }
        } else {
            copyData = data;
        }
        return copyData;
    }

    /**
     * Toast show / fail / success
     * @param params [mask] false, 不显示透明蒙版, 可触摸穿透
     * 其他属性为Toast默认属性
     * @returns 
     */
    commonShow(params?: ShowParams): Promise<any> {
        const value = Object.assign(new ShowParams(), params);
        return this.toast.show(
            value.content,
            value.timeInterval,
            value.mask,
            value.position
        );
    }
    commonFail(params?: ShowParams): Promise<any> {
        const value = Object.assign(new ShowParams(), params);
        return this.toast.fail(
            value.content,
            value.timeInterval,
            value.onClose,
            value.mask,
            value.position,
        );
    }
    commonSuccess(params?: ShowParams): Promise<any> {
        const value = Object.assign(new ShowParams(), params);
        return this.toast.success(
            value.content,
            value.timeInterval,
            value.onClose,
            value.mask,
            value.position,
        );
    }

    /**
     * 复制单行内容到粘贴板(该写法过时, execCommand方法可能会失效)
     * content : 需要复制的内容
     * message : 复制完后的提示，默认提示"复制成功"
     */
    copyToClip(content: string, message = "复制成功") {
        var aux = document.createElement("input");
        aux.setAttribute("value", content);
        document.body.appendChild(aux);
        aux.select();
        document.execCommand("copy");
        document.body.removeChild(aux);
        this.commonShow({ content: message });
    }
    /**
     * 依赖于clipboard.min.js插件
     * @param ele 触发复制的按钮标签名
     * @param text 要复制的内容
     */
    copyTextValue(ele: string, text: string = '') {
        let clipboard = new ClipboardJS(ele, {
            text: () => {
                return text;
            }
        });
        clipboard.on('success', (e: any) => {
            e.clearSelection();
            this.commonShow({ content: '复制成功' });
        })
        clipboard.on('error', (e: any) => {
            this.commonShow({ content: '复制失败' });
        })
    }

    getIsSafari(): boolean {
        let isSafari = false;
        if (/Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent)) {
            isSafari = true;
        } else {
            isSafari = false;
        }
        return isSafari;
    }

}
class ShowParams {
    content?: string = '';
    timeInterval?: number = 3000;
    mask?: boolean = false;
    position?: string = 'middle'; // 'top' | 'middle' | 'bottom'
    onClose?: () => {};
}