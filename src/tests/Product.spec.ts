import Product from '@models/Product'

test('Verificar se o produto está ok', () => {
  const product = new Product()
  product.name = 'JoaoEduardo'

  expect(product.name).toEqual('JoaoEduardo')
})
