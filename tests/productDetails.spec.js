const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toEqual('function');
    // Teste se o retorno da função é um array.
    expect(Array.isArray(productDetails())).toBe(true);
    // expect(Object.prototype.toString.call(productDetails())).toBe('[object Array]');
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails()).toHaveLength(2)
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(typeof productDetails()[0]).toBe('object');
    expect(typeof productDetails()[1]).toBe('object');
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(productDetails('gel', 'detergente')[0]).not.toMatchObject(productDetails('gel', 'detergente')[1]);
    // Teste se os dois productIds terminam com 123.
    expect(productDetails()[0].details.productId).toMatch(/123/i);
    expect(productDetails()[1].details.productId).toMatch(/123/i);
  });
});

// Referência: método Array.isArray e ObjectArray
// link: https://stackoverflow.com/questions/12996871/why-does-typeof-array-with-objects-return-object-and-not-array
// Referência: regexp with toMatch
// link: https://stackoverflow.com/questions/57970044/check-if-a-string-contains-abc-or-cde-with-jest