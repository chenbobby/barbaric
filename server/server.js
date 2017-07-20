//      /server/server.js

//      Imports
import restify from 'restify';
import log from './log.js';
import middleware from './middleware';
import router from './routes'



//      Server Factory
export default function createServer(name) {

    const server = restify.createServer({
        name: name,
        log: log
    });


    //  Pre-Routing Middleware
    server.pre((req, res, next) => {
        log.info('Request recieved...');
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
