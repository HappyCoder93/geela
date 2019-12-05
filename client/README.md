## Overview & User Manual

The mobile application <strong>yourMeal</strong> was designed to simplify the process of ordering food and drinks within a stadium in 
Dublin during a sports event. The application basically allows users to select the venue the are going to attend, as well as the
restaurant from which they would like to order, without standing in long queues with the risk to miss something from the event.<br>
The application makes it easy to collect food and drinks, by simply clicking on the item you want and which are displayed as a good looking
card view. After the user pushes the order now button, the order will be send to the backend (Firestore), which allows the restaurant (seller), 
to display and to prepare the food. Once the food is delivered, the user receives a notification message on the smartphone and can pick up the
food.

Requirements for further developing:
<pre>
- Node.js (npm-Manager)
- Ionic CLI (Ionic Command Line Interface)
</pre>

Link for Node.js: https://nodejs.org/en/

Required steps after installing Node.js:
<pre>
- Clone the GitHup repository (Link: https://github.com/HappyCoder93/geela)
- Run command <strong>npm install</strong> (all the required dependencies will be installed)
- Run command <strong>ionic serve</strong> to run the application within the browser
</pre>

It is also possible to run the application on an AVD (Android Virtual Device) or by USB-Debugging.<br>
This requires the installation of an AVD, as well as the installation of Gradle (Android build tool).<br>
The easiest way to do so is to install Android Studio, which will automatically install the required tools.<br>
(Link: https://developer.android.com/studio/?gclid=Cj0KCQiAoIPvBRDgARIsAHsCw0-qrqAh0fI017E5q-uFjXZM-3Y29EoILvmea0cXPaX2Z5rl1hVNt58aAmopEALw_wcB)

### Ionic & Apache Cordova

Apache Cordova is required for progressive web apps to use native components (like camer or location) of an smartphone - to provide consistent,
platform specific <br> user interface components.
<br>

For more information about Cordova, please check out the following link:<br>
https://ionicframework.com/resources/articles/what-is-apache-cordova


### Google Firebase API

The application uses Google Firebase as a backend. The following list shows, which Firebase components are used:
<pre>
- Authentication (for sign up and login)
- Database (NoSQL real time database for storing information like profile, venues, restaurants, items,...)
- Storage (to store images, which are used in the card views)
</pre>
(Link: https://console.firebase.google.com/)

To access the Firebase project and the database, the owner of the project has to send an invitation via email.



