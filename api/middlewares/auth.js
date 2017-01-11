import _ from 'lodash';
import config from 'config';

module.exports = function(req, res, next) {
    if (req.method === 'OPTIONS') {
        return next();
    }
    let t = req.get('Authorization');
    const unauthorization = config.get('unauthorization');
    if (_.indexOf(unauthorization, req.url) < 0) {
        if (t === undefined) {
            console.log('Access Denied', req.url);
            return res.status(401).send(JSON.stringify({ error: true, msg: 'Unauthorized'}));
        }
        t = t.replace('Bearer ', '');
        if (t === 'VRzbFf32mIO3Vy49elEnC5XiZrQ8Gq+8kD2WEeQv2N0x1E2760CaZZZn6yp9RDFiyLiLfyoWRcQTSCBFn0UWXg=='){
            return next();
        } else {
            console.log('Access Denied', req.url);
            return res.status(401).send(JSON.stringify({ error: true, msg: 'Unauthorized'}));
        }
    } else {
        return next();
    }
};