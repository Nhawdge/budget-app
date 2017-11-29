function Category(data) {
    var self = this;
    if (data == null) data = {};

    console.log(data);
    self.id = ko.observable(data.id);
    self.name = ko.observable(data.name);
    self.subcategories = ko.observableArray();
    for (i in data.subcategories) {
        self.subcategories.push(data.subcategories[i]);
    }
}


function HomeViewModel() {
    var self = this;

    self.categories = ko.observableArray();

    self.Load = function () {
        for (i in AppConfig.Categories) {
            self.categories.push(new Category(AppConfig.Categories[i]));
        }
        console.log(ko.toJS(self.categories));
    }

    self.Load();
}