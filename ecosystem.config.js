module.exports = {
  apps : [{
    name: 'API',
    script: 'server/index.js',
    //cwd:'./server',
    //args:'cross-env NODE_ENV=production',

    instances: '4',
    autorestart: true,
    watch: false,
    max_memory_restart: '2G',
    env: {
      NODE_ENV: 'production'
    }
  }],


};
