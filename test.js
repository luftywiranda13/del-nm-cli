'use strict';

const fs = require('fs');
const path = require('path');
const execa = require('execa');
const makeDir = require('make-dir');
const tempy = require('tempy');

test('CLI', async () => {
  const tempDir = tempy.directory();
  makeDir.sync(path.join(tempDir, 'node_modules'));

  await execa('./cli.js', [tempDir]);

  expect(fs.existsSync(path.join(tempDir, 'node_modules'))).toBe(false);
});
