import { getElementById, getElementValueById } from '../utils/dom';
import findRoute from '../utils/findRoute';
import Toast from '../utils/toastify';

export default class ProductDetailController {
  constructor(view, services) {
    this.view = view;
    this.productService = services.productService;
    this.cartService = services.cartService;
  }

  /**
   * Calling displaying product-detail page
   */
  async init() {
    await this.displayProductDetail();
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
      const productId = getElementValueById('product-id');

      const product = await this.productService.getById(productId);
      const { name, colors, price, imgUrl, amount: productAmount } = product || {};

      const cartItem = await this.cartService.getByProductId(productId);
      const { id: cartItemId, amount: cartItemAmount } = cartItem || {};

      if (productAmount <= 0) {
        return Toast.error('The product is running out of stock');
      }

      // Update item amount if user already add it to cart
      if (cartItem) {
        if (cartItemAmount >= productAmount) {
          return Toast.error('You cannot add more items!');
        }

        cartItem.amount += 1;
        const { isSuccess } = await this.cartService.editById(cartItemId, cartItem);

        if (!isSuccess) {
          return Toast.error('The item is not updated!');
        }

        return Toast.success('You\'ve bought one more of this item!');
      }

      const newCartItem = {
        name,
        productId,
        color: colors[0].name,
        price,
        amount: 1,
        imgUrl
      }

      const { isSuccess } = await this.cartService.add(newCartItem);

      if (!isSuccess) {
        return Toast.error('This item can\'t be added right now!');
      }

      Toast.success('The item is added to your cart!');
    });
  }
}
