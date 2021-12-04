# Crypto Class
 Hello Welcome to my application CryptoClass. This is an Crypto investing platform user can come to to get updates on the latest crypto pricing using the "Explore Crypto" tab, keep track of a watch list for their favorite crypto currency on the "Your Watchlist" tab and Dive deeper into crypto currency patterns and information on the "Investigate" tab. This application is made for American users in that all crypto currency values are displayed in USD$.

This application uses Coinbases API for all currency information and uses PostgresSql to store user specific information


# Prerequisites -
Before you continue, ensure you have met the following requirements. *You have installed the latest version of Node *You have installed the latest version of JavaScript

# Built With -
React, Typescript, Node, Express, Material UI.

# Installation and Getting started-
From the Root directory of the app run the terminal command 'npm install' or 'yarn install'.
Start the webpack compiler with the terminal command 'npm run build'.
Start the server with the terminal command 'npm run start'.
The application will be accessible on http://localhost:3000/

# Requirements
1) Use Modern JS Framwork -
  Application build with React.js
2) 3 user interactions -
  Explore Crypto Tab, Your Watchlist Tab, and Investigate Tab. The User can Add to and remove crypto currencies from their watch list from the Explore Crypto Tab and the Your Watchlist tab.
3) Specific Architectural Pattern -
  TBD
4) BackEnd Service with CRUD operations -
  Sign Up with a Username in the Database implements a CREATE operation in postgress Database.
  LogIn with a Username in the Database implements a READ operation of postgress Database.
  "Add to Watchlist" and "Remove" buttons implements an UPDATE operation of postgress Database.
  DELETE TBD
5) 3rd Party API -
  Application integrated with Coinbase API for all crypto currency information and pricing.
6) Use At least 5 Material UI components -
  At the time of counting used a total of 12 UI Components from Material UI including AppBar, Button, Modal, Tabs, and Card.
7) A reusable component that I created and used -
  TBD

# TODO-
1) fix typescript
2) implement Delete Account to DELETE
3) clarify architectural pattern
4) reusable component
5) complete a lighthouse and fix accessibility issues
6) improve watchlist storage in db

# Application structure
TBD

# API Payload
TBD
# Challenges
1) First time using type script
2) vetting APIs - What APIs have what information available? How accessible is it? rate limitations? costs involved? How clear is the documentation on using the API?
  - Getting familiar with Crypto Currency terms and what they mean.
  - Coinbase documentation harder to access/find/understand. (timestamp? myString := DateTimeToStr(UnixToDateTime(Epoch));)
  - Polygon seemed easy to understand. However nice 'snapshots' which were available at a cost, and also had strong rate limitations
  - Binance not available in Texas.

3) Developing scope and Prioritizing tasks! (3 interations = three clicks --> or 3 tabs. Did I take on too much?)
4) First React update error due to component unmount issue.



