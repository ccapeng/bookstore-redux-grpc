import {
  PublisherListRequest,
  PublisherRetrieveRequest,
  Publisher
} from "../proto/publisher_pb.js";
import { PublisherControllerClient } from "../proto/publisher_grpc_web_pb.js";
import { getRequestHost } from "./request.js";


const client = new PublisherControllerClient(getRequestHost());

const PublisherService = {

  list: async () => {
    let publisherList = [];
    let request = new PublisherListRequest();
    return new Promise((resolve, reject) => {
      let stream = client.list(request, {});
      stream.on('data', function (response) {
        let obj = response.toObject();
        publisherList.push(obj)
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
        resolve(publisherList);
      });
    });
  },

  get: (publisherId) => {
    let publisher = {};
    let request = new PublisherRetrieveRequest();
    request.setId(publisherId);
    return new Promise((resolve, reject) => {
      client.retrieve(request, {}, (error, response) => {
        if (error) {
          console.log("Error", error);
          reject("error");
        } else {
          publisher = response.toObject();
          resolve(publisher);
        }
      });
    });
  },

  save: (publisher) => {
    let request = new Publisher();
    if (publisher.id === 0) {
      request.setName(publisher.name);
      return new Promise((resolve, reject) => {
        client.create(request, {}, (error, response) => {
          if (error) {
            console.log("Error", error);
            reject("error");
          } else {
            publisher = response.toObject();
            resolve(publisher);
          }
        });
      });
    } else {
      request.setId(publisher.id);
      request.setName(publisher.name);
      return new Promise((resolve, reject) => {
        client.update(request, {}, (error, response) => {
          if (error) {
            console.log("Error", error);
            reject("error");
          } else {
            publisher = response.toObject();
            resolve(publisher);
          }
        });
      });
    }
  },

  delete: (publisherId) => {
    let request = new Publisher();
    request.setId(publisherId);
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

export default PublisherService;