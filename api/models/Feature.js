module.exports = {
  autoPK: true,
  autoCreatedAt: true,
  autoUpdatedAt: true,
  attributes: {
    name: {type: 'string'},
        
    size: {type: 'float'},
    
    description: {type: 'text'},
    
    acceptanceCriteria: {type:'text'},    
    
    businessOwner: {type: 'string'},
    
    epic:{model:'epic'},
    
    themes: {
      collection: 'theme',
      via: 'features'
    },
    
    stories: {
      collection: 'story',
      via: 'feature'
    },
    
    uploads: {
      collection: 'upload',
      via: 'epic'
    },
    
    comments: {
      collection: 'comment',
      via: 'epic'
    },
    
    createdBy: {model: 'user'},
    
  }
};

