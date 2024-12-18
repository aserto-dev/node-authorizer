"use strict";
// @generated by protoc-gen-es v2.2.2 with parameter "target=ts+js"
// @generated from file aserto/authorizer/v2/authorizer.proto (package aserto.authorizer.v2, syntax proto3)
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authorizer = exports.TraceLevelSchema = exports.TraceLevel = exports.PathSeparatorSchema = exports.PathSeparator = exports.QueryResponseSchema = exports.CompileResponseSchema = exports.CompileRequestSchema = exports.QueryRequestSchema = exports.QueryOptionsSchema = exports.IsResponseSchema = exports.DecisionSchema = exports.IsRequestSchema = exports.DecisionTreeResponseSchema = exports.DecisionTreeOptionsSchema = exports.DecisionTreeRequestSchema = exports.ListPoliciesResponseSchema = exports.ListPoliciesRequestSchema = exports.GetPolicyResponseSchema = exports.GetPolicyRequestSchema = exports.InfoResponseSchema = exports.InfoRequestSchema = exports.file_aserto_authorizer_v2_authorizer = void 0;
const codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
const annotations_pb_1 = require("../../../google/api/annotations_pb");
const annotations_pb_2 = require("../../../protoc-gen-openapiv2/options/annotations_pb");
const wkt_1 = require("@bufbuild/protobuf/wkt");
const identity_context_pb_1 = require("./api/identity_context_pb");
const policy_context_pb_1 = require("./api/policy_context_pb");
const module_pb_1 = require("./api/module_pb");
const policy_instance_pb_1 = require("./api/policy_instance_pb");
/**
 * Describes the file aserto/authorizer/v2/authorizer.proto.
 */
exports.file_aserto_authorizer_v2_authorizer = (0, codegenv1_1.fileDesc)("CiVhc2VydG8vYXV0aG9yaXplci92Mi9hdXRob3JpemVyLnByb3RvEhRhc2VydG8uYXV0aG9yaXplci52MiINCgtJbmZvUmVxdWVzdCJXCgxJbmZvUmVzcG9uc2USDwoHdmVyc2lvbhgBIAEoCRIOCgZjb21taXQYAiABKAkSDAoEZGF0ZRgDIAEoCRIKCgJvcxgEIAEoCRIMCgRhcmNoGAUgASgJIqoBChBHZXRQb2xpY3lSZXF1ZXN0EgoKAmlkGAEgASgJEi4KCmZpZWxkX21hc2sYAiABKAsyGi5nb29nbGUucHJvdG9idWYuRmllbGRNYXNrEkYKD3BvbGljeV9pbnN0YW5jZRgDIAEoCzIoLmFzZXJ0by5hdXRob3JpemVyLnYyLmFwaS5Qb2xpY3lJbnN0YW5jZUgAiAEBQhIKEF9wb2xpY3lfaW5zdGFuY2UiRQoRR2V0UG9saWN5UmVzcG9uc2USMAoGcmVzdWx0GAEgASgLMiAuYXNlcnRvLmF1dGhvcml6ZXIudjIuYXBpLk1vZHVsZSKhAQoTTGlzdFBvbGljaWVzUmVxdWVzdBIuCgpmaWVsZF9tYXNrGAEgASgLMhouZ29vZ2xlLnByb3RvYnVmLkZpZWxkTWFzaxJGCg9wb2xpY3lfaW5zdGFuY2UYAiABKAsyKC5hc2VydG8uYXV0aG9yaXplci52Mi5hcGkuUG9saWN5SW5zdGFuY2VIAIgBAUISChBfcG9saWN5X2luc3RhbmNlIkgKFExpc3RQb2xpY2llc1Jlc3BvbnNlEjAKBnJlc3VsdBgBIAMoCzIgLmFzZXJ0by5hdXRob3JpemVyLnYyLmFwaS5Nb2R1bGUi5gIKE0RlY2lzaW9uVHJlZVJlcXVlc3QSPwoOcG9saWN5X2NvbnRleHQYASABKAsyJy5hc2VydG8uYXV0aG9yaXplci52Mi5hcGkuUG9saWN5Q29udGV4dBJDChBpZGVudGl0eV9jb250ZXh0GAIgASgLMikuYXNlcnRvLmF1dGhvcml6ZXIudjIuYXBpLklkZW50aXR5Q29udGV4dBI6CgdvcHRpb25zGAMgASgLMikuYXNlcnRvLmF1dGhvcml6ZXIudjIuRGVjaXNpb25UcmVlT3B0aW9ucxIxChByZXNvdXJjZV9jb250ZXh0GAQgASgLMhcuZ29vZ2xlLnByb3RvYnVmLlN0cnVjdBJGCg9wb2xpY3lfaW5zdGFuY2UYBSABKAsyKC5hc2VydG8uYXV0aG9yaXplci52Mi5hcGkuUG9saWN5SW5zdGFuY2VIAIgBAUISChBfcG9saWN5X2luc3RhbmNlIlgKE0RlY2lzaW9uVHJlZU9wdGlvbnMSOwoOcGF0aF9zZXBhcmF0b3IYASABKA4yIy5hc2VydG8uYXV0aG9yaXplci52Mi5QYXRoU2VwYXJhdG9ySgQIAhADIlYKFERlY2lzaW9uVHJlZVJlc3BvbnNlEhEKCXBhdGhfcm9vdBgBIAEoCRIlCgRwYXRoGAMgASgLMhcuZ29vZ2xlLnByb3RvYnVmLlN0cnVjdEoECAIQAyKgAgoJSXNSZXF1ZXN0Ej8KDnBvbGljeV9jb250ZXh0GAEgASgLMicuYXNlcnRvLmF1dGhvcml6ZXIudjIuYXBpLlBvbGljeUNvbnRleHQSQwoQaWRlbnRpdHlfY29udGV4dBgCIAEoCzIpLmFzZXJ0by5hdXRob3JpemVyLnYyLmFwaS5JZGVudGl0eUNvbnRleHQSMQoQcmVzb3VyY2VfY29udGV4dBgDIAEoCzIXLmdvb2dsZS5wcm90b2J1Zi5TdHJ1Y3QSRgoPcG9saWN5X2luc3RhbmNlGAQgASgLMiguYXNlcnRvLmF1dGhvcml6ZXIudjIuYXBpLlBvbGljeUluc3RhbmNlSACIAQFCEgoQX3BvbGljeV9pbnN0YW5jZSIoCghEZWNpc2lvbhIQCghkZWNpc2lvbhgBIAEoCRIKCgJpcxgCIAEoCCI/CgpJc1Jlc3BvbnNlEjEKCWRlY2lzaW9ucxgBIAMoCzIeLmFzZXJ0by5hdXRob3JpemVyLnYyLkRlY2lzaW9uInsKDFF1ZXJ5T3B0aW9ucxIPCgdtZXRyaWNzGAEgASgIEhIKCmluc3RydW1lbnQYAiABKAgSLwoFdHJhY2UYAyABKA4yIC5hc2VydG8uYXV0aG9yaXplci52Mi5UcmFjZUxldmVsEhUKDXRyYWNlX3N1bW1hcnkYBCABKAgi0wMKDFF1ZXJ5UmVxdWVzdBINCgVxdWVyeRgBIAEoCRINCgVpbnB1dBgCIAEoCRI4CgdvcHRpb25zGAMgASgLMiIuYXNlcnRvLmF1dGhvcml6ZXIudjIuUXVlcnlPcHRpb25zSACIAQESRAoOcG9saWN5X2NvbnRleHQYBCABKAsyJy5hc2VydG8uYXV0aG9yaXplci52Mi5hcGkuUG9saWN5Q29udGV4dEgBiAEBEkgKEGlkZW50aXR5X2NvbnRleHQYBSABKAsyKS5hc2VydG8uYXV0aG9yaXplci52Mi5hcGkuSWRlbnRpdHlDb250ZXh0SAKIAQESNgoQcmVzb3VyY2VfY29udGV4dBgGIAEoCzIXLmdvb2dsZS5wcm90b2J1Zi5TdHJ1Y3RIA4gBARJGCg9wb2xpY3lfaW5zdGFuY2UYByABKAsyKC5hc2VydG8uYXV0aG9yaXplci52Mi5hcGkuUG9saWN5SW5zdGFuY2VIBIgBAUIKCghfb3B0aW9uc0IRCg9fcG9saWN5X2NvbnRleHRCEwoRX2lkZW50aXR5X2NvbnRleHRCEwoRX3Jlc291cmNlX2NvbnRleHRCEgoQX3BvbGljeV9pbnN0YW5jZSKBBAoOQ29tcGlsZVJlcXVlc3QSDQoFcXVlcnkYASABKAkSDQoFaW5wdXQYAiABKAkSEAoIdW5rbm93bnMYAyADKAkSGAoQZGlzYWJsZV9pbmxpbmluZxgEIAMoCRI4CgdvcHRpb25zGAUgASgLMiIuYXNlcnRvLmF1dGhvcml6ZXIudjIuUXVlcnlPcHRpb25zSACIAQESRAoOcG9saWN5X2NvbnRleHQYBiABKAsyJy5hc2VydG8uYXV0aG9yaXplci52Mi5hcGkuUG9saWN5Q29udGV4dEgBiAEBEkgKEGlkZW50aXR5X2NvbnRleHQYByABKAsyKS5hc2VydG8uYXV0aG9yaXplci52Mi5hcGkuSWRlbnRpdHlDb250ZXh0SAKIAQESNgoQcmVzb3VyY2VfY29udGV4dBgIIAEoCzIXLmdvb2dsZS5wcm90b2J1Zi5TdHJ1Y3RIA4gBARJGCg9wb2xpY3lfaW5zdGFuY2UYCSABKAsyKC5hc2VydG8uYXV0aG9yaXplci52Mi5hcGkuUG9saWN5SW5zdGFuY2VIBIgBAUIKCghfb3B0aW9uc0IRCg9fcG9saWN5X2NvbnRleHRCEwoRX2lkZW50aXR5X2NvbnRleHRCEwoRX3Jlc291cmNlX2NvbnRleHRCEgoQX3BvbGljeV9pbnN0YW5jZSKjAQoPQ29tcGlsZVJlc3BvbnNlEicKBnJlc3VsdBgBIAEoCzIXLmdvb2dsZS5wcm90b2J1Zi5TdHJ1Y3QSKAoHbWV0cmljcxgCIAEoCzIXLmdvb2dsZS5wcm90b2J1Zi5TdHJ1Y3QSJgoFdHJhY2UYAyADKAsyFy5nb29nbGUucHJvdG9idWYuU3RydWN0EhUKDXRyYWNlX3N1bW1hcnkYBCADKAkiowEKDVF1ZXJ5UmVzcG9uc2USKQoIcmVzcG9uc2UYASABKAsyFy5nb29nbGUucHJvdG9idWYuU3RydWN0EigKB21ldHJpY3MYAiABKAsyFy5nb29nbGUucHJvdG9idWYuU3RydWN0EiYKBXRyYWNlGAMgAygLMhcuZ29vZ2xlLnByb3RvYnVmLlN0cnVjdBIVCg10cmFjZV9zdW1tYXJ5GAQgAygJKl0KDVBhdGhTZXBhcmF0b3ISGgoWUEFUSF9TRVBBUkFUT1JfVU5LTk9XThAAEhYKElBBVEhfU0VQQVJBVE9SX0RPVBABEhgKFFBBVEhfU0VQQVJBVE9SX1NMQVNIEAIqfgoKVHJhY2VMZXZlbBIXChNUUkFDRV9MRVZFTF9VTktOT1dOEAASEwoPVFJBQ0VfTEVWRUxfT0ZGEAESFAoQVFJBQ0VfTEVWRUxfRlVMTBACEhUKEVRSQUNFX0xFVkVMX05PVEVTEAMSFQoRVFJBQ0VfTEVWRUxfRkFJTFMQBDLvDQoKQXV0aG9yaXplchKfAgoMRGVjaXNpb25UcmVlEikuYXNlcnRvLmF1dGhvcml6ZXIudjIuRGVjaXNpb25UcmVlUmVxdWVzdBoqLmFzZXJ0by5hdXRob3JpemVyLnYyLkRlY2lzaW9uVHJlZVJlc3BvbnNlIrcBkkGOAQoKQXV0aG9yaXplchINRGVjaXNpb24gdHJlZRoxUmV0dXJucyBkZWNpc2lvbiB0cmVlIGZvciBnaXZlbiBpZGVudGl0eSBjb250ZXh0LioYYXV0aG9yaXplci5kZWNpc2lvbl90cmVlYiQKFAoQQXV0aG9yaXplckFQSUtleRIACgwKCFRlbmFudElEEgCC0+STAh86ASoiGi9hcGkvdjIvYXV0aHovZGVjaXNpb250cmVlEp0CCgJJcxIfLmFzZXJ0by5hdXRob3JpemVyLnYyLklzUmVxdWVzdBogLmFzZXJ0by5hdXRob3JpemVyLnYyLklzUmVzcG9uc2Ui0wGSQbQBCgpBdXRob3JpemVyEg9JcyAoYXV0aG9yaXplZCkaYERldGVybWluZXMgaWYgaWRlbnRpdHkgY29udGV4dCBpcyBhdXRob3JpemVkIHRvIGFjY2VzcyB0aGUgcmVzb3VyY2UgZ3VhcmRlZCBieSB0aGUgZ2l2ZW4gcG9saWN5LioNYXV0aG9yaXplci5pc2IkChQKEEF1dGhvcml6ZXJBUElLZXkSAAoMCghUZW5hbnRJRBIAgtPkkwIVOgEqIhAvYXBpL3YyL2F1dGh6L2lzEvUBCgVRdWVyeRIiLmFzZXJ0by5hdXRob3JpemVyLnYyLlF1ZXJ5UmVxdWVzdBojLmFzZXJ0by5hdXRob3JpemVyLnYyLlF1ZXJ5UmVzcG9uc2UiogGSQYABCgpBdXRob3JpemVyEgVRdWVyeRozRXhlY3V0ZXMgYSByZWdvIHF1ZXJ5IG9uIHRoZSBsb2FkZWQgcG9saWN5IHJ1bnRpbWUuKhBhdXRob3JpemVyLnF1ZXJ5YiQKFAoQQXV0aG9yaXplckFQSUtleRIACgwKCFRlbmFudElEEgCC0+STAhg6ASoiEy9hcGkvdjIvYXV0aHovcXVlcnkShAIKB0NvbXBpbGUSJC5hc2VydG8uYXV0aG9yaXplci52Mi5Db21waWxlUmVxdWVzdBolLmFzZXJ0by5hdXRob3JpemVyLnYyLkNvbXBpbGVSZXNwb25zZSKrAZJBhwEKCkF1dGhvcml6ZXISB0NvbXBpbGUaNkV4ZWN1dGVzIGEgcGFydGlhbCBxdWVyeSBvbiB0aGUgbG9hZGVkIHBvbGljeSBydW50aW1lLioSYXV0aG9yaXplci5jb21waWxlYiQKFAoQQXV0aG9yaXplckFQSUtleRIACgwKCFRlbmFudElEEgCC0+STAho6ASoiFS9hcGkvdjIvYXV0aHovY29tcGlsZRKAAgoMTGlzdFBvbGljaWVzEikuYXNlcnRvLmF1dGhvcml6ZXIudjIuTGlzdFBvbGljaWVzUmVxdWVzdBoqLmFzZXJ0by5hdXRob3JpemVyLnYyLkxpc3RQb2xpY2llc1Jlc3BvbnNlIpgBkkF9CgZQb2xpY3kSDUxpc3QgUG9saWNpZXMaL0xpc3RzIHRoZSBwb2xpY3kgbW9kdWxlcyBmb3IgdGhlIHBvbGljeSBidW5kbGUuKg1wb2xpY2llcy5saXN0YiQKFAoQQXV0aG9yaXplckFQSUtleRIACgwKCFRlbmFudElEEgCC0+STAhISEC9hcGkvdjIvcG9saWNpZXMS/gEKCUdldFBvbGljeRImLmFzZXJ0by5hdXRob3JpemVyLnYyLkdldFBvbGljeVJlcXVlc3QaJy5hc2VydG8uYXV0aG9yaXplci52Mi5HZXRQb2xpY3lSZXNwb25zZSKfAZJBegoGUG9saWN5EgpHZXQgUG9saWN5GjBHZXRzIHRoZSBwb2xpY3kgbW9kdWxlcyBmb3IgdGhlIGdpdmVuIG1vZHVsZSBJZC4qDHBvbGljaWVzLmdldGIkChQKEEF1dGhvcml6ZXJBUElLZXkSAAoMCghUZW5hbnRJRBIAgtPkkwIcEhovYXBpL3YyL3BvbGljaWVzL3tpZD0qLyoqfRKbAQoESW5mbxIhLmFzZXJ0by5hdXRob3JpemVyLnYyLkluZm9SZXF1ZXN0GiIuYXNlcnRvLmF1dGhvcml6ZXIudjIuSW5mb1Jlc3BvbnNlIkySQTUKBEluZm8SBEluZm8aG1JldHVybiB2ZXJzaW9uIGluZm9ybWF0aW9uLioIaW5mby5nZXRiAILT5JMCDhIML2FwaS92Mi9pbmZvQvwBWkNnaXRodWIuY29tL2FzZXJ0by1kZXYvZ28tYXV0aG9yaXplci9hc2VydG8vYXV0aG9yaXplci92MjthdXRob3JpemVyqgIUQXNlcnRvLkF1dGhvcml6ZXIuVjKSQZwBKgECMhBhcHBsaWNhdGlvbi9qc29uOhBhcHBsaWNhdGlvbi9qc29uWk0KJwoQQXV0aG9yaXplckFQSUtleRITCAIaDWF1dGhvcml6YXRpb24gAgoiCghUZW5hbnRJRBIWCAIaEGFzZXJ0by10ZW5hbnQtaWQgAmIkChQKEEF1dGhvcml6ZXJBUElLZXkSAAoMCghUZW5hbnRJRBIAYgZwcm90bzM", [annotations_pb_1.file_google_api_annotations, annotations_pb_2.file_protoc_gen_openapiv2_options_annotations, wkt_1.file_google_protobuf_struct, wkt_1.file_google_protobuf_field_mask, identity_context_pb_1.file_aserto_authorizer_v2_api_identity_context, policy_context_pb_1.file_aserto_authorizer_v2_api_policy_context, module_pb_1.file_aserto_authorizer_v2_api_module, policy_instance_pb_1.file_aserto_authorizer_v2_api_policy_instance]);
/**
 * Describes the message aserto.authorizer.v2.InfoRequest.
 * Use `create(InfoRequestSchema)` to create a new message.
 */
exports.InfoRequestSchema = (0, codegenv1_1.messageDesc)(exports.file_aserto_authorizer_v2_authorizer, 0);
/**
 * Describes the message aserto.authorizer.v2.InfoResponse.
 * Use `create(InfoResponseSchema)` to create a new message.
 */
exports.InfoResponseSchema = (0, codegenv1_1.messageDesc)(exports.file_aserto_authorizer_v2_authorizer, 1);
/**
 * Describes the message aserto.authorizer.v2.GetPolicyRequest.
 * Use `create(GetPolicyRequestSchema)` to create a new message.
 */
exports.GetPolicyRequestSchema = (0, codegenv1_1.messageDesc)(exports.file_aserto_authorizer_v2_authorizer, 2);
/**
 * Describes the message aserto.authorizer.v2.GetPolicyResponse.
 * Use `create(GetPolicyResponseSchema)` to create a new message.
 */
exports.GetPolicyResponseSchema = (0, codegenv1_1.messageDesc)(exports.file_aserto_authorizer_v2_authorizer, 3);
/**
 * Describes the message aserto.authorizer.v2.ListPoliciesRequest.
 * Use `create(ListPoliciesRequestSchema)` to create a new message.
 */
exports.ListPoliciesRequestSchema = (0, codegenv1_1.messageDesc)(exports.file_aserto_authorizer_v2_authorizer, 4);
/**
 * Describes the message aserto.authorizer.v2.ListPoliciesResponse.
 * Use `create(ListPoliciesResponseSchema)` to create a new message.
 */
exports.ListPoliciesResponseSchema = (0, codegenv1_1.messageDesc)(exports.file_aserto_authorizer_v2_authorizer, 5);
/**
 * Describes the message aserto.authorizer.v2.DecisionTreeRequest.
 * Use `create(DecisionTreeRequestSchema)` to create a new message.
 */
exports.DecisionTreeRequestSchema = (0, codegenv1_1.messageDesc)(exports.file_aserto_authorizer_v2_authorizer, 6);
/**
 * Describes the message aserto.authorizer.v2.DecisionTreeOptions.
 * Use `create(DecisionTreeOptionsSchema)` to create a new message.
 */
exports.DecisionTreeOptionsSchema = (0, codegenv1_1.messageDesc)(exports.file_aserto_authorizer_v2_authorizer, 7);
/**
 * Describes the message aserto.authorizer.v2.DecisionTreeResponse.
 * Use `create(DecisionTreeResponseSchema)` to create a new message.
 */
exports.DecisionTreeResponseSchema = (0, codegenv1_1.messageDesc)(exports.file_aserto_authorizer_v2_authorizer, 8);
/**
 * Describes the message aserto.authorizer.v2.IsRequest.
 * Use `create(IsRequestSchema)` to create a new message.
 */
exports.IsRequestSchema = (0, codegenv1_1.messageDesc)(exports.file_aserto_authorizer_v2_authorizer, 9);
/**
 * Describes the message aserto.authorizer.v2.Decision.
 * Use `create(DecisionSchema)` to create a new message.
 */
exports.DecisionSchema = (0, codegenv1_1.messageDesc)(exports.file_aserto_authorizer_v2_authorizer, 10);
/**
 * Describes the message aserto.authorizer.v2.IsResponse.
 * Use `create(IsResponseSchema)` to create a new message.
 */
exports.IsResponseSchema = (0, codegenv1_1.messageDesc)(exports.file_aserto_authorizer_v2_authorizer, 11);
/**
 * Describes the message aserto.authorizer.v2.QueryOptions.
 * Use `create(QueryOptionsSchema)` to create a new message.
 */
exports.QueryOptionsSchema = (0, codegenv1_1.messageDesc)(exports.file_aserto_authorizer_v2_authorizer, 12);
/**
 * Describes the message aserto.authorizer.v2.QueryRequest.
 * Use `create(QueryRequestSchema)` to create a new message.
 */
exports.QueryRequestSchema = (0, codegenv1_1.messageDesc)(exports.file_aserto_authorizer_v2_authorizer, 13);
/**
 * Describes the message aserto.authorizer.v2.CompileRequest.
 * Use `create(CompileRequestSchema)` to create a new message.
 */
exports.CompileRequestSchema = (0, codegenv1_1.messageDesc)(exports.file_aserto_authorizer_v2_authorizer, 14);
/**
 * Describes the message aserto.authorizer.v2.CompileResponse.
 * Use `create(CompileResponseSchema)` to create a new message.
 */
exports.CompileResponseSchema = (0, codegenv1_1.messageDesc)(exports.file_aserto_authorizer_v2_authorizer, 15);
/**
 * Describes the message aserto.authorizer.v2.QueryResponse.
 * Use `create(QueryResponseSchema)` to create a new message.
 */
exports.QueryResponseSchema = (0, codegenv1_1.messageDesc)(exports.file_aserto_authorizer_v2_authorizer, 16);
/**
 * @generated from enum aserto.authorizer.v2.PathSeparator
 */
var PathSeparator;
(function (PathSeparator) {
    /**
     * Value not set.
     *
     * @generated from enum value: PATH_SEPARATOR_UNKNOWN = 0;
     */
    PathSeparator[PathSeparator["UNKNOWN"] = 0] = "UNKNOWN";
    /**
     * Dot "." path separator
     *
     * @generated from enum value: PATH_SEPARATOR_DOT = 1;
     */
    PathSeparator[PathSeparator["DOT"] = 1] = "DOT";
    /**
     * Slash "/" path separtor
     *
     * @generated from enum value: PATH_SEPARATOR_SLASH = 2;
     */
    PathSeparator[PathSeparator["SLASH"] = 2] = "SLASH";
})(PathSeparator || (exports.PathSeparator = PathSeparator = {}));
/**
 * Describes the enum aserto.authorizer.v2.PathSeparator.
 */
exports.PathSeparatorSchema = (0, codegenv1_1.enumDesc)(exports.file_aserto_authorizer_v2_authorizer, 0);
/**
 * @generated from enum aserto.authorizer.v2.TraceLevel
 */
var TraceLevel;
(function (TraceLevel) {
    /**
     * Value not set.
     *
     * @generated from enum value: TRACE_LEVEL_UNKNOWN = 0;
     */
    TraceLevel[TraceLevel["UNKNOWN"] = 0] = "UNKNOWN";
    /**
     * ExplainOffV1   ExplainModeV1 = "off"
     *
     * @generated from enum value: TRACE_LEVEL_OFF = 1;
     */
    TraceLevel[TraceLevel["OFF"] = 1] = "OFF";
    /**
     * ExplainFullV1  ExplainModeV1 = "full"
     *
     * @generated from enum value: TRACE_LEVEL_FULL = 2;
     */
    TraceLevel[TraceLevel["FULL"] = 2] = "FULL";
    /**
     * ExplainNotesV1 ExplainModeV1 = "notes"
     *
     * @generated from enum value: TRACE_LEVEL_NOTES = 3;
     */
    TraceLevel[TraceLevel["NOTES"] = 3] = "NOTES";
    /**
     * ExplainFailsV1 ExplainModeV1 = "fails"
     *
     * @generated from enum value: TRACE_LEVEL_FAILS = 4;
     */
    TraceLevel[TraceLevel["FAILS"] = 4] = "FAILS";
})(TraceLevel || (exports.TraceLevel = TraceLevel = {}));
/**
 * Describes the enum aserto.authorizer.v2.TraceLevel.
 */
exports.TraceLevelSchema = (0, codegenv1_1.enumDesc)(exports.file_aserto_authorizer_v2_authorizer, 1);
/**
 * @generated from service aserto.authorizer.v2.Authorizer
 */
exports.Authorizer = (0, codegenv1_1.serviceDesc)(exports.file_aserto_authorizer_v2_authorizer, 0);
