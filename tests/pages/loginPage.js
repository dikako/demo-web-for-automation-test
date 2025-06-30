import { expect } from '@playwright/test';

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('[test-id="input-username"]');
    this.passwordInput = page.locator('[test-id="input-password"]');
    this.loginButton = page.locator('[test-id="btn-login"]');
    this.message = page.locator('[test-id="login-message"]');
  }

  async goto(baseUrl) {
    await this.page.goto(baseUrl);
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async assertLoginFailed() {
    await expect(this.message).toHaveText(/Login failed/i);
  }

  async assertLoginVisible() {
    await expect(this.loginButton).toBeVisible();
  }
}
