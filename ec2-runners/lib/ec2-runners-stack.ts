import * as cdk from '@aws-cdk/core';
import * as ec2 from "@aws-cdk/aws-ec2";

export class Ec2RunnersStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create new VPC
    const vpc = new ec2.Vpc(this, 'gitlab-runner-vpc');

    // Open ports for ssh, http and https
    const runnerSecurityGroup = new ec2.SecurityGroup(this, 'gitlab-runner-security-group', {
      vpc,
      securityGroupName: "gitlab-runner-sg",
      description: 'Allow ssh access to ec2 gitlab-runner instances from anywhere',
      allowAllOutbound: true
    });
    runnerSecurityGroup.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(22), 'allow public ssh access')
    runnerSecurityGroup.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(443), 'allow public https access')
    runnerSecurityGroup.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(80), 'allow public http access')
    const awsAMI = new ec2.AmazonLinuxImage({ generation: ec2.AmazonLinuxGeneration.AMAZON_LINUX_2 });

    // Instance details
    const ec2Instance = new ec2.Instance(this, 'gitlab-runner-instance', {
      vpc,
      instanceType: ec2.InstanceType.of(ec2.InstanceClass.T3, ec2.InstanceSize.NANO),
      machineImage: awsAMI,
      securityGroup: runnerSecurityGroup
    });
  }
}
