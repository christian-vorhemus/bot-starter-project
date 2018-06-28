export interface ILanguageService {
    loadDictionary();
}

export interface ILanguageServiceSettings {
    type?: string;
    locale?: string;
}