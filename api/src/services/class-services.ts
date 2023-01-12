import { Client } from 'pg'
import { prisma } from '../connector/database_connector'
import { Class } from '@prisma/client'

async function create(c: Class) {
    return await prisma.class.create({
        data: {
            name: c.name,
            description: c.description,
            day: c.day,
            color: c.color
        }
    })
}

async function read() {
    return await prisma.class.findMany()
}

async function update(c: Class) {
    return await prisma.class.update({
        where: {
            id: c.id
        },
        data: {
            name: c.name,
            description: c.description,
            day: c.day,
            color: c.color
        }
    })
}

async function remove(id: number) {
    return await prisma.class.delete({
        where: { 
            id: id 
        }
    })
}

export { create, read, update, remove }