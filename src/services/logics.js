import {getMethodId, getProgramId, getTypeId} from '../repository/selectRepository.js';
import { checkEmail } from '../repository/userRepository.js';

export async function createPostProduct(methods, program, type){
    const data1 = await getMethodId(methods);
    const data2 = await getProgramId(program);
    const data3 = await getTypeId(type);

    const method_id = data1.rows[0].method_id;
    const program_id = data2.rows[0].program_id;
    const type_id = data3.rows[0].type_id;

    console.log(type_id);


    return {method_id, program_id, type_id};
}

export async function checkEmailAvail(email) {
    const data = await checkEmail(email);

    if(data.rows !== null){
        return false;
    }
    
    return true;
}
