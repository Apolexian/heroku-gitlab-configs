# Setup

The configs here are setup to:

* Make an ec2 instance which can be used as a gitlab runner
* Dockerize a spring boot app
* Setup a gitlab ci/cd pipeline to test, build and deploy the app to heroku

To setup the runner run the `deploy_runners` script in the `ec2-runners` directory. Make sure to have the AWS CDK installed and the aws account id and region exported as environmental variables.

After the ec2 instance spins up, ssh into it and install `java 11`, `docker` and register the gitlab runner (the config assumes the tag ec2 and shell as runner).

Change the name of the jar in the `Dockerfile` to the name of your spring boot jar.

Set `HEROKU_API_KEY` as an environmental variable in the runners configuration on the gitlab repo. Replace `APP_NAME` and `HEROKU_APP_NAME` with your corresponding values in the config.

Add any environmental variables the spring boot app uses as environmental variables in your heroku app.
