import { Router, Request } from 'express'
import Class from './models/class'
import { create, read, remove, update } from './services/class-services'

const router = Router()

router.get('/', async (req, res) => {
    const classes = await read()
    res.json(classes)
})

router.post('/', async (req, res) => {
    const { name, description, day, color } = req.body;
    const c: Class = new Class(name, description, day, color)

    await create(c)

    res.status(201).json(c)
})

router.put('/', async (req, res) => {
    const { name, description, day, color } = req.body;
    const c: Class = new Class(name, description, day, color)

    await update(c)

    res.json(c)
})

router.delete('/:id', async (req: Request<{ id: number }, any, any, any>, res) => {
    await remove(req.params.id)

    res.status(204).json()
})

export default router