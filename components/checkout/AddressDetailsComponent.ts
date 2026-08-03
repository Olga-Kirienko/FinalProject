import { type Locator, expect } from '@playwright/test';

export class AddressDetailsComponent {
  readonly section: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly address1Input: Locator;
  readonly cityInput: Locator;
  //optional fields
  readonly companyInput: Locator;
  readonly address2Input: Locator;
  readonly postCodeInput: Locator;

  readonly countryInput: Locator;
  readonly regionInput: Locator;
  readonly continueButton: Locator;

  constructor(section: Locator) {
    this.section = section;
    this.firstNameInput = section.getByLabel('First Name');
    this.lastNameInput = section.getByLabel('Last Name');
    this.address1Input = section.getByLabel('Address 1');
    this.cityInput = section.getByLabel('City');
    this.companyInput = section.getByLabel('Company');
    this.address2Input = section.getByLabel('Address 2');
    this.postCodeInput = section.getByLabel('Post Code');
    this.countryInput = section.getByLabel('Country');
    this.regionInput = section.getByLabel('Region / State');
    this.continueButton = section.getByRole('button', { name: 'Continue' });
  }

  async selectNewAddress(): Promise<void> {
    const newAddressRadio = this.section.getByRole('radio', {
      name: 'I want to use a new address',
    });

    try {
      await expect(newAddressRadio).toBeVisible({ timeout: 5000 });
      await newAddressRadio.click();
    } catch {
      // no code intentionally
    }
  }

  async fillFirstName(firstName: string): Promise<void> {
    await this.firstNameInput.fill(firstName);
  }

  async fillLastName(lastName: string): Promise<void> {
    await this.lastNameInput.fill(lastName);
  }

  async fillAddress1(address1: string): Promise<void> {
    await this.address1Input.fill(address1);
  }

  async fillCity(city: string): Promise<void> {
    await this.cityInput.fill(city);
  }

  async fillCompany(company: string): Promise<void> {
    await this.companyInput.fill(company);
  }

  async fillAddress2(address2: string): Promise<void> {
    await this.address2Input.fill(address2);
  }

  async fillPostCode(postcode: string): Promise<void> {
    await this.postCodeInput.fill(postcode);
  }

  async selectCountry(country: string): Promise<void> {
    const previousZoneOptions = await this.regionInput.innerText();

    await this.countryInput.selectOption({ label: country });

    // waiting for the Region field to be updated
    await expect(this.regionInput).not.toHaveText(previousZoneOptions);
  }

  async selectRegion(region: string): Promise<void> {
    await this.regionInput.selectOption({ label: region });
  }

  async clickContinue(): Promise<void> {
    await this.continueButton.click();
  }
}
