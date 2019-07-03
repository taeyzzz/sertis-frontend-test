# Front-end Test Project

This repository contains all the information for the evaluation to run.
If you feel that some information is missing for the exam, open an issue in the repository and it will be evaluated.


## Requirements
### (*** Limit Time: 1 hour 30 minutes.)
The application to be developed consists of a list of tasks following the wireframe and features below.
<p align="center"><img src="https://a.imge.to/2019/07/02/3dRKA.png" alt="3dRKA.png" border="0" /></p>
You are to create a working prototype (mock-up) of a mini-blog application, only card UI part (the area in blue border in an image below). You can choose any framework/tools as you wish for engine, look and feel.

  

The submission should be able to perform the following functions:
	CRUD via `/cards` route
1. Show all card that retreive from localserver  
	- get previous content card by  GET ⇒ /cards
2. Add new cards by input name, status, content, category, and author.

	- add card to local server by  POST ==> /cards
3. Edit a card's name, status, and content. Only the author of the card can perform this function. Add ‘edit’ button to the left of status circle (top-right corner) for this function.
 	- update card to local server by PATH  ==> /cards/:id
 
4. Delete a card. Only the author of the card can perform this function. You are free to design the flow of card deletion as the picture does not indicate the flow.
 	- delete card from local server by DELETE ⇒ /cards/:id

# Install server
yarn , npm install
# Start server
yarn start , npm start
> server is running on PORT: 5555

# Card Document

## GET

/cards

``` return {
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

/cards

```payload = {
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

/cards/:id

```//optional
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

/cards/:id

```res.sendStatus(204)```



# PS.
Test measurement
- function can get, create, update, delete
- layout 
- code style, code structure 


>If you have any questions, please do not hesitate to ask us anytime. Good luck!! 

