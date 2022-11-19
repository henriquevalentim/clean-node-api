export default {
  mongoUrl:
    (process.env['MONGO_URL'] as string) ||
    'mongodb://root:123456@localhost:27017/clear-node-api?authSource=admin',
  port: (process.env['PORT'] as string) || 5050,
  jwtSecret: (process.env['JWT_SECRET'] as string) || 'tj670==5H'
}
