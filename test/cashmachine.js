var assert = require('assert');
var chai   = require('chai');
var chaiHttp = require('chai-http');
var expect = require('chai').expect;
var should = require('chai').should();
chai.use(chaiHttp);
require('dotenv').config();

const API_URL = process.env.API_URL //'http://localhost:8000'; 

describe('Test cases for Available notes', function (){
	it('Test case for valid amount expecting multiple notes', function(done){
		const params = {
			"amount": 80
		}
		chai.request(API_URL)
			.post('/withdraw')
			.send(params)
			.end(function(err, resp){
				expect(err).to.be.null;
				expect(resp).to.have.status(200);
				expect(resp.body).to.property('notes');
				expect(resp.body).to.deep.include({notes: ['10','20', '50']});
				done();
			})
	})
	it('Test case for valid amount expecting single note', function(done){
		const params = {
			"amount": 100
		}
		chai.request(API_URL)
			.post('/withdraw')
			.send(params)
			.end(function(err, resp){
				expect(err).to.be.null;
				expect(resp).to.have.status(200);
				expect(resp.body).to.property('notes');
				expect(resp.body).to.deep.include({notes: ['100']});
				done();
			})
	})
	it('Test case for empty value', function(done){
		const params = {}
		chai.request(API_URL)
			.post('/withdraw')
			.send(params)
			.end(function(err, resp){
				expect(err).to.be.null;
				expect(resp).to.have.status(200);
				expect(resp.body).to.property('notes');
				expect(resp.body).to.deep.include({notes: []});
				done();
			})
	})
	it('Test case for note unavailable', function(done){
		const params = {
			"amount": 85
		}
		chai.request(API_URL)
			.post('/withdraw')
			.send(params)
			.end(function(err, resp){
				expect(err).to.be.null;
				expect(resp).to.have.status(404);
				expect(resp.body).to.property('error');
				expect(resp.body).to.deep.include({error: 'Note not available'});
				done();
			})
	})
	it('Test case for Invalid amount', function(done){
		const params = {
			"amount": -80
		}
		chai.request(API_URL)
			.post('/withdraw')
			.send(params)
			.end(function(err, resp){
				expect(err).to.be.null;
				expect(resp).to.have.status(400);
				expect(resp.body).to.property('error');
				expect(resp.body).to.include({error: 'Invalid Amount'});
				done();
			})
	})
})