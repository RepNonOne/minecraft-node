## Minecraft Node
requirements
 - [Nodejs](https://nodejs.org/)
 - [Heroku](https://www.heroku.com/)
 - [Ngrok](https://ngrok.com/)

### Tutorial
1. Download and install [Nodejs](https://nodejs.org/).
2. Create account in [Heroku](https://www.heroku.com/).
	 - after created, click on new button and create new app  ![img](https://cdn-moor.000webhostapp.com/repositorio/YnV0dG9uLnBuZw==.jpg)
	 - choose a name and click on create app.
	 - at app dashboard click on settings, find Buildpacks section and click on add buildpack.
	 - write `heroku/jvm` on **Buildpack URL** and save changes.
	 - add another buildpack with this url: `heroku/nodejs`.
3. Create account in [Ngrok](https://ngrok.com/)
	 - click on Auth menu item and copy your **Tunnel Authtoken**.
4. Fork this rep ![fork](https://cdn-moor.000webhostapp.com/repositorio/YnV0dG9uMS5wbmc=.jpg)
	 - on your forked rep, paste your **Tunnel Authtoken** at server.js file.
	 - go to [Mcversions](https://mcversions.net/) and download the server version that you want.
	 - move and rename downloaded server file to your forked rep with **server.jar** name.
	 - at inside directory run `npm install` command, after that `node server.js` and wait server generation files.
	 - send all modifications to your github, if you are not using minecraft original, read 7 step.
5. back to your [Heroku](https://www.heroku.com/) app dashboard.
	 - click on Deploy menu item, find Deployment method section and click on **GitHub**.
	 - after connected, find your app rep at **Connect to GitHub**.
	 - click on ![Deploy](https://cdn-moor.000webhostapp.com/repositorio/YnV0dG9uMi5wbmc=.jpg) and wait.
	 - Go to resources menu item, disable web button and enable worker button (if worker are not there, update the page)
6. if all is right, go to [Ngrok](https://ngrok.com/) status menu item and wait for that (reload)
![](https://cdn-moor.000webhostapp.com/repositorio/bmdyb2sucG5n.jpg).

	 - copy the URL to your minecraft SERVER IP.
7. Notes
	 - if you are not using minecraft original version, go to **server.properties** and change online-mode prop to false.
	 - this way are 100% free but when you are not using the server, heroku'll disable him (5 min). so when you are not using the server please disable worker dyno and just enable when you'll play, this will change ngrok url adress then go to ngrok status again and copy the new url.
	 - [Example](https://github.com/CripBoy/minecraft-node/tree/example). your rep should look like this.
