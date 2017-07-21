//      /server/app.js

//      Imports
import createServer from './server';
import mongoose from 'mongoose'; mongoose.promise = global.Promise;



//      Instantiate Servers 
const server = createServer('dev');
const db = mongoose.connect('mongodb://127.0.0.1:27017/barbaric-dev', {
    useMongoClient: true
});



//      Run REST Server
server.listen(8080, 'localhost', (err) => {
    if (err) {
        throw new Error('Server failed to start.');
    }

    server.log.info(`${server.name} is listening at ${server.url}`);
});



//      Run MongoDB
mongoose.connection.once('open', () => {
    server.log.info('Connected to MongoDB');
}).on('error', (err) => {
    server.log.warn('MongoDB Connection Error: ', err);
})
