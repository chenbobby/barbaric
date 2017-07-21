//      /tests/test.server.js

//      Imports
import mongoose from 'mongoose'; mongoose.promise = global.Promise;
import createServer from '../server'



//      Create Test Environment
const server = createServer('Barbaric Test');
const db = mongoose.connect('mongodb://127.0.0.1:27017/barbaric-test', {
    useMongoClient: true
});



//      Start server before running tests
before((done) => {


    //  Start Server
    server.listen(8081, 'localhost', (err) => {
        if (err) throw new Error('Server failed to start.');
        server.log.info(`${server.name} Server started.`)
    })


    //  Configure Mongoose
    db.once('open', () => {
    }).on('error', (err) => {
        server.log.warn('MongoDB Connection Error: ', err);
    })


    done();
});


//      Stop server after running tests
after((done) => {

    //server.close()
    db.close();

    done();
});
