define(['knockout'],function(ko){
    
function EpicVm(data){
    var self = this;
    
    self.id = ko.observable();
    self.name = ko.observable();
    self.size = ko.observable();
    self.description = ko.observable();
    self.acceptanceCriteria = ko.observable();
    self.businessOwner = ko.observable();
    
    if(data){
        self.update(data);
    }
    
}

EpicVm.prototype.update = function(data){
    var self = this;
    
    self.id = ko.observable(data.id);
    self.name(data.name);
    self.size(data.size);
    self.description(data.description);
}


return EpicVm;

});