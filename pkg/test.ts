import * as grpc from "@grpc/grpc-js";
import { AuthorizerClient } from "./aserto/authorizer/v2/authorizer_grpc_pb";
import { IsRequest, IsResponse } from "./aserto/authorizer/v2/authorizer_pb";
import { readFileSync } from "fs";
import { ServiceError } from "@grpc/grpc-js";
import { IdentityContext } from "./aserto/authorizer/v2/api/identity_context_pb";
import { PolicyContext } from "./aserto/authorizer/v2/api/policy_context_pb";

const root_cert = readFileSync(
  "/Users/roie-schwaber-cohen/dev/topaz-run/certs/grpc-ca.crt"
); // new

const clientKey = readFileSync(
  "/Users/roie-schwaber-cohen/dev/topaz-run/certs/grpc.key"
);

const clientCrt = readFileSync(
  "/Users/roie-schwaber-cohen/dev/topaz-run/certs/grpc.crt"
);

const ssl_creds = grpc.credentials.createSsl(root_cert, clientKey, clientCrt); // new

console.log("ssl_creds", ssl_creds);

function execQuery(): Promise<boolean> {
  return new Promise<boolean>((resolve) => {
    const metadata = new grpc.Metadata();
    metadata.add(
      "authorization",
      `basic 9cb0e9c335cb09376bba9f41d588efc0dde6e05f35256f225e8525b46ff82dbc`
    );
    metadata.add("aserto-tenant-id", `7311c578-03b7-11ed-9e5f-00d58ef0f1a6`);
    const ssl_creds = grpc.credentials.createSsl(
      root_cert,
      clientKey,
      clientCrt
    ); // new

    const client = new AuthorizerClient(`localhost:8282`, ssl_creds);

    const policyContext = new PolicyContext();
    policyContext.setPath("todoApp");
    policyContext.setName("todoApp");
    policyContext.setDecisionsList(["allowed"]);

    const isRequest = new IsRequest();
    isRequest.setPolicyContext(policyContext);

    const identityContext = new IdentityContext();
    identityContext.setType(1);

    isRequest.setIdentityContext(identityContext);

    client.is(
      isRequest,
      metadata,
      (err: ServiceError, response: IsResponse) => {
        if (err) {
          const message = err.message;
          console.log(`'is' returned error: ${message}`, "ERROR");
          return null;
        }

        if (!response) {
          console.log(`'is' returned error: No response`, "ERROR");
          return false;
        }

        const result = response.getDecisionsList();
        const allowed = result && result.length && result[0].getIs();

        resolve(allowed as boolean);
      }
    );
  });
}

const s = async () => {
  const resp = await execQuery();
  console.log(resp.toString);
};

s();
console.log("hello");
