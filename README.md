# Bot Starter Project
This is a starter project for bot development using TypeScript + Node.js and Microsoft Bot Framework. The Bot answers question by leveraging the Wikipedia-API and returns a set of relevant articles.

<p align="center">
  <img src="Images/screen.gif">
</p>

## Getting started

### 0) Prerequisites
_Coming soon_
*) Bot-Emulator
*) Node
*) TypeScript

### 1) Install the Bot
Download or clone this repository
```
git clone https://github.com/christian-vorhemus/bot-starter-project.git
```
Open a console/terminal and switch to the Bot-Starter directory (this is the directory where app, bin, package.json, etc. is located). Type
```
npm install
```
to install the necessary node packages. This may take a while.

### 2) Create a new LUIS app
In messenger applications, people expect that they can communicate in natural language. Since users can ask many different questions, we need a kind of "switch" to forward a request to the right dialogue. LUIS is such a natural language processing tool, it takes a sentence and categorizes the input.
To create a new LUIS application, go to https://eu.luis.ai/ and log in with your Microsoft account.
Click on "Import new app" and select the file _BotStarter-LUIS.json_ in the LUIS folder from the source code. You should now see the "Intents" page.

![](Images/intents.png)

Our Bot understands three types of questions: Greeting, Help and None. If you click on "Greeting", you'll see sample sentences (utterances) that indicate that whenever a users types things like this, this should be treated as a greeting in out bot. Thanks to the power of neural networks, you don't have to enter all conceivable greetings, several samples should be enough for LUIS to learn, how greetings typically look like.

To acutally start the learning process, click on "Train" in the upper right corner, this just takes a few seconds.
Next, go to the "Publish" page and click on "Publish".

![](Images/publish.png)

If you have published the Bot in the Europe regions, switch to this tab and copy the endpoint URI

![](Images/keys.png)

Finally, open _Bot-Starter/settings/index.ts_ and replace the variable value with your URI
```
export const luisAppUrl = '<PASTE ENDPOINT HERE>';
```

### 3) Run the Bot
If you have Visual Studio installed, just open
```
Bot-Starter.sln
```
and press F5 to build and run the Bot. The Bot is listening on http://localhost:3978.

Otherwise, just type 
```
npm run build
```
to build the app and 
```
npm start
```
to run the Bot.

### 3) Test the Bot


## Investigate the code

_Coming soon_