'use strict';

const path = require('path');
const fs = require('fs-extra');
const execa = require('execa');
const tempy = require('tempy');

test('CLI', async () => {
  expect.assertions(6);
  const tempDir = tempy.directory();
  await fs.ensureDir(`${tempDir}/node_modules`);
  await fs.ensureFile(`${tempDir}/yarn.lock`);
  await fs.ensureFile(`${tempDir}/package-lock.json`);

  const stdout = await execa.stdout('./cli.js', [tempDir]);

  expect(stdout).toMatch(/node_modules/);
  expect(stdout).toMatch(/yarn.lock/);
  expect(stdout).toMatch(/package-lock.json/);

  expect(fs.existsSync(path.join(tempDir, 'node_modules'))).toBe(false);
  expect(fs.existsSync(path.join(tempDir, 'yarn.lock'))).toBe(false);
  expect(fs.existsSync(path.join(tempDir, 'package-lock.json'))).toBe(false);
});
