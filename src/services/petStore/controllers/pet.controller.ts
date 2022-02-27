import { PetStoreBaseController } from '@services/petStore/controllers/petStore.base.controller';
import { PET_STORE_CONTROLLER_URL } from '@data/controllers';

export class PetController extends PetStoreBaseController {
    constructor(serviceUrl: string) {
        super(`${serviceUrl}${PET_STORE_CONTROLLER_URL.PET}`);
    }

    public async createPet(body: object) {
        await this.request().body(body).send();
    }
}
