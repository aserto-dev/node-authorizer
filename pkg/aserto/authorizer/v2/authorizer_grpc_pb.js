// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var aserto_authorizer_v2_authorizer_pb = require('../../../aserto/authorizer/v2/authorizer_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var protoc$gen$openapiv2_options_annotations_pb = require('../../../protoc-gen-openapiv2/options/annotations_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var aserto_authorizer_v2_api_identity_context_pb = require('../../../aserto/authorizer/v2/api/identity_context_pb.js');
var aserto_authorizer_v2_api_policy_context_pb = require('../../../aserto/authorizer/v2/api/policy_context_pb.js');
var aserto_authorizer_v2_api_module_pb = require('../../../aserto/authorizer/v2/api/module_pb.js');
var aserto_authorizer_v2_api_policy_instance_pb = require('../../../aserto/authorizer/v2/api/policy_instance_pb.js');

function serialize_aserto_authorizer_v2_CompileRequest(arg) {
  if (!(arg instanceof aserto_authorizer_v2_authorizer_pb.CompileRequest)) {
    throw new Error('Expected argument of type aserto.authorizer.v2.CompileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_authorizer_v2_CompileRequest(buffer_arg) {
  return aserto_authorizer_v2_authorizer_pb.CompileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_authorizer_v2_CompileResponse(arg) {
  if (!(arg instanceof aserto_authorizer_v2_authorizer_pb.CompileResponse)) {
    throw new Error('Expected argument of type aserto.authorizer.v2.CompileResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_authorizer_v2_CompileResponse(buffer_arg) {
  return aserto_authorizer_v2_authorizer_pb.CompileResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_authorizer_v2_DecisionTreeRequest(arg) {
  if (!(arg instanceof aserto_authorizer_v2_authorizer_pb.DecisionTreeRequest)) {
    throw new Error('Expected argument of type aserto.authorizer.v2.DecisionTreeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_authorizer_v2_DecisionTreeRequest(buffer_arg) {
  return aserto_authorizer_v2_authorizer_pb.DecisionTreeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_authorizer_v2_DecisionTreeResponse(arg) {
  if (!(arg instanceof aserto_authorizer_v2_authorizer_pb.DecisionTreeResponse)) {
    throw new Error('Expected argument of type aserto.authorizer.v2.DecisionTreeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_authorizer_v2_DecisionTreeResponse(buffer_arg) {
  return aserto_authorizer_v2_authorizer_pb.DecisionTreeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_authorizer_v2_GetPolicyRequest(arg) {
  if (!(arg instanceof aserto_authorizer_v2_authorizer_pb.GetPolicyRequest)) {
    throw new Error('Expected argument of type aserto.authorizer.v2.GetPolicyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_authorizer_v2_GetPolicyRequest(buffer_arg) {
  return aserto_authorizer_v2_authorizer_pb.GetPolicyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_authorizer_v2_GetPolicyResponse(arg) {
  if (!(arg instanceof aserto_authorizer_v2_authorizer_pb.GetPolicyResponse)) {
    throw new Error('Expected argument of type aserto.authorizer.v2.GetPolicyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_authorizer_v2_GetPolicyResponse(buffer_arg) {
  return aserto_authorizer_v2_authorizer_pb.GetPolicyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_authorizer_v2_InfoRequest(arg) {
  if (!(arg instanceof aserto_authorizer_v2_authorizer_pb.InfoRequest)) {
    throw new Error('Expected argument of type aserto.authorizer.v2.InfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_authorizer_v2_InfoRequest(buffer_arg) {
  return aserto_authorizer_v2_authorizer_pb.InfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_authorizer_v2_InfoResponse(arg) {
  if (!(arg instanceof aserto_authorizer_v2_authorizer_pb.InfoResponse)) {
    throw new Error('Expected argument of type aserto.authorizer.v2.InfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_authorizer_v2_InfoResponse(buffer_arg) {
  return aserto_authorizer_v2_authorizer_pb.InfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_authorizer_v2_IsRequest(arg) {
  if (!(arg instanceof aserto_authorizer_v2_authorizer_pb.IsRequest)) {
    throw new Error('Expected argument of type aserto.authorizer.v2.IsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_authorizer_v2_IsRequest(buffer_arg) {
  return aserto_authorizer_v2_authorizer_pb.IsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_authorizer_v2_IsResponse(arg) {
  if (!(arg instanceof aserto_authorizer_v2_authorizer_pb.IsResponse)) {
    throw new Error('Expected argument of type aserto.authorizer.v2.IsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_authorizer_v2_IsResponse(buffer_arg) {
  return aserto_authorizer_v2_authorizer_pb.IsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_authorizer_v2_ListPoliciesRequest(arg) {
  if (!(arg instanceof aserto_authorizer_v2_authorizer_pb.ListPoliciesRequest)) {
    throw new Error('Expected argument of type aserto.authorizer.v2.ListPoliciesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_authorizer_v2_ListPoliciesRequest(buffer_arg) {
  return aserto_authorizer_v2_authorizer_pb.ListPoliciesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_authorizer_v2_ListPoliciesResponse(arg) {
  if (!(arg instanceof aserto_authorizer_v2_authorizer_pb.ListPoliciesResponse)) {
    throw new Error('Expected argument of type aserto.authorizer.v2.ListPoliciesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_authorizer_v2_ListPoliciesResponse(buffer_arg) {
  return aserto_authorizer_v2_authorizer_pb.ListPoliciesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_authorizer_v2_QueryRequest(arg) {
  if (!(arg instanceof aserto_authorizer_v2_authorizer_pb.QueryRequest)) {
    throw new Error('Expected argument of type aserto.authorizer.v2.QueryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_authorizer_v2_QueryRequest(buffer_arg) {
  return aserto_authorizer_v2_authorizer_pb.QueryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_authorizer_v2_QueryResponse(arg) {
  if (!(arg instanceof aserto_authorizer_v2_authorizer_pb.QueryResponse)) {
    throw new Error('Expected argument of type aserto.authorizer.v2.QueryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_authorizer_v2_QueryResponse(buffer_arg) {
  return aserto_authorizer_v2_authorizer_pb.QueryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AuthorizerService = exports.AuthorizerService = {
  decisionTree: {
    path: '/aserto.authorizer.v2.Authorizer/DecisionTree',
    requestStream: false,
    responseStream: false,
    requestType: aserto_authorizer_v2_authorizer_pb.DecisionTreeRequest,
    responseType: aserto_authorizer_v2_authorizer_pb.DecisionTreeResponse,
    requestSerialize: serialize_aserto_authorizer_v2_DecisionTreeRequest,
    requestDeserialize: deserialize_aserto_authorizer_v2_DecisionTreeRequest,
    responseSerialize: serialize_aserto_authorizer_v2_DecisionTreeResponse,
    responseDeserialize: deserialize_aserto_authorizer_v2_DecisionTreeResponse,
  },
  is: {
    path: '/aserto.authorizer.v2.Authorizer/Is',
    requestStream: false,
    responseStream: false,
    requestType: aserto_authorizer_v2_authorizer_pb.IsRequest,
    responseType: aserto_authorizer_v2_authorizer_pb.IsResponse,
    requestSerialize: serialize_aserto_authorizer_v2_IsRequest,
    requestDeserialize: deserialize_aserto_authorizer_v2_IsRequest,
    responseSerialize: serialize_aserto_authorizer_v2_IsResponse,
    responseDeserialize: deserialize_aserto_authorizer_v2_IsResponse,
  },
  query: {
    path: '/aserto.authorizer.v2.Authorizer/Query',
    requestStream: false,
    responseStream: false,
    requestType: aserto_authorizer_v2_authorizer_pb.QueryRequest,
    responseType: aserto_authorizer_v2_authorizer_pb.QueryResponse,
    requestSerialize: serialize_aserto_authorizer_v2_QueryRequest,
    requestDeserialize: deserialize_aserto_authorizer_v2_QueryRequest,
    responseSerialize: serialize_aserto_authorizer_v2_QueryResponse,
    responseDeserialize: deserialize_aserto_authorizer_v2_QueryResponse,
  },
  compile: {
    path: '/aserto.authorizer.v2.Authorizer/Compile',
    requestStream: false,
    responseStream: false,
    requestType: aserto_authorizer_v2_authorizer_pb.CompileRequest,
    responseType: aserto_authorizer_v2_authorizer_pb.CompileResponse,
    requestSerialize: serialize_aserto_authorizer_v2_CompileRequest,
    requestDeserialize: deserialize_aserto_authorizer_v2_CompileRequest,
    responseSerialize: serialize_aserto_authorizer_v2_CompileResponse,
    responseDeserialize: deserialize_aserto_authorizer_v2_CompileResponse,
  },
  listPolicies: {
    path: '/aserto.authorizer.v2.Authorizer/ListPolicies',
    requestStream: false,
    responseStream: false,
    requestType: aserto_authorizer_v2_authorizer_pb.ListPoliciesRequest,
    responseType: aserto_authorizer_v2_authorizer_pb.ListPoliciesResponse,
    requestSerialize: serialize_aserto_authorizer_v2_ListPoliciesRequest,
    requestDeserialize: deserialize_aserto_authorizer_v2_ListPoliciesRequest,
    responseSerialize: serialize_aserto_authorizer_v2_ListPoliciesResponse,
    responseDeserialize: deserialize_aserto_authorizer_v2_ListPoliciesResponse,
  },
  getPolicy: {
    path: '/aserto.authorizer.v2.Authorizer/GetPolicy',
    requestStream: false,
    responseStream: false,
    requestType: aserto_authorizer_v2_authorizer_pb.GetPolicyRequest,
    responseType: aserto_authorizer_v2_authorizer_pb.GetPolicyResponse,
    requestSerialize: serialize_aserto_authorizer_v2_GetPolicyRequest,
    requestDeserialize: deserialize_aserto_authorizer_v2_GetPolicyRequest,
    responseSerialize: serialize_aserto_authorizer_v2_GetPolicyResponse,
    responseDeserialize: deserialize_aserto_authorizer_v2_GetPolicyResponse,
  },
  info: {
    path: '/aserto.authorizer.v2.Authorizer/Info',
    requestStream: false,
    responseStream: false,
    requestType: aserto_authorizer_v2_authorizer_pb.InfoRequest,
    responseType: aserto_authorizer_v2_authorizer_pb.InfoResponse,
    requestSerialize: serialize_aserto_authorizer_v2_InfoRequest,
    requestDeserialize: deserialize_aserto_authorizer_v2_InfoRequest,
    responseSerialize: serialize_aserto_authorizer_v2_InfoResponse,
    responseDeserialize: deserialize_aserto_authorizer_v2_InfoResponse,
  },
};

exports.AuthorizerClient = grpc.makeGenericClientConstructor(AuthorizerService);
