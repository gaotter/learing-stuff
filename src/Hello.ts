require("expose-loader?ko!../externals/knockout-3.4.1");
import SomeK from "./SomeK";

class HelloViewModel {
    language: KnockoutObservable<string>
    framework: KnockoutObservable<string>

    constructor(language: string, framework: string) {
        this.language = ko.observable(language);
        this.framework = ko.observable(framework);
        let k = new SomeK("yo");
    }
}

ko.applyBindings(new HelloViewModel("Morten Ottersen", "Knockout"));