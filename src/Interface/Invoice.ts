export default interface Invoice {
    _id: string;
    ref: string;
    amount: number;
    email: string;
    createdAt: Date;
}
