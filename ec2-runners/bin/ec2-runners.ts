#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { Ec2RunnersStack } from '../lib/ec2-runners-stack';

const app = new cdk.App();
new Ec2RunnersStack(app, 'Ec2RunnersStack');
