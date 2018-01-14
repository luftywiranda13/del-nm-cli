'use strict';

const { join } = require('path');
const { copyFile, createFile, pathExistsSync } = require('fs-extra');
const execa = require('execa');
const tempy = require('tempy');

describe('CLI', () => {
  test('delete `node_modules`', async () => {
    expect.assertions(4);
    const tempDir = tempy.directory();
    await copyFile(
      join('node_modules', 'del-nm'),
      join(tempDir, 'node_modules')
    );
    await createFile(join(tempDir, 'package-lock.json'));
    await createFile(join(tempDir, 'yarn.lock'));
    await createFile(join(tempDir, 'npm-shrinkwrap.json'));

    await execa.stdout('./cli.js', [tempDir]);

    expect(pathExistsSync(join(tempDir, 'node_modules'))).toBe(false);
    expect(pathExistsSync(join(tempDir, 'package-lock.json'))).toBe(false);
    expect(pathExistsSync(join(tempDir, 'yarn.lock'))).toBe(false);
    expect(pathExistsSync(join(tempDir, 'npm-shrinkwrap.json'))).toBe(false);
  });

  test('--lockfiles', async () => {
    expect.assertions(4);
    const tempDir = tempy.directory();
    await copyFile(
      join('node_modules', 'del-nm'),
      join(tempDir, 'node_modules')
    );
    await createFile(join(tempDir, 'package-lock.json'));
    await createFile(join(tempDir, 'yarn.lock'));
    await createFile(join(tempDir, 'npm-shrinkwrap.json'));

    await execa.stdout('./cli.js', [tempDir, '-l', false]);

    expect(pathExistsSync(join(tempDir, 'node_modules'))).toBe(false);
    expect(pathExistsSync(join(tempDir, 'package-lock.json'))).toBe(true);
    expect(pathExistsSync(join(tempDir, 'yarn.lock'))).toBe(true);
    expect(pathExistsSync(join(tempDir, 'npm-shrinkwrap.json'))).toBe(true);
  });
});
