import { getRoom } from "@/lib/data";
import Image from "next/image";

const RoomTable = async () => {
  const rooms = await getRoom();
  if (!rooms?.length) return <p>No room found</p>;

  return (
    <div className="bg-white p-4 mt-5 shadow-sm">
      <table className="w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 w-32 text-sm font-bold text-gray-700 text-left uppercase">
              Image
            </th>
            <th className="px-6 py-3 text-sm font-bold text-gray-700 text-left uppercase">
              Room name
            </th>
            <th className="px-6 py-3 text-sm font-bold text-gray-700 text-left uppercase">
              Price
            </th>
            <th className="px-6 py-3 text-sm font-bold text-gray-700 text-left uppercase">
              Created at
            </th>
            <th className="px-6 py-3 text-sm font-bold text-gray-700 uppercase">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {rooms.map((room) => (
            // eslint-disable-next-line react/jsx-key
            <tr className="hover:bg-gray-100">
              <td className="px-6 py-4">
                <div>
                  <Image
                    src={room.image ?? "/image"}
                    fill
                    sizes="20vw"
                    alt="room image"
                    className="object-cover"
                  />
                </div>
              </td>
              <td className="px-6 py-4">{room.name}</td>
              <td className="px-6 py-4">{room.price}</td>
              <td className="px-6 py-4">{room.createdAt.toString()}</td>
              <td className="px-6 py-4 text-right"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoomTable;
