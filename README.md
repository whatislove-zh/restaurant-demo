# Introduction

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

- Restaurant DEMO.
- Web app for restaurant business .

## :ledger: Index

- [About](#beginner-about)
- [Usage](#zap-usage)
  - [Installation](#electric_plug-installation)
  - [Commands](#package-commands)
  - [Build](#hammer-build)
  - [Deployment](#rocket-deployment)
- [Community](#cherry_blossom-community)
  - [Contribution](#fire-contribution)
- [Resources](#page_facing_up-resources)
- [Gallery](#camera-gallery)
- [Learn more](#cherry_blossom-learn-more)

## :beginner: About

Web app for a restaurant.
The project implements authorization using a login and password or through Google with the help of Firebase.
Product information is taken from my own api on a simple json server.
There is also an option to add products to the basket and this basket will be synchronized with your account, so the contents of the basket will be available on any device.
There is also a search and various sorting rules for products
The fields of the authorization form are validated using the react-hook-forms library

## :zap: Usage

How to use this project.

### :electric_plug: Installation

1. Get a free Firebase config data at [https://console.firebase.google.com](https://console.firebase.google.com)

2. Clone the repo
   ```sh
   git clone https://github.com/whatislove-zh/restaurant-demo.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Create a new ".env.local" file in the root of the project

5. Add your firebase config info to the ".env.local"
   without "quotation marks"
   ```js
   REACT_APP_APPID = "your app id";
   REACT_APP_MESSAGEID = "your message id";
   REACT_APP_STORAGEBUCKET = "your storage bucket";
   REACT_APP_PROJECTID = "your project id";
   REACT_APP_AUTHDOMAIN = "your auth domain";
   REACT_APP_APIKEY = "your api key";
   ```

### :package: Commands

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### :hammer: Build

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### :rocket: Deployment

My project is deployed using [Versel](https://vercel.com/) at the address [https://restaurant-demo-rho.vercel.app/](https://restaurant-demo-rho.vercel.app/)

## :cherry_blossom: Community

### :fire: Contribution

Your contributions are always welcome and appreciated. Following are the things you can do to contribute to this project.

1.  **Report a bug** <br>
    If you think you have encountered a bug, and I should know about it, feel free to report it to me with mail to zukovskyvladyslav@gmail.com and I will take care of it.
    <br>

2.  **Request a feature** <br>
    You can also request for a feature with mail to zukovskyvladyslav@gmail.com, and if it will viable, it will be picked for development.
    <br>

3.  **Create a pull request** <br>
    It can't get better then this, your pull request will be appreciated by the community. You can get started by picking up any open issues from [here]() and make a pull request.

> If you are new to open-source, make sure to check read more about it [here](https://www.digitalocean.com/community/tutorial_series/an-introduction-to-open-source) and learn more about creating a pull request [here](https://www.digitalocean.com/community/tutorials/how-to-create-a-pull-request-on-github).

**Steps to create a pull request**

1. Make a PR to `stage` branch.
2. Comply with the best practices and guidelines e.g. where the PR concerns visual elements it should have an image showing the effect.
3. It must pass all continuous integration checks and get positive reviews.

After this, changes will be merged.

## :page_facing_up: Resources

### Main technology

<a href="https://firebase.google.com/" target="_blank" rel="noreferrer"> 
<img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40"/> </a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a>
<a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a>
<a href="https://redux.js.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40"/> </a>

Styled with [Material UI](https://mui.com/)

## :camera: Gallery

### :pizza: products page

<p align="center">
<img src="https://firebasestorage.googleapis.com/v0/b/blogapi-40e1c.appspot.com/o/screencapture-localhost-3000-products-2023-07-15-16_20_02.png?alt=media&token=8e25d959-0369-41e4-9769-baf43176acd6" alt="redux" />
</p>
<br>
<br>

### :lock: login page

<p align="center">
<img src="https://firebasestorage.googleapis.com/v0/b/blogapi-40e1c.appspot.com/o/screencapture-localhost-3000-signup-2023-07-15-16_21_07.png?alt=media&token=f366a5bf-751b-4717-80af-cc8610e20e23" alt="redux" />
</p>
<br>
<br>

### :key: login page after authorization

<p align="center">
<img src="https://firebasestorage.googleapis.com/v0/b/blogapi-40e1c.appspot.com/o/screencapture-localhost-3000-profile-2023-07-15-16_23_42.png?alt=media&token=151879ba-3b3b-48b7-9afe-98f78b5d9986" alt="redux" />
</p>
<br>
<br>

### :phone: Mobile Product page

<p align="center">
<img src="https://firebasestorage.googleapis.com/v0/b/blogapi-40e1c.appspot.com/o/%D0%97%D0%BD%D1%96%D0%BC%D0%BE%D0%BA%20%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202023-07-a164144.png?alt=media&token=ae54f650-1040-43fe-9481-e1e624b08fe2" alt="redux" />
</p>
<br>
<br>

### :phone: Mobile Home page with aside menu

<p align="center">
<img src="https://firebasestorage.googleapis.com/v0/b/blogapi-40e1c.appspot.com/o/%D0%97%D0%BD%D1%96%D0%BC%D0%BE%D0%BA%20%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202023-07-15%20164144.png?alt=media&token=8ae48135-fa85-42b6-8724-112d0fc13abb" alt="redux" />
</p>
<br>
<br>

## :cherry_blossom: Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
