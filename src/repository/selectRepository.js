import { pool } from '../database/db.js';

export default async function getProgramId(program) {
    return await pool.query('SELECT program_id FROM programs WHERE programs = $1', [program]);
}

export default async function getTypeId(type) {
    return await pool.query('SELECT type_id FROM types WHERE types = $1', [type]);
}

export default async function getMethodId(method) {
    return await pool.query('SELECT method_id FROM methods WHERE methods = $1', [method]);
}