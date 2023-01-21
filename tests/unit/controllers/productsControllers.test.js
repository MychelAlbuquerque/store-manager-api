const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { expect } = require('chai');
chai.use(sinonChai);

const productsControllers = require('../../../src/controllers/products.controller');
const productsServices = require('../../../src/services/products.service');

const { products, product } = require('../mocks/products.mock');

describe('Testa funções de busca de produtos, camada Controller.', function () {
  it('Verifica se todos os produtos do banco de dados são retornados', async function () {
    const res = {};
    const req = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsServices, 'getAll').resolves({ type: null, message: products });

    await productsControllers.getAll(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(products);
  });

  it('Verifica se a busca por ID retorna um produto', async function () {
    const res = {};
    const req = { params: 1 };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsServices, 'getById').resolves({ type: null, message: products[0] });

    await productsControllers.getById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(products[0]);
  });
  afterEach(function () {
    sinon.restore();
  });
})
describe('Testa funções de manipulações, camada Controller.', function () {
  it('Verifica se é possível inserir um novo produto', async function () {
    const res = {};
    const req = { body: { name: "New Product" } };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsServices, 'insertProduct').resolves(product);

    await productsControllers.insertProduct(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(product.message);
  });

  it('Verifica se é possível deletar um produto', async function () {
    const res = {};
    const req = { params: { id: 2 } };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsServices, 'deleteProduct').resolves({ type: null });

    await productsControllers.deleteProduct(req, res);

    expect(res.status).to.have.been.calledWith(204);
    expect(res.json).to.have.been.calledWith();
  });
  afterEach(function () {
    sinon.restore();
  });
})