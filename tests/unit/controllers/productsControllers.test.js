const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { expect } = require('chai');

const productsControllers = require('../../../src/controllers/products.controller');

const { products } = require('../mocks/products.mock');


describe('Testa funções de busca de produtos, camada Controller.', function () {
  if ('Verificar se todos os produtos do banco de dados são retornados', async function () {
    sinon.stub(connection, 'execute').resolves([allProducts]);
    const allProducts = await productsControllers.getAll();

    expect(allProducts).to.be.equal(products);
  });
  afterEach(function () {
    sinon.restore();
  });
})