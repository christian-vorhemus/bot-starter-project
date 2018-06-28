import { Session } from "botbuilder";
import { dictionary } from "../common/languageService";

const greetingDialog = (bot) => {
    var d = bot.dialog("greeting", [
        (session: Session, args, next) => {
            session.endDialog(dictionary["GRT_HELLO"]);

            // Switch to another dialog
            // session.beginDialog("help");
        }
    ]).triggerAction({
        matches: "Greeting"
    });
    return d;
}

export default greetingDialog;
