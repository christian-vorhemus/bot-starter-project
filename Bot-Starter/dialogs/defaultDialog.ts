import { Session, Message, AttachmentLayout } from "botbuilder";
import { WikipediaSearchService } from "../common/wikipediaSearchService";
import { WikipediaSearchServiceResult } from "../models/WikipediaSearchServiceResult";
import { dictionary, locale } from "../common/languageService";
import { CardFactory } from "../common/cardFactory"

export default [
    (session: Session) => {
        session.endDialog(dictionary["COM_DEFAULT"]);
    }
];
