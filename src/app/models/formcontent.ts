export class FormContent {

    constructor(private _name = '', private _email = '', private _phone = '', private _postalCode = '', private _town = '', private _birthDate = '') {
    }
    get name(): string {
        return this._name
    }

    get email(): string {
        return this._email
    }

    get phone(): string {
        return this._phone
    }

    get postalCode(): string 
    {
        return this._postalCode
    }

    get town(): string {
        return this._town
    }

    get birthDate(): string {
        return this._birthDate
    }

    set name(value: string) {
        this._name = value
    }

    set email(value: string) {
        this._email = value
    }

    set phone(value: string) {
        this._phone = value
    }

    set postalCode(value: string) {
        this._postalCode = value
    }

    set town(value: string) {
        this._town = value
    }

    set birthDate(value: string) {
        this._birthDate = value
    }

}