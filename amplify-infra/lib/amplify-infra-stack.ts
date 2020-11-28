import * as cdk from '@aws-cdk/core';
import * as codecommit from '@aws-cdk/aws-codecommit'
import * as amplify from '@aws-cdk/aws-amplify'

export class AmplifyInfraStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Source control repository:
    const amplifyCdkGatsbyRepo = new codecommit.Repository(
      this,
      'AmplifyCdkGatsbyRepo',
      {
        repositoryName: 'amplify-cdk-gatsby-repo',
        description: 'Codecommit repository that will be used as the source repository for the gatsby app and cdk app project'
      }
    )
  }
}
