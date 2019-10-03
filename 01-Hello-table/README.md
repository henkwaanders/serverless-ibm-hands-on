# Hello Table
In this hands-on on we will aspire to become the de-facto standard for everything related to table flipping. For that to become reality we need to start small, with a simple function :).

## Start a project
We will use the serverless.com CLI to create a new project. Use the following commands to get started:
* ```sls create --template openwhisk-nodejs --path 01-Hello-table```
* ```cd 01-Hello-table```
* ```npm install```
With that command you will have a directory similar to this one.

## IBM Cloud login
Now that we have a function, we need to bring it to the cloud. First step is to log into the correct space, where we want to deploy. This can be done by having a look at the [functions cli page](https://cloud.ibm.com/functions/learn/cli). You should:
* Login
  * ```ibmcloud login -a cloud.ibm.com -o [ORG] -s [SPACE]"```
* Set the organisation and namespace (if you are already logged in)
  * ```ibmcloud target -o [ORG] -s [SPACE]```

## Set the credentials
Now that we are logged in to the IBM Cloud, we do need to let the serverless.com OpenWhisk plugin know that we are connected to that space, to be able to deploy. You can do that by using the following command:
* ```ibmcloud fn property get --auth```
* ```ibmcloud fn property set --auth AUTHKEY```
* ```See [namespace-settings](https://cloud.ibm.com/functions/namespace-settings) for the key.```

Using this command a .wskprops file will be created in your user home directory. This will be used by the serverless.com cli to authenticate. So this step needs to be done every time you change the space / org.

## DEPLOY!
Now that we are all set to deploy, we only need to invoke one command to deploy, while being inside your project directory:
```serverless deploy```
And see the magic happen!

## Have a look
Go to [cloud function actions](https://cloud.ibm.com/functions/actions) to have a look at your action and play around with it. OR even better, invoke the function in the commandline to see it in action:
* ```serverless invoke --function hello```
* ```serverless invoke --function hello --data '{"name": "Table"}'```
* To see the logs you can use the folllowing command:
```serverless logs -f hello -t```
