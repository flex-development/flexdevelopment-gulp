# Deployment

Below you'll find instructions on how to deploy to Firebase.

## Overview

[Prerequisites](#prerequisites)  
[Deploy to Firebase](#deploy-to-firebase)  

## Prerequisites

Follow the [Guide to Contributing](./CONTRIBUTING.md) for detailed instructions on
development, testing, and making a pull request.

## Deploy to Firebase

Before deploying, be sure to:

1. Set up [Deploy Targets][2] if necessary
2. Review the [Firebase Launch Checklist][3]

When ready to deploy, you have a few options:

- Run `firebase deploy` in the project directory.
- Run `firebase deploy -m "<DEPLOY_MESSAGE>"` in the project directory.
- [Deploy specific Firebase services][4]  

After the deployment is complete, you'll see something similar to the following in your terminal:

```bash
✔  Deploy complete!

Project Console: https://console.firebase.google.com/project/flexdevelopmentllc/overview
Hosting URL: https://flexdevelopmentllc.firebaseapp.com
Hosting URL: https://flexpack.firebaseapp.com
```

[1]: https://firebase.google.com/docs/cli  
[2]: https://firebase.google.com/docs/cli/targets
[3]: https://firebase.google.com/support/guides/launch-checklist
[4]: https://firebase.google.com/docs/cli#partial_deploys
