# Prerequisites
Before beginning with the first example, we need to install some tools to be able to function. We will be using the command line, so begin with that is needed.

## 1. IBM Cloud login
You can sign up for a free account at [cloud.ibm.com](https://ibm.biz/BdzJU2){target=_blank} If you do not already have one.
Also make sure to create a space in a certain region, to create our functions in.

### 1a. Create a Space
go [here](https://cloud.ibm.com/docs/account?topic=account-orgsspacesusers){target=_blank} to create a cloudfoundry org and space.
* Create a space called "ibm-hands-on"
Currently this step is necessary, as serverless OpenWhisk support for the new way of IBM IAM is still under development, see [here](https://github.com/serverless/serverless-openwhisk/issues/169){target=_blank}.

## 2. IBM (function) CLI
After logging in, we need to install the IBM Cloud cli, together with its functions plugin, so that we can deploy functions from our CLI.
Go [here](https://cloud.ibm.com/functions/learn/cli){target=_blank} after logging in to the IBM cloud, and follow the instructions

## 3. Serverless.com CLI and OpenWhisk plugin
Install the serverless cli and the OpenWhisk plugin by following [this](https://serverless.com/framework/docs/providers/openwhisk/guide/installation/){target=_blank} link. Openwhisk is the technology behind IBM Cloud functions.
