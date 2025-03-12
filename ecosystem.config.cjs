module.exports = {
  apps: [
    {
      name: 'port3005',
      port: '3005',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
    },
  ],
}
