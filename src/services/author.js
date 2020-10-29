import {
  AuthorListRequest,
  AuthorRetrieveRequest,
  Author
} from "../proto/author_pb.js";
import { AuthorControllerClient } from "../proto/author_grpc_web_pb.js";
import { getRequestHost } from "./request.js";


const client = new AuthorControllerClient(getRequestHost());

const AuthorService = {

  list: async () => {
    let authorList = [];
    let request = new AuthorListRequest();
    return new Promise((resolve, reject) => {
      let stream = client.list(request, {});
      stream.on('data', function (response) {
        let obj = response.toObject();
        authorList.push(obj)
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
        resolve(authorList);
      });
    });
  },

  get: (authorId) => {
    let author = {};
    let request = new AuthorRetrieveRequest();
    request.setId(authorId);
    return new Promise((resolve, reject) => {
      client.retrieve(request, {}, (error, response) => {
        if (error) {
          console.log("Error", error);
          reject("error");
        } else {
          author = response.toObject();
          resolve(author);
        }
      });
    });
  },

  save: (author) => {
    let request = new Author();
    if (author.id === 0) {
      request.setLastName(author.lastName);
      request.setFirstName(author.firstName);
      return new Promise((resolve, reject) => {
        client.create(request, {}, (error, response) => {
          if (error) {
            console.log("Error", error);
            reject("error");
          } else {
            author = response.toObject();
            resolve(author);
          }
        });
      });
    } else {
      request.setId(author.id);
      request.setLastName(author.lastName);
      request.setFirstName(author.firstName);
      return new Promise((resolve, reject) => {
        client.update(request, {}, (error, response) => {
          if (error) {
            console.log("Error", error);
            reject("error");
          } else {
            author = response.toObject();
            resolve(author);
          }
        });
      });
    }
  },

  delete: (authorId) => {
    let request = new Author();
    request.setId(authorId);
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

export default AuthorService;