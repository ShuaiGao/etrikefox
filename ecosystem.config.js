module.exports = {
    apps: [
      {
        name: 'nextjs-app-etrikefox',
        script: 'pnpm',
        args: 'start',
        cwd: '/home/admin/workspace/etrikefox', 
        instances: '2', 
        exec_mode: 'cluster',
        env: {
          NODE_ENV: 'production',
          PORT: 3000
        },
        env_production: {
          NODE_ENV: 'production',
          PORT: 3000
        },
        log_file: './logs/combined.log',
        out_file: './logs/out.log',
        error_file: './logs/error.log',
        log_date_format: 'YYYY-MM-DD HH:mm Z',
        merge_logs: true
      }
    ]
  };