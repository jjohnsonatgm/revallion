fixture('Getting Started')
  .page('https://digital.uat.greatminds.dev');

test('My first test', async t => {
  await t
    .click('button[class*="LoginWithEmail"]')
});
