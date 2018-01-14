'use strict';

const { join } = require('path');
const { createFile, mkdir } = require('fs-extra');
const execa = require('execa');
const tempy = require('tempy');

describe('CLI', () => {
  test('output', async () => {
    expect.assertions(4);
    const tempDir = tempy.directory();
    await mkdir(join(tempDir, 'node_modules'));
    await createFile(join(tempDir, 'package-lock.json'));
    await createFile(join(tempDir, 'yarn.lock'));
    await createFile(join(tempDir, 'npm-shrinkwrap.json'));

    const stdout = await execa.stdout('./cli.js', [tempDir]);

    expect(stdout).toMatch(/node_modules/);
    expect(stdout).toMatch(/yarn.lock/);
    expect(stdout).toMatch(/package-lock.json/);
    expect(stdout).toMatch(/npm-shrinkwrap.json/);
  });

  test('--lockfiles', async () => {
    expect.assertions(4);
    const tempDir = tempy.directory();
    await mkdir(join(tempDir, 'node_modules'));
    await createFile(join(tempDir, 'package-lock.json'));
    await createFile(join(tempDir, 'yarn.lock'));
    await createFile(join(tempDir, 'npm-shrinkwrap.json'));

    const stdout = await execa.stdout('./cli.js', [tempDir, '-l', false]);

    expect(stdout).toMatch(/node_modules/);
    expect(stdout).not.toMatch(/yarn.lock/);
    expect(stdout).not.toMatch(/package-lock.json/);
    expect(stdout).not.toMatch(/npm-shrinkwrap.json/);
  });
});
