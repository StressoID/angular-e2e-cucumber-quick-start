// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

exports.config = {
  allScriptsTimeout: 30 * 10000,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  specs: [
    './e2e/features/*.feature'
  ],
  cucumberOpts: {
    compiler: 'ts:ts-node/register',
    require: './e2e/features/step_definitions/*.steps.ts',
    format: 'snippets:./e2e/features/step_definitions/new-snippets.js',
    tags: '~@Ignore'
  },
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'https://localhost',
  ignoreUncaughtExceptions: true
};
