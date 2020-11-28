import * as cdk from '@aws-cdk/core';
import * as amplify from '@aws-cdk/aws-amplify'

export class AmplifyInfraStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Source control repository:
    const amplifyCdkGatsbyAppRepo = new amplify.App(
      this,
      'amplify-cdk-gatsby-app-repo',
      {
        sourceCodeProvider: new amplify.GitHubSourceCodeProvider({
          owner: 'MauriceWebb',
          repository: 'amplify-cdk-gatsby',
          oauthToken: cdk.SecretValue.secretsManager(
            'global/gitHubPAT', // secret-name
            {
              jsonField: 'gitHubPAT' // secret-key
            }
          )
        })
      }
    )

    const masterBranch = amplifyCdkGatsbyAppRepo.addBranch('master')
  }
}
