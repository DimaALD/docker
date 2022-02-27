import { PetStoreService } from './petStore';
import { config } from '@config/env.conf';

class Services {
    public service(name: string) {
        switch (name) {
            case 'petStore':
                return new PetStoreService(config!.services.petStore!.baseURL);
            default:
                throw new Error(``);
        }
    }
}

export const services = new Services();
