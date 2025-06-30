import { expect } from '@playwright/test';

export class DashboardPage {
  constructor(page) {
    this.page = page;
    this.dashboardContainer = page.locator('[test-id="dashboard"]');
    this.logoutButton = page.locator('[test-id="btn-logout"]');
    this.userRows = page.locator('[test-id="user-table"] tbody tr');
  }

  async assertVisible() {
    await expect(this.dashboardContainer).toBeVisible();
  }

  async logout() {
    await this.logoutButton.click();
  }

  async assertUserTable(names = []) {
    await expect(this.userRows).toHaveCount(names.length);
    for (let i = 0; i < names.length; i++) {
      await expect(this.userRows.nth(i)).toContainText(names[i]);
    }
  }
}
