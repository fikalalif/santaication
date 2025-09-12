import { getRoom } from "@/lib/data";
import Image from "next/image";
import { formatDate,formatCurrency } from "@/lib/utils";
import { DeleteButton } from "./button";

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
            <tr key={room.id} className="hover:bg-gray-100">
              <td className="px-6 py-4">
                <div className="h-20 w-32 relative">
                  <Image
                    src={room.image}
                    fill
                    sizes="20vw"
                    alt="room image"
                    className="object-cover"
                  />
                </div>
              </td>
              <td className="px-6 py-4">{room.name}</td>
              <td className="px-6 py-4">{formatCurrency(room.price)}</td>
              <td className="px-6 py-4">{formatDate(room.createdAt.toString())}</td>
              <td className="px-6 py-4 text-right">
                <DeleteButton id={room.id} image={room.image}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoomTable;
