import { expect, type Locator, type Page } from '@playwright/test';

export class UnitsPage {
  page: Page;
  addUnitButton: Locator;
  unitDetailsLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addUnitButton = page.getByRole('button', { name: 'Add Unit' });
    this.unitDetailsLink = page.locator('[href="/units/individual-units/4fd52985-9556-11ee-8f62-192c1cd9645d"]');
  }

  async goto() {
    await this.page.goto('https://monument.dev.monument.io/units/individual-units');
  }

  async addUnits() {
    await this.addUnitButton.click();
  }

  async addLastItemToCart() {
    await this.unitDetailsLink.click();
  }
}