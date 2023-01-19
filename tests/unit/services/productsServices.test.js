const { expect } = require('chai');

const sinon = require('sinon');

const productsServices = require('../../../src/services/products.service');

const { products } = require('../mocks/products.mock');


describe('Testa funções de busca de produtos, camada Service.', function () {
  if ('Verificar se todos os produtos do banco de dados são retornados', async function () {
    sinon.stub(productsServices, 'getAll').resolves(products);
    const allProducts = await productsServices.getAll();

    expect(products.type).to.be.equal(null);
    expect(products.message).to.be.deep.equal(allProducts);
  });
    afterEach(function () {
      sinon.restore();
    });
})