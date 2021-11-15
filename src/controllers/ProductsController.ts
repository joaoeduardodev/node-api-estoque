import Product from '@models/Product'

export default class ProductsController {
  principal () {
    const product = new Product()
    return product
  }
}
