//      /server/server.js

//      Imports
import restify from 'restify';
import mongoose from 'mongoose'; mongoose.promise = global.Promise;

import log from './log.js';
import middleware from './middleware';
import router from './routes'



//      Server Factory
export default function createServer(env) {


    //  Create Server Instance
    let server;
    
    switch (env) {
        case 'dev':
            server = restify.createServer({
                name: 'Barbaric Dev',
                log: log
            });
            break;

        case 'test':
            server = restify.createServer({
                name: 'Barbaric Test'
            });
            break;

        case 'prod':
            server = restify.createServer({
                name: 'Barbaric Prod'
            })
            break;

        default:
            throw new Error('Invalid Server Environment');
    }


    //  Pre-Routing Middleware
    server.pre((req, res, next) => {
        server.log.info('Request recieved...');
        return next();
    });


    //  Restify Bundle Middleware
    server.use(restify.plugins.requestLogger());


    //  Custom Middleware: All routes
    server.use(middleware.example);


    //  Add routes
    router.applyRoutes(server);
    

    return server;
};
