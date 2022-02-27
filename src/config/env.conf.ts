import 'dotenv/config';

interface IEnvConfParams {
    server: string;
    services: {
        [k in string]: {
            baseURL: string;
        };
    };
}

export const ENV_CONFIG: { [k in string]: IEnvConfParams } = {
    dev1: {
        server: 'dev1',
        services: {
            petStore: {
                baseURL: 'https://petstore.swagger.io',
            },
        },
    },
};

export const config = process.env.SERVER! in ENV_CONFIG ? ENV_CONFIG[process.env.SERVER!] : ENV_CONFIG['dev1'];
