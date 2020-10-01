// Import the dependencies for testing
var chai = require('chai')
var chaiHttp = require('chai-http')
var app = require('../server')
// Configure chai
chai.use(chaiHttp);
chai.should();
describe("Test API", () => {
    describe("GET /api", () => {
        // Test to get all students record
        it("should get information about the host", (done) => {
             chai.request(app)
                 .get('/api')
                 .end((err, res) => {
                     res.should.have.status(200);
                     //res.should.have.status(333);
                     res.body.should.be.a('array');
                     done();
                  });
         });
         it("should get error in /error", (done) => {
            chai.request(app)
                .get('/error')
                .end((err, res) => {
                    res.should.have.status(500);
                    //res.should.have.status(333);
                    done();
                 });
        });
    });
});
