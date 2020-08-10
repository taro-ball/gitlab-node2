import { expect } from 'chai';
import request from 'request';

it('Main page content', function(done) {
    request('http://localhost:3000' , function(error, response, body) {
        expect(body).to.include('Hello World');
        done();
    });
});

