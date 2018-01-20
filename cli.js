#!/usr/bin/env node
'use strict';

const delNm = require('del-nm');
const Listr = require('listr');
const meow = require('meow');
const updateNotifier = require('update-notifier');

const cli = meow(
  `
	Usage
	  $ del-nm [path|options]

  Options
    -l, --lockfiles [boolean]  Delete lockfiles [default: true]

	Examples
	  $ del-nm
    $ del-nm foo
    $ del-nm bar --lockfiles false
`,
  {
    flags: {
      lockfiles: {
        alias: 'l',
        type: 'boolean',
        default: true,
      },
    },
  }
);

updateNotifier({ pkg: cli.pkg }).notify();

new Listr([
  {
    title: `Delete node_modules ${
      cli.flags.lockfiles ? 'and lockfiles' : 'only'
    }`,
    task: () => delNm({ cwd: cli.input[0], lockfiles: cli.flags.lockfiles }),
  },
])
  .run()
  .catch(err => {
    console.error(err.message);
    process.exit(1);
  });
