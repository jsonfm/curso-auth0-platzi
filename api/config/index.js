require('dotenv').config();

const config = {
    AUTH_JWT_SECRET: process.env.AUTH_JWT_SECRET,
    PORT: process.env.PORT || 5000,
}

module.exports = {
    config
}

console.log(`config: ${config.AUTH_JWT_SECRET}`)