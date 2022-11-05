export class ServerError extends Error {
  constructor(stack: string | undefined) {
    super('Erro inesperado, tente novamente mais tarde')
    this.name = 'ServerError'
    this.stack = stack
  }
}
