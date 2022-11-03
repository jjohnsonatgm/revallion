require('dotenv').config();

console.log('Test');
console.log(process.env.BROWSERSTACK_BUILD_ID);
console.log(process.env.BROWSERSTACK_PROJECT_NAME);

fixture('Getting Started')
  .page('https://devexpress.github.io/testcafe/example');

test('My first test', async t => {
  await t
    .typeText('#developer-name', process.env.BROWSERSTACK_USERNAME)
    .typeText('#developer-name', process.env.BROWSERSTACK_ACCESS_KEY)
    .click('#submit-button');
});
