### Node Express Basic API with JWT Auth

A test-driven authenticated api with basic crud routes easily extended to new collections.

### End Points:

#### notes
---

> ##### GET /api/notes

```
response

      {
        data: [
          {
            id: 1
            body: 'finish api markdown'
          },
          {
            id: 2,
            body: 'make coffee'
          },
          {
            id: 3,
            body: 'buy socks'
          }
        ]
      }
```

> ##### GET /api/notes/:id

```
response

      {
        data: {
          id: 1
          body: 'finish api markdown'
        },
      }
```

> ##### POST /api/notes

```
post body

      {
        body: 'take a note'
      }

response

      {
        data: {
          id: 4,
          body: 'take a note'
        },
        "message": "Created new row in notes"
      }

```

> ##### PUT /api/notes/:id

```
body
      {
        body: 'update a note'
      }

response
      {
        data: {
          id: 1,
          body: 'update a note'
        },
        "message": "Edited id 1 in notes"
      }

```
> ##### DELETE /api/notes/:id

```
response
      {
        "message": "Deleted id 1 in notes"
      }
```

#### Auth
---
> ##### POST /auth/register

```
body

      {
        user: {
          username: String, // > 6 characters
          password: String  // > 6 characters
        }
      }

response

      {
        message: String,
        token: JWT Token,
      }

```

---

> ##### POST /auth/login

```
body

      {
        user: {
          username: String,
          password: String
        }
      }

response

      {
        message: String,
        token: JWT Token,
      }

```
---

> ##### GET /auth/current_user

```
header

      Authorization: 'Bearer ' + token

response

      {
        message: String,
        data: {
          username: String,
          _id: String
        }
      }

```
