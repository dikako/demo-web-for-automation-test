// @ts-check
import { test } from '@playwright/test';
import { LoginPage } from './pages/loginPage';
import { DashboardPage } from './pages/DashboardPage';

test.describe('Demo Web App Automation', () => {
  const baseUrl = 'https://dikako.github.io/demo-web-for-automation-test/';

  test('Login fails with invalid credentials', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto(baseUrl);
    await login.login('wronguser', 'wrongpass');
    await login.assertLoginFailed();
  });

  test('Successful login shows dashboard', async ({ page }) => {
    const login = new LoginPage(page);
    const dashboard = new DashboardPage(page);
    await login.goto(baseUrl);
    await login.login('testuser', 'testpass');
    await dashboard.assertVisible();
  });

  test('Dashboard shows 5 expected users', async ({ page }) => {
    const login = new LoginPage(page);
    const dashboard = new DashboardPage(page);
    await login.goto(baseUrl);
    await login.login('testuser', 'testpass');

    await dashboard.assertUserTable([
      'Andi Saputra',
      'Siti Nurhaliza',
      'Budi Santoso',
      'Rina Kartika',
      'Joko Susilo'
    ]);
  });

  test('Logout returns to login page', async ({ page }) => {
    const login = new LoginPage(page);
    const dashboard = new DashboardPage(page);
    await login.goto(baseUrl);
    await login.login('testuser', 'testpass');
    await dashboard.logout();
    await login.assertLoginVisible();
  });
});
