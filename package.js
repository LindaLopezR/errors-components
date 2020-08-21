Package.describe({
  name: 'igoandsuite:errors-components',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.6.1');
  api.use('ecmascript');
  api.use('react-meteor-data');
  api.mainModule('errors-components.js', 'client');
});

Npm.depends({
  'react' : '16.8.6',
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('errors-components');
  api.mainModule('errors-components-tests.js');
});
