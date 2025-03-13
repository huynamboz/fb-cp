module.exports = {
  apps: [
    {
      name: 'port3006',
      port: '3006',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
    },
  ],
}
