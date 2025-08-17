import Link from "next/link"
import Image from "next/image"


const Footer = () => {
  return (
    <footer className="bg-gray-900">
        <div className=" max-w-screen-xl mx-auto px-4 w-full py-10 md:py-16">
            <div className="grid md:grid-cols-3 gap-7">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <div className="max-w-screen-xl mx-auto px-4 border-t border-gray-500 py-8 text-center text-base text-gray-500">
            &copy; Copyright 2025 | FikalAlif | All Right Reserved
        </div>
    </footer>
  )
}

export default Footer