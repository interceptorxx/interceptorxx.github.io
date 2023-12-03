// import {test} from '@playwright/test'
// import {expect, debugFixture} from "@utils/pw-predefine";
//
// test.describe.configure({
//     mode: 'serial'
// })
//
// debugFixture('Blog lazy loading', async ({page}) => {
//     await page.goto('https://www.checklyhq.com/blog/')
//     const articles = page.locator('a[title="Visit this post"]')
//
//     // Get the initial count
//     const initialCount = await articles.count()
//
//     // Scroll to the last article
//     await articles.last().scrollIntoViewIfNeeded()
//
//     await expect(async () => {
//         console.log("I'm trying")
//         const newCount = await articles.count()
//
//         // Compare the new count with the initial count
//         expect(newCount).toBeGreaterThan(initialCount)
//     }).toPass({timeout: 3_000})
// })