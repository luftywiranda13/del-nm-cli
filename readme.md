# del-nm-cli

> Delete `node_modules` and lockfiles

[![Package Version](https://img.shields.io/npm/v/del-nm-cli.svg?style=flat-square)](https://www.npmjs.com/package/del-nm-cli)
[![Downloads Status](https://img.shields.io/npm/dm/del-nm-cli.svg?style=flat-square)](https://npm-stat.com/charts.html?package=del-nm-cli&from=2016-04-01)
[![Build Status: Linux](https://img.shields.io/travis/luftywiranda13/del-nm-cli/master.svg?style=flat-square)](https://travis-ci.org/luftywiranda13/del-nm-cli)

Useful to perform fresh installation of dependencies.

## Installation

```sh
npm install --global del-nm-cli
```

## Usage

```sh
$ del-nm --help

  Usage
    $ del-nm [path|options]

  Options
    -l, --lockfiles=[boolean]  Delete lockfiles [default: true]

  Examples
    $ del-nm
    $ del-nm foo
    $ del-nm bar --lockfiles=false
```

## Related

* [del-nm](https://github.com/luftywiranda13/del-nm) － API for this module

## License

MIT &copy; [Lufty Wiranda](https://www.luftywiranda.com)
