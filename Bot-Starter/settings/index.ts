declare function require(moduleName: string): any;

if (process.env.NODE_ENV !== "production") {
    // Used only in development to load environment variables from local file.
    const dotenv: any = require("dotenv");
    dotenv.config();
}

// Use these keys for bot authentication. Not needed for local development
export const appId = process.env.appId;
export const appPassword = process.env.appPassword;

export const luisAppUrl = '<PASTE KEY HERE>';