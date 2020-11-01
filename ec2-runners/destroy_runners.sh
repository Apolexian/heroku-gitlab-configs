if [[ -z "${ACCOUNT_ID}" ]]; then
    echo "ACCOUNT_ID not found in environmental variables exiting..."
    exit 1
else
    ACCOUNT_ID="${DEPLOY_ENV}"
fi

cdk destroy