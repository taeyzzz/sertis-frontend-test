# Put your front end in front-end directory
```bash
frond-end
```

# How to install
 ```bash
 yarn
 ```
 or
 ```bash
 npm install
 ```

 # How to run
 ```bash
 yarn start
 ```
 or
 ```bash
 npm start
 ```
 ## server is running on PORT 5555

 # Card Document

 ## GET
 ```javascript
 /cards

 return {
   data: [
     {
       "id": "08f181ec-669b-4353-a3ca-6a7107693553",
       "title": "TAEY",
       "message": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
       "like_count": 78,
       "comment_count": 5,
       "author": {
           "first_name": "Linda",
           "last_name": "Duncan"
       }
     },
     {
       "id": "a990875b-fa3a-413f-b3ef-d84c9a620e8c",
       "title": "TECHNOLOGY",
       "message": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
       "like_count": 55,
       "comment_count": 3,
       "author": {
           "first_name": "Jeremy",
           "last_name": "Turner"
       }
     },
   ]
 }
 ```

 ## POST
 ```javascript
 /cards

 payload = {
   "title": "title",
   "message": "message",
   "like_count": 3,
   "comment_count": 3,
   "author": {
     "first_name": "name",
     "last_name": "lasname"
   }
 }

 return {
   data: {
     "id": "uuid",
     "title": "title",
     "message": "message",
     "like_count": 3,
     "comment_count": 3,
     "author": {
       "first_name": "name",
       "last_name": "lasname"
     }
   }
 }
 ```

 ## PATCH
 ```javascript
 /cards/:id

 //optional
 payload = {
   "title": "updated",
 }

 return {
   data: {
     "id": "uuid",
     "title": "updated",
     "message": "message",
     "like_count": 3,
     "comment_count": 3,
     "author": {
       "first_name": "name",
       "last_name": "lasname"
     }
   }
 }
 ```

 ## DELETE
 ```javascript
 /cards/:id

res.sendStatus(204)
 ```
