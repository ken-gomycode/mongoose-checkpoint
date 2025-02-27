import dotenv from 'dotenv';
dotenv.config();

const config = {
    MONGODB_URL: process.env.MONGODB_URL || '',
    PORT: process.env.PORT || 3090,
}

export default config;