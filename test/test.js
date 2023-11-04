const chai = require('chai')
const chaiHttp = require('chai-http')
const should = chai.should()
const router = require('../api/router')
chai.use(chaiHttp)

describe('Check health', () => {
    it('should return 200 status code on /check-health', (done) => {
        chai.request(router)
        .get('/check-health')
        .end((err, res) => {
            res.should.have.status(200)
            done()
        })
    })
})
