export class Hero {
    constructor(private _name: string, private _description = '') {
    }
    get name() {
        return this._name;
    }

    get description() {
        return this._description;
    }
}