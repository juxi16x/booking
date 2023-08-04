import { genAT } from "../utils/accessToken"

export const addUser = (RawUser) => {
    const userToken = genAT();
    const user = {
        data: RawUser,
        userToken: userToken
    };
    users.push(user);
    return user.userToken;
}

export const users = [];