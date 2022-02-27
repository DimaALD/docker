import axios, { AxiosRequestConfig, AxiosRequestHeaders, Method } from 'axios';
import { Response } from './response';

export class Request {
    _options: AxiosRequestConfig;

    constructor(url: string) {
        this._options = {};
        this._options.url = url;
    }

    public method(name: Method): this {
        this._options.method = name;
        return this;
    }

    public url(url: string, isNew = false): this {
        this._options.url = isNew ? url : `${this._options.url}${url}`;
        return this;
    }

    public body(body: object | string): this {
        this._options.data = body;
        return this;
    }

    public auth(token: string, type = 'Bearer') {
        switch (type) {
            case 'Bearer':
                this._options.headers = { ...this._options.headers, ...{ Authorization: `Bearer ${token}` } };
                break;
            case 'Basic':
                this._options.headers = { ...this._options.headers, ...{ Authorization: `Basic ${token}` } };
                break;
            default:
                this._options.headers = { ...this._options.headers, ...{ Authorization: `Bearer ${token}` } };
        }
        return this;
    }

    public headers(headers: AxiosRequestHeaders, isNew = false): this {
        this._options.headers = isNew ? headers : { ...this._options.headers, ...headers };
        return this;
    }

    public params(params: Record<any, any> | URLSearchParams): this {
        this._options.params = params;
        return this;
    }

    public async send<T = unknown>(): Promise<Response<T>> {
        const request = await axios(this._options);
        return new Response<T>(request);
    }
}
