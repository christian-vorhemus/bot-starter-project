import { WikipediaSearchServiceResult } from '../models/WikipediaSearchServiceResult';
import { dictionary } from "../common/languageService";

class CardFactory {

    private type: string;
    private locale: string;

    createBingSearchCarousel(results: Array<WikipediaSearchServiceResult>): Array<any> {

        var cardsCarousel = [];

        results.forEach(function (result) {

            var card = {
                contentType: "application/vnd.microsoft.card.adaptive",
                content: {
                    type: "AdaptiveCard",
                    "body": [
                        {
                            "type": "TextBlock",
                            "text": result.title,
                            "weight": "bolder",
                            "size": "medium"
                        },
                        {
                            "type": "TextBlock",
                            "text": result.snippet,
                            "wrap": true
                        }
                    ],
                    "actions": [
                        {
                            "type": "Action.OpenUrl",
                            "title": dictionary["SRC_OPENARTICLE"],
                            "url": result.url
                        }
                    ]
                }
            }

            cardsCarousel.push(card);

        })

        return cardsCarousel;

    }

}

export { CardFactory };