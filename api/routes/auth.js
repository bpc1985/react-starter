import Express from 'express';
import wrap from 'express-async-wrap'; // can use async, await
import crypto from 'crypto';

const Router = new Express.Router();

export default [
  Router.post('/api/auth', wrap(async function(req, res) {
    var username = req.body.username;
    var password = req.body.password;

    const generateToken = function () {
        crypto.randomBytes(64, function(ex, buf) {
            // var token = buf.toString('base64');
            const token = 'VRzbFf32mIO3Vy49elEnC5XiZrQ8Gq+8kD2WEeQv2N0x1E2760CaZZZn6yp9RDFiyLiLfyoWRcQTSCBFn0UWXg==';
            return res.send({ token: token });
        });
    };

    if (username === 'admin' && password === '123') {
      return generateToken();
    } else {
      res.status(401).send({ error: true, msg: 'Login failure'});
    }
  })),
  Router.post('/api/logout', wrap(async function(req, res) {
    let token = req.get('Authorization') || '';
    token = token.replace('Bearer ', '');
    if (token === 'VRzbFf32mIO3Vy49elEnC5XiZrQ8Gq+8kD2WEeQv2N0x1E2760CaZZZn6yp9RDFiyLiLfyoWRcQTSCBFn0UWXg==') {
      return res.send({ error: false, msg: 'Logout success' });;
    } else {
      res.status(401).send({ error: true, msg: 'Logout failure'});
    }
  })),
];
