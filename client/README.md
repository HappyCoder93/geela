
## Overview & User Manual

The mobile application <strong>yourMeal</strong> was designed to simplify the process of ordering food and drinks within a stadium in
Dublin. It basically allows the user to select the venue and restaurant, as well as to collect food and drinks and to order easily with
the smartphone, without standing in long queues to collect the items. After the order process, the user receives a notification message once the food has delivered and can be picked up simply by on of the pick up stations.

Requirements for further developers (for further development):
<pre>
- Node.js (npm manager)
- Ionic CLI (Ionic Command Line Interface)
</pre>

Link for Node.js: https://nodejs.org/en/

After the installation of Node.js, the software (prototype) can be installed by cloning the GitHup repository 
(link: https://github.com/HappyCoder93/geela).<br>
Once the project is cloned, open up the project structure with an IDE (Integrated Development Environment) and run the command
<code>npm install</code> within the terminal.<br>
The Node Package Manager (npm) will then automatically install all the required dependencies (like Cordova) of the 
project. To run the application in the browser,<br>
simply run the command <code>ionic serve</code> (the browser will open up automatically). It is also possible to run the application
on an AVD (Android Virtual Device) with<br> 
<code>ionic cordova run android</code>. To run the application on a virtual device, an AVD must be installed on the computer -
as well as the Gradle (Android build tool).<br>
This can be easily done by installing Android Studio, which will then automatically install the Android SDK and Gradle<br>
(Link: https://developer.android.com/studio/?gclid=Cj0KCQiAoIPvBRDgARIsAHsCw0-qrqAh0fI017E5q-uFjXZM-3Y29EoILvmea0cXPaX2Z5rl1hVNt58aAmopEALw_wcB).
<br>For Cordova it is also necessary to have the Java JDK (version 8.x) installed on the computer - beware that later versions won't work.

### Ionic & Apache Cordova

Apache Cordova is required to use native components (like camera or location) of an smartphone - to provide conistent, platform-specific
user interface components<br>
(Link for more details: https://ionicframework.com/resources/articles/what-is-apache-cordova).

Native components of the application are (Cordova is used for):
<pre>
- Splashscreen
- Notification 
- Testing on an AVD or USB-Debugging
</pre>

