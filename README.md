# node-authorizer-v2

### Node bindings for the Aserto Authorizer (v2) service

## Build

```sh
yarn install
yarn gen
```

### Build with a local build of authorizer
```
BUF_PATH=/path/to/authorizer.bin yarn gen
```

## Usage

This repository contains only the bindings.
See https://github.com/aserto-dev/aserto-node#authorizer for usage.


## Troubleshooting

**On M1 Mac**: Run `arch -x86_64 zsh` first and the continue normally.
