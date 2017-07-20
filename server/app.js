//      /server/index.js

//      Imports
import createServer from './server.js';
import log from './log.js';



//      Constants
const PORT = 8080;
const server = createServer('Bararic App');



//      Run Server
server.listen(PORT, 'localhost', (err) => {
    if (err) {
        log.warn('Server failed to start: ', err);
    }

    log.info(`${server.name} is listening at ${server.url}`);
});
