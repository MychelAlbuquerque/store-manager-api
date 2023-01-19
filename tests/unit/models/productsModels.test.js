const { expect } = require('chai');

const sinon = require('sinon');

const productsModel = require('../../../src/models/products.model');
const connection = require('../../../src/models/connection');

const { products } = require('../mocks/products.mock');


describe('Testa funções de busca de produtos, camada Model.', function () {
  if ('Verificar se todos os produtos do banco de dados são retornados', async function () {
    sinon.stub(connection, 'execute').resolves([products]);
    const allProducts = await productsModel.getAll();

    expect(allProducts).to.be.equal(products);
  });
    afterEach(function () {
      sinon.restore();
    });
})