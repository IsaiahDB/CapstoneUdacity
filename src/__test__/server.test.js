

const app = require('../server/index')
const supertest = require('supertest')
const request = supertest(app)

describe('Endpoint testing', () => {
    it('test endpoint to server', function(done) {
        request
            .get('/serverconnected')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(JSON.stringify({
                name: 'isaiah',
                appName: 'travelappcapstone',
                grader: 'udacity',
                server: 'connected'
                 }))
            .expect(200, done);
    });
});