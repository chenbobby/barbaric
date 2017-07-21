//      /tests/test.home.js

//      Imports
import assert from 'assert';
import chai from 'chai';
import chaiHttp from 'chai-http';
import { server } from './test.server.js';

chai.use(chaiHttp);
let testClient = chai.request(server);


describe('Home Route', (done) => {

    it('successfully serves html', function() {
        testClient.get('/')
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.header('content-type', 'text/html');
                expect(res).to.have.status(200);

                done();
            });
    });
    
});
