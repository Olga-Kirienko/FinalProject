# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkout.e2e.singleItem.spec.ts >> Checkout e2e >> e2e test with 1 item, method 'Cash On Delivery' and comment
- Location: tests/checkout.e2e.singleItem.spec.ts:10:7

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('#collapse-checkout-confirm').getByRole('button', { name: 'Confirm Order' })
    - waiting for" https://opencart.abstracta.us/index.php?route=checkout/checkout" navigation to finish...
    - navigated to "https://opencart.abstracta.us/index.php?route=checkout/checkout"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e3]:
      - button "$ " [ref=e7] [cursor=pointer]:
        - strong [ref=e8]: $
        - generic [ref=e9]: 
      - list [ref=e11]:
        - listitem [ref=e12]:
          - link "" [ref=e13]:
            - /url: http://opencart.abstracta.us:80/index.php?route=information/contact
            - generic [ref=e14]: 
        - listitem [ref=e15]:
          - link "" [ref=e16]:
            - /url: https://opencart.abstracta.us:443/index.php?route=account/account
            - generic [ref=e17]: 
        - listitem [ref=e19]:
          - link "" [ref=e20]:
            - /url: https://opencart.abstracta.us:443/index.php?route=account/wishlist
            - generic [ref=e21]: 
        - listitem [ref=e22]:
          - link "" [ref=e23]:
            - /url: http://opencart.abstracta.us:80/index.php?route=checkout/cart
            - generic [ref=e24]: 
        - listitem [ref=e25]:
          - link "" [ref=e26]:
            - /url: https://opencart.abstracta.us:443/index.php?route=checkout/checkout
            - generic [ref=e27]: 
  - banner [ref=e28]:
    - generic [ref=e30]:
      - heading "Your Store" [level=1] [ref=e33]:
        - link "Your Store" [ref=e34]:
          - /url: http://opencart.abstracta.us:80/index.php?route=common/home
      - generic [ref=e36]:
        - textbox "Search" [ref=e37]
        - button "" [ref=e39] [cursor=pointer]:
          - generic [ref=e40]: 
      - generic [ref=e42]:
        - button " 1 item(s) - $100.00" [ref=e43] [cursor=pointer]:
          - generic [ref=e44]: 
          - text: 1 item(s) - $100.00
        - text:   
  - navigation [ref=e46]:
    - generic [ref=e47]:
      - generic [ref=e48]: Categories
      - button "" [ref=e49] [cursor=pointer]:
        - generic [ref=e50]: 
  - generic [ref=e51]:
    - list [ref=e52]:
      - listitem [ref=e53]:
        - link "" [ref=e54]:
          - /url: http://opencart.abstracta.us:80/index.php?route=common/home
          - generic [ref=e55]: 
      - listitem [ref=e56]:
        - link "Shopping Cart" [ref=e57]:
          - /url: http://opencart.abstracta.us:80/index.php?route=checkout/cart
      - listitem [ref=e58]:
        - link "Checkout" [ref=e59]:
          - /url: https://opencart.abstracta.us:443/index.php?route=checkout/checkout
    - generic [ref=e61]:
      - heading "Checkout" [level=1] [ref=e62]
      - generic [ref=e63]:
        - 'heading "Step 1: Checkout Options" [level=4] [ref=e66]'
        - generic [ref=e67]:
          - 'heading "Step 2: Billing Details " [level=4] [ref=e69]':
            - 'link "Step 2: Billing Details " [expanded] [ref=e70]':
              - /url: "#collapse-payment-address"
              - text: "Step 2: Billing Details"
              - generic [ref=e71]: 
          - generic [ref=e74]:
            - generic [ref=e76] [cursor=pointer]:
              - radio "I want to use an existing address" [checked] [ref=e77]
              - text: I want to use an existing address
            - combobox [ref=e79]:
              - option "Jody Emard, 473 Gussie Streets, Ryanstad, Adana, Turkey"
              - option "Jody Emard, 473 Gussie Streets, Ryanstad, Adana, Turkey"
              - option "Carmen Rohan, 5440 Legros Corner, Lake Austenville, Adana, Turkey" [selected]
              - option "Carmen Rohan, 5440 Legros Corner, Lake Austenville, Adana, Turkey"
            - generic [ref=e81] [cursor=pointer]:
              - radio "I want to use a new address" [ref=e82]
              - text: I want to use a new address
            - text: "* * * * * *"
            - button "Continue" [ref=e85] [cursor=pointer]
        - 'heading "Step 3: Delivery Details" [level=4] [ref=e88]'
        - 'heading "Step 4: Delivery Method" [level=4] [ref=e91]'
        - 'heading "Step 5: Payment Method" [level=4] [ref=e94]'
        - 'heading "Step 6: Confirm Order" [level=4] [ref=e97]'
  - contentinfo [ref=e98]:
    - generic [ref=e99]:
      - generic [ref=e100]:
        - generic [ref=e101]:
          - heading "Information" [level=5] [ref=e102]
          - list [ref=e103]:
            - listitem [ref=e104]:
              - link "About Us" [ref=e105]:
                - /url: http://opencart.abstracta.us:80/index.php?route=information/information&information_id=4
            - listitem [ref=e106]:
              - link "Delivery Information" [ref=e107]:
                - /url: http://opencart.abstracta.us:80/index.php?route=information/information&information_id=6
            - listitem [ref=e108]:
              - link "Privacy Policy" [ref=e109]:
                - /url: http://opencart.abstracta.us:80/index.php?route=information/information&information_id=3
            - listitem [ref=e110]:
              - link "Terms & Conditions" [ref=e111]:
                - /url: http://opencart.abstracta.us:80/index.php?route=information/information&information_id=5
        - generic [ref=e112]:
          - heading "Customer Service" [level=5] [ref=e113]
          - list [ref=e114]:
            - listitem [ref=e115]:
              - link "Contact Us" [ref=e116]:
                - /url: http://opencart.abstracta.us:80/index.php?route=information/contact
            - listitem [ref=e117]:
              - link "Returns" [ref=e118]:
                - /url: https://opencart.abstracta.us:443/index.php?route=account/return/add
            - listitem [ref=e119]:
              - link "Site Map" [ref=e120]:
                - /url: http://opencart.abstracta.us:80/index.php?route=information/sitemap
        - generic [ref=e121]:
          - heading "Extras" [level=5] [ref=e122]
          - list [ref=e123]:
            - listitem [ref=e124]:
              - link "Brands" [ref=e125]:
                - /url: http://opencart.abstracta.us:80/index.php?route=product/manufacturer
            - listitem [ref=e126]:
              - link "Gift Certificates" [ref=e127]:
                - /url: https://opencart.abstracta.us:443/index.php?route=account/voucher
            - listitem [ref=e128]:
              - link "Affiliate" [ref=e129]:
                - /url: https://opencart.abstracta.us:443/index.php?route=affiliate/login
            - listitem [ref=e130]:
              - link "Specials" [ref=e131]:
                - /url: http://opencart.abstracta.us:80/index.php?route=product/special
        - generic [ref=e132]:
          - heading "My Account" [level=5] [ref=e133]
          - list [ref=e134]:
            - listitem [ref=e135]:
              - link "My Account" [ref=e136]:
                - /url: https://opencart.abstracta.us:443/index.php?route=account/account
            - listitem [ref=e137]:
              - link "Order History" [ref=e138]:
                - /url: https://opencart.abstracta.us:443/index.php?route=account/order
            - listitem [ref=e139]:
              - link "Wish List" [ref=e140]:
                - /url: https://opencart.abstracta.us:443/index.php?route=account/wishlist
            - listitem [ref=e141]:
              - link "Newsletter" [ref=e142]:
                - /url: https://opencart.abstracta.us:443/index.php?route=account/newsletter
      - separator [ref=e143]
      - paragraph [ref=e144]:
        - text: Powered By
        - link "OpenCart" [ref=e145]:
          - /url: http://www.opencart.com
        - text: Your Store © 2026
  - generic [ref=e146]:
    - generic:
      - link "Bitnami":
        - /url: /bitnami/index.html
        - img "Bitnami" [ref=e147]
```

# Test source

```ts
  1  | import { type Locator } from '@playwright/test';
  2  | import { LineItem } from '../../types/LineItem';
  3  | 
  4  | export class ConfirmOrderComponent {
  5  |   readonly section: Locator;
  6  |   readonly totalSum: Locator;
  7  |   readonly subTotalSum: Locator;
  8  |   readonly shippingValue: Locator;
  9  |   readonly productRows: Locator;
  10 |   readonly confirmOrderButton: Locator;
  11 | 
  12 |   constructor(section: Locator) {
  13 |     this.section = section;
  14 |     this.totalSum = section
  15 |       .locator('tr')
  16 |       .filter({ hasText: /^Total:/ })
  17 |       .locator('td')
  18 |       .last();
  19 |     this.subTotalSum = section
  20 |       .locator('tr')
  21 |       .filter({ hasText: 'Sub-Total:' })
  22 |       .locator('td')
  23 |       .last();
  24 |     this.shippingValue = section
  25 |       .locator('tr')
  26 |       .filter({ hasText: 'Shipping' })
  27 |       .locator('td')
  28 |       .last();
  29 |     this.productRows = section.locator('tbody tr');
  30 |     this.confirmOrderButton = this.section.getByRole('button', {
  31 |       name: 'Confirm Order',
  32 |     });
  33 |   }
  34 | 
  35 |   async getTotalSum(): Promise<string> {
  36 |     return (await this.totalSum.textContent()) ?? '';
  37 |   }
  38 | 
  39 |   async getSubTotalSum(): Promise<string> {
  40 |     return (await this.subTotalSum.textContent()) ?? '';
  41 |   }
  42 | 
  43 |   async getShippingValue(): Promise<string> {
  44 |     return (await this.shippingValue.textContent()) ?? '';
  45 |   }
  46 | 
  47 |   async getLineItems(): Promise<LineItem[]> {
  48 |     const rows = await this.productRows.all();
  49 |     const items: LineItem[] = [];
  50 | 
  51 |     for (const row of rows) {
  52 |       items.push({
  53 |         productName: (await row.locator('td').nth(0).textContent()) ?? '',
  54 |         model: (await row.locator('td').nth(1).textContent()) ?? '',
  55 |         quantity: (await row.locator('td').nth(2).textContent()) ?? '',
  56 |         unitPrice: (await row.locator('td').nth(3).textContent()) ?? '',
  57 |         total: (await row.locator('td').nth(4).textContent()) ?? '',
  58 |       });
  59 |     }
  60 |     return items;
  61 |   }
  62 | 
  63 |   async confirmOrder(): Promise<void> {
> 64 |     await this.confirmOrderButton.click();
     |                                   ^ Error: locator.click: Test timeout of 60000ms exceeded.
  65 |   }
  66 | }
  67 | 
```