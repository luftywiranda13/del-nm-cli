#!/usr/bin/env node
'use strict';

const updateNotifier = require('update-notifier');
const meow = require('meow');
const delNm = require('del-nm');

const cli = meow(
  `
	Usage
	  $ del-nm <path|glob> …

	Examples
	  $ del-nm .
	  $ del-nm foo
	  $ del-nm foo/bar
`,
  {
    string: ['_']
  }
);

updateNotifier({pkg: cli.pkg}).notify();

(function () {
  const res = delNm(cli.input.toString());

  console.log('Deleted:');

  for (let i = 0; i < res.length; i++) {
    console.log(res[i]);
  }
})();
