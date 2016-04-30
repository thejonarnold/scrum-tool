module.exports = {
  autoPK: true,
  autoCreatedAt: true,
  autoUpdatedAt: true,
  attributes: {
    name: {type: 'string'},
        
    size: {type: 'float'},
    
    description: {type: 'text'},
    
    story:{model:'story'},        
    
    comments: {
      collection: 'comment',
      via: 'task'
    },
    
    createdBy: {model: 'user'},
    
  }
};

