import { object, string } from 'zod';

export const ContactSchema = object({
    name: string().min(6, "name at least have 6 character"),
    email: string()
        .min(6, "name at least have 6 character")
        .email("Please enter valid email"),
    subject: string().min(6, "subject atleast 6 character"),
    message: string()
        .min(50, "message min 50 character")
        .max(200, "message max 200 character")
})