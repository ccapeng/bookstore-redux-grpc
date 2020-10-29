/**
 * @fileoverview gRPC-Web generated client stub for book
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
proto.book = require('./book_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.book.BookControllerClient =
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
proto.book.BookControllerPromiseClient =
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
 *   !proto.book.BookListRequest,
 *   !proto.book.Book>}
 */
const methodDescriptor_BookController_List = new grpc.web.MethodDescriptor(
  '/book.BookController/List',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.book.BookListRequest,
  proto.book.Book,
  /**
   * @param {!proto.book.BookListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.book.Book.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.book.BookListRequest,
 *   !proto.book.Book>}
 */
const methodInfo_BookController_List = new grpc.web.AbstractClientBase.MethodInfo(
  proto.book.Book,
  /**
   * @param {!proto.book.BookListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.book.Book.deserializeBinary
);


/**
 * @param {!proto.book.BookListRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.book.Book>}
 *     The XHR Node Readable Stream
 */
proto.book.BookControllerClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/book.BookController/List',
      request,
      metadata || {},
      methodDescriptor_BookController_List);
};


/**
 * @param {!proto.book.BookListRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.book.Book>}
 *     The XHR Node Readable Stream
 */
proto.book.BookControllerPromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/book.BookController/List',
      request,
      metadata || {},
      methodDescriptor_BookController_List);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.book.Book,
 *   !proto.book.Book>}
 */
const methodDescriptor_BookController_Create = new grpc.web.MethodDescriptor(
  '/book.BookController/Create',
  grpc.web.MethodType.UNARY,
  proto.book.Book,
  proto.book.Book,
  /**
   * @param {!proto.book.Book} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.book.Book.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.book.Book,
 *   !proto.book.Book>}
 */
const methodInfo_BookController_Create = new grpc.web.AbstractClientBase.MethodInfo(
  proto.book.Book,
  /**
   * @param {!proto.book.Book} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.book.Book.deserializeBinary
);


/**
 * @param {!proto.book.Book} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.book.Book)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.book.Book>|undefined}
 *     The XHR Node Readable Stream
 */
proto.book.BookControllerClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/book.BookController/Create',
      request,
      metadata || {},
      methodDescriptor_BookController_Create,
      callback);
};


/**
 * @param {!proto.book.Book} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.book.Book>}
 *     A native promise that resolves to the response
 */
proto.book.BookControllerPromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/book.BookController/Create',
      request,
      metadata || {},
      methodDescriptor_BookController_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.book.BookRetrieveRequest,
 *   !proto.book.Book>}
 */
const methodDescriptor_BookController_Retrieve = new grpc.web.MethodDescriptor(
  '/book.BookController/Retrieve',
  grpc.web.MethodType.UNARY,
  proto.book.BookRetrieveRequest,
  proto.book.Book,
  /**
   * @param {!proto.book.BookRetrieveRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.book.Book.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.book.BookRetrieveRequest,
 *   !proto.book.Book>}
 */
const methodInfo_BookController_Retrieve = new grpc.web.AbstractClientBase.MethodInfo(
  proto.book.Book,
  /**
   * @param {!proto.book.BookRetrieveRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.book.Book.deserializeBinary
);


/**
 * @param {!proto.book.BookRetrieveRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.book.Book)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.book.Book>|undefined}
 *     The XHR Node Readable Stream
 */
proto.book.BookControllerClient.prototype.retrieve =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/book.BookController/Retrieve',
      request,
      metadata || {},
      methodDescriptor_BookController_Retrieve,
      callback);
};


/**
 * @param {!proto.book.BookRetrieveRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.book.Book>}
 *     A native promise that resolves to the response
 */
proto.book.BookControllerPromiseClient.prototype.retrieve =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/book.BookController/Retrieve',
      request,
      metadata || {},
      methodDescriptor_BookController_Retrieve);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.book.Book,
 *   !proto.book.Book>}
 */
const methodDescriptor_BookController_Update = new grpc.web.MethodDescriptor(
  '/book.BookController/Update',
  grpc.web.MethodType.UNARY,
  proto.book.Book,
  proto.book.Book,
  /**
   * @param {!proto.book.Book} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.book.Book.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.book.Book,
 *   !proto.book.Book>}
 */
const methodInfo_BookController_Update = new grpc.web.AbstractClientBase.MethodInfo(
  proto.book.Book,
  /**
   * @param {!proto.book.Book} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.book.Book.deserializeBinary
);


/**
 * @param {!proto.book.Book} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.book.Book)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.book.Book>|undefined}
 *     The XHR Node Readable Stream
 */
proto.book.BookControllerClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/book.BookController/Update',
      request,
      metadata || {},
      methodDescriptor_BookController_Update,
      callback);
};


/**
 * @param {!proto.book.Book} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.book.Book>}
 *     A native promise that resolves to the response
 */
proto.book.BookControllerPromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/book.BookController/Update',
      request,
      metadata || {},
      methodDescriptor_BookController_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.book.Book,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_BookController_Destroy = new grpc.web.MethodDescriptor(
  '/book.BookController/Destroy',
  grpc.web.MethodType.UNARY,
  proto.book.Book,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.book.Book} request
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
 *   !proto.book.Book,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_BookController_Destroy = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.book.Book} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.book.Book} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.book.BookControllerClient.prototype.destroy =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/book.BookController/Destroy',
      request,
      metadata || {},
      methodDescriptor_BookController_Destroy,
      callback);
};


/**
 * @param {!proto.book.Book} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.book.BookControllerPromiseClient.prototype.destroy =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/book.BookController/Destroy',
      request,
      metadata || {},
      methodDescriptor_BookController_Destroy);
};


module.exports = proto.book;

