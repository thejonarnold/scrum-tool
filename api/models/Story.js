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
    
    feature:{model:'feature'},
    
    themes: {
      collection: 'theme',
      via: 'stories'
    },
    
    tasks: {
      collection: 'task',
      via: 'story'
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

