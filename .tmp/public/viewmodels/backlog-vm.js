define(['knockout', 'viewmodels/epic-vm'],function(ko, EpicVm){
    
function BacklogVm(){
    var self = this;
    
    self.epics = ko.observableArray();
    
    self.epics.push(new EpicVm({
        id:354,
        name: "bookstore",
        description: "as a person i want to buy a book so that i can read it",
        size: 8
    }));
    self.epics.push(new EpicVm({
        id:355,
        name: "dog food",
        description: "as a dog i want to eat food so that i can be full",
        size: 2
    }));
    self.epics.push(new EpicVm({
        id:356,
        name: "out house",
        description: "as a person with a butt i want to have an outhouse so i can poop",
        size: 8
    }));
    self.epics.push(new EpicVm({
        id:357,
        name: "horse",
        description: "as a person i want to have a horse so that i dont have to walk everywhere",
        size: 8
    }));
    console.log("in the backlog");
    
}



return BacklogVm;

});