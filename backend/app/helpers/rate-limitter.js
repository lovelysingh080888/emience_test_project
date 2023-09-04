const rateLimit = require('express-rate-limit')

const authLimiter = rateLimit({
	windowMs: 5 * 60 * 1000, // 5 minutes
	max: 25, // Limit each IP to 25 requests in per 5 minutes
	message:{
        code: 429,
        message:"Too many requests"
    }
})

const commonLimiter = rateLimit({
	windowMs: 5 * 60 * 1000,
	max: 100, 
	message:{
        code: 429,
        message:"Too many requests"
    }
})
module.exports = {
    authLimiter,
    commonLimiter
};