import { expect, type Locator, type Page } from '@playwright/test';

export class SideBar {
  page: Page;
  units: Locator;
  logout: Locator;

  constructor(page: Page) {
    this.page = page;
    this.units =  page.getByRole('link', { name: 'Units' });
    this.logout = page.locator('[href="/logout"]');
  }

  async goto() {
    await this.page.goto('https://monument.dev.monument.io/units/individual-units');
  }

  async clickUnits() {
    await this.units.click();
  }

  async clickLogout() {
    await this.logout.click();
  }
}