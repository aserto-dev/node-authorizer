# node-authorizer-v2

### Node bindings for the Aserto Authorizer (v2) service

## Build

```sh
yarn install
yarn gen
```

## Example
```ts
import { AuthorizerClient } from "@aserto/node-authorizer/pkg/aserto/authorizer/v2/authorizer_grpc_pb";
import { credentials } from "@grpc/grpc-js";
import { Metadata, ServiceError } from "@grpc/grpc-js";
import {
  ListPoliciesRequest,
  ListPoliciesResponse,
} from "@aserto/node-authorizer/pkg/aserto/authorizer/v2/authorizer_pb";
import { readFileSync } from "fs";

const root_cert = readFileSync(
  `${process.env.HOME}/.config/topaz/certs/grpc-ca.crt`
);
const ssl = credentials.createSsl(root_cert);
const client = new AuthorizerClient("localhost:8282", ssl);
const request = new ListPoliciesRequest();
const metadata = new Metadata();

try {
  client.listPolicies(
    request,
    metadata,
    (err: ServiceError, response: ListPoliciesResponse) => {
      if (err) {
        const message = `'listPolicies' returned error: ${err.message}`;
        console.error(message);
        return;
      }
      if (!response) {
        const message = `'listPolicies' returned error: No response`;
        console.error(message);
        return;
      }
      const result = response.getResultList();
      console.log(result);
    }
  );
} catch (e) {
  console.error(e);
}
```

**On M1 Mac**: Run `arch -x86_64 zsh` first and the continue normally.
