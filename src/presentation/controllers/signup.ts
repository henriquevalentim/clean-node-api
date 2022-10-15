import { badRequest, serverError } from '../helpers/http-helper'
import { InvalidParamError, MissingParamError } from '../errors'
import {
  Controller,
  EmailValidator,
  HttpResponse,
  HttpRequest
} from '../protocols'
import { AddAccount } from 'src/domain/usecases/add-account'

export class SignUpController implements Controller {
  private readonly emailValidator: EmailValidator
  private readonly addAccount: AddAccount

  constructor(emailValidator: EmailValidator, addAccount: AddAccount) {
    this.emailValidator = emailValidator
    this.addAccount = addAccount
  }
  handle(httpRequest: HttpRequest): HttpResponse | any {
    try {
      const requireFields = [
        'name',
        'email',
        'password',
        'passwordConfirmation'
      ]
      for (const field of requireFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }
      const { name, email, password, passwordConfirmation } = httpRequest.body
      if (passwordConfirmation !== password) {
        return badRequest(new InvalidParamError('passwordConfirmation'))
      }
      const isValid = this.emailValidator.isValid(email)
      if (!isValid) {
        return badRequest(new InvalidParamError('email'))
      }
      this.addAccount.add({
        name,
        email,
        password
      })
    } catch (error) {
      return serverError()
    }
  }
}
