export class PlayList {
    name:         string;
    user:         string;
    itemPlayList: ItemPlayList[];
    id:           string;
    createdDate:  Date;
    constructor() {
        this.id = '';
        this.name = '';
        this.user = '';
        this.itemPlayList = [];
        this.createdDate = new Date();
      }
}

export class ItemPlayList {
    idYT:          string;
    idPlayList:    string;
    title:         string;
    description:   string;
    embedHtml:     null;
    contentDetail: null;
    thumbnails:    Thumbnails;
    constructor() {
        this.idYT = '';
        this.idPlayList = '';
        this.description = '';
        this.title = '';
        this.embedHtml = null;
        this.contentDetail = null;
        this.thumbnails = new Thumbnails();
    }
}

export class Thumbnails {
    default: Default;
    medium:  Default;
    high:    Default;
    constructor() {
        this.default = new Default();
        this.medium = new Default();
        this.high = new Default();
    }
}

export class Default {
    url:    string;
    width:  number;
    height: number;
    constructor() {
        this.url = '';
        this.width = 0;
        this.height = 0;
    }
}