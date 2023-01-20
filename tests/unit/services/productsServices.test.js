const { expect } = require('chai');

const sinon = require('sinon');

const productsServices = require('../../../src/services/products.service');
const productsModel = require('../../../src/models/products.model');

const { products } = require('../mocks/products.mock');


describe('Testa funções de busca de produtos, camada Service.', function () {
  it ('Verifica se todos os produtos do banco de dados são retornados', async function () {
    sinon.stub(productsModel, 'getAll').resolves(products);
    const allProducts = await productsServices.getAll();

    expect(allProducts.type).to.be.deep.equal(null);
    expect(allProducts.message).to.be.deep.equal(products);
  });
    afterEach(function () {
      sinon.restore();
    });
})