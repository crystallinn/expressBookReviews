const express = require('express');
const jwt = require('jsonwebtoken');
let books = require("./booksdb.js");
const regd_users = express.Router();

let users = [];

// Check if the user with the given username already exists
const isValid = (username)=>{ 
    // Filter the users array for any user with the same username
    let userswithsamename = users.filter((user) => {
        return user.username === username;
    });
   // Return true if any user with the same username is found, otherwise false 
    if (userswithsamename.length > 0) {
        return true;
    }else{
        return false;
    }
}

// Check if the user with the given username and password exists
const authenticatedUser = (username, password) => {
    // Filter the uswers array for any user with thte same username and password
    let validuswers = users.filter((user) => {
        return (user.username === username && user.password === password);
    });
    // Return true if any valid user is found, oitherwise fail
    if (validuswers.length > 0) {
        return true;
    }else{
        return false;
    }
}
    


// Check if a user with the given username already exists
const doesExist = (username) => {
    // Filter the users array for any user with the same username
    let userswithsamename = users.filter((user) => {
        return user.username === username;
    });
    // Return true if any user with the same username is found, otherwise false
    if (userswithsamename.length > 0) {
        return true;
    } else {
        return false;
    }
}




// Add a book review
regd_users.put("/auth/review/:isbn", (req, res) => {
  //Write your code here
return res.status(300).json({message: "Yet to be implemented"});
});

module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;
