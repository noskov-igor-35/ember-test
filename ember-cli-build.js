/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var Funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  var bootstrapTree = new Funnel('node_modules/bootstrap/dist', {
    destDir: 'bootstrap'
  });

  app.trees.vendor = mergeTrees([app.trees.vendor, bootstrapTree], { overwrite: true });

  app.import('vendor/bootstrap/css/bootstrap.css');
  app.import('vendor/bootstrap/js/bootstrap.js');

  return app.toTree();
};
