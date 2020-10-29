# Bookstore

- This bookstore project is only frontend part. 
	It's react hook, redux, and gRPC web.

- The backend part is python django with gRPC.  
	Please find it in here [https://github.com/ccapeng/bookstore_grpc](https://github.com/ccapeng/bookstore_grpc)  
	
	- Must have backend in order to run this frontend.
	
	- Envoy proxy : redirect frontend HTTP traffic to backend HTTP/2 traffic.  
		- Since gRPC, only work on HTTP/2.
		- The backend is not running on port 443 or in https:// protocal, so browser won't send out https request to the backend. This is just some work when deployed to production environment.

- To run this frontend part,

	you can run:
	`npm start`
	in the project directory, 
	
- This project is to demonstrate how easy to convert REST APIs to gRPC.
	- The original backend project is django with rest framework [https://github.com/ccapeng/bookstore_api](https://github.com/ccapeng/bookstore_api)  
	
	- The original frontend project is react hook redux : [https://github.com/ccapeng/bookstore-hook-redux](https://github.com/ccapeng/bookstore_hook-redux)  
	
- For more information, please see in the gitbook
	[https://ccapeng.gitbook.io/bookstores/](https://ccapeng.gitbook.io/bookstores/)
	
- Known issues :
	- Book list page: category id shown instead of category name. Same as publisher, author.
	- In the book creation page, all fields(title, category, publisher, author) should be entered; otherwise, can't create.
	