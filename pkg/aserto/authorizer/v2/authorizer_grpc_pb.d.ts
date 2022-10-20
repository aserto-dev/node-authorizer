// GENERATED CODE -- DO NOT EDIT!

// package: aserto.authorizer.v2
// file: aserto/authorizer/v2/authorizer.proto

import * as aserto_authorizer_v2_authorizer_pb from "../../../aserto/authorizer/v2/authorizer_pb";
import * as grpc from "grpc";

interface IAuthorizerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  decisionTree: grpc.MethodDefinition<aserto_authorizer_v2_authorizer_pb.DecisionTreeRequest, aserto_authorizer_v2_authorizer_pb.DecisionTreeResponse>;
  is: grpc.MethodDefinition<aserto_authorizer_v2_authorizer_pb.IsRequest, aserto_authorizer_v2_authorizer_pb.IsResponse>;
  query: grpc.MethodDefinition<aserto_authorizer_v2_authorizer_pb.QueryRequest, aserto_authorizer_v2_authorizer_pb.QueryResponse>;
  compile: grpc.MethodDefinition<aserto_authorizer_v2_authorizer_pb.CompileRequest, aserto_authorizer_v2_authorizer_pb.CompileResponse>;
  listPolicies: grpc.MethodDefinition<aserto_authorizer_v2_authorizer_pb.ListPoliciesRequest, aserto_authorizer_v2_authorizer_pb.ListPoliciesResponse>;
  getPolicy: grpc.MethodDefinition<aserto_authorizer_v2_authorizer_pb.GetPolicyRequest, aserto_authorizer_v2_authorizer_pb.GetPolicyResponse>;
  info: grpc.MethodDefinition<aserto_authorizer_v2_authorizer_pb.InfoRequest, aserto_authorizer_v2_authorizer_pb.InfoResponse>;
}

export const AuthorizerService: IAuthorizerService;

export interface IAuthorizerServer extends grpc.UntypedServiceImplementation {
  decisionTree: grpc.handleUnaryCall<aserto_authorizer_v2_authorizer_pb.DecisionTreeRequest, aserto_authorizer_v2_authorizer_pb.DecisionTreeResponse>;
  is: grpc.handleUnaryCall<aserto_authorizer_v2_authorizer_pb.IsRequest, aserto_authorizer_v2_authorizer_pb.IsResponse>;
  query: grpc.handleUnaryCall<aserto_authorizer_v2_authorizer_pb.QueryRequest, aserto_authorizer_v2_authorizer_pb.QueryResponse>;
  compile: grpc.handleUnaryCall<aserto_authorizer_v2_authorizer_pb.CompileRequest, aserto_authorizer_v2_authorizer_pb.CompileResponse>;
  listPolicies: grpc.handleUnaryCall<aserto_authorizer_v2_authorizer_pb.ListPoliciesRequest, aserto_authorizer_v2_authorizer_pb.ListPoliciesResponse>;
  getPolicy: grpc.handleUnaryCall<aserto_authorizer_v2_authorizer_pb.GetPolicyRequest, aserto_authorizer_v2_authorizer_pb.GetPolicyResponse>;
  info: grpc.handleUnaryCall<aserto_authorizer_v2_authorizer_pb.InfoRequest, aserto_authorizer_v2_authorizer_pb.InfoResponse>;
}

export class AuthorizerClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  decisionTree(argument: aserto_authorizer_v2_authorizer_pb.DecisionTreeRequest, callback: grpc.requestCallback<aserto_authorizer_v2_authorizer_pb.DecisionTreeResponse>): grpc.ClientUnaryCall;
  decisionTree(argument: aserto_authorizer_v2_authorizer_pb.DecisionTreeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_authorizer_v2_authorizer_pb.DecisionTreeResponse>): grpc.ClientUnaryCall;
  decisionTree(argument: aserto_authorizer_v2_authorizer_pb.DecisionTreeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_authorizer_v2_authorizer_pb.DecisionTreeResponse>): grpc.ClientUnaryCall;
  is(argument: aserto_authorizer_v2_authorizer_pb.IsRequest, callback: grpc.requestCallback<aserto_authorizer_v2_authorizer_pb.IsResponse>): grpc.ClientUnaryCall;
  is(argument: aserto_authorizer_v2_authorizer_pb.IsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_authorizer_v2_authorizer_pb.IsResponse>): grpc.ClientUnaryCall;
  is(argument: aserto_authorizer_v2_authorizer_pb.IsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_authorizer_v2_authorizer_pb.IsResponse>): grpc.ClientUnaryCall;
  query(argument: aserto_authorizer_v2_authorizer_pb.QueryRequest, callback: grpc.requestCallback<aserto_authorizer_v2_authorizer_pb.QueryResponse>): grpc.ClientUnaryCall;
  query(argument: aserto_authorizer_v2_authorizer_pb.QueryRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_authorizer_v2_authorizer_pb.QueryResponse>): grpc.ClientUnaryCall;
  query(argument: aserto_authorizer_v2_authorizer_pb.QueryRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_authorizer_v2_authorizer_pb.QueryResponse>): grpc.ClientUnaryCall;
  compile(argument: aserto_authorizer_v2_authorizer_pb.CompileRequest, callback: grpc.requestCallback<aserto_authorizer_v2_authorizer_pb.CompileResponse>): grpc.ClientUnaryCall;
  compile(argument: aserto_authorizer_v2_authorizer_pb.CompileRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_authorizer_v2_authorizer_pb.CompileResponse>): grpc.ClientUnaryCall;
  compile(argument: aserto_authorizer_v2_authorizer_pb.CompileRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_authorizer_v2_authorizer_pb.CompileResponse>): grpc.ClientUnaryCall;
  listPolicies(argument: aserto_authorizer_v2_authorizer_pb.ListPoliciesRequest, callback: grpc.requestCallback<aserto_authorizer_v2_authorizer_pb.ListPoliciesResponse>): grpc.ClientUnaryCall;
  listPolicies(argument: aserto_authorizer_v2_authorizer_pb.ListPoliciesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_authorizer_v2_authorizer_pb.ListPoliciesResponse>): grpc.ClientUnaryCall;
  listPolicies(argument: aserto_authorizer_v2_authorizer_pb.ListPoliciesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_authorizer_v2_authorizer_pb.ListPoliciesResponse>): grpc.ClientUnaryCall;
  getPolicy(argument: aserto_authorizer_v2_authorizer_pb.GetPolicyRequest, callback: grpc.requestCallback<aserto_authorizer_v2_authorizer_pb.GetPolicyResponse>): grpc.ClientUnaryCall;
  getPolicy(argument: aserto_authorizer_v2_authorizer_pb.GetPolicyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_authorizer_v2_authorizer_pb.GetPolicyResponse>): grpc.ClientUnaryCall;
  getPolicy(argument: aserto_authorizer_v2_authorizer_pb.GetPolicyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_authorizer_v2_authorizer_pb.GetPolicyResponse>): grpc.ClientUnaryCall;
  info(argument: aserto_authorizer_v2_authorizer_pb.InfoRequest, callback: grpc.requestCallback<aserto_authorizer_v2_authorizer_pb.InfoResponse>): grpc.ClientUnaryCall;
  info(argument: aserto_authorizer_v2_authorizer_pb.InfoRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_authorizer_v2_authorizer_pb.InfoResponse>): grpc.ClientUnaryCall;
  info(argument: aserto_authorizer_v2_authorizer_pb.InfoRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_authorizer_v2_authorizer_pb.InfoResponse>): grpc.ClientUnaryCall;
}
