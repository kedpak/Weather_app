# Weather App

## Description

This application is an asynchronous non-blocking app built with Node.js. Utilizes API such as google maps and a weather API.

## Usage

This application takes in an address, zip code, or any location through the command line. Witht he usage of google geocode api, the location passed into command line is parsed and returns a longitude/latitude coordinate. These coordinates are passed into the DarkSky api call and returns the current temperature of location inputted.

## Technologies

* Node.js
* yargs
* google maps api
* darksky api

