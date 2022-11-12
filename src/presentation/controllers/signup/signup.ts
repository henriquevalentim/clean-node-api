import { InvalidParamError, MissingParamError } from '../../errors'
import {
  HttpResponse,
  HttpRequest,
  Controller,
  EmailValidator,
  AddAccount,
  Validation
} from './signup-protocols'
import { badRequest, serverError, ok } from '../../helpers/http-helper'

export class SignUpController implements Controller {
  private readonly emailValidator: EmailValidator
  private readonly addAccount: AddAccount
  private readonly validation: Validation

  constructor(
    emailValidator: EmailValidator,
    addAccount: AddAccount,
    validation: Validation
  ) {
    this.emailValidator = emailValidator
    this.addAccount = addAccount
    this.validation = validation
  }
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
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
      const account = await this.addAccount.add({
        name,
        email,
        password
      })
      return ok(account)
    } catch (error: any) {
      return serverError(error)
    }
  }
}
