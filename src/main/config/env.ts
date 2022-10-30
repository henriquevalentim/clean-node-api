export default {
  mongoUrl:
    (process.env['MONGO_URL'] as string) ||
    'mongodb://localhost:27017/clear-node-api',
  port: (process.env['PORT'] as string) || 5050
}
