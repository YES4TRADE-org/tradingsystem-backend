import { pool } from '../database/db.js';

export async function getProgramId(program) {
    return await pool.query('SELECT program_id FROM programs WHERE programs = $1', [program]);
}

export async function getTypeId(type) {
    return await pool.query('SELECT type_id FROM types WHERE types = $1', [type]);
}

export async function getMethodId(method) {
    return await pool.query('SELECT method_id FROM methods WHERE methods = $1', [method]);
}