const chai = require('chai')
const chaiHttp = require('chai-http')
const fetch = require("node-fetch"); 
const sinon = require("sinon");

const app = require('../src/server')

chai.use(chaiHttp);

const { expect } = chai

const mockApiResponse = [
  {
    id: 76,
    name: 'porro ut soluta repellendus similique',
    email: 'Gage_Turner@halle.name',
    body: 'sunt qui consequatur similique recusandae repellendus voluptates eos et vero nostrum fugit magnam aliquam'
  }
]

describe('GET /comments', () => {
  let sandbox = sinon.createSandbox();
  let mockApi = sandbox.stub(fetch, 'Promise')

  beforeEach(() => {
    sandbox.restore();
  })

  it('should return a string with html', (done) => {
    mockApi.resolves({json: () => mockApiResponse})

    chai
      .request(app)
      .get('/comments/1')
      .end((err, res) => {
        expect(res.text).to.include('<style type="text/css">')
        expect(res.text).to.include('<div class="wrapper">')

        done();
      });
  });
});