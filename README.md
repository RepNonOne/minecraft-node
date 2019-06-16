## Minecraft Node
requirements
 - [Nodejs]()
 - [Heroku]()
 - [Ngrok]()

###Tutorial
1. Download and install [Nodejs](#).
2. Create account in [Heroku](#).
 - after created, click on new button and create new app  ![enter image description here](https://resizeimage.net/mypic/q8Qarn27R4cTO1BC/BO3yL/button.png)
 - choose a name and click on create app.
 - at app dashboard click on settings, find Buildpacks section and click on add buildpack.
 - write `heroku/jvm` on **Buildpack URL** and save changes.
3. Create account in [Ngrok](#)
 - click on Auth menu item and copy your **Tunnel Authtoken**.
4. Fork this rep ![fork](https://resizeimage.net/mypic/raHjRUGT9t46InXS/kKta9/button1.png)
 - on your forked rep, paste your **Tunnel Authtoken** at server.js file.
 - go to [Mcversions](https://mcversions.net/) and download the server version that you want.
 - move and rename downloaded server file to your forked rep with **server.jar** name.
5. back to your [Heroku](#) app dashboard.
 - click on Deploy menu item, find Deployment method section and click on **GitHub**.
 - after connected, find your app rep at **Connect to GitHub**.
 - click on ![Deploy](https://resizeimage.net/mypic/u3I8tzuStTwppK6b/1lOfR/button2.png)
 - Go to resources menu item, disable web button and enable worker button
6. if all is right, go to [ngrok](#) status menu item and wite for that:
![](https://resizeimage.net/mypic/RdnTt1M1lE0CoGEE/qhB7P/ngrok.png)

 - copy the URL to your minecraft SERVER IP.
7. Notes
 - if you are not using minecraft original version, go to **server.properties** on forked rep and change online-mode to false *and rebuild the app at heroku*.
 - this way are 100% free but when you are not using the server, heroku'll disable him. Dont worry its just disable and enable **worker dyno** on resources menu item, this will change ngrok url adress then go to ngrok status again and copy url.