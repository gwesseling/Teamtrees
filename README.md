# TeamTrees
This project shows the current number of trees planned by the Arbor Day Foundation.

## How does it work?
The data for this web app is collected by a scraper*. This scraper runs once every two weeks to collect the latest data. This data is write to a JSON file and served out by a Node (express) API. That file is being request by this react app to visualize the amount of trees.

**(The scaper is not included is this repository)*
