# Live Crypto Tracker Skills Assessment 

A skills assessment task to build a crypto tracking application that compares a selection of currency pairs. The design for this application is based off a Figma design that I prototyped and uses the Kracken WebSocket API to receive live updates on the selected currency pairs. The following are links to the Figma design for the application as well as this crypto application hosted on Netlify. 

- [Figma Design](https://www.figma.com/file/5jXHDs9TMCPRMoemmEg8CJ/Live-Crypto-Ticker---Tim-Martin?node-id=0%3A1&t=BCdqB2jqYhLrkt02-1)
- [Netlify Site Link](https://charming-heliotrope-ecc547.netlify.app/)

This repository contains the entire code base used to achieve this goal including all source code, full documentation on the contents of this repository and instructions on how to setup a development environment and run the program.

## Setting up a Development Environment

To set up the development environment for this project you must first create a Github account, you can do this by following the link [here](https://github.com/signup).

Next you must make sure several programs are installed on your computer, these programs include:
- [git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)
- A software development environment e.g. [Visual Studio](https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=Community&rel=16)

Once you have these programs installed you can download, modify and run the code contained in this repository.

### Using the the Command Line/Terminal

To connect to Github via the command line you must run a few commands on the command line/terminal. First you must ensure git is added to your environment variables, the process for doing this can be found [here](https://docs.alfresco.com/4.2/tasks/fot-addpath.html).

Then you must create a folder where you wish to store the project and then open this folder in the command line/terminal. Once in this directory you can run the following command.

You can clone the repository to your project folder by running the following command.
```
git clone https://github.com/Niten001/live_crypto_tracker.git
```
You should now have a copy of the master branch of this repository stored locally on your machine for you to edit and run as required.

## Running the project

To run the project on your local machine once you have downloaded a copy of the latest master branch all you have to do is open a command line/terminal window in the folder containing the code for the master branch (Visual Studio has this built into the *Package Manager Console*). From here all you need to do is run the following line of code, to execute the project, adding the arguments as outlined below to specify the requested response.
```
yarn start
```
The output from this project will be availble at [http://localhost:3000](http://localhost:3000)

To run the project in development mode and view live changes to the code you can run the following command in a command line/terminal window.
```
yarn dev
```
To build the above changes into a production ready version of the site available by running `yarn start` you can run the following command in a command line/terminal window.
```
yarn build
```

## Author
- Timothy Martin \([Niten001](https://github.com/Niten001)\)
