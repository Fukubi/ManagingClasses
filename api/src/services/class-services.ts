import Class from '../models/class'
import { Client } from 'pg'

async function setupDatabase(client: Client) {
    await client.query(`create table if not exists classes (
        id SERIAL PRIMARY KEY,
        name VARCHAR NOT NULL,
        description VARCHAR,
        day SMALLINT NOT NULL,
        color VARCHAR(9) NOT NULL
    );`)
}

async function create(c: Class) {
    const client = new Client()
    await client.connect()

    setupDatabase(client)

    await client.query('INSERT INTO classes (name, description, day, color) VALUES ($1, $2, $3, $4)',
        [c.name, c.description, c.day, c.color])

    await client.end()
}

async function read(): Promise<Class[]> {
    const client = new Client()
    await client.connect()

    setupDatabase(client)

    const result = await client.query('SELECT * FROM classes')

    await client.end()

    return result.rows
}

async function update(c: Class) {
    const client = new Client()
    await client.connect()

    setupDatabase(client)

    await client.query(`UPDATE classes SET 
        name=COALESCE($1, name), 
        description=COALESCE($2, description), 
        day=COALESCE($3, day), 
        color=COALESCE($4, color) WHERE id=$5`, [c.name, c.description, c.day, c.color, c.id])

    await client.end()
}

async function remove(id: number) {
    const client = new Client()
    await client.connect()

    setupDatabase(client)

    await client.query(`DELETE FROM classes WHERE id=$1`, [id])

    await client.end()
}

export { create, read, update, remove }