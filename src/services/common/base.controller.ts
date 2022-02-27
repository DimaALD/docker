import { Request } from '@http/axios';

export class BaseController {
    protected request: () => Request;
    constructor(url: string) {
        this.request = () => {
            return new Request(url);
        };
    }
}
