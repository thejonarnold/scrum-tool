/**
 * Theme.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  autoPK: true,
  autoCreatedAt: true,
  autoUpdatedAt: true,
  attributes: {
    name: {type:'string'},
    epics: {collection:'epic', via:'themes', dominant: true},
    features: {collection:'feature', via:'themes', dominant: true},
    stories: {collection:'story', via:'themes', dominant: true}
  }
};

