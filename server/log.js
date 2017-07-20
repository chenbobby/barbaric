//      log.js

//      Imports
import bunyan from 'bunyan';


//      Logger Instance
const log = bunyan.createLogger({
    name: 'BarbaricLog',
    stream: process.stdout,
    level: 'info'
});


export default log;
