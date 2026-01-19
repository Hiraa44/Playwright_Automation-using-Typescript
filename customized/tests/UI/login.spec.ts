import { Page, test , expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto('http://app.alpha.skycrunch.com');
  })
test("Verify that User can login to Map", async function(){
   let page : Page
   await page.goto('http://app.alpha.skycrunch.com')
   await expect(page).toHaveURL('http://app.alpha.skucrunch.com/map')
})
test("Verify that user is able to login in the Skycrunch Application", async function(){
    let uname : String
    let passsword : String

})
