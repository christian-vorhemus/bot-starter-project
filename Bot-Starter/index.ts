// General imports --------------------
import { ChatConnector, UniversalBot, LuisRecognizer, MemoryBotStorage, Library } from "botbuilder";
import { appId, appPassword, luisAppUrl } from "./settings";
import * as restify from "restify";
import { LanguageService } from "./common/languageService";

// Dialog imports ---------------------
import helpDialog from "./dialogs/helpDialog";
import greetingDialog from "./dialogs/greetingDialog";
import wikipediaSearchDialog from "./dialogs/wikipediaSearchDialog";
import defaultDialog from "./dialogs/defaultDialog";
import wikipediaDialog from "./dialogs/wikipediaSearchDialog";

const connector = new ChatConnector({
    appId,
    appPassword
});

var ls = new LanguageService({
    type: "local",
    locale: "en"
});

// Load the language file in the global "dictionary" object
ls.loadDictionary();

//Make the locale string available globaly
ls.loadLocale();

var server = restify.createServer();
server.listen(3978, function () {
    console.log("%s listening to %s", server.name, server.url);
});

server.post("/api/messages", connector.listen());

// Create a bot, store session data in memory (not persistent)
var inMemoryStorage = new MemoryBotStorage();
const bot = new UniversalBot(connector, defaultDialog);
bot.set("storage", inMemoryStorage);

// Add library and add dialogs to it
const globalLibrary = new Library("global");
globalLibrary.dialog(helpDialog(bot));
globalLibrary.dialog(wikipediaDialog(bot));
globalLibrary.dialog(greetingDialog(bot));

// Add library to bot
bot.library(globalLibrary);

// Attach LUIS recognizer to bot
bot.recognizer(new LuisRecognizer(luisAppUrl));

export default connector;