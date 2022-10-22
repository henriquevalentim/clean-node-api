import { MongoHelper } from './../helpers/mongo-helper'
import { AccountMongoRepository } from './account'

describe('Account Mongo Repository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env['MONGO_URL'] as string)
  })
  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  test('should return an account on sucess', async () => {
    const sut = new AccountMongoRepository()
    const account = await sut.add({
      name: 'any_name',
      email: 'any_email@gmail.com',
      password: 'any_password'
    })

    expect(account).toBeTruthy()
  })
})
