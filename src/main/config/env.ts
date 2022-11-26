export default {
  mongoUrl:
    (process.env['MONGO_URL'] as string) ||
    'mongodb+srv://henriquevalentim:HVN123@cluster0.z9m7qkd.mongodb.net/?retryWrites=true&w=majority',
  port: (process.env['PORT'] as string) || 5050,
  jwtSecret: (process.env['JWT_SECRET'] as string) || 'tj670==5H'
}
