### Mars Weather App

### 👀 See live: https://mars-weather-app-alpha.vercel.app/ 👈

# Purpose:

- Collect weather data from Curiosity Rover Weather API and...
- compile the data into a user-friendly weather app with a familiar UI.

# Features

## 🏠 'Home' section

- Hero section showing latest date, average temperatures, UV radiation index, air pressure, sunrise & sunset times.
- Toggle Degrees Centigrade vs Fahrenheit.

## 📰 'Latest' section

- Show all the data from 'Home' section expanded with lowest/highest ground temperature, lowest/highest air temperature.

## 📊 'Explore' section

Cards featuring all available data from the mission start:

- Sol number (Mars day no.)
- Sky (atmosphere opacity, eg. Sunny)
- UV Radiation Index: Low/Moderate/High
- Solar longitude (LS): eg. 40 deg
- Highest ground temperature: eg. "-5 'C/'F'"
- Lowest ground temperature
- Highest air temperature
- Lowest air temperature
- Air Pressure in Pascals: eg. '842 Pa'
- Season: eg. 'Month 2'
- Sunrise: 06:17
- Sunset: 18:06
- Terrestrial date: eg. "2023-03-21"
- Mars date: eg. "Sat Cap 28 220"
- Item Id from API: eg. "3588"

Earth dates are converted to Martian dates in accordance with Darian Calendar: https://en.wikipedia.org/wiki/Darian_calendar

## 🖼️ 'Gallery' section

- tba

## 📙 'About' section

- tba

# Tech

- React
- Next.js
- Tailwind CSS
- Eslint

<div align="left">
  <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&style=flat-square&color=5e17eb&labelColor=000000" alt="PRs welcome!" />
