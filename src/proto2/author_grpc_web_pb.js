/**
 * @fileoverview gRPC-Web generated client stub for author
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
proto.author = require('./author_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.author.AuthorControllerClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

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
proto.author.AuthorControllerPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

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
 *   !proto.author.AuthorListRequest,
 *   !proto.author.Author>}
 */
const methodDescriptor_AuthorController_List = new grpc.web.MethodDescriptor(
  '/author.AuthorController/List',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.author.AuthorListRequest,
  proto.author.Author,
  /**
   * @param {!proto.author.AuthorListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.author.Author.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.author.AuthorListRequest,
 *   !proto.author.Author>}
 */
const methodInfo_AuthorController_List = new grpc.web.AbstractClientBase.MethodInfo(
  proto.author.Author,
  /**
   * @param {!proto.author.AuthorListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.author.Author.deserializeBinary
);


/**
 * @param {!proto.author.AuthorListRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.author.Author>}
 *     The XHR Node Readable Stream
 */
proto.author.AuthorControllerClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/author.AuthorController/List',
      request,
      metadata || {},
      methodDescriptor_AuthorController_List);
};


/**
 * @param {!proto.author.AuthorListRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.author.Author>}
 *     The XHR Node Readable Stream
 */
proto.author.AuthorControllerPromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/author.AuthorController/List',
      request,
      metadata || {},
      methodDescriptor_AuthorController_List);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.author.Author,
 *   !proto.author.Author>}
 */
const methodDescriptor_AuthorController_Create = new grpc.web.MethodDescriptor(
  '/author.AuthorController/Create',
  grpc.web.MethodType.UNARY,
  proto.author.Author,
  proto.author.Author,
  /**
   * @param {!proto.author.Author} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.author.Author.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.author.Author,
 *   !proto.author.Author>}
 */
const methodInfo_AuthorController_Create = new grpc.web.AbstractClientBase.MethodInfo(
  proto.author.Author,
  /**
   * @param {!proto.author.Author} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.author.Author.deserializeBinary
);


/**
 * @param {!proto.author.Author} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.author.Author)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.author.Author>|undefined}
 *     The XHR Node Readable Stream
 */
proto.author.AuthorControllerClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/author.AuthorController/Create',
      request,
      metadata || {},
      methodDescriptor_AuthorController_Create,
      callback);
};


/**
 * @param {!proto.author.Author} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.author.Author>}
 *     A native promise that resolves to the response
 */
proto.author.AuthorControllerPromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/author.AuthorController/Create',
      request,
      metadata || {},
      methodDescriptor_AuthorController_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.author.AuthorRetrieveRequest,
 *   !proto.author.Author>}
 */
const methodDescriptor_AuthorController_Retrieve = new grpc.web.MethodDescriptor(
  '/author.AuthorController/Retrieve',
  grpc.web.MethodType.UNARY,
  proto.author.AuthorRetrieveRequest,
  proto.author.Author,
  /**
   * @param {!proto.author.AuthorRetrieveRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.author.Author.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.author.AuthorRetrieveRequest,
 *   !proto.author.Author>}
 */
const methodInfo_AuthorController_Retrieve = new grpc.web.AbstractClientBase.MethodInfo(
  proto.author.Author,
  /**
   * @param {!proto.author.AuthorRetrieveRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.author.Author.deserializeBinary
);


/**
 * @param {!proto.author.AuthorRetrieveRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.author.Author)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.author.Author>|undefined}
 *     The XHR Node Readable Stream
 */
proto.author.AuthorControllerClient.prototype.retrieve =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/author.AuthorController/Retrieve',
      request,
      metadata || {},
      methodDescriptor_AuthorController_Retrieve,
      callback);
};


/**
 * @param {!proto.author.AuthorRetrieveRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.author.Author>}
 *     A native promise that resolves to the response
 */
proto.author.AuthorControllerPromiseClient.prototype.retrieve =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/author.AuthorController/Retrieve',
      request,
      metadata || {},
      methodDescriptor_AuthorController_Retrieve);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.author.Author,
 *   !proto.author.Author>}
 */
const methodDescriptor_AuthorController_Update = new grpc.web.MethodDescriptor(
  '/author.AuthorController/Update',
  grpc.web.MethodType.UNARY,
  proto.author.Author,
  proto.author.Author,
  /**
   * @param {!proto.author.Author} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.author.Author.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.author.Author,
 *   !proto.author.Author>}
 */
const methodInfo_AuthorController_Update = new grpc.web.AbstractClientBase.MethodInfo(
  proto.author.Author,
  /**
   * @param {!proto.author.Author} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.author.Author.deserializeBinary
);


/**
 * @param {!proto.author.Author} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.author.Author)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.author.Author>|undefined}
 *     The XHR Node Readable Stream
 */
proto.author.AuthorControllerClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/author.AuthorController/Update',
      request,
      metadata || {},
      methodDescriptor_AuthorController_Update,
      callback);
};


/**
 * @param {!proto.author.Author} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.author.Author>}
 *     A native promise that resolves to the response
 */
proto.author.AuthorControllerPromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/author.AuthorController/Update',
      request,
      metadata || {},
      methodDescriptor_AuthorController_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.author.Author,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_AuthorController_Destroy = new grpc.web.MethodDescriptor(
  '/author.AuthorController/Destroy',
  grpc.web.MethodType.UNARY,
  proto.author.Author,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.author.Author} request
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
 *   !proto.author.Author,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_AuthorController_Destroy = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.author.Author} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.author.Author} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.author.AuthorControllerClient.prototype.destroy =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/author.AuthorController/Destroy',
      request,
      metadata || {},
      methodDescriptor_AuthorController_Destroy,
      callback);
};


/**
 * @param {!proto.author.Author} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.author.AuthorControllerPromiseClient.prototype.destroy =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/author.AuthorController/Destroy',
      request,
      metadata || {},
      methodDescriptor_AuthorController_Destroy);
};


module.exports = proto.author;

