// @generated by protoc-gen-es v1.10.0 with parameter "target=js"
// @generated from file aserto/authorizer/v2/api/policy_context.proto (package aserto.authorizer.v2.api, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message aserto.authorizer.v2.api.PolicyContext
 */
export const PolicyContext = /*@__PURE__*/ proto3.makeMessageType(
  "aserto.authorizer.v2.api.PolicyContext",
  () => [
    { no: 1, name: "path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "decisions", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

