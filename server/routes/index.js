//      /server/routes/index.js

//      Imports
import rr from 'restify-router';

import home from './home.js';



//      Universal Router
const router = new rr.Router();

router.add('', home);


export default router;
