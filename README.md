# :sparkles: Flex Development, LLC :sparkles:
###### Pixel perfect designs, every time. Web and mobile projects completed by designer and developer, Lexus Drumgold.

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

#### Overview
[What is Flex Development?](#what-is-flex-development)  
[Getting Started](#getting-started)  
[Development](#development)  
[Deployment](#deployment)  

### What is Flex Development?
Flex Development is a design and development company specializing in web and
mobile projects.

Hi! Lex here. My name is Lexus Drumgold, but most people call me Lex. I'm the
CEO of Flex Development. As both a designer and developer, I use industry
standard techniques and practices to implement creative web and mobile
solutions.

#### Experience
My design experience includes using Adobe Creative Suite, Sketch, and UXPin to
wireframe and prototype, as well as create simple, yet aesthetically pleasing
identity palettes and design systems. I also bring these designs to life using
front end technologies such as Sass, React.js, and mobile tools like React
Native. Additionally, I also have experience designing and building APIs using
Node.js to support these client side websites and applications.

For the last four years, I've worked on a plethora of projects, in which I not
only created or integrated a cohesive brand identity, but increased brand value
as well. When I'm not designing or developing, I participate in design critiques
and code reviews to assess contribution to project goals and adherence to
industry standards as well.

**To work with me or know more about my professional experience, get in touch with me at <lex@lexusdrumgold.design>**

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To work on this project, you'll need to have Node and Git installed. If you don't already, you can download Node [here](https://nodejs.org/en/download/) and Git [here](https://git-scm.com/downloads).

### Installing

Follow the steps below to get your development enviroment set up.

1.  Pull the repo. Open the terminal and and run the following:

    ```
    git clone https://github.com/lexusdrumgold/flexdevelopment-gulp.git
    ```

2.  After cloning the repo, open the project. In the project directory, run the following command:

    ```
    npm install
    ```

    in the terminal. This will install the necessary dependencies for the project. A list of those dependencies can be found in `package.json`.

3. Install Firebase command line tools using npm:
    ```
    npm install -g firebase-tools
    ```  
    
4. To set up the Firebase targets, run the following in your terminal:
    1. `firebase target:apply hosting staging <FIREBASE_STAGING_ID>`
    2. `firebase target:apply hosting production <FIREBASE_PRODUCTION_ID>`


## Development
Open a new terminal tab and run `npm run dev`. This will run `gulpfile.js`,
which compiles your sass files and babelfies your JS files. It will also start a
local server that serves the `public` folder.

## Deployment
If necessary, update `.firebaserc` and `firebase.json` to configure Firebase
Hosting.

**Staging**  
Deploy using one of the following options:
- Run `npm run deploy-staging` in your terminal to deploy to Firebase.
- Run `firebase deploy -m "<YOUR_MESSAGE>" --only hosting:staging` to
  deploy with an optional deploy message.

**Production**  
Deploy using one of the following options:
- Run `npm run deploy-production` in your terminal to deploy to Firebase. The
  predeploy hook will create a production build of the project.
- Run `firebase deploy -m "<YOUR_MESSAGE>" --only hosting:production`
  to deploy with an optional deploy message.
