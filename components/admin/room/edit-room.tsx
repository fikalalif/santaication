import { getAmenities, getRoomByid } from "@/lib/data";
import EditForm from "./edit-form";
import { notFound } from "next/navigation";

const EditRoom = async ({ roomId }: { roomId: string }) => {
  const [amenities, room] = await Promise.all([
    getAmenities(),
    getRoomByid(roomId),
  ]);

  if (!amenities || !room) return notFound();

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mt-10 mb-4">
        Edit a Room
      </h1>
      <EditForm amenities={amenities} room={room} />
    </div>
  );
};

export default EditRoom;
