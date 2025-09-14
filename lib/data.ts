import { prisma } from "./prisma";
import { auth } from "@/auth";

export const getAmenities = async () => {

    const session = await auth();

    if (!session || !session.user) {
        throw new Error(" Unauthorized Access")
    }

    try {
        const result = await prisma.amenities.findMany();
        return result
    } catch (error) {
        console.log(error);
    }

};

export const getRoom = async () => {

    try {
        const result = await prisma.room.findMany({
            orderBy: { createdAt: "desc" }
        });
        return result
    } catch (error) {
        console.log(error);
    }

};

export const getRoomByid = async (roomId: string) => {

    try {
        const result = await prisma.room.findUnique({
            where: { id: roomId },
            include: { RoomAmenities: { select: { amenitiesId: true } } },
        });
        return result
    } catch (error) {
        console.log(error);
    }

};