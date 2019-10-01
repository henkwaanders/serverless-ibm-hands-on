# Table Flip API
The second step is to actually create an API with parameters. Let's start with a simple one

## What changed
* serverless.yml now has an event
* handler.js has code to interpret

## Deploy
When you do ```serverless deploy``` you will now also see a section **endpoints (api-gw)**, where the url of your new API is shown. Put that url in your browser to play with the parameters.

## Parameters
* **/tableflip?random=1** to get a random tableflip
* **/tableflip?id=** to get a certain id (between -2 and 2). Use negative number to put that table back and calm down.