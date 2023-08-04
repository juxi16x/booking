import { addUser, users as RawUsers } from "../../data/users"

export default (req, res) => {
    if (req.method === 'POST') {
        const user = addUser(req.body);
        res.json({ user });
    } else if (req.method === 'GET') {
        const users = [];
        RawUsers.forEach((user) => {
            users.push(user.data);
        });
        res.json({ users });
    }
}