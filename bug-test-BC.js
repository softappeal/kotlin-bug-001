(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-test'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-test'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'bug-test'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'bug-test'.");
    }if (typeof this['kotlin-test'] === 'undefined') {
      throw new Error("Error loading module 'bug-test'. Its dependency 'kotlin-test' was not found. Please, check whether 'kotlin-test' is loaded prior to 'bug-test'.");
    }root['bug-test'] = factory(typeof this['bug-test'] === 'undefined' ? {} : this['bug-test'], kotlin, this['kotlin-test']);
  }
}(this, function (_, Kotlin, $module$kotlin_test) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Unit = Kotlin.kotlin.Unit;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var test = $module$kotlin_test.kotlin.test.test;
  var suite = $module$kotlin_test.kotlin.test.suite;
  function DoPrint$lambda() {
    println('print');
    return Unit;
  }
  var DoPrint;
  function doIt$lambda(closure$doSomething) {
    return function () {
      closure$doSomething();
      return Unit;
    };
  }
  function doIt(doSomething) {
    return doIt$lambda(doSomething);
  }
  var DoIt;
  function DoItTest() {
  }
  DoItTest.prototype.test = function () {
    DoIt();
  };
  DoItTest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DoItTest',
    interfaces: []
  };
  var package$bug = _.bug || (_.bug = {});
  Object.defineProperty(package$bug, 'DoPrint', {
    get: function () {
      return DoPrint;
    }
  });
  package$bug.doIt_o14v8n$ = doIt;
  Object.defineProperty(package$bug, 'DoIt', {
    get: function () {
      return DoIt;
    }
  });
  package$bug.DoItTest = DoItTest;
  DoPrint = DoPrint$lambda;
  DoIt = doIt(DoPrint);
  suite('bug', false, function () {
    suite('DoItTest', false, function () {
      test('test', false, function () {
        return (new DoItTest()).test();
      });
    });
  });
  Kotlin.defineModule('bug-test', _);
  return _;
}));

//# sourceMappingURL=bug-test.js.map
