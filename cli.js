#!/usr/bin/env node
'use strict';

const delNm = require('del-nm');
const meow = require('meow');
const updateNotifier = require('update-notifier');

const cli = meow(`
	Usage
	  $ del-nm [path]

	Examples
	  $ del-nm
	  $ del-nm foo
	  $ del-nm ../bar
`);

updateNotifier({pkg: cli.pkg}).notify();

delNm(cli.input[0]).then(paths => {
  console.log(paths.join('\n'));
});
