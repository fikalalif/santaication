import HeaderSection from "@/components/header-section"
import Main from "@/components/main"
import RoomSkeleton from "@/components/skeletons/room-skeleton"
import { Metadata } from "next"
import { Suspense } from "react"

export const metadata: Metadata ={
    title: "Room & Rates",
    description: "Choose your room today"
}

const RoomPage = () => {
  return (
    <div>
        <HeaderSection title="Room & Rates." subTitle="Lorem ipsum dolor sit amet"/>
        <div className="mt-10 px-4">
            <Suspense fallback={<RoomSkeleton/>}>
                <Main/>
            </Suspense>
        </div>
    </div>
  )
}

export default RoomPage