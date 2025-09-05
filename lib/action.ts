"use server";

import { prisma } from "./prisma";
import { ContactSchema, RoomSchema } from "./zod";
import { redirect } from "next/navigation";

export const saveRoom = async (image: string, prevState: unknown, formData: FormData) => {
    if(!image) return {message : "Image is Required"}

    const rawData = {
        name: formData.get("name"),
        description: formData.get("description"),
        capacity: formData.get("capacity"),
        price: formData.get("price"),
        amenities: formData.getAll("amenities")
    }

    const validatedFields = RoomSchema.safeParse(rawData);
    if(!validatedFields.success){
        return {error: validatedFields.error.flatten().fieldErrors}
    }

    const {name, description, price, capacity, amenities} = validatedFields.data;

    try {
        await prisma.room.create({
            data:{
                name,
                description,
                price,
                capacity,
                RoomAmenities:{
                    createMany:{
                        data: amenities.map((item)=>({
                            amenitiesId: item
                        }))
                    }
                }
            }
        })
    } catch (error) {
        console.log(error);
    }

    redirect("/admin/room");
}

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