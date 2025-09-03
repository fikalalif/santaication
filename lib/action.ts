"use server";

import { prisma } from "./prisma";
import { ContactSchema } from "./zod";

export const ContactMessage = async (prevState: unknown, formData: FormData) => {
    const validatedFields = ContactSchema.safeParse(Object.fromEntries(formData.entries()))

    if (!validatedFields.success) {
        return { error: validatedFields.error.flatten().fieldErrors }
    }

    const { name, email, subject, message } = validatedFields.data;

    try {
        await prisma.contact.create({
            data: {
                name, email, subject, message
            },

        });
        return { message: "Thanks For Contact Us" };
    } catch (error) {
        console.log(error)
    }
};