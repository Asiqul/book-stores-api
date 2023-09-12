BOOKS API

1. LOGIN\
   method : POST\
   endpoint : localhost:3000/login\
   req.body : JSON Format (email, password)\
   res.body : JSON Format (status, message, access token)\
   res.cookie : Refresh Token\

2. REGISTER
   method : POST\
   endpoint : localhost:3000/register\
   req.body : JSON Format (name, email, password, confPassword)\
   res.body : JSON Format (status, message)\

   req.body requirement : - email must email format - password must atleast 6 character length - password must contain number, one uppercase & lowercase, and one special character\

3. LOGOUT\
   method : DELETE\
   endpoint : localhost:3000/logout\
   req.cookie : cookie\
   res.body : JSON Format (status, message)\

4. GET ACCESS TOKEN\
   method : GET\
   endpoint : localhost:3000/access\
   req.cookie : cookie\
   res.body : JSON Format (status, message, access token)\
