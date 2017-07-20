//      /server/routes/home.js

//      Imports
import rr from 'restify-router';



//      Home Router
const router = new rr.Router();

router.get('/', (req, res, next) => {
    req.log.info('Home Route reached.');
    res.send('Hello Barbarian')
    return next();
});


export default router;
