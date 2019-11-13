

## Ionic Cordova Integration

The following commands are required to integrate Cordova to an existing Ionic project:
<pre>
    - ionic cordova platform add android [iOS]
    - ionic cordova build android [iOS]
    - ionic cordova run android [iOS] 

External requirements:
    - Java JDK
    - Android SDK 
    - Gradle (Java Building Tool for mobile applications)
</pre>

The command <code>ionic cordova run android</code> will automatically build and display the aplication on an AVD (Android Virtual Device).
For USB-Debugging, simply connect your smartphone with your computer and run the command <code>ionic cordova run android</code> again -
the application will then promptly open up on the connected physical device.

### Ionic Storage to persist data
