# Jupiter One Take Home Test

## Prerequisets

I used node 15.14.0, so its a good idea to install that version to run this server.

You can use a node version manager to switch between versions, <a href="https://www.npmjs.com/package/n">I'm partial to "n"</a>
You can also use NVM

Then run `n install 15.14.0` or `nvm install 15.14.0`

## Getting Started


1. Run `npm install`
2. Run `echo PWND_KEY=<tokenvalue>" >> .env` (this value is present in an email)
3. Run `npm start`

Go check out <a href="https://pwnd-frontend.herokuapp.com">pwnd-frontend.herokuapp.com</a> to see a live version.


## Some notes

I made the concious choice to split the front and back ends of this service - if ever you have to make calls to a protected service with a sensitive token, its not safe to house the frontend and the backend under the same roof. With a split service, you can use API keys / tokens through environment variables or load them through secrets, and only let authenticated
calls come through to use those keys against third party resources. Just a safer passthrough in my experience, even though its a bit of extra setup.


## Now _I've_ got questions for _you_


<img src="https://media.giphy.com/media/MQwnNsDJ1MJZ0E0w1u/giphy.gif" />

I try to make it a habit to take in feedback, so feel free to leave comments on stuff, fiddle around, suggest edits etc. I don't get hard feelings, unless you think Han shot second.

