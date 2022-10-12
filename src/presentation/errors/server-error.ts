export class ServerError extends Error {
  constructor() {
    super('Erro inesperado, tente novamente mais tarde')
    this.name = 'ServerError'
  }
}
