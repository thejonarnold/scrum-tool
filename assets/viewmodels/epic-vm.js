define(['knockout'],function(ko){
    
function EpicVm(){
    var self = this;
    
    self.name = ko.observable();
    self.size = ko.observable();
    self.description = ko.observable();
    self.acceptanceCriteria = ko.observable();
    self.businessOwner = ko.observable();
    
    
    
}



return EpicVm;

});