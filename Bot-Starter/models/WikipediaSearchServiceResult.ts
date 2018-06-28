import { IWikipediaSearchServiceResult } from '../interfaces/IWikipediaSearchService';


class WikipediaSearchServiceResult implements IWikipediaSearchServiceResult {

    title?: string;
    snippet: string;
    url: string;

    constructor(title: string, snippet: string, url: string) {
        this.title = title;
        this.snippet = snippet;
        this.url = url;
    }

}

export { WikipediaSearchServiceResult };