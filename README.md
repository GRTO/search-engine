# Getting Started with the search engine project

Here I have a deployed version of the application, you can see the final of the app depleyed in the following link - [Search Engine Platform](search-engine-phi.vercel.app).

![Search Engine App](https://i.ibb.co/m93gjSm/Screen-Shot-2022-06-14-at-00-58-40.png)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It is a search engine that uses Google and Azure api rest.

# Before run the project

To run the project, you have to create first you have to update the `.env` file that is provided in the project.

## For Google keys

To get the `REACT_APP_GOOGLE_SEARCH_API` and `REACT_APP_GOOGLE_SEARCH_ID` you can go to the [Custom Search Google API](https://developers.google.com/custom-search/v1/overview) engine provided by Google.

- First you have to create and configure your Programmable Search Engine [here](https://programmablesearchengine.google.com/). Doing so, you will get `REACT_APP_GOOGLE_SEARCH_ID` that it will be the Search Engine ID.

> **Note:** For this project, we are going to use the Custom Search JSON API, and this has a limit of 10,000 queries per day.

- Then, you have to get the API key for Custom Search JSON API. Just click the blue button that says `Get a Key` and select any project to enable the Custom Search API. Then, assi9gn `REACT_APP_GOOGLE_SEARCH_API` with this key in your `.env` file.

## For Azure keys

To get the `REACT_APP_AZURE_SUBSCRIPTION_KEY`, you can go to the [Bing Web Search API](https://www.microsoft.com/en-us/bing/apis/bing-web-search-api) and create your own Bing Resource.

- You just have to click try it now and then select the free trial version.

> **Note:** For this project, we are going the free trial version, this means we just can run 1000 search per month. More details [here](https://www.microsoft.com/en-us/bing/apis/pricing).

- When you get the key, just replace it on the `REACT_APP_AZURE_SUBSCRIPTION_KEY`

# How to run the project

After getting the credentials, you have to run `npm run start`. This will run project in http://localhost:3000/.

# Testing

If you want to test the project, just run `npm run test`.

# Help
Contact me at gerson.toribio@pucp.pe
