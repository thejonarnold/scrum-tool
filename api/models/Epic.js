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
    
    themes: {
      collection: 'theme',
      via: 'epics'
    },
    
    features: {
      collection: 'feature',
      via: 'epic'
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

