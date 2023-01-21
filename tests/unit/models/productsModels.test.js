const { expect } = require('chai');

const sinon = require('sinon');

const productsModel = require('../../../src/models/products.model');
const connection = require('../../../src/models/connection');

const { products, product } = require('../mocks/products.mock');


describe('Testa funções de busca de produtos, camada Model.', function () {
  it ('Verifica se todos os produtos do banco de dados são retornados', async function () {
    sinon.stub(connection, 'execute').resolves([products]);
    const allProducts = await productsModel.getAll();

    expect(allProducts).to.be.equal(products);
  });

  it ('Verifica se a busca por ID retorna um produto', async function () {
    sinon.stub(connection, 'execute').resolves([[products][0]]);
    const product = await productsModel.getById(1);

    expect(product).to.be.equal(products[0]);
  });
    afterEach(function () {
      sinon.restore();
    });
})

describe('Testa funções de manipulações, camada Model.', function () {
  it('Verifica se é possível inserir um novo produto', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 10 }]);
    const newProduct = await productsModel.insertProduct(product);

    expect(newProduct).to.be.equal(10);
  });

  it('Verifica se é possível deletar um produto', async function () {
    sinon.stub(connection, 'execute').resolves([2]);
    await productsModel.deleteProduct(2);

    const products = await productsModel.getAll();

    expect(products).not.include({ id: 2, name: "Traje de encolhimento" });
  });
    afterEach(function () {
      sinon.restore();
    });
})