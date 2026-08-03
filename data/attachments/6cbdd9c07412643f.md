# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: setup/auth.setup.ts >> authenticate
- Location: tests/setup/auth.setup.ts:8:6

# Error details

```
Error: page.goto: net::ERR_CERT_DATE_INVALID at https://opencart.abstracta.us/index.php?route=account/register
Call log:
  - navigating to "https://opencart.abstracta.us/index.php?route=account/register", waiting until "domcontentloaded"

```

# Test source

```ts
  1  | import { Page } from '@playwright/test';
  2  | 
  3  | export class BasePage {
  4  |   protected readonly page: Page;
  5  | 
  6  |   constructor(page: Page) {
  7  |     this.page = page;
  8  |   }
  9  | 
  10 |   async goto(path: string): Promise<void> {
> 11 |     await this.page.goto(path, { waitUntil: 'domcontentloaded' });
     |                     ^ Error: page.goto: net::ERR_CERT_DATE_INVALID at https://opencart.abstracta.us/index.php?route=account/register
  12 |   }
  13 | }
  14 | 
```