
const prod = process.env.NODE_ENV === 'production';

module.exports = {
    'process.env.BASE_URL': prod ? 'https://velkonedev.herokuapp.com' : 'http://localhost:3000',
    'process.env.NAMESPACE': 'https://velkonedev.herokuapp.com',
    'process.env.CLIENT_ID': '0o1i07zIWK6E8axwxzW8LzLfdRBDFSLz'
};
