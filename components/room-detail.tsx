import Image from "next/image";
import { getRoomDetailByid } from "@/lib/data";
import { notFound } from "next/navigation";

const RoomDetail = async ({ roomId }: { roomId: string }) => {
  const room = await getRoomDetailByid(roomId);
  if (!room) return notFound();
  return (
    <div className="max-w-screen-xl py-16 px-4 grid lg:grid-cols-12 gap-8 mx-auto">
      <div className="md:col-span-8">
        <Image
          src={room.image}
          alt={room.name}
          width={770}
          height={430}
          priority
          className="w-full rounded-sm mb-8"
        />
        <h1 className="text-5xl font-semibold text-gray-900 mb-8">{room.name}</h1>
        <p>{room.description}</p>
        <h5 className="text-lg font-bold py-1 mt-1">Amenities: </h5>
        
      </div>
      <div className="md:col-end-4"></div>
    </div>
  );
};

export default RoomDetail;
