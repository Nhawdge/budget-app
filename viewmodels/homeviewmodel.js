function Category(data) {
    if (data == null) data = {};

    self.id = ko.observable(data.id);
    self.name = ko.observable(data.name);
    self.subcategories = ko.observableArray();
    for ( i in data.subcategories ) {
        self.subcategories.push(data.subcategories[i]);
    }
}


function HomeViewModel() {
    var self = this;

    self.Load = function () {

    }

    self.Load();
}