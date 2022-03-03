## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

You will also need to install the dependencies by running

```bash
npm install
# or
yarn install
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Instructions

Please clone this project and modify it. Once you finish, send us your cloned repo so we can review it.

We need to build a page for different users. New users will be created very often, so we initially require
you to build a page using Nextjs and its `dynamic routes`.

There's already a dynamic route (also known as slugs) on:

```
/pages/user/[user_name].tsx
```

That page needs to check an API which returns a list of current users on our Backend.

The API is:

```
GET https://jsonplaceholder.typicode.com/users/
```

This is a sample response from the endpoint:

```json
[
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  }
]
```

You're being asked to add functionality to `[user_name].tsx` with the following requirements:

- Users will visit the following url `http://localhost:3000/user/[username]`
- `[username]` can be ANY name. i.e., `http://localhost:3000/user/john`, `http://localhost:3000/user/bret`
- You will need to verify if `[username]` exists on the API response.
  - (please validate the existence of `[username]` against the `username` attribute on the API response object)
- You should return a message with the `[username]`, and text indicating if the user exists on the API response or not.
  - If the user does not exist this will result in a 404 error on NextJs which automatically routes to the 404 page

**IMPORTANT:** the API returns a lot of data. The attribute you need to validate is `username`.
ie:

```json
{
  "id": 2,
  "name": "...",
  "username": "THIS_IS_THE_NAME_YOU_NEED_TO_CHECK",
  "email": "...",
  "address": {
    "street": "...",
    "suite": "...",
    "city": "...",
    "zipcode": "...",
    "geo": {
      "lat": "...",
      "lng": "..."
    }
  },
  "phone": "...",
  "website": "...",
  "company": {
    "name": "...",
    "catchPhrase": "...",
    "bs": "..."
  }
}
```

Take a look at `[user_name].tsx` and there will be more instructions... you can follow the instructions or ignore them if you
think there is a more elegant solution for what you are trying to achieve.

## Implement A User Details Card

Screen width: 0 - 599px  
User details margin left: 2rem  
User details margin right: 2rem

```
┌───────────────────────────┐
│                           │
│                           │
│   User Details:           │
│  ┌─────────────────────┐  │
│  │                     │  │
│  │  Name:              │  │
│  │  Leanne Graham      │  │
│  │                     │  │
│  │  Email:             │  │
│  │  Sincere@april.biz  │  │
│  │                     │  │
│  │                     │  │
│  │  Website:           │  │
│  │  hildegard.org      │  │
│  │                     │  │
│  └─────────────────────┘  │
│                           │
│                           │
└───────────────────────────┘
```

Screen width: 600px - infinite  
User details width: 30rem  
User details is horizontal centered  
Bonus: User details is vertical centered

```
┌──────────────────────────────────────────────┐
│                                              │
│                                              │
│        User Details:                         │
│       ┌──────────────────────────────┐       │
│       │                              │       │
│       │  Name:    Leanne Graham      │       │
│       │                              │       │
│       │  Email:   Sincere@april.biz  │       │
│       │                              │       │
│       │                              │       │
│       │  Website: hildegard.org      │       │
│       │                              │       │
│       └──────────────────────────────┘       │
│                                              │
└──────────────────────────────────────────────┘
```

## Implement a stylish looking 404 page

To do this you can edit the 404.tsx file and if the user does not exists the page will redirect to here where you can get creative and come up with a
nice looking error page outlining the error (e.g. the user [username] does not exist)

### Bonus Styling task

At Vidzing one of our main products is live streams which are heavily reliant on time schedules. We require you to add a timeout feature of 5 seconds
before displaying the response. During this timeout we would like to see a well styled custom loading animation/progress bar that displays in the browser.

### Bonus Unit test task

As you might already know, unit testing is always a great way of catching errors ourselves before real users do.
Please implement your own unit testing for the [user_name].tsx file, and it's functionalities? This would include installing a test library of your choice
and coding/mocking it however you see fit to best test your code.

## Questions

????????

## That's It!

Thank you for your time! I hope you found this test fun and productive.

Good Luck!
