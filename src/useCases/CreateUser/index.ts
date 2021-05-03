import { MailtapMailProvider } from '@providers/implementations/MailtrapMailProvider'
import { PostgresUsersRepository } from "@repositories/implementations/PostgresUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailtrapMailProvider = new MailtapMailProvider()
const postgresUsersRepository = new PostgresUsersRepository()

export const createUserUseCase = new CreateUserUseCase(
  postgresUsersRepository,
  mailtrapMailProvider
)

export const createUserController = new CreateUserController(
  createUserUseCase
)