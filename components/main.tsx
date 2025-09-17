import { notFound } from 'next/navigation';
import Card from './card'
import { getRoom } from '@/lib/data'

const Main = async() => {
  const Rooms = await getRoom();
  if (!Rooms) return notFound();

  return (
    <div className='max-w-screen-xl py-6 px-20 pb-4 mx-auto'>
        <div className='grid gap-7 md:grid-cols-3'>
          {Rooms.map((room) => (
            <Card room={room} key={room.id}/>
          ))}
            
        </div>
    </div>
  )
}

export default Main