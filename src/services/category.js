import {
  CategoryListRequest,
  CategoryRetrieveRequest,
  Category
} from "../proto/category_pb.js";
import { CategoryControllerClient } from "../proto/category_grpc_web_pb.js";
import { getRequestHost } from "./request.js";


const client = new CategoryControllerClient(getRequestHost());

const CategoryService = {

  list: async () => {
    let categoryList = [];
    let request = new CategoryListRequest();
    return new Promise((resolve, reject) => {
      let stream = client.list(request, {});
      stream.on('data', function (response) {
        let obj = response.toObject();
        categoryList.push(obj)
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
        resolve(categoryList);
      });
    });

  },

  get: (categoryId) => {
    let category = {};
    let request = new CategoryRetrieveRequest();
    request.setId(categoryId);
    return new Promise((resolve, reject) => {
      client.retrieve(request, {}, (error, response) => {
        if (error) {
          console.log("Error", error);
          reject("error");
        } else {
          category = response.toObject();
          resolve(category);
        }
      });
    });

  },

  save: (category) => {
    let request = new Category();
    if (category.id === 0) {
      request.setName(category.name);
      return new Promise((resolve, reject) => {
        client.create(request, {}, (error, response) => {
          if (error) {
            console.log("Error", error);
            reject("error");
          } else {
            category = response.toObject();
            resolve(category);
          }
        });
      });
    } else {
      request.setId(category.id);
      request.setName(category.name);
      return new Promise((resolve, reject) => {
        client.update(request, {}, (error, response) => {
          if (error) {
            console.log("Error", error);
            reject("error");
          } else {
            category = response.toObject();
            resolve(category);
          }
        });
      });
    }
  },

  delete: (categoryId) => {
    let request = new Category();
    request.setId(categoryId);
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

export default CategoryService;