This web app provides the user with a simple way to generate a secure password that meets their chosen criteria.

Users are allowed to select the length of their password, as well as the type or types of characters included. 
The available character sets are:
1. Lower case alphabetic
2. Upper case alphabetic
3. Special !@#$%^&*()=-+~`?<>
4. Numeric 0123456789

After the character sets are chosen, an array is made of all possible characters, and the password is randomly constructed by iterating through the array.

After the password is generated, the user can easily copy their new password to their clipboard using an included button. This is accompolished by utilizing the navigation object from the web API.
