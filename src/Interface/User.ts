export default interface User {
    _id: string;
    firstname: string;
    lastname: string;
    isAdmin: boolean;
    password: string;
    createdAt: Date;
}
