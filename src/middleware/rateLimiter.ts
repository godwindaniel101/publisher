import rateLimit from 'express-rate-limit';
const apiRateLimit = 15 as number;
const loginRateLimit = 20 as number;

export const app = rateLimit({
    max: apiRateLimit || 500, //limits to 100 request in 15min seconds
    windowMs: 15 * 60 * 1000,
    //15 minutes
    message: 'Too many Request from this Ip, Just to be safe, Try Again After 10min'
});

export const login = rateLimit({
    max: loginRateLimit || 20, //limits to 20 request in 30 seconds
    windowMs: 0.5 * 60 * 1000,
    //20 seconds
    message: `too many login attempt try after 20 seconds`
});
