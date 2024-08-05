import React from 'react'
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdOutlineSwitchAccount } from "react-icons/md";
import { VscHistory } from "react-icons/vsc";
import { MdPlaylistPlay } from "react-icons/md";
import { MdVideoSettings } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { FaScissors } from "react-icons/fa6";


export default function Sidebar() {

  const mainLinks = [
    { name: "Home", icon: <GoHome /> },
    { name: "Shorts", icon: <SiYoutubeshorts /> },
    { name: "Subscriptions", icon: <MdOutlineSubscriptions /> },

  ];

  const otherLinks = [
    { name: "Your Acoount", icon: <MdOutlineSwitchAccount /> },
    { name: "History", icon: <VscHistory /> },
    { name: "Playlists", icon: <MdPlaylistPlay /> },
    { name: "Your Videos", icon: <MdVideoSettings /> },
    { name: "Watch Later", icon: <MdOutlineWatchLater /> },
    { name: "Liked Videos", icon: <BiLike /> },
    { name: "Your Clips", icon: <FaScissors /> },
  ]

  return (
    <div className='w-64 bg-zinc-900 p-2 pr-5 pb-8 overflow-auto  h-screen'>
      <ul className='flex flex-col border-b-2 border-gray-600  pb-3 cursor-pointer'>
        {mainLinks.map(
          ({ icon, name }) => {
            return (
              <li key={name} className={'pl-6 py-3 hover:bg-zinc-800 rounded-xl'}>
                <a href="#" className="flex items-center gap-5">
                  <div className='text-xl'>
                    {icon}
                  </div>
                  <span className='text-sm tracking-wider'>{name}</span>
                </a>
              </li>
            )
          }
        )}
      </ul>

      <ul className='flex flex-col border-b-2 border-gray-600 pt-3 pb-3 cursor-pointer'>
        {otherLinks.map(
          ({ icon, name }) => {
            return (
              <li key={name} className={'pl-6 py-3 hover:bg-zinc-800 rounded-xl'}>
                <a href="#" className="flex items-center gap-5">
                  <div className='text-xl'>
                    {icon}
                  </div>
                  <span className='text-sm tracking-wider mx-[-5px]'>{name}</span>
                </a>
              </li>
            )
          }
        )}
      </ul>
    </div>
  )
}
