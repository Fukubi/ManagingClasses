import { Router, Request } from 'express'
import { create, read, remove, update } from './services/class-services'

const router = Router()

router.get('/', async (req, res) => {
    const classes = await read()
    res.json(classes)
})

router.post('/', async (req, res) => {
    const { name, description, day, color } = req.body
    
    const createdClass = await create({
        id: 0,
        name: name,
        description: description,
        day: day,
        color: color
    })

    res.status(201).json(createdClass)
})

router.put('/', async (req, res) => {
    const { id, name, description, day, color } = req.body;

    const updatedClass = await update({
        id: id,
        name: name,
        description: description,
        day: day,
        color: color,
    })

    res.json(updatedClass)
})

router.delete('/:id', async (req: Request<{ id: number }, any, any, any>, res) => {
    const removedClass = await remove(Number(req.params.id))

    res.status(204).json(removedClass)
})

export default router