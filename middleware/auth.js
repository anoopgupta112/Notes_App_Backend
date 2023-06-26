const jwt = require('jsonwebtoken');
const config = require('../config/config.js');

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.validateToken = (req, res, next) => {
    var token = req.headers['x-access-token'];
    if (!token)
        return res.status(403).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, config.JwtTokenSecret, function (err, decoded) {
        if (err)
            return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

        console.log(decoded);
        next();
    });
};

/**
 * 
 * @param {*} payload
 */
exports.generateToken = (payload) => {
    console.log('token: ', payload);
    return jwt.sign(
        payload,
        config.JwtTokenSecret,
        {
            expiresIn: config.JwtTokenTime // expires in 24 hours
        }
    );
};