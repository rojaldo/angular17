export class Country {
    private _commonName: string = ''
    private _officialName: string = ''
    private _flag: string = ''
    private _flags: any = {}
    private _area: number = 0
    private _population: number = 0
    private _capitals: string[] = []
    private _capital: string = ''
    private _independent = false
    private _UNMember = false
    private _region: string = ''
    private _subregion: string = ''
    private _languages: string[] = []
    private _currencies: string[] = []
    constructor(json?: any) {
        if(json) {
            this._commonName = json.name.common
            this._officialName = json.name.official
            this._flag = json.flag
            this._flags = json.flags
            this._area = json.area
            this._population = json.population
            this._capitals = json.capital
            this._capitals ? this._capital = this._capitals[0] : this._capital = ''
            this._independent = json.independent
            this._UNMember = json.unMember
            this._region = json.region
            this._subregion = json.subregion
            this._languages = json.languages
            this._currencies = json.currencies
            console.log(this.flagPNG)
            

        }
    }

    get commonName(): string {
        return this._commonName
    }

    get officialName(): string {
        return this._officialName
    }

    get flag(): string {
        return this._flag
    }

    get flags(): Object {
        return this._flags
    }

    get area(): number {
        return this._area
    }

    get population(): number {
        return this._population
    }

    get capitals(): string[] {
        return this._capitals
    }

    get capital(): string {
        return this._capital
    }

    get independent(): boolean {
        return this._independent
    }

    get UNMember(): boolean {
        return this._UNMember
    }

    get region(): string {
        return this._region
    }

    get subregion(): string {
        return this._subregion
    }

    get languages(): string[] {
        return this._languages
    }

    get currencies(): string[] {
        return this._currencies
    }

    get flagSVG(): string {
        return this._flags['svg']
    }

    get flagPNG(): string {
        return this._flags['png']
    }

}