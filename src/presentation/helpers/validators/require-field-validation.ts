import { MissingParamError } from '../../../presentation/errors'
import { Validation } from './validation'

export class RequireFieldValidation implements Validation {
  private readonly fieldName: string
  constructor(fieldName: string) {
    this.fieldName = fieldName
  }
  validate(input: any): Error | undefined {
    if (!input[this.fieldName]) {
      return new MissingParamError(this.fieldName)
    }
    return undefined
  }
}
