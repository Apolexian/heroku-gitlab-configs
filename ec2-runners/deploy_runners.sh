#!/bin/sh

if [[ -z "${ACCOUNT_ID}" ]]; then
    echo "ACCOUNT_ID not found in environmental variables exiting..."
    exit 1
else
    ACCOUNT_ID="${DEPLOY_ENV}"
fi

if [[ -z "${AWS_REGION}" ]]; then
    echo "AWS_REGION not found in environmental variables exiting..."
    exit 1
else
    AWS_REGION="${AWS_REGION}"
fi

cdk bootstrap
cdk diff
cdk deploy
