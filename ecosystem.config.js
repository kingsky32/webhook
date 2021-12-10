'use strict';

module.exports = {
  apps: [
    {
      name: 'webhook',
      script: 'build/app.js',
      args: 'start',
      instances: 0,
      autorestart: true,
      watch: false,
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        PORT: 9999,
      },

      output: '~/logs/pm2/console.log',
      error: '~/logs/pm2/onsoleError.log',
    },
  ],
};
