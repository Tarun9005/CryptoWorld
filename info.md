## Prerequisites
- Fork or clone CryptoWorld repository
- Install dependencies npm install
- Run the json server on port:3004
- To run the json server run the command "npx json-server --watch db.json --port 3004"
- Run the react project using command "npm start" which shall run on port:3000
- Run Cypress test cases using command "./node_modules/.bin/cypress open"

​
## Know your json server
On running json server, following apis would be available for your use -
​
To Register user - POST - http://localhost:3004/register - expecting data - { Name, Email, ContactNumber, Password , ConfirmPassword}
​
To Login user - POST - http://localhost:3004/login - expecting data - { Email , password }
​
If user Forgot Password - POST - http://localhost:3004/reset - expecting data - { existingEmail , Newpassword , confirmNewPassword}
​
​
## The Coin Gecko API to be used as data source
- To get Top Trending Coins we use the following end point.
(https://api.coingecko.com/api/v3/search/trending)
​
- To get Top Crypto Exchange companies.
https://api.coingecko.com/api/v3/exchanges?per_page=18&page=18
​
- To get Price change and Coin name we use the following endpoint.[Currency change endpoint]
(https://api.coingecko.com/api/v3/coins/markets?vs_currency=<<currecny>>&ids=$<<currency_name>>&order=market_cap_desc&per_page=10&page=1&sparkline=false)
​

​



