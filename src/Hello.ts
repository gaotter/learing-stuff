require("expose-loader?ko!../externals/knockout-3.4.1");

class HelloViewModel {
    lastName: KnockoutObservable<string>
    firstName: KnockoutObservable<string>
    fullName: KnockoutComputed<string>;

    constructor(lastName: string, firstName: string) {
        this.lastName = ko.observable(lastName);
        this.firstName = ko.observable(firstName);
        this.fullName = ko.computed({
            owner: this,
            read: () => {
                return this.firstName() + " " + this.lastName();
            }
        });
        
    }

    capitalizeLastName() {
        let lastNameUpper = this.lastName().toUpperCase();
        this.lastName(lastNameUpper);
    }
}

ko.applyBindings(new HelloViewModel("Morten", "Ottersen"));