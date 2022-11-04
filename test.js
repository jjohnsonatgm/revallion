require('dotenv').config();

console.log('Test1');
console.log(process.env.BROWSERSTACK_BUILD_ID);
console.log(process.env.BROWSERSTACK_PROJECT_NAME);

fixture('Getting Started')
  .page('https://digital.uat.greatminds.dev');

test('My first test', async t => {
  await t
    .click('button[class*="LoginWithEmail"]')
});
