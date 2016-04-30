requirejs.config({
    paths:{
        jquery: '/plugins/jquery/jquery-2.2.3.min',
        'jquery-ui/sortable': '/plugins/jquery-ui/sortable.min',
        'jquery-ui/draggable': '/plugins/jquery-ui/draggable.min',
        'jquery-ui/mouse': '/plugins/jquery-ui/mouse.min',
        'jquery-ui/widget': '/plugins/jquery-ui/widget.min',
        'jquery-ui/core': '/plugins/jquery-ui/core.min',
        bootstrap: '/plugins/bootstrap/js/bootstrap.min',
        knockout: '/plugins/knockout/knockout-3.4.0',
        'knockout-sortable': '/plugins/knockout-sortable/knockout-sortable.min' ,
        'backlog': '/viewmodels/'       
    },
    shim:{
        'bootstrap': { deps: ['jquery'] }
    }
});



require(['knockout','viewmodels/backlog-vm','bootstrap','knockout-sortable'], function(ko, BacklogVm){
    
    ko.applyBindings(new BacklogVm());
});

