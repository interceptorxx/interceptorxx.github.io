import { expect, test } from "@playwright/test";

test('svelte', async ({ page }) => {
    await page.goto('/');
    const h1Text = await page.textContent('h1');
    expect(h1Text).toBe('Example');
});
