export const CREATE_USER = 'CREATE_USER';

export const createUser = (userName, telNo, date, email, income, occupation, password) => {
    return {
        type: CREATE_USER, 
        userData: {
            userName,
            telNo,
            date,
            email,
            income,
            occupation,
            password
        }
    };
};