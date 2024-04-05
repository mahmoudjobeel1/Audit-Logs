const dev = {
    BACKEND_HOST: 'http://localhost:5000',
};

const prod = {
    BACKEND_HOST: '',
};

const config = process.env.NODE_ENV === 'development' ? dev : prod;

export default config;