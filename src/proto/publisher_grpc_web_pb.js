/**
 * @fileoverview gRPC-Web generated client stub for publisher
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
const proto = {};
proto.publisher = require('./publisher_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.publisher.PublisherControllerClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.publisher.PublisherControllerPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.publisher.PublisherListRequest,
 *   !proto.publisher.Publisher>}
 */
const methodDescriptor_PublisherController_List = new grpc.web.MethodDescriptor(
  '/publisher.PublisherController/List',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.publisher.PublisherListRequest,
  proto.publisher.Publisher,
  /**
   * @param {!proto.publisher.PublisherListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.publisher.Publisher.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.publisher.PublisherListRequest,
 *   !proto.publisher.Publisher>}
 */
const methodInfo_PublisherController_List = new grpc.web.AbstractClientBase.MethodInfo(
  proto.publisher.Publisher,
  /**
   * @param {!proto.publisher.PublisherListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.publisher.Publisher.deserializeBinary
);


/**
 * @param {!proto.publisher.PublisherListRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.publisher.Publisher>}
 *     The XHR Node Readable Stream
 */
proto.publisher.PublisherControllerClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/publisher.PublisherController/List',
      request,
      metadata || {},
      methodDescriptor_PublisherController_List);
};


/**
 * @param {!proto.publisher.PublisherListRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.publisher.Publisher>}
 *     The XHR Node Readable Stream
 */
proto.publisher.PublisherControllerPromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/publisher.PublisherController/List',
      request,
      metadata || {},
      methodDescriptor_PublisherController_List);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.publisher.Publisher,
 *   !proto.publisher.Publisher>}
 */
const methodDescriptor_PublisherController_Create = new grpc.web.MethodDescriptor(
  '/publisher.PublisherController/Create',
  grpc.web.MethodType.UNARY,
  proto.publisher.Publisher,
  proto.publisher.Publisher,
  /**
   * @param {!proto.publisher.Publisher} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.publisher.Publisher.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.publisher.Publisher,
 *   !proto.publisher.Publisher>}
 */
const methodInfo_PublisherController_Create = new grpc.web.AbstractClientBase.MethodInfo(
  proto.publisher.Publisher,
  /**
   * @param {!proto.publisher.Publisher} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.publisher.Publisher.deserializeBinary
);


/**
 * @param {!proto.publisher.Publisher} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.publisher.Publisher)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.publisher.Publisher>|undefined}
 *     The XHR Node Readable Stream
 */
proto.publisher.PublisherControllerClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/publisher.PublisherController/Create',
      request,
      metadata || {},
      methodDescriptor_PublisherController_Create,
      callback);
};


/**
 * @param {!proto.publisher.Publisher} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.publisher.Publisher>}
 *     A native promise that resolves to the response
 */
proto.publisher.PublisherControllerPromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/publisher.PublisherController/Create',
      request,
      metadata || {},
      methodDescriptor_PublisherController_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.publisher.PublisherRetrieveRequest,
 *   !proto.publisher.Publisher>}
 */
const methodDescriptor_PublisherController_Retrieve = new grpc.web.MethodDescriptor(
  '/publisher.PublisherController/Retrieve',
  grpc.web.MethodType.UNARY,
  proto.publisher.PublisherRetrieveRequest,
  proto.publisher.Publisher,
  /**
   * @param {!proto.publisher.PublisherRetrieveRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.publisher.Publisher.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.publisher.PublisherRetrieveRequest,
 *   !proto.publisher.Publisher>}
 */
const methodInfo_PublisherController_Retrieve = new grpc.web.AbstractClientBase.MethodInfo(
  proto.publisher.Publisher,
  /**
   * @param {!proto.publisher.PublisherRetrieveRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.publisher.Publisher.deserializeBinary
);


/**
 * @param {!proto.publisher.PublisherRetrieveRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.publisher.Publisher)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.publisher.Publisher>|undefined}
 *     The XHR Node Readable Stream
 */
proto.publisher.PublisherControllerClient.prototype.retrieve =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/publisher.PublisherController/Retrieve',
      request,
      metadata || {},
      methodDescriptor_PublisherController_Retrieve,
      callback);
};


/**
 * @param {!proto.publisher.PublisherRetrieveRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.publisher.Publisher>}
 *     A native promise that resolves to the response
 */
proto.publisher.PublisherControllerPromiseClient.prototype.retrieve =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/publisher.PublisherController/Retrieve',
      request,
      metadata || {},
      methodDescriptor_PublisherController_Retrieve);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.publisher.Publisher,
 *   !proto.publisher.Publisher>}
 */
const methodDescriptor_PublisherController_Update = new grpc.web.MethodDescriptor(
  '/publisher.PublisherController/Update',
  grpc.web.MethodType.UNARY,
  proto.publisher.Publisher,
  proto.publisher.Publisher,
  /**
   * @param {!proto.publisher.Publisher} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.publisher.Publisher.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.publisher.Publisher,
 *   !proto.publisher.Publisher>}
 */
const methodInfo_PublisherController_Update = new grpc.web.AbstractClientBase.MethodInfo(
  proto.publisher.Publisher,
  /**
   * @param {!proto.publisher.Publisher} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.publisher.Publisher.deserializeBinary
);


/**
 * @param {!proto.publisher.Publisher} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.publisher.Publisher)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.publisher.Publisher>|undefined}
 *     The XHR Node Readable Stream
 */
proto.publisher.PublisherControllerClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/publisher.PublisherController/Update',
      request,
      metadata || {},
      methodDescriptor_PublisherController_Update,
      callback);
};


/**
 * @param {!proto.publisher.Publisher} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.publisher.Publisher>}
 *     A native promise that resolves to the response
 */
proto.publisher.PublisherControllerPromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/publisher.PublisherController/Update',
      request,
      metadata || {},
      methodDescriptor_PublisherController_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.publisher.Publisher,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_PublisherController_Destroy = new grpc.web.MethodDescriptor(
  '/publisher.PublisherController/Destroy',
  grpc.web.MethodType.UNARY,
  proto.publisher.Publisher,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.publisher.Publisher} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.publisher.Publisher,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_PublisherController_Destroy = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.publisher.Publisher} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.publisher.Publisher} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.publisher.PublisherControllerClient.prototype.destroy =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/publisher.PublisherController/Destroy',
      request,
      metadata || {},
      methodDescriptor_PublisherController_Destroy,
      callback);
};


/**
 * @param {!proto.publisher.Publisher} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.publisher.PublisherControllerPromiseClient.prototype.destroy =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/publisher.PublisherController/Destroy',
      request,
      metadata || {},
      methodDescriptor_PublisherController_Destroy);
};


module.exports = proto.publisher;

