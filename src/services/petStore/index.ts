import { PetController } from '@services/petStore/controllers/pet.controller';
import { BaseController } from '@services/common/base.controller';
import { StoreController } from '@services/petStore/controllers/store.controller';

export class PetStoreService {
    constructor(public serviceUrl: string) {}

    public controller(name: 'store'): StoreController;
    public controller(name: 'pet'): PetController;
    public controller(name: string): BaseController {
        switch (name) {
            case 'pet':
                return new PetController(this.serviceUrl);
            case 'store':
                return new StoreController(this.serviceUrl);
            default:
                throw new Error(``);
        }
    }
}
