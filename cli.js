#!/usr/bin/env node
'use strict';

const delNm = require('del-nm');
const meow = require('meow');
const updateNotifier = require('update-notifier');

const cli = meow(
  `
	Usage
	  $ del-nm <path|glob>

	Examples
	  $ del-nm .
	  $ del-nm foo
	  $ del-nm foo/bar
`,
);

updateNotifier({pkg: cli.pkg}).notify();

(function () {
  const paths = delNm(cli.input.toString());

  if (paths.length !== 0) {
    console.log('Deleted:');

    paths.forEach(path => {
      console.log(path);
    });
  }
})();
