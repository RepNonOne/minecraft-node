const ScriptServer = require('scriptserver');
const ngrok = require('ngrok');

// connect to ngrok
ngrok.connect({
    proto: 'tcp',
    addr: 25565,
    authtoken: '47Q6xFBA6vifnv4jHrujP_LrgcRkT7XVXmdkkY2jE8',
    region: 'us'
});

// start minecraft server
const server = new ScriptServer({
  core: {
    jar: 'server.jar',
    args: ['-Xmx1024M'],
    rcon: {
      port: '25565',
      password: 'password'
    }
  }
});

server.start();
