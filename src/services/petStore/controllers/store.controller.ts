import { PetStoreBaseController } from '@services/petStore/controllers/petStore.base.controller';
import { PET_STORE_CONTROLLER_URL } from '@data/controllers';

export class StoreController extends PetStoreBaseController {
    constructor(serviceUrl: string) {
        super(`${serviceUrl}${PET_STORE_CONTROLLER_URL.STORE}`);
    }

    public async getInventory() {
        return await this.request().method('GET').url('/inventory').send();
    }
}
