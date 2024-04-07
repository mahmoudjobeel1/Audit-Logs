const dev = {
    BACKEND_HOST: 'http://localhost:5000',
};

const prod = {
    BACKEND_HOST: 'https://audit-logs-backend.onrender.com',
};

const config = process.env.NODE_ENV === 'development' ? dev : prod;

export default config;