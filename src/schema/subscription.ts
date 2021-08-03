import { object, string } from 'yup';
export const create = object({
    body: object({
        url: string().required('Url is required').url('invalid url'),
    }),
    params: object({
        topic: string().required('Topic is required')
    }),
});

