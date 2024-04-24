export class Apod {
    private _date: string = ''
    private _explanation: string = ''
    private _hdurl: string = ''
    private _mediaType: string = ''
    private _serviceVersion: string = ''
    private _title: string = ''
    private _url: string = ''
    private _isVideo = false
    private _isImage = false
    private _videoID = ''

    constructor(json?: any) {
        if(json) {
            this._date = json.date
            this._explanation = json.explanation
            this._hdurl = json.hdurl
            this._mediaType = json.media_type
            this._serviceVersion = json.service_version
            this._title = json.title
            this._url = json.url
            if(json.media_type === 'video') {
                this._isVideo = true
                this._videoID = this.getVideoID()
            }
            if(json.media_type === 'image') {
                this._isImage = true
            }
        }
    }

    getVideoID(): string {
        const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        let match = this.url.match(regExp);
        return (match&&match[7].length==11)? match[7] : '';
    }   

    get date(): string {
        return this._date
    }

    get explanation(): string {
        return this._explanation
    }

    get hdurl(): string {
        return this._hdurl
    }

    get mediaType(): string {
        return this._mediaType
    }

    get serviceVersion(): string {
        return this._serviceVersion
    }

    get title(): string {
        return this._title
    }

    get url(): string {
        return this._url
    }

    get isVideo(): boolean {
        return this._isVideo
    }

    get isImage(): boolean {
        return this._isImage
    }

    get videoID(): string {
        return this._videoID
    }
}