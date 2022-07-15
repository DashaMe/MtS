Feature("links")

Scenario("Test links response", async ({ I }) => {
  I.amOnPage("https://www.mytheresa.com/en-de/men.html")
  const links = await I.grabAttributeFromAll(
    'a[href^="https://www.mytheresa.com/en-de/customer-care/"]',
    "href"
  )
  for (const link in links) {
    I.sendGetRequest(links[link], { Accept: "application/json" })
    I.seeResponseCodeIsSuccessful()
  }
})
