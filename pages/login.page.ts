import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly userName: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userName = page.getByLabel('Email Address / Username');
    this.password = page.getByLabel('Password', { exact: true });
    this.loginButton = page.getByRole('button', { name: 'Sign In' });
  }

  async goto() {
    await this.page.goto('https://monument.dev.monument.io/');
  }

  async login() {
    await this.userName.fill('craig.pothier@gmail.com');
    await this.password.fill('Carter-0715');
    await this.loginButton.click();
  }
}