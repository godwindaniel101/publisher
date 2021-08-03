import { object, string } from 'yup';
export const create = object({
    body: object({
        key: object().required('key is required'),
    }),
    params: object({
        topic: string().required('Topic is required')
    }),
});

