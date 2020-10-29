/*
import Request from "./request";

const BookService = {
  list: () => {
    let url = "api/book/get_all/";
    return Request.get(url);
  },
  get: (bookId) => {
    let url = `api/book/${bookId}/`;
    return Request.get(url);
  },
  save: (book) => {
    if (book.category === 0) {
      book.category = "";
    }
    if (book.publisher === 0) {
      book.publisher = "";
    }
    if (book.book === 0) {
      book.book = "";
    }
    if (book.id === 0) {
      book.id = "";
      const body = JSON.stringify(book);
      let url = "api/book/";
      return Request.create(url, body);
    } else {
      const body = JSON.stringify(book);
      let url = `api/book/${book.id}/`;
      return Request.update(url, body);
    }
  },
  delete: (bookId) => {
    let url = `api/book/${bookId}/`;
    return Request.delete(url);
  }
}
*/

import {
  BookListRequest,
  BookRetrieveRequest,
  Book
} from "../proto/book_pb.js";
import { BookControllerClient } from "../proto/book_grpc_web_pb.js";
import { getRequestHost } from "./request.js";


const client = new BookControllerClient(getRequestHost());

const BookService = {

  list: async () => {
    let bookList = [];
    let request = new BookListRequest();
    return new Promise((resolve, reject) => {
      let stream = client.list(request, {});
      stream.on('data', function (response) {
        let obj = response.toObject();
        bookList.push(obj)
      });
      stream.on('error', function (error) {
        console.log("response:", error);
        reject("error");
      });
      stream.on('status', function (status) {
        if (status.metadata) {
          console.log('Received metadata', status.metadata);
        }
      });
      stream.on('end', function () {
        resolve(bookList);
      });
    });
  },

  get: (bookId) => {
    let book = {};
    let request = new BookRetrieveRequest();
    request.setId(bookId);
    return new Promise((resolve, reject) => {
      client.retrieve(request, {}, (error, response) => {
        if (error) {
          console.log("Error", error);
          reject("error");
        } else {
          book = response.toObject();
          resolve(book);
        }
      });
    });
  },

  save: (book) => {
    let request = new Book();
    if (book.id === 0) {
      console.log("create book", book);
      request.setTitle(book.title);
      if (book.category != 0) {
        request.setCategory(book.category);
      }
      if (book.publisher != 0) {
        request.setPublisher(book.publisher);
      }
      if (book.author != 0) {
        request.setAuthor(book.author);
      }
      return new Promise((resolve, reject) => {
        client.create(request, {}, (error, response) => {
          if (error) {
            console.log("Error", error);
            reject("error");
          } else {
            book = response.toObject();
            resolve(book);
          }
        });
      });
    } else {
      console.log("update book", book);
      request.setId(book.id);
      request.setTitle(book.title);
      if (book.category != 0) {
        request.setCategory(book.category);
      }
      if (book.publisher != 0) {
        request.setPublisher(book.publisher);
      }
      if (book.author != 0) {
        request.setAuthor(book.author);
      }
      return new Promise((resolve, reject) => {
        client.update(request, {}, (error, response) => {
          if (error) {
            console.log("Error", error);
            reject("error");
          } else {
            book = response.toObject();
            resolve(book);
          }
        });
      });
    }
  },

  delete: (bookId) => {
    let request = new Book();
    request.setId(bookId);
    return new Promise((resolve, reject) => {
      client.destroy(request, {}, (error, response) => {
        if (error) {
          console.log("Error", error);
          reject("error");
        } else {
          resolve("deleted");
        }
      });
    });
  }

}


export default BookService;