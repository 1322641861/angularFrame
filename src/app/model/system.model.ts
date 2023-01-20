export interface ResultModel<T> {
    /**
     * 0：请求成功 ； 1：请求失败
     */
    error: number;
    /**
     * 错误状态码 具体可参考全局错误码
     */
    code: string;
    /**
     * 	错误信息
     */
    message: string;
    /**
     * 返回的Json对象
     */
    data: T;
}


