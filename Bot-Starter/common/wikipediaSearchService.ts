import * as https from 'https';
import { IWikipediaSearchServiceSettings } from '../interfaces/IWikipediaSearchService';
import { WikipediaSearchServiceResult } from '../models/WikipediaSearchServiceResult';
import { Promise } from 'es6-promise';

class WikipediaSearchService {

    private locale: string;

    constructor(wikipediaSearchServiceSettings: IWikipediaSearchServiceSettings) {
        this.locale = wikipediaSearchServiceSettings.locale;
    }

    search(searchTerm: string): Promise<Array<WikipediaSearchServiceResult>> {

        var locale = this.locale;

        return new Promise(function (resolve, reject) {

            var request_params = {
                method: "GET",
                hostname: locale+".wikipedia.org",
                path: "/w/api.php?action=query&list=search&srsearch=" + encodeURI(searchTerm) + "&format=json",
                headers: { }
            };

            console.log(request_params);

            let req = https.request(request_params, function (response) {
                let body = '';
                response.on('data', function (d) {
                    body += d;
                });
                response.on('end', function () {

                    body = JSON.parse(body);

                    var queryResults = body["query"]["search"];
                    var searchResults: Array<WikipediaSearchServiceResult> = [];

                    queryResults.forEach(function (result) {
                        searchResults.push(new WikipediaSearchServiceResult(result.title, result.snippet, "https://" + locale + ".wikipedia.org/wiki/" + encodeURI(result.title)));
                    })

                    resolve(searchResults);
                });
                response.on('error', function (e) {
                    console.log('Error: ' + e.message);
                });
            });
            req.end();

        });

    }

}

export { WikipediaSearchService };