export class TrivialCard {
    private _category: string = ''
    private _type: string = ''
    private _difficulty: string = ''
    private _question: string = ''
    private _correctAnswer: string = ''
    private _incorrectAnswers: string[] = []
    private _answers: string[] = []
    private _responded = false
    private _userAnswer: string = ''
    private _indexAnswer: number = -1
    constructor(json?: any) {
        if(json) {
            this._category = json.category
            this._type = json.type
            this._difficulty = json.difficulty
            this._question = json.question
            this._correctAnswer = json.correct_answer
            this._incorrectAnswers = json.incorrect_answers
            this._answers = [this._correctAnswer, ...this._incorrectAnswers]
        }
    }

    get category(): string {
        return this._category
    }

    get type(): string {
        return this._type
    }

    get difficulty(): string {
        return this._difficulty
    }

    get question(): string {
        return this._question
    }

    get correctAnswer(): string {
        return this._correctAnswer
    }

    get incorrectAnswers(): string[] {
        return this._incorrectAnswers
    }

    get answers(): string[] {
        return this._answers
    }

    get responded(): boolean {
        return this._responded
    }

    set responded(value: boolean) {
        this._responded = value
    }

    get userAnswer(): string {
        return this._userAnswer
    }

    set userAnswer(value: string) {
        this._userAnswer = value
    }

    get indexAnswer(): number {
        return this._indexAnswer
    }   

    set indexAnswer(value: number) {
        this._indexAnswer = value
    }
}