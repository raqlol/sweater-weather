# sweater-weather
An easy weather app that lets you know how it feels outside.

This is my first API project, inspired by San Francisco's fickle weather.
Often the actual temperature in SF is deceiving and I was sick of leaving the house underdressed.

My goal was to create an easy to use app that lets you know what it actually feels like outside.

I used the Weather Underground API to pull the current conditions based on zip code and updated the page to reflect what it feels like.
The initial implementation used autodetect IP to guess your location, but because of some inaccurate feedback, I added the input area for your zip code.
The zip code and resulting conditions are saved in a Mongo database to review and find ways to enhance usability in future releases.

This project is full-stack with focus on the frontend. Special thanks to clowell for help with getting everything online.

The site was developed using vanilla Javascript for the frontend and Node, Express, and Mongo on the backend.

Please visit the site at weather.raqlol.com
