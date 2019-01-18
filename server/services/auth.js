const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const config = require('../config');
const NAMESPACE = config.NAMESPACE;

// MIDDLEWARE
exports.checkJWT = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 50,
        jwksUri: 'https://velko.eu.auth0.com/.well-known/jwks.json'
    }),
    audience: '0o1i07zIWK6E8axwxzW8LzLfdRBDFSLz',
    issuer: 'https://velko.eu.auth0.com/',
    algorithms: ['RS256']
});


exports.checkRole = role => (req, res, next) => {
    const user = req.user;

    if (user && user[process.env.NAMESPACE + '/role'] && (user[process.env.NAMESPACE + '/role'] === role)) {
        next();
    } else {
        return res.status(401).send({title: 'Not Authorized', detail: 'You are not authorized to access this data'})
    }
};