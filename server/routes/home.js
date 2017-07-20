//      /server/routes/home.js

//      Imports
import path from 'path';
import restify from 'restify';
import rr from 'restify-router';



//      Home Router
const router = new rr.Router();

router.get('/', (req, res, next) => {
    req.log.info('Home Route reached.');
    return next();
}, restify.plugins.serveStatic({
    directory: __dirname + '/../static',
    file: 'index.html',
}));


export default router;
