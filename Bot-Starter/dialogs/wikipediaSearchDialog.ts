import { Session, Message, AttachmentLayout } from "botbuilder";
import { WikipediaSearchService } from "../common/wikipediaSearchService";
import { WikipediaSearchServiceResult } from "../models/WikipediaSearchServiceResult";
import { dictionary, locale } from "../common/languageService";
import { CardFactory } from "../common/cardFactory"

export default [
    (session: Session) => {

        var query = session.message.text;
        session.send(dictionary["SRC_SEARCHING"]);

        var bing = new WikipediaSearchService({
            locale
        });

        bing.search(query).then(function (results: Array<WikipediaSearchServiceResult>) {

            var cards = new CardFactory().createBingSearchCarousel(results);

            var msg = new Message()
                .text(dictionary["SRC_RESULTS"])
                .attachmentLayout(AttachmentLayout.carousel)
                .attachments(cards);

            session.send(msg);

        });

    }
];
