export const CREATE_USER = 'CREATE_USER';

export const createUser = (userName, telNo, date, email, income, password) => {
    return {
        type: CREATE_USER, 
        userData: {
            userName,
            telNo,
            date,
            email,
            income,
            password
        }
    };
};