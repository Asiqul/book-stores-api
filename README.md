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

5. GET INTERNATIONAL BOOKS\
   method : GET\
   endpoint : /api/books/international?\
   optional query : page, limit\
   res.body : JSON Format (status, message, paginations, books)

6. GET RECOMMENDATIONS BOOKS\
   method : GET\
   endpoint : /api/books/recommendations?\
   optional query : page, limit\
   res.body : JSON Format (status, message, paginations, books)

7. GET POPULARS BOOKS\
   method : GET\
   endpoint : /api/books/populars?\
   optional query : page, limit\
   res.body : JSON Format (status, message, paginations, books)

8. GET BEST SALE BOOKS\
   method : GET\
   endpoint : /api/books/best-seller?\
   optional query : page, limit\
   res.body : JSON Format (status, message, paginations, books)

9. SEARCH BOOKS by TITLE\
   method : GET\
   endpoint : /api/books/search?\
   query : q(search query), page(page query), limit(limitations per page)\
   res.body : JSON Format (status, message, paginations, books)

10. SEARCH BOOKS by AUTHOR\
    method : GET\
    endpoint : /api/books/search?\
    query : based_on(set to author), q(search query), page(page query), limit(limitations per page)\
    res.body : JSON Format (status, message, paginations, books)

11. GET DETAIL BOOK\
    method : GET\
    endpoint : /api/books/:id\
    res.body : JSON Format (status, message, book detail)
