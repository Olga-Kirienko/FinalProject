# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkout.e2e.multipleItems.spec.ts >> Checkout e2e >> e2e checkout flow with multiple items, Bank Transfer, no comment
- Location: tests/checkout.e2e.multipleItems.spec.ts:10:7

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.fill: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByRole('row', { name: 'Samsung SyncMaster 941BW' }).getByRole('textbox')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e3]:
      - button "$ Currency " [ref=e7] [cursor=pointer]:
        - strong [ref=e8]: $
        - text: Currency
        - generic [ref=e9]: 
      - list [ref=e11]:
        - listitem [ref=e12]:
          - link "" [ref=e13] [cursor=pointer]:
            - /url: http://opencart.abstracta.us:80/index.php?route=information/contact
            - generic [ref=e14]: 
          - text: "123456789"
        - listitem [ref=e15]:
          - link " My Account" [ref=e16] [cursor=pointer]:
            - /url: https://opencart.abstracta.us:443/index.php?route=account/account
            - generic [ref=e17]: 
            - text: My Account
        - listitem [ref=e19]:
          - link " Wish List (0)" [ref=e20] [cursor=pointer]:
            - /url: https://opencart.abstracta.us:443/index.php?route=account/wishlist
            - generic [ref=e21]: 
            - text: Wish List (0)
        - listitem [ref=e22]:
          - link " Shopping Cart" [ref=e23] [cursor=pointer]:
            - /url: http://opencart.abstracta.us:80/index.php?route=checkout/cart
            - generic [ref=e24]: 
            - text: Shopping Cart
        - listitem [ref=e25]:
          - link " Checkout" [ref=e26] [cursor=pointer]:
            - /url: https://opencart.abstracta.us:443/index.php?route=checkout/checkout
            - generic [ref=e27]: 
            - text: Checkout
  - banner [ref=e28]:
    - generic [ref=e30]:
      - heading "Your Store" [level=1] [ref=e33]:
        - link "Your Store" [ref=e34] [cursor=pointer]:
          - /url: http://opencart.abstracta.us:80/index.php?route=common/home
      - generic [ref=e36]:
        - textbox "Search" [ref=e37]
        - button "" [ref=e39] [cursor=pointer]:
          - generic [ref=e40]: 
      - generic [ref=e42]:
        - button " 3 item(s) - $486.00" [ref=e43] [cursor=pointer]:
          - generic [ref=e44]: 
          - text: 3 item(s) - $486.00
        - text:    
  - navigation [ref=e46]:
    - generic: 
    - list [ref=e48]:
      - listitem [ref=e49]:
        - link "Desktops" [ref=e50] [cursor=pointer]:
          - /url: http://opencart.abstracta.us:80/index.php?route=product/category&path=20
      - listitem [ref=e51]:
        - link "Laptops & Notebooks" [ref=e52] [cursor=pointer]:
          - /url: http://opencart.abstracta.us:80/index.php?route=product/category&path=18
      - listitem [ref=e53]:
        - link "Components" [ref=e54] [cursor=pointer]:
          - /url: http://opencart.abstracta.us:80/index.php?route=product/category&path=25
      - listitem [ref=e55]:
        - link "Tablets" [ref=e56] [cursor=pointer]:
          - /url: http://opencart.abstracta.us:80/index.php?route=product/category&path=57
      - listitem [ref=e57]:
        - link "Software" [ref=e58] [cursor=pointer]:
          - /url: http://opencart.abstracta.us:80/index.php?route=product/category&path=17
      - listitem [ref=e59]:
        - link "Phones & PDAs" [ref=e60] [cursor=pointer]:
          - /url: http://opencart.abstracta.us:80/index.php?route=product/category&path=24
      - listitem [ref=e61]:
        - link "Cameras" [ref=e62] [cursor=pointer]:
          - /url: http://opencart.abstracta.us:80/index.php?route=product/category&path=33
      - listitem [ref=e63]:
        - link "MP3 Players" [ref=e64] [cursor=pointer]:
          - /url: http://opencart.abstracta.us:80/index.php?route=product/category&path=34
  - generic [ref=e65]:
    - list [ref=e66]:
      - listitem [ref=e67]:
        - link "" [ref=e68] [cursor=pointer]:
          - /url: http://opencart.abstracta.us:80/index.php?route=common/home
          - generic [ref=e69]: 
      - listitem [ref=e70]:
        - link "Shopping Cart" [ref=e71] [cursor=pointer]:
          - /url: http://opencart.abstracta.us:80/index.php?route=checkout/cart
    - generic [ref=e73]:
      - heading "Use Gift Certificate (10.00kg)" [level=1] [ref=e74]
      - table [ref=e77]:
        - rowgroup [ref=e78]:
          - row "Image Product Name Model Quantity Unit Price Total" [ref=e79]:
            - cell "Image" [ref=e80]
            - cell "Product Name" [ref=e81]
            - cell "Model" [ref=e82]
            - cell "Quantity" [ref=e83]
            - cell "Unit Price" [ref=e84]
            - cell "Total" [ref=e85]
        - rowgroup [ref=e86]:
          - row "iMac iMac Product 14 2   $122.00 $244.00" [ref=e87]:
            - cell "iMac" [ref=e88]:
              - link "iMac" [ref=e89] [cursor=pointer]:
                - /url: http://opencart.abstracta.us:80/index.php?route=product/product&product_id=41
                - img "iMac" [ref=e90]
            - cell "iMac" [ref=e91]:
              - link "iMac" [ref=e92] [cursor=pointer]:
                - /url: http://opencart.abstracta.us:80/index.php?route=product/product&product_id=41
            - cell "Product 14" [ref=e93]
            - cell "2  " [ref=e94]:
              - generic [ref=e95]:
                - textbox [ref=e96]: "2"
                - generic [ref=e97]:
                  - button "" [ref=e98] [cursor=pointer]:
                    - generic [ref=e99]: 
                  - button "" [ref=e100] [cursor=pointer]:
                    - generic [ref=e101]: 
            - cell "$122.00" [ref=e102]
            - cell "$244.00" [ref=e103]
      - heading "What would you like to do next?" [level=2] [ref=e104]
      - paragraph [ref=e105]: Choose if you have a discount code or reward points you want to use or would like to estimate your delivery cost.
      - generic [ref=e106]:
        - heading "Use Coupon Code " [level=4] [ref=e109]:
          - link "Use Coupon Code " [ref=e110] [cursor=pointer]:
            - /url: "#collapse-coupon"
            - text: Use Coupon Code
            - generic [ref=e111]: 
        - generic [ref=e112]:
          - heading "Estimate Shipping & Taxes " [level=4] [ref=e114]:
            - link "Estimate Shipping & Taxes " [ref=e115] [cursor=pointer]:
              - /url: "#collapse-shipping"
              - text: Estimate Shipping & Taxes
              - generic [ref=e116]: 
          - text: "* * *"
        - heading "Use Gift Certificate " [level=4] [ref=e119]:
          - link "Use Gift Certificate " [ref=e120] [cursor=pointer]:
            - /url: "#collapse-voucher"
            - text: Use Gift Certificate
            - generic [ref=e121]: 
      - table [ref=e124]:
        - rowgroup [ref=e125]:
          - 'row "Sub-Total: $200.00" [ref=e126]':
            - cell "Sub-Total:" [ref=e127]:
              - strong [ref=e128]: "Sub-Total:"
            - cell "$200.00" [ref=e129]
          - 'row "Eco Tax (-2.00): $4.00" [ref=e130]':
            - cell "Eco Tax (-2.00):" [ref=e131]:
              - strong [ref=e132]: "Eco Tax (-2.00):"
            - cell "$4.00" [ref=e133]
          - 'row "VAT (20%): $40.00" [ref=e134]':
            - cell "VAT (20%):" [ref=e135]:
              - strong [ref=e136]: "VAT (20%):"
            - cell "$40.00" [ref=e137]
          - 'row "Total: $244.00" [ref=e138]':
            - cell "Total:" [ref=e139]:
              - strong [ref=e140]: "Total:"
            - cell "$244.00" [ref=e141]
      - generic [ref=e142]:
        - link "Continue Shopping" [ref=e144] [cursor=pointer]:
          - /url: http://opencart.abstracta.us:80/index.php?route=common/home
        - link "Checkout" [ref=e146] [cursor=pointer]:
          - /url: https://opencart.abstracta.us:443/index.php?route=checkout/checkout
  - contentinfo [ref=e147]:
    - generic [ref=e148]:
      - generic [ref=e149]:
        - generic [ref=e150]:
          - heading "Information" [level=5] [ref=e151]
          - list [ref=e152]:
            - listitem [ref=e153]:
              - link "About Us" [ref=e154] [cursor=pointer]:
                - /url: http://opencart.abstracta.us:80/index.php?route=information/information&information_id=4
            - listitem [ref=e155]:
              - link "Delivery Information" [ref=e156] [cursor=pointer]:
                - /url: http://opencart.abstracta.us:80/index.php?route=information/information&information_id=6
            - listitem [ref=e157]:
              - link "Privacy Policy" [ref=e158] [cursor=pointer]:
                - /url: http://opencart.abstracta.us:80/index.php?route=information/information&information_id=3
            - listitem [ref=e159]:
              - link "Terms & Conditions" [ref=e160] [cursor=pointer]:
                - /url: http://opencart.abstracta.us:80/index.php?route=information/information&information_id=5
        - generic [ref=e161]:
          - heading "Customer Service" [level=5] [ref=e162]
          - list [ref=e163]:
            - listitem [ref=e164]:
              - link "Contact Us" [ref=e165] [cursor=pointer]:
                - /url: http://opencart.abstracta.us:80/index.php?route=information/contact
            - listitem [ref=e166]:
              - link "Returns" [ref=e167] [cursor=pointer]:
                - /url: https://opencart.abstracta.us:443/index.php?route=account/return/add
            - listitem [ref=e168]:
              - link "Site Map" [ref=e169] [cursor=pointer]:
                - /url: http://opencart.abstracta.us:80/index.php?route=information/sitemap
        - generic [ref=e170]:
          - heading "Extras" [level=5] [ref=e171]
          - list [ref=e172]:
            - listitem [ref=e173]:
              - link "Brands" [ref=e174] [cursor=pointer]:
                - /url: http://opencart.abstracta.us:80/index.php?route=product/manufacturer
            - listitem [ref=e175]:
              - link "Gift Certificates" [ref=e176] [cursor=pointer]:
                - /url: https://opencart.abstracta.us:443/index.php?route=account/voucher
            - listitem [ref=e177]:
              - link "Affiliate" [ref=e178] [cursor=pointer]:
                - /url: https://opencart.abstracta.us:443/index.php?route=affiliate/login
            - listitem [ref=e179]:
              - link "Specials" [ref=e180] [cursor=pointer]:
                - /url: http://opencart.abstracta.us:80/index.php?route=product/special
        - generic [ref=e181]:
          - heading "My Account" [level=5] [ref=e182]
          - list [ref=e183]:
            - listitem [ref=e184]:
              - link "My Account" [ref=e185] [cursor=pointer]:
                - /url: https://opencart.abstracta.us:443/index.php?route=account/account
            - listitem [ref=e186]:
              - link "Order History" [ref=e187] [cursor=pointer]:
                - /url: https://opencart.abstracta.us:443/index.php?route=account/order
            - listitem [ref=e188]:
              - link "Wish List" [ref=e189] [cursor=pointer]:
                - /url: https://opencart.abstracta.us:443/index.php?route=account/wishlist
            - listitem [ref=e190]:
              - link "Newsletter" [ref=e191] [cursor=pointer]:
                - /url: https://opencart.abstracta.us:443/index.php?route=account/newsletter
      - separator [ref=e192]
      - paragraph [ref=e193]:
        - text: Powered By
        - link "OpenCart" [ref=e194] [cursor=pointer]:
          - /url: http://www.opencart.com
        - text: Your Store © 2026
  - generic [ref=e195]:
    - generic:
      - link "Bitnami":
        - /url: /bitnami/index.html
        - img "Bitnami" [ref=e196] [cursor=pointer]
```

# Test source

```ts
  1   | import { type Page, expect } from '@playwright/test';
  2   | import { CartPage } from '../pages/CartPage';
  3   | import { ProductPage } from '../pages/ProductPage';
  4   | import { CartItem } from '../types/CartItem';
  5   | import { Header } from '../components/Header';
  6   | import { CheckoutOptions } from '../types/CheckoutOptions';
  7   | import { CheckoutPage } from '../pages/CheckoutPage';
  8   | import { createRandomAddress } from '../factory/addressFactory';
  9   | import { ConfirmOrderComponent } from '../components/checkout/ConfirmOrderComponent';
  10  | 
  11  | export class PurchaseFacade {
  12  |   readonly page: Page;
  13  | 
  14  |   constructor(page: Page) {
  15  |     this.page = page;
  16  |   }
  17  | 
  18  |   async addProductsToCart(products: CartItem[]): Promise<void> {
  19  |     await this.page.route('**/addthis_widget.js', (route) => route.abort());
  20  |     const productPage = new ProductPage(this.page);
  21  |     const header = new Header(this.page);
  22  |     const cartPage = new CartPage(this.page);
  23  | 
  24  |     await this.clearCart(cartPage);
  25  | 
  26  |     for (const item of products) {
  27  |       await this.page.goto(
  28  |         `/index.php?route=product/product&product_id=${item.productId}`
  29  |       );
  30  | 
  31  |       await productPage.addToCart();
  32  |     }
  33  | 
  34  |     await header.goToCart();
  35  | 
  36  |     for (const item of products) {
  37  |       if (item.quantity > 1) {
  38  |         await cartPage
  39  |           .getQuantityInput(item.productName)
> 40  |           .fill(item.quantity.toString());
      |            ^ Error: locator.fill: Test timeout of 60000ms exceeded.
  41  |         await cartPage.getUpdateButton(item.productName).click();
  42  |       }
  43  |     }
  44  |   }
  45  | 
  46  |   private async clearCart(cartPage: CartPage): Promise<void> {
  47  |     await this.page.goto('/index.php?route=checkout/cart');
  48  | 
  49  |     this.page.on('dialog', (dialog) => dialog.accept());
  50  | 
  51  |     let removeButton = cartPage.getAnyRemoveButton();
  52  |     let safetyCounter = 0;
  53  | 
  54  |     while (
  55  |       (await removeButton.isVisible().catch(() => false)) &&
  56  |       safetyCounter < 30
  57  |     ) {
  58  |       await removeButton.click({ force: true });
  59  | 
  60  |       await expect(removeButton)
  61  |         .toBeHidden({ timeout: 10000 })
  62  |         .catch(() => {});
  63  | 
  64  |       removeButton = cartPage.getAnyRemoveButton();
  65  |       safetyCounter++;
  66  |     }
  67  |   }
  68  | 
  69  |   async proceedToConfirmOrder(
  70  |     options: CheckoutOptions
  71  |   ): Promise<ConfirmOrderComponent> {
  72  |     const checkoutPage = new CheckoutPage(this.page);
  73  |     const header = new Header(this.page);
  74  |     const address = createRandomAddress();
  75  |     const billingDetails = checkoutPage.getBillingDetails();
  76  |     const deliveryDetails = checkoutPage.getDeliveryDetails();
  77  |     const deliveryMethod = checkoutPage.getDeliveryMethod();
  78  |     const paymentMethod = checkoutPage.getPaymentMethod();
  79  |     const confirmOrder = checkoutPage.getConfirmOrder();
  80  | 
  81  |     await this.addProductsToCart(options.products);
  82  |     await header.goToCheckout();
  83  | 
  84  |     // --- Billing Details ---
  85  |     await billingDetails.selectNewAddress();
  86  |     await billingDetails.fillFirstName(address.firstName);
  87  |     await billingDetails.fillLastName(address.lastName);
  88  |     await billingDetails.fillAddress1(address.address1);
  89  |     await billingDetails.fillCity(address.city);
  90  |     await billingDetails.selectCountry(address.country);
  91  |     await billingDetails.selectRegion(address.region);
  92  | 
  93  |     const billingSavedPromise = this.page.waitForResponse(
  94  |       (response) =>
  95  |         response.url().includes('route=checkout/payment_address/save') &&
  96  |         response.status() === 200
  97  |     );
  98  |     await billingDetails.clickContinue();
  99  |     await billingSavedPromise;
  100 | 
  101 |     // --- Delivery Details ---
  102 |     await deliveryDetails.selectNewAddress();
  103 |     await deliveryDetails.fillFirstName(address.firstName);
  104 |     await deliveryDetails.fillLastName(address.lastName);
  105 |     await deliveryDetails.fillAddress1(address.address1);
  106 |     await deliveryDetails.fillCity(address.city);
  107 |     await deliveryDetails.selectCountry(address.country);
  108 |     await deliveryDetails.selectRegion(address.region);
  109 | 
  110 |     const deliverySavedPromise = this.page.waitForResponse(
  111 |       (response) =>
  112 |         response.url().includes('route=checkout/shipping_address/save') &&
  113 |         response.status() === 200
  114 |     );
  115 |     await deliveryDetails.clickContinue();
  116 |     await deliverySavedPromise;
  117 | 
  118 |     // --- Delivery Method ---
  119 |     if (options.comment) {
  120 |       await deliveryMethod.fillOrderComment(options.comment);
  121 |     }
  122 | 
  123 |     const deliveryMethodSavedPromise = this.page.waitForResponse(
  124 |       (response) =>
  125 |         response.url().includes('route=checkout/shipping_method/save') &&
  126 |         response.status() === 200
  127 |     );
  128 |     await deliveryMethod.clickContinue();
  129 |     await deliveryMethodSavedPromise;
  130 | 
  131 |     // --- Payment Method ---
  132 |     await paymentMethod.selectPaymentMethod(options.paymentMethod);
  133 |     if (options.comment) {
  134 |       await paymentMethod.fillOrderComment(options.comment);
  135 |     }
  136 |     await paymentMethod.acceptTermsAndConditions();
  137 | 
  138 |     const paymentMethodSavedPromise = this.page.waitForResponse(
  139 |       (response) =>
  140 |         response.url().includes('route=checkout/payment_method/save') &&
```