/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/
var CTDate = new Date();

module.exports = {
  attributes: {
    uuid : {
      type: "string",
      unique : true,
      required : true
    }
    apiKey : {
      type : "string",
      unique : true
    },
    email : {
      type : "email",
      unique : true,
      required : false,
    },
    createdAt : {
      type : "integer",
      required : true,
      defaultsTo : CTDate.getTime()
    }
  },

  beforeCreate: function (attrs, next) {
    console.log('[working...]')
    var bcrypt = require('bcrypt');

      bcrypt.genSalt(10, function(err, salt) {
        if (err) return next(err);

        var stringToHash = attrs.uuid + attrs.bundleIdentifier + attrs.createdAt;

        bcrypt.hash(stringToHash, salt, function(err, hash) {
         if (err) return next(err);

         attrs.apiKey = hash;
         next();
        });
      });


  },
};
