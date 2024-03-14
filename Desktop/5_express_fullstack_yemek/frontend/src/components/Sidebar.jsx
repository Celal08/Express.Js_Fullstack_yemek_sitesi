import { NavLink } from "react-router-dom"
import { AiFillHome } from "react-icons/ai";
import { FaCompass } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { IoCreate } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-screen justify-between items-center p-3 max-md:p-2 max-md:justify-normal max-md:gap-20 lg:p-10">
        <img className="w-[150px] max-md:[90px]" width={150} src="logo.png" alt="" />
        <p className="flex font-semibold text-2xl text-red-600">Harr Yemek</p>

        <div className="flex flex-col gap-20">
        <NavLink to={"/"} className={"flex gap-4 items-center text-lg text-red-500"}>
            <AiFillHome className="max-md:text-4xl" />
                <span className="max-md:hidden">AnaSayfa</span>
            </NavLink>
            <NavLink to={"/ekle"} className={"flex gap-4 items-center text-lg text-red-500"}>
            <IoCreate className="max-md:text-4xl" />
                <span className="max-md:hidden">Tarif Ekle</span>
            </NavLink>
        <NavLink to={"/discover"} className={"flex gap-4 items-center text-lg text-red-500"}>
            <FaCompass className="max-md:text-4xl" />
                <span className="max-md:hidden">Keşfet</span>
            </NavLink>
            <NavLink to={"/likes"} className={"flex gap-4 items-center text-lg text-red-500"}>
            <FaHeart className="max-md:text-4xl" />
                <span className="max-md:hidden">Favoriler</span>
            </NavLink>
            <NavLink to={"/settings"} className={"flex gap-4 items-center text-lg text-red-500"}>
            <IoSettings className="max-md:text-4xl" />
                <span className="max-md:hidden">Yardım</span>
                
            </NavLink >
        </div>
        <div className="flex flex-col gap-2 max-md:hidden">
            <p className="font-semibold">Günlük Haberleri Al</p>
            <button className="bg-red-500 p-2 rounded-lg text-white hover:bg-red-400">Abone ol</button>
        </div>
    </div>
  )
}

export default Sidebar