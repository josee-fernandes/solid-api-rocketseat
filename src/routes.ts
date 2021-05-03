import { Router } from 'express'
import { createUserController } from './useCases/CreateUser'

export const router = Router()

router.post('/users', (request, response) => {
    return createUserController.handle(request, response)
})