## Local Installation Steps for MacOS iOS

### Installing dependencies
```
brew install node
brew install watchman
brew tap AdoptOpenJDK/openjdk
brew cask install adoptopenjdk8

```
### React Native CLI
``` 
npm install -g react-native-cli

```

### Download Xcode 

[Click here to download Xcode](https://apps.apple.com/us/app/xcode/id497799835?mt=12)

### Clone Repo
``` 
git clone https://github.com/rightbrainpapi/aWord.git

``` 

### Front-end Setup
```
cd aWord
npm install
react-native run-ios
```
- The commands listed above should open a new terminal window that builds the app and the iOS simulator

### Back-end Setup 

#### Run Mongo Database

Open a new terminal tab
```
cd Server_Side
npm install
mongod

```

Open additional terminal tab
`cd Server_Side/`
`nodemon`

#### Seed Mongo Database

Open a Fourth terminal tab

`cd Server_Side/`
`node db/seed.js` 

