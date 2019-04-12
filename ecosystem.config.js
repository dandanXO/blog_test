module.exports = {
  apps : [{
    name: 'API',
    script: 'server/index.js',
    //cwd:'./server',
    args:'cross-env NODE_ENV=production',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    //args: 'one two',
    instances: '4',
    autorestart: true,
    watch: false,
    max_memory_restart: '2G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],


};
