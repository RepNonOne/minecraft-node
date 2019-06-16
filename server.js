const ScriptServer = require('scriptserver');
const ngrok = require('ngrok');

// connect to ngrok
ngrok.connect({
    proto: 'tcp',
    addr: 25565,
    authtoken: '7xHbhbugdPzndsacCDXN6_75SH1hwmRy7ueov1ZRwXw',
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
