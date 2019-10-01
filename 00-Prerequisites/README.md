# Prerequisites
Before beginning with the first example, we need to install some tools to be able to function. We will be using the command line, so begin with that is needed. 

## 1. IBM cloud login
You can sign up for a free account at [cloud.ibm.com](https://cloud.ibm.com/) If you do not already have one
Also make sure to create a space in a certain region, to create our functions in.

### 1a. Create a Space
go [here](https://cloud.ibm.com/docs/account?topic=account-orgsspacesusers) to create a cloudfoundry org and space.
* Create a space calles "ibm-hands-on"
Currently this step is nessecary, as serverless openwhisk support for the new way of IBM spaces is still under development, see [here](https://github.com/serverless/serverless-openwhisk/issues/169)

## 2. IBM (function) CLI
After logining in, we need to install the IBM cloud cli, together with its functions plugin, so that we can deploy functions from our CLI.
Go [here](https://cloud.ibm.com/functions/learn/cli) after logging in to the IBM cloud, and follow the instructions

## 3. Serverless.com CLI and openwhisk plugin
Install the serverless cli and the openwhisk plugin by following [this](https://serverless.com/framework/docs/providers/openwhisk/guide/installation/) link. Openwhisk is the technology behind IBM cloud functions.
