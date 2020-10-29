/**
 * @fileoverview gRPC-Web generated client stub for category
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
proto.category = require('./category_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.category.CategoryControllerClient =
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
proto.category.CategoryControllerPromiseClient =
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
 *   !proto.category.CategoryListRequest,
 *   !proto.category.Category>}
 */
const methodDescriptor_CategoryController_List = new grpc.web.MethodDescriptor(
  '/category.CategoryController/List',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.category.CategoryListRequest,
  proto.category.Category,
  /**
   * @param {!proto.category.CategoryListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.category.Category.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.category.CategoryListRequest,
 *   !proto.category.Category>}
 */
const methodInfo_CategoryController_List = new grpc.web.AbstractClientBase.MethodInfo(
  proto.category.Category,
  /**
   * @param {!proto.category.CategoryListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.category.Category.deserializeBinary
);


/**
 * @param {!proto.category.CategoryListRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.category.Category>}
 *     The XHR Node Readable Stream
 */
proto.category.CategoryControllerClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/category.CategoryController/List',
      request,
      metadata || {},
      methodDescriptor_CategoryController_List);
};


/**
 * @param {!proto.category.CategoryListRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.category.Category>}
 *     The XHR Node Readable Stream
 */
proto.category.CategoryControllerPromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/category.CategoryController/List',
      request,
      metadata || {},
      methodDescriptor_CategoryController_List);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.category.Category,
 *   !proto.category.Category>}
 */
const methodDescriptor_CategoryController_Create = new grpc.web.MethodDescriptor(
  '/category.CategoryController/Create',
  grpc.web.MethodType.UNARY,
  proto.category.Category,
  proto.category.Category,
  /**
   * @param {!proto.category.Category} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.category.Category.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.category.Category,
 *   !proto.category.Category>}
 */
const methodInfo_CategoryController_Create = new grpc.web.AbstractClientBase.MethodInfo(
  proto.category.Category,
  /**
   * @param {!proto.category.Category} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.category.Category.deserializeBinary
);


/**
 * @param {!proto.category.Category} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.category.Category)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.category.Category>|undefined}
 *     The XHR Node Readable Stream
 */
proto.category.CategoryControllerClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/category.CategoryController/Create',
      request,
      metadata || {},
      methodDescriptor_CategoryController_Create,
      callback);
};


/**
 * @param {!proto.category.Category} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.category.Category>}
 *     A native promise that resolves to the response
 */
proto.category.CategoryControllerPromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/category.CategoryController/Create',
      request,
      metadata || {},
      methodDescriptor_CategoryController_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.category.CategoryRetrieveRequest,
 *   !proto.category.Category>}
 */
const methodDescriptor_CategoryController_Retrieve = new grpc.web.MethodDescriptor(
  '/category.CategoryController/Retrieve',
  grpc.web.MethodType.UNARY,
  proto.category.CategoryRetrieveRequest,
  proto.category.Category,
  /**
   * @param {!proto.category.CategoryRetrieveRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.category.Category.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.category.CategoryRetrieveRequest,
 *   !proto.category.Category>}
 */
const methodInfo_CategoryController_Retrieve = new grpc.web.AbstractClientBase.MethodInfo(
  proto.category.Category,
  /**
   * @param {!proto.category.CategoryRetrieveRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.category.Category.deserializeBinary
);


/**
 * @param {!proto.category.CategoryRetrieveRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.category.Category)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.category.Category>|undefined}
 *     The XHR Node Readable Stream
 */
proto.category.CategoryControllerClient.prototype.retrieve =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/category.CategoryController/Retrieve',
      request,
      metadata || {},
      methodDescriptor_CategoryController_Retrieve,
      callback);
};


/**
 * @param {!proto.category.CategoryRetrieveRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.category.Category>}
 *     A native promise that resolves to the response
 */
proto.category.CategoryControllerPromiseClient.prototype.retrieve =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/category.CategoryController/Retrieve',
      request,
      metadata || {},
      methodDescriptor_CategoryController_Retrieve);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.category.Category,
 *   !proto.category.Category>}
 */
const methodDescriptor_CategoryController_Update = new grpc.web.MethodDescriptor(
  '/category.CategoryController/Update',
  grpc.web.MethodType.UNARY,
  proto.category.Category,
  proto.category.Category,
  /**
   * @param {!proto.category.Category} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.category.Category.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.category.Category,
 *   !proto.category.Category>}
 */
const methodInfo_CategoryController_Update = new grpc.web.AbstractClientBase.MethodInfo(
  proto.category.Category,
  /**
   * @param {!proto.category.Category} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.category.Category.deserializeBinary
);


/**
 * @param {!proto.category.Category} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.category.Category)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.category.Category>|undefined}
 *     The XHR Node Readable Stream
 */
proto.category.CategoryControllerClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/category.CategoryController/Update',
      request,
      metadata || {},
      methodDescriptor_CategoryController_Update,
      callback);
};


/**
 * @param {!proto.category.Category} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.category.Category>}
 *     A native promise that resolves to the response
 */
proto.category.CategoryControllerPromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/category.CategoryController/Update',
      request,
      metadata || {},
      methodDescriptor_CategoryController_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.category.Category,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_CategoryController_Destroy = new grpc.web.MethodDescriptor(
  '/category.CategoryController/Destroy',
  grpc.web.MethodType.UNARY,
  proto.category.Category,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.category.Category} request
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
 *   !proto.category.Category,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_CategoryController_Destroy = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.category.Category} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.category.Category} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.category.CategoryControllerClient.prototype.destroy =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/category.CategoryController/Destroy',
      request,
      metadata || {},
      methodDescriptor_CategoryController_Destroy,
      callback);
};


/**
 * @param {!proto.category.Category} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.category.CategoryControllerPromiseClient.prototype.destroy =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/category.CategoryController/Destroy',
      request,
      metadata || {},
      methodDescriptor_CategoryController_Destroy);
};


module.exports = proto.category;

