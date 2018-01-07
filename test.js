'use strict';

const execa = require('execa');
const fs = require('fs-extra');
const tempy = require('tempy');

test('output', async () => {
  expect.assertions(3);
  const tempDir = tempy.directory();
  await fs.mkdir(`${tempDir}/node_modules`);
  await fs.createFile(`${tempDir}/yarn.lock`);
  await fs.createFile(`${tempDir}/package-lock.json`);

  const stdout = await execa.stdout('./cli.js', [tempDir]);

  expect(stdout).toMatch(/node_modules/);
  expect(stdout).toMatch(/yarn.lock/);
  expect(stdout).toMatch(/package-lock.json/);
});
