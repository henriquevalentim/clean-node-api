import { Validation } from '../../presentation/helpers/validators/validation'
import { RequireFieldValidation } from '../../presentation/helpers/validators/require-field-validation'
import { ValidationComposite } from '../../presentation/helpers/validators/validation-composite'

export const makeSignUpValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['name', 'email', 'password', 'passwordConfirmation']) {
    validations.push(new RequireFieldValidation(field))
  }
  return new ValidationComposite(validations)
}
