export type User = {
    id: number;
    name: string;
    email: string;
    gender: string;
    fullname : string
    tel : string;
    isActive : boolean;
    OTP : string | null
    isAdmin: boolean;
    createdAt: Date;
    updatedAt: Date | null;
}