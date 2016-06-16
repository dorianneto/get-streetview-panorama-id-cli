# get-streetview-panorama-id-cli
[![npm](https://img.shields.io/npm/v/get-streetview-panorama-id-cli.svg?maxAge=2592000)](https://www.npmjs.com/package/get-streetview-panorama-id-cli)
[![npm](https://img.shields.io/npm/dt/get-streetview-panorama-id-cli.svg?maxAge=2592000)](https://www.npmjs.com/package/get-streetview-panorama-id-cli)

## Install
```
$ npm i -g get-streetview-panorama-id-cli
```

## Usage

```shell
$ get-streetview-panorama-id [options] <url>
```

```shell
$ get-streetview-panorama-id --help

  Usage: get-streetview-panorama-id [options] <url>

  Options:

    -h, --help   output usage information
    -e, --embed  Get URL to embed
```

### Basic

```shell
$ get-streetview-panorama-id https://www.google.com/maps/@35.6594466,139.7002501,3a,75y,306.41h,100.68t/data=!3m7!1e1!3m5!1sGu-yA64rvskAAAQfCRbuwg!2e0!3e11!7i11700!8i5850

  Copy the panorama ID: F:Gu-yA64rvskAAAQfCRbuwg
```

### Options

#### Embed

```shell
$ get-streetview-panorama-id --embed https://www.google.com/maps/@35.6594466,139.7002501,3a,75y,306.41h,100.68t/data=!3m7!1e1!3m5!1sGu-yA64rvskAAAQfCRbuwg!2e0!3e11!7i11700!8i5850

   Copy the embed url: https://www.google.com/maps/embed/v1/streetview?pano=F:Gu-yA64rvskAAAQfCRbuwg&key=YOUR_APIKEY
```

## TODO

- [ ] Integrate repository with Travis-CI
- [ ] Integrate repository with Codacy
- [ ] Add option to generate IFRAME
- [ ] Add option to insert your API KEY

## Related

- [get-streetview-panorama-id](https://github.com/dorianneto/get-streetview-panorama-id) - Dependency

## License
This project is [licensed](LICENSE.md) under the terms of the MIT license ©
