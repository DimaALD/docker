import { AxiosError, AxiosResponseHeaders } from 'axios';

export class Response<T> {
    constructor(private readonly response: any) {}

    public get body(): T | AxiosError {
        if ('data' in this.response) {
            return this.response.data as T;
        }
        return this.response.response as AxiosError;
    }

    public get statusCode(): string {
        return this.response.status;
    }

    public get statusText(): string {
        return this.response.statusText;
    }

    public headers(): AxiosResponseHeaders {
        return this.response.headers as AxiosResponseHeaders;
    }

    public error(): AxiosError {
        if (this.response?.code && this.response?.response) {
            return this.response;
        } else {
            throw new Error(
                `Expect to receive an error in response, but no error. Response ${JSON.stringify(this.response)}`,
            );
        }
    }
}
