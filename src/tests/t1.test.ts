import { services } from '@services/index';

const service = services.service('petStore');

describe('test1', () => {
    test('test', async () => {
        const response = await service.controller('store').getInventory();
        expect(response.statusCode).toEqual(200);
    });
});
