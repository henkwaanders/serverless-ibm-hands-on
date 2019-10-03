# Sequence Tables
Ok, now we want to connect to a database to be able to manage all our tableflips and are ready for full on expansion!

## First: Create Cloudant db
So first thing we need to do is to create a Cloudant database, to be able to connect to. We can do this in the IBM web interface. Have a look at the following link [here](https://cloud.ibm.com/docs/services/Cloudant?topic=cloudant-getting-started) to
* Create a new Cloudant instance
* Create a new Cloudant database
* Generate credentials

In our environment directory, copy the example.json to dev.json and fill in the Cloudant data, given the credentials and the name of the database you created.

## Changes
In this step quite some changes are made. Please have a look at the files. There you will notice several things:
* A Cloudant [package](https://github.com/serverless/serverless-openwhisk#binding-packages) is used
* A [sequence]((https://github.com/serverless/serverless-openwhisk#writing-sequences)) has been created
* A different API [response type](https://github.com/serverless/serverless-openwhisk#connecting-http-endpoints) is used
* [Environment data](https://serverless.com/framework/docs/providers/openwhisk/guide/variables/) was put in a seperate file
* We wrote less code then in the previous step! (╯°□°）╯︵ ┻━┻

# Deploy
* Copy example.json to dev.json
* Fill in the credentials in dev.json
* ```sls deploy```
* Done! ┻━┻︵ヽ(`Д´)ﾉ︵ ┻━┻
* See in the output of "sls deploy" your API endpoint and that its connected to the sequence

# Play
* Add some documents in the Cloudant database.
  * Go to the Cloudant Dashboard
  * In the database add some documents with the following format:
  ```
  {
    "data": "(╯°□°）╯︵ ┻━┻"
  }
  ```
  Don't be shy to add more info you want to store, like: tags, description..
* call your API endpoint and replace ```{id}``` with an ID of one of your Cloudant documents
  * Open the link in your browser and see your table flips.
