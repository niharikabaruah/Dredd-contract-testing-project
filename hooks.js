// dredd-hooks.js
var hooks = require('hooks');

 //Hook to adjust Content-Type header expectation
//hooks.beforeEach((transaction, done) => {
//  if (transaction.expected.headers['Content-Type']) {
//    transaction.expected.headers['Content-Type'] = ' application/json; charset=utf-8';
//  }
//  done();
//});

hooks.beforeEach(function (transaction) {
  const statusCode = transaction.expected.statusCode;

    transaction.skip = false;

});