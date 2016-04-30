requirejs.config({
    paths:{
        jquery: './plugins/jquery/jquery-2.2.3.min',
        bootstrap: './plugins/bootstrap/bootstrap.min',
        knockout: './plugins/knockout/knockout-3.4.0',
        'knockout-sortable': './plugins/knockout-sortable/knockout-sortable.min'        
    },
    shim:{
        'bootstrap': { deps: ['jquery'] }
    }
});

require(['knockout','viewmodels/backlog-vm','bootstrap'], function(ko, BacklogVm){
    ko.applyBindings(new BacklogVm());
});

