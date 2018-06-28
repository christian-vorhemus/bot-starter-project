declare function require(moduleName: string): any;

if (process.env.NODE_ENV !== "production") {
    // Used only in development to load environment variables from local file.
    const dotenv: any = require("dotenv");
    dotenv.config();
}

const luisAppId = process.env.luisAppId;
const luisAPIKey = process.env.luisAPIKey;
const luisAPIHostName = process.env.luisAPIHostName;

// Export settings
export const appId = process.env.appId;
export const appPassword = process.env.appPassword;
export const luisAppUrl = 'https://' + luisAPIHostName + '/luis/v2.0/apps/' + luisAppId + '?subscription-key=' + luisAPIKey;