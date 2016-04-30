/**
 * Upload.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  autoPK: true,
  autoCreatedAt: true,
  autoUpdatedAt: true,
  attributes: {
    name:{type:'string'},
    epic:{model:'epic'},
    feature:{model:'feature'},
    story:{model:'story'},
  }
};

