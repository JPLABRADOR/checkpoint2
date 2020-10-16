# checkpoint2
Automated testing for the "Automation-Basics" web application. Browser automation created using Nightwatch.js.

Website: https://devmountain-qa.github.io/Automation-Basics/build/

#### Instructions:
Install NodeJS (includes npm): https://nodejs.org/en/download/

Open a terminal or command line and install nightwatch globally on your machine:
```
npm i -g nightwatch
```
Navigate to your local project folder.
Clone the following repository: 
```
git clone https://github.com/JPLABRADOR/checkpoint2.git
```
Navigate to the newly cloned directory:
```
cd checkpoint2
```
Install chromedriver for the project:
```
npm install chromedriver --save-dev
```
Execute the "checkpoint2" automation:
```
nightwatch tests/automationBasics.js
```
