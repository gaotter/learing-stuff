export default class SomeK{
    test: KnockoutObservable<string>
    constructor(test:string){
        console.log(test);
        this.test = ko.observable(test);
    }
}
