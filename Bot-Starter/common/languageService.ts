import { ILanguageService, ILanguageServiceSettings } from '../interfaces/ILanguageService';

export var dictionary: any;
export var locale: any;

class LanguageService implements ILanguageService {

    private type: string;
    private locale: string;

    constructor(settings: ILanguageServiceSettings) {
        this.locale = settings.locale;
        this.type = settings.type;
    }

    loadDictionary() {

        if (this.type == "local") {

            switch (this.locale) {
                case "en": {
                    dictionary = require("../lang/en");
                    break;
                }
                default: {
                    dictionary = require("../lang/de");
                    break;
                }
            }

        }

    }

    loadLocale() {
        locale = this.locale
    }

}

export { LanguageService };