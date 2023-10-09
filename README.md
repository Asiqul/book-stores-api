BOOKS API

1. LOGIN\
   method : POST\
   endpoint : /auth/user/login\
   req.body : JSON Format (email, password)\
   res.body : JSON Format (status, message, access token)\
   res.cookie : Refresh Token

2. REGISTER\
   method : POST\
   endpoint : /auth/user/register\
   req.body : JSON Format (name, email, password, confPassword)\
   res.body : JSON Format (status, message)

    req.body requirement : - email must email format - password must atleast 6 character length - password must contain number, one uppercase & lowercase, and one special character

3. LOGOUT\
   method : DELETE\
   endpoint : /auth/user/logout\
   req.cookie : cookie\
   res.body : JSON Format (status, message)

4. GET ACCESS TOKEN\
   method : GET\
   endpoint : /auth/user/access\
   req.cookie : cookie\
   res.body : JSON Format (status, message, access token)

5. GET BOOKS HOMEPAGE\
   method : GET\
   endpoint : /api/books/?search=(value)\
   value : recommendations, populars, best-seller, international\
   res.body : JSON Format (status, message, books)

6. GET MORE BOOKS (recommendations, populars, best-seller, international)\
   method : GET\
   endpoint : /api/books/?search=(value)&&limit=(optional number value)\
   value : recommendations, populars, best-seller, international\
   res.body : JSON Format (status, message, books)

7. SEARCH BOOKS by TITLE\
   method : GET\
   endpoint : /api/books/?q=(search value)&&limit=(optional number value)\
   res.body : JSON Format (status, message, books)

8. SEARCH BOOKS by AUTHOR\
   method : GET\
   endpoint : /api/books/?based_on=author&&q=(search value)&&limit=(optional value number)\
   res.body : JSON Format (status, message, books)
