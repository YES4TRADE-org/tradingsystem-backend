import bcrypt from 'bcrypt';

export const checkIfSlsu = (username) => {
    const removeAt = username.split('@');
    const seperate = removeAt[1].split('.');

    if(seperate[0] === 'slsu' && seperate[1] === 'edu' && seperate[2] === 'ph') {
        return true;
    }

    return false;
}

export const checkStudentId = (studentId) => {
    if(studentId.length !== 9) {
        return {
            grade: null,
            boolean: false
        };
    }
    const id = studentId.split('-')[1];
    const grade = studentId.split('')[1];
    
    switch(grade){
        case '5': return {grade: '1', boolean: true, id: id }; break;
        case '4': return {grade: '2', boolean: true, id: id }; break;
        case '3': return {grade: '3', boolean: true, id: id }; break;
        case '2': return {grade: '4', boolean: true, id: id }; break;
    }
}

export const hashPass = async (password) => {
    const bcryptPass = await bcrypt.genSalt(10);
    return bcrypt.hash(password, bcryptPass);
}