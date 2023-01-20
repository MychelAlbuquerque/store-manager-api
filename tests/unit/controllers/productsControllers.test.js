const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { expect } = require('chai');
chai.use(sinonChai);

const productsControllers = require('../../../src/controllers/products.controller');
const productsServices = require('../../../src/services/products.service');

const { products } = require('../mocks/products.mock');

describe('Testa funções de busca de produtos, camada Controller.', function () {
  it ('Verifica se todos os produtos do banco de dados são retornados', async function () {
    const res = {};
    const req = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsServices, 'getAll').resolves({ type: null, message: products });

    await productsControllers.getAll(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(products);
  });
  afterEach(function () {
    sinon.restore();
  });
})