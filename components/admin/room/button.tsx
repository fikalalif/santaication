import { IoTrashOutline } from "react-icons/io5";
import { deleteRoom } from "@/lib/action";

export const DeleteButton = ({ id, image }: { id: string; image: string }) => {
  const deleteRoomWithId = deleteRoom.bind(null, id, image);
  return (
    <form action={deleteRoomWithId}>
      <button
        type="submit"
        className="rounded-sm p-1 hover:bg-gray-200 cursor-pointer"
      >
        <IoTrashOutline className="size-5" />
      </button>
    </form>
  );
};
