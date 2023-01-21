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

  it('Verifica se a busca por ID retorna um produto', async function () {
    sinon.stub(productsModel, 'getById').resolves(products[0]);
    const product = await productsServices.getById(1);

    expect(product.type).to.be.deep.equal(null);
    expect(product.message).to.be.deep.equal(products[0]);
  });
    afterEach(function () {
      sinon.restore();
    });
})

describe('Testa funções de manipulações, camada Service.', function () {
  it('Verifica se é possível inserir um novo produto', async function () {
    sinon.stub(productsModel, 'insertProduct').resolves(10);
    sinon.stub(productsModel, 'getById').resolves({ id: 10, name: "New Product" });
    const newProduct = await productsServices.insertProduct('New Product');

    expect(newProduct.message).to.be.deep.equal({ id: 10, name: "New Product" });
  });

  it('Verifica se é possível deletar um produto', async function () {
    sinon.stub(productsModel, 'deleteProduct').resolves(2);
    
    await productsServices.deleteProduct(2);
    
    const products = await productsServices.getAll();

    expect(products.message).not.include({ id: 2, name: "Traje de encolhimento" });
  });
  afterEach(function () {
    sinon.restore();
  });
})