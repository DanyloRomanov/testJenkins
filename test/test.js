const chai = require('chai');
const rp = require('request-promise');
const chaiHttp = require('chai-http');
const assert = require('assert');
const expect = require('chai').expect;
const chaiJson = require('../Helpers/JsonChai');
const requestBuilder = require('../Helpers/requestBuilder.js');

chai.use(chaiHttp);

describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});

describe('Simple Api', function () {
    it('Simple request get chai-http', async function () {
        let temp = await chai.request('https://reqres.in')
            .get('/api/users?page=2');
        assert.equal(temp.status, 200);
    });

    it('Simple request get request promise', async function () {
        let options = {
            method: 'GET',
            uri: 'https://reqres.in/api/users?page=2',
            resolveWithFullResponse: true,
            json: true
        };
        let temp = await rp(options);
        assert.equal(temp.statusCode, 200);
    });

    it('Simple request get request promise', async function () {
        let temp = await new requestBuilder()
            .setUri('https://reqres.in/api/users?page=2')
            .setRequestType('GET')
            .resolveWithFullResponse(true)
            .executeRequest();
        assert.equal(temp.statusCode, 200);
    });

    it('Simple request post success chai-http', async function () {
        let temp = await chai.request('https://reqres.in')
            .post('/api/login')
            .send({
                "email": "peter@klaven",
                "password": "cityslicka"
            });
        assert.equal(temp.status, 200);           
        assert.equal(temp.body.token, 'QpwL5tke4Pnpja7X');
    });

    it('Simple request post success request promise', async function () {
        let options = {
            method: 'POST',
            uri: 'https://reqres.in/api/login',
            resolveWithFullResponse: true,
            json: true,
            body: {
                "email": "peter@klaven",
                "password": "cityslicka"
            }
        };
        let temp = await rp(options);
        assert.equal(temp.statusCode, 200);
        assert.equal(temp.body.token, 'QpwL5tke4Pnpja7X');
    });

    it('Simple request post fail chai-http', async function () {
        let temp = await chai.request('https://reqres.in')
            .post('/api/login')
            .send({
                "email": "peter@klaven"
            });
        assert.equal(temp.status, 400);
    });

    it('Simple request post fail request promise', function () {
        let options = {
            method: 'POST',
            uri: 'https://reqres.in/api/login',
            resolveWithFullResponse: true,
            json: true,
            body: {
                "email": "peter@klaven"
            }
        };
        rp(options).then(function (body) {

        })
            .catch(function (err) {
                assert.equal(err.statusCode, 400);
            });

    });

    it('Simple request put success chai-http', async function () {
        let temp = await chai.request('https://reqres.in')
            .put('/api/users/2')
            .send({
                "name": "morpheus",
                "job": "zion resident"
            });
        assert.equal(temp.status, 200);
        assert.equal(temp.body.name, 'morpheus');
    });

    it('Simple request put success request promise', async function () {
        let options = {
            method: 'PUT',
            uri: 'https://reqres.in/api/users/2',
            resolveWithFullResponse: true,
            json: true,
            body: {
                "name": "morpheus",
                "job": "zion resident"
            }
        };
        let temp = await rp(options);
        assert.equal(temp.statusCode, 200);
        assert.equal(temp.body.name, 'morpheus');
    });

    it('Simple request delete success chai-http', async function () {
        let temp = await chai.request('https://reqres.in')
            .delete('/api/users/2');
        assert.equal(temp.status, 204);
    });

    it('Simple request delete success request promise', async function () {
        let options = {
            method: 'DELETE',
            uri: 'https://reqres.in/api/users/2',
            resolveWithFullResponse: true,
            json: true
        };
        let temp = await rp(options);
        assert.equal(temp.statusCode, 204);
    });
});