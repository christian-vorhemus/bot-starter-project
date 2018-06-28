import { Session } from "botbuilder";
import { dictionary } from "../common/languageService";

const helpDialog = (bot) => {
    var d = bot.dialog("help", [
        (session: Session, args, next) => {
            session.endDialog(dictionary["HLP_GENERAL"]);
        }
    ]).triggerAction({
        matches: "Help"
        });
    return d;
}

export default helpDialog;