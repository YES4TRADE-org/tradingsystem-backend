export const checkIfSlsu = (email) => {
    const removeAt = email.split('@');
    const seperate = removeAt[1].split('.');

    if(seperate[0] === 'slsu' && seperate[1] === 'edu' && seperate[2] === 'ph') {
        return true;
    }

    return false;
}

export const checkStudentId = (studentId) => {
    if(studentId.length !== 9) {
        return false;
    }
    return true;
}