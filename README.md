<h1 align='center'> The Regina π</h1>
<p align='center'>
<img src='http://ForTheBadge.com/images/badges/built-by-developers.svg'>&nbsp;<img src='http://ForTheBadge.com/images/badges/built-with-love.svg'>
</p>
<img width="1438" alt="Screenshot 2021-06-06 at 3 22 15 PM" src="https://user-images.githubusercontent.com/63084088/120925406-1adede00-c6f6-11eb-9749-7f23aaa8b246.png">

## Inspiration β‘
In 2017, 46.6 million adults in the U.S. were treated for a mental illness, representing nearly 20% of the adult population, yet the percentage of women being treated for mental illness was almost 50% higher than the percentage of men and non binary are not even in the statistics. The gender minorities face a lot of mental and physical issues. So I bring to you Regina.
Regina is latin for Queen. I believe a queen is someone who is mentally strong, physically strong and sometimes when she gets demotivated, she knows how to get back up. This web application helps you become a queen. 


## What is it? πΈπ»
The regina consists of three software subsystems. 

<img width="1440" alt="Screenshot 2021-06-06 at 5 52 55 PM" src="https://user-images.githubusercontent.com/63084088/120925387-0dc1ef00-c6f6-11eb-8087-5444c1d45f2d.png">

Firstly I have a web application which keeps a track of your happiness index. You simply login to your dashboard and select the emoji best describing your day. Then a graph is generated according to your records. This motivates the person to keep trying to increase their happiness index and keep a check on their mental health. You can also update your profile and if you forget your password, you can reset it and you will receive a secure link to change it in your mail.

<img width="1440" alt="Screenshot 2021-06-06 at 5 53 25 PM" src="https://user-images.githubusercontent.com/63084088/120925395-1286a300-c6f6-11eb-8e56-be166113d412.png">

The second part of regina is a chrome extension to talk to someone on google meet and keep all the privacy you want. This chrome extension shows only what you want to show. So you can freely talk to anyone anywhere. It can blur videos, chats, participant list etc and you simply hover over it to see.

<img width="1440" alt="Screenshot 2021-06-06 at 5 53 56 PM" src="https://user-images.githubusercontent.com/63084088/120925400-161a2a00-c6f6-11eb-89c8-1603b5762179.png">

Lastly, I have an AR application that teaches you some very crucial self-defence moves. You can either watch it in VR on the website or you can also download the app to get the full Augmented Reality experience. You can simply tap on the move you want to learn and the instructor will teach you how to do it.

## How it was built π·ββοΈ
The product consists of various software subsystems which were combined to make it a complete working prototype. React was used in the front  end of the web application. Firebase was used while authenticating users and Firestore for storing and retriving the key-value pairs. After fetching the data I used chart.js to convert the data into graph to give user a better visual representation. The web application is hosted on cloud. The AR model required AR core, AR Foundation and Unity 3D.And finally the Chrome extension was built in HTML,CSS and vanilla Javascript.  


# Prerequisites π¨βπ»

### Install Node JS
Refer to https://nodejs.org/en/ to install nodejs

### Install create-react-app
Install create-react-app npm package globally. This will help to easily run the project and also build the source files easily. Use the following command to install create-react-app

```bash
npm install -g create-react-app
```

## Cloning and Running the Application in local π»

Clone the project in localhost
```bash
git clone https://github.com/sumana2001/theregina.git
```
Install all the npm packages. Go into the client folder and type the following command to install all npm packages

```bash
npm install
```

In order to run the application Type the following command

```bash
npm start
```

The Application Runs on **localhost:3000**


# Connecting with Firebase β‘
Allow authentication via email and password. Setup your firestore as the database and make proper collection and document ids. Name your collection as mood. Then add the following in your `.env` file and keep it in the root.

```
REACT_APP_FIREBASE_KEY = "<your_firebase_key>" 
REACT_APP_FIREBASE_DOMAIN = "<your_firebase_domain>"
REACT_APP_FIREBASE_PROJECT_ID = "<your_project_id>"
REACT_APP_FIREBASE_BUCKET = "<your_project_id>.appspot.com"
REACT_APP_FIREBASE_SENDER_ID = <your_sender_id>
REACT_APP_FIREBASE_APP_ID =  "<your_app_id>"
REACT_APP_FIREBASE_DATABASE_URL = "https://<your_project_id>.firebaseio.com/"
``` 

## Challenges with TheRegina π₯Ί
The biggest challenge was human emotions are fuzzy numbers which cannot be scaled by linear scaling. To actually know how the person actually in actually feels in a week or a span of month and make the graphs actually research ready we need servers which are fast and database which can hold huge amount of data. Scaling human emotion on a scale from 1-5 is just an approximate and probabilistic approach to know how girls and non binary actually feel.Talking about the AR part including more moves and animating them on blender will make the model large and difficult to render on usual runtime making it difficult to place the product for production. 

## Challenges I ran into πΆ 
Being a beginner in software development, I had no experience using firebase and firestore. Storing and fetching data took a huge amount of time as I kept getting errors. In the chrome extension part, selecting the exact ids was pretty difficult and confusing. I also faced a lot of problem configuring the dns server while hosting.

## Accomplishments that I am proud of π
I was able to overcome all the challenges and was able to create a completely functional prototype. I was able to fetch the data and make the graph as I had envisioned and also the AR model came out to be pretty good and the animations were working smoothly. I am most proud of the fact that this product will be able to help many people across the globe.

## What I learned π©βπ»
I learnt how to integrate firebase and firestore with react, create map elements and fetch data and convert the corresponding key values pairs into a graph. Once I got to know how to select the ids in the website, making the chrome extension went smoothly. Although I had experience working with AR, this was the first time I made the project in WebGL platform. And finally, I was able to integrate all the three software subsystems in one place.

## What's next for TheRegina π
Currently TheRegina is terms of snopping data breeches only makes Google meet secured the chrome extension can be extended other social media platforms and apps as in Microsoft teams , Discord and more. TheRegina fitness trainer hosting on cloud to make the rendering fast and quick. The web application emotion scaling after proper research on the number can be either scaled up to more emotions or scaled down to less. Social media share buttons will be added so that people can share their graphs showing their happiness index.    

## Important Links π΄
1. <a href="https://youtu.be/s7FLhPg-vho">Youtube</a>
2. <a href="https://theregina.co">Landing Page</a>
3. <a href="https://theregina.co/login">Happiness Index</a>
4. <a href="https://theregina.co/safemeet">Chrome Extension</a>
5. <a href="https://theregina.tech/">AR Self Defence</a>
6. <a href="https://devpost.com/software/the-regina">Devpost Submission</a>

<img src='https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/challenge_photos/001/556/854/datas/full_width.png'>
