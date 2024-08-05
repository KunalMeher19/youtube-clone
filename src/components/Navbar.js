import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoLogoYoutube } from "react-icons/io";
import { LuSearch } from "react-icons/lu";
import { HiMicrophone } from "react-icons/hi2";
import { RiVideoAddLine } from "react-icons/ri";
import { BsBell } from "react-icons/bs";
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/useApp';
import { changeSearchTerm, clearVideos } from '../features/youtube/youtubeSlice';
import { getSearchPageVideos } from '../store/reducers/getSearchPageVideos';


export default function Navbar() {

    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const searchTerm = useAppSelector((state => state.youtubeApp.searchTerm));

    const handleSearch = () => {
        if (location.pathname !== '/search') navigate("/search");
        else {
            dispatch(clearVideos);
            dispatch(getSearchPageVideos(false))
        }
    }
    return (
        <div className='flex justify-between px-5 h-14 items-center bg-zinc-900 opacity-95 sticky'>

            <div className='flex gap-8 items-center text-2xl'>
                <div>
                    <RxHamburgerMenu className='cursor-pointer' />
                </div>
                <div className='flex gap-2 items-center justify-center'>
                    <IoLogoYoutube className='text-3xl text-red-500 cursor-pointer' />
                    <span className='text-xl cursor-pointer'>Youtube</span>
                </div>
            </div>

            <div className='flex items-center justify-center gap-5'>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleSearch();
                }} className='flex items-center'>
                    <div className='flex bg-zinc-900 item-center h-10 px-4 pr-0 rounded-3xl border border-zinc-800 '>
                        <div className='flex gap-5 item-center pr-5'>
                            <input 
                            type='text' 
                            placeholder='Search' 
                            className='w-96 bg-zinc-900 focus:outline-none'
                            value={searchTerm}
                            onChange={(e) => dispatch(changeSearchTerm(e.target.value))}
                            />
                        </div>
                        <button className='h-10 w-16 flex items-center justify-center bg-zinc-800 rounded-r-3xl'>
                            <LuSearch className='text-xl cursor-pointer' />
                        </button>
                    </div>
                </form>
                <div className='text-xl p-3 bg-zinc-800 rounded-full'>
                    <HiMicrophone className='cursor-pointer' />
                </div>
            </div>

            <div className='flex gap-8 items-center text-xl'>
                <RiVideoAddLine className='cursor-pointer' />
                <div className='relative'>
                    <BsBell className='cursor-pointer' />
                    <span className='absolute bottom-2 left-2 text-xs bg-red-600 rounded-full p-0.5 cursor-pointer'>9+</span>
                </div>
                <img src='https://cdn-icons-png.flaticon.com/512/3135/3135823.png' alt='profile-logo' className='w-9 h-9 rounded-full cursor-pointer' />
            </div>

        </div>
    )
}
