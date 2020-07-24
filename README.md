This is the tech test for The Spectator. The aim is to reproduce their site to the best of my ability. Here is a link: https://www.spectator.co.uk/

I have decided to do this technical test in React as I am familiar with it, the setup is relatively simple and the app will be easier to scale if further development is needed. 

To use this app, first clone this repo and go inside of it

```
$ git clone git@github.com:stellenberger/the_spectator.git
```

CD inside of that directory...

```
$ cd the_spectator 
```

Download the dependencies in order to run this application

```
$ npm install 
```

You will then need to get and put in your API key to get the news articles. Follow this link to get an API key: https://newsapi.org/

Once you have the API key, create a .env file like so...

```
$ touch .env
```

Then open it, and put the API key like so: 

```
$ open .env
```

```
// inside of .env

REACT_APP_API_KEY=[your_api_key_goes_here]
```

Then run the app using npm start

```
$ npm start
```

To run the tests, use 

```
$ npm test
```