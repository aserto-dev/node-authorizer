"use strict";
// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file protoc-gen-openapiv2/options/annotations.proto (package grpc.gateway.protoc_gen_openapiv2.options, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.openapiv2_field = exports.openapiv2_tag = exports.openapiv2_schema = exports.openapiv2_operation = exports.openapiv2_swagger = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
const openapiv2_pb_js_1 = require("./openapiv2_pb.js");
/**
 * ID assigned by protobuf-global-extension-registry@google.com for gRPC-Gateway project.
 *
 * All IDs are the same, as assigned. It is okay that they are the same, as they extend
 * different descriptor messages.
 *
 * @generated from extension: grpc.gateway.protoc_gen_openapiv2.options.Swagger openapiv2_swagger = 1042;
 */
exports.openapiv2_swagger = protobuf_1.proto3.makeExtension("grpc.gateway.protoc_gen_openapiv2.options.openapiv2_swagger", protobuf_1.FileOptions, () => ({ no: 1042, kind: "message", T: openapiv2_pb_js_1.Swagger }));
/**
 * ID assigned by protobuf-global-extension-registry@google.com for gRPC-Gateway project.
 *
 * All IDs are the same, as assigned. It is okay that they are the same, as they extend
 * different descriptor messages.
 *
 * @generated from extension: grpc.gateway.protoc_gen_openapiv2.options.Operation openapiv2_operation = 1042;
 */
exports.openapiv2_operation = protobuf_1.proto3.makeExtension("grpc.gateway.protoc_gen_openapiv2.options.openapiv2_operation", protobuf_1.MethodOptions, () => ({ no: 1042, kind: "message", T: openapiv2_pb_js_1.Operation }));
/**
 * ID assigned by protobuf-global-extension-registry@google.com for gRPC-Gateway project.
 *
 * All IDs are the same, as assigned. It is okay that they are the same, as they extend
 * different descriptor messages.
 *
 * @generated from extension: grpc.gateway.protoc_gen_openapiv2.options.Schema openapiv2_schema = 1042;
 */
exports.openapiv2_schema = protobuf_1.proto3.makeExtension("grpc.gateway.protoc_gen_openapiv2.options.openapiv2_schema", protobuf_1.MessageOptions, () => ({ no: 1042, kind: "message", T: openapiv2_pb_js_1.Schema }));
/**
 * ID assigned by protobuf-global-extension-registry@google.com for gRPC-Gateway project.
 *
 * All IDs are the same, as assigned. It is okay that they are the same, as they extend
 * different descriptor messages.
 *
 * @generated from extension: grpc.gateway.protoc_gen_openapiv2.options.Tag openapiv2_tag = 1042;
 */
exports.openapiv2_tag = protobuf_1.proto3.makeExtension("grpc.gateway.protoc_gen_openapiv2.options.openapiv2_tag", protobuf_1.ServiceOptions, () => ({ no: 1042, kind: "message", T: openapiv2_pb_js_1.Tag }));
/**
 * ID assigned by protobuf-global-extension-registry@google.com for gRPC-Gateway project.
 *
 * All IDs are the same, as assigned. It is okay that they are the same, as they extend
 * different descriptor messages.
 *
 * @generated from extension: grpc.gateway.protoc_gen_openapiv2.options.JSONSchema openapiv2_field = 1042;
 */
exports.openapiv2_field = protobuf_1.proto3.makeExtension("grpc.gateway.protoc_gen_openapiv2.options.openapiv2_field", protobuf_1.FieldOptions, () => ({ no: 1042, kind: "message", T: openapiv2_pb_js_1.JSONSchema }));
