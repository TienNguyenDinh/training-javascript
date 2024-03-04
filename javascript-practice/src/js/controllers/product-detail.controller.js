import { getElementById } from '../utils/dom';
import findRoute from '../utils/findRoute';
import Toast from '../utils/toastify';

export default class ProductDetailController {
  constructor(view, services) {
    this.view = view;
    this.productService = services.productService;
    this.cartService = services.cartService;

    this.displayProductDetail();
  }

  /**
   * Fetches product by id from the server and displays them
   */
  async displayProductDetail() {
    const { params } = findRoute(window.location.pathname);

    const product = await this.productService.getById(params.id);

    this.view.renderProduct(product);

    this.bindAddCartBtnEvent();
  }

  /**
   * Binds events to handle add product to cart
   */
  bindAddCartBtnEvent() {
    const addCartItemBtnElement = getElementById('btn-add-cart');

    addCartItemBtnElement.addEventListener('click', async () => {
      const id = getElementById('product-id').value;

      const product = await this.productService.getById(id);
      const { name, colors, price, imgUrl, amount: productAmount } = product;

      const existingCartItem = await this.cartService.getByProductId(id);

      const { cartItemAmount } = existingCartItem ? existingCartItem : {};


      if(productAmount <= 0) {
        return Toast.error('The product is running out of stock');
      }

      // Needs to implement edit cart item first to expand this
      // Update item amount if user already add it to cart
      if(existingCartItem) {
        // Will remove this when edit cart functionality has been added
        return Toast.error('The item is already been added to your cart');
      }

      const cartItem = {
        name,
        productId: id,
        color: colors[0].name,
        price,
        amount: 1,
        imgUrl
      }

      await this.cartService.add(cartItem);
    });
  }
}
