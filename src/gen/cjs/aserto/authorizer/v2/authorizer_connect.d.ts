import { CompileRequest, CompileResponse, DecisionTreeRequest, DecisionTreeResponse, GetPolicyRequest, GetPolicyResponse, InfoRequest, InfoResponse, IsRequest, IsResponse, ListPoliciesRequest, ListPoliciesResponse, QueryRequest, QueryResponse } from "./authorizer_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service aserto.authorizer.v2.Authorizer
 */
export declare const Authorizer: {
    readonly typeName: "aserto.authorizer.v2.Authorizer";
    readonly methods: {
        /**
         * @generated from rpc aserto.authorizer.v2.Authorizer.DecisionTree
         */
        readonly decisionTree: {
            readonly name: "DecisionTree";
            readonly I: typeof DecisionTreeRequest;
            readonly O: typeof DecisionTreeResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc aserto.authorizer.v2.Authorizer.Is
         */
        readonly is: {
            readonly name: "Is";
            readonly I: typeof IsRequest;
            readonly O: typeof IsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc aserto.authorizer.v2.Authorizer.Query
         */
        readonly query: {
            readonly name: "Query";
            readonly I: typeof QueryRequest;
            readonly O: typeof QueryResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc aserto.authorizer.v2.Authorizer.Compile
         */
        readonly compile: {
            readonly name: "Compile";
            readonly I: typeof CompileRequest;
            readonly O: typeof CompileResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc aserto.authorizer.v2.Authorizer.ListPolicies
         */
        readonly listPolicies: {
            readonly name: "ListPolicies";
            readonly I: typeof ListPoliciesRequest;
            readonly O: typeof ListPoliciesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc aserto.authorizer.v2.Authorizer.GetPolicy
         */
        readonly getPolicy: {
            readonly name: "GetPolicy";
            readonly I: typeof GetPolicyRequest;
            readonly O: typeof GetPolicyResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc aserto.authorizer.v2.Authorizer.Info
         */
        readonly info: {
            readonly name: "Info";
            readonly I: typeof InfoRequest;
            readonly O: typeof InfoResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
