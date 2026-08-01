import { test, expect } from '@playwright/test';
import { noResultsSearchCases } from '../test-data/no-results-search.data';
import { Header } from '../components/Header';
import { ProductListingPage } from '../pages/ProductListingPage';

test.describe('Search with no results', () => {
  for (const searchCase of noResultsSearchCases) {
    test(`Search shows no product for ${searchCase.description}`, async ({
      page,
    }) => {
      const header = new Header(page);
      const productListingPage = new ProductListingPage(page);

      await page.goto('/');
      await header.searchFor(searchCase.query, 'enter');

      await expect(productListingPage.addToCartButtons).toHaveCount(0);
    });
  }
});

test.fail(
  'BUG: no-results message incorrectly shows "Your shopping cart is empty!" instead of a proper no-results message',
  async ({ page }) => {
    const header = new Header(page);
    await page.goto('/');
    await header.searchFor(noResultsSearchCases[0].query, 'enter');

    await expect(
      page.getByText(/no.*(results|products).*found/i)
    ).toBeVisible();
  }
);
