export class SearchYTResult {
    kind:          string;
    etag:          string;
    nextPageToken: string;
    regionCode:    string;
    pageInfo:      PageInfo;
    items:         Item[];
    /**
     *
     */
    constructor() {
        this.kind='';
        this.etag='';
        this.nextPageToken='';
        this.regionCode='';
        this.pageInfo=new PageInfo();
        this.items=[];
        
    }
}

export class Item {
    kind:    string;
    etag:    string;
    id:      ID;
    snippet: Snippet;
    constructor()
    {
        this.kind = '';
        this.etag = '';
        this.id = new ID();
        this.snippet = new Snippet();
    }
}

export class ID {
    kind:    string;
    videoId: string;
    constructor()
    {
        this.kind = '';
        this.videoId = '';
    }
}

export class Snippet {
    publishedAt:          Date;
    channelId:            string;
    title:                string;
    description:          string;
    thumbnails:           Thumbnails;
    channelTitle:         string;
    liveBroadcastContent: string;
    publishTime:          Date;
    constructor()
    {
        this.publishedAt = new Date();
        this.channelId = '';
        this.title = '';
        this.description = '';
        this.thumbnails = new Thumbnails();
        this.channelTitle = '';
        this.liveBroadcastContent = '';
        this.publishTime = new Date();
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

export class PageInfo {
    totalResults:   number;
    resultsPerPage: number;
    constructor()
    {
        this.resultsPerPage = 0;
        this.totalResults = 0;
    }
}