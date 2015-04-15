/**
* Event.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/
var CTDate = new Date();

module.exports = {

  attributes: {
    appID : {
      type: "integer",
      required : true
    },
    eventName : {
      type : "string",
      required : true,
    },
    eventValue : {
      type : "string",
      required : true
    },
    createdAt : {
      type : "integer",
      required : true,
      defaultsTo : CTDate.getTime()
    }
  },

  afterCreate: function (attrs, next) {
    console.log("[Applytics] - Event tracked.")
  }
  
};
