import {getMethodId, getProgramId, getTypeId} from '../repository/selectRepository.js';

export async function createPostProduct(methods, program, type){
    const method_id = await getMethodId(methods);
    const program_id = await getProgramId(program);
    const type_id = await getTypeId(type);

    return {method_id, program_id, type_id};
}
