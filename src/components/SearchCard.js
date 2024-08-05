import React from 'react';
import { Link } from 'react-router-dom';

export default function SearchCard({ data }) {
    return (
        <div className='flex gap-3 py-4 px-24 '>
            <div className='relative'>
                <span className='absolute bottom-3 right-3 text-sm bg-gray-900 px-2 py-0.5 z-10 rounded-md'>
                    {data.videoDuration}
                </span>

                <Link to={`/watch/${data.videoId}`}>
                    <img src={data.videoThumbnail} alt='Thumbnail' className='h-56 w-96 rounded-xl cursor-pointer' />
                </Link>
            </div>
            <div className='flex gap-2 flex-col'>
                <h3 className='max-w-2xl text-xl'>
                    <a href='#' className='line-clamp-2 cursor-pointer'>
                        <Link to={`/watch/${data.videoId}`}>
                            {data.videoTitle}
                        </Link>
                    </a>
                </h3>
                <div className='text-xs text-gray-400'>
                    <div>
                        <span className="after:content-['•'] after:mx-1">
                            {data.videoViews} views
                        </span>
                        <span>
                            {data.videoAge}
                        </span>
                    </div>
                </div>
                <div className='min-w-fit my-2'>
                    <a href='#' className='flex items-center gap-2 text-xs text-gray-400'>
                        <img src={data.channelInfo.image} alt='Channel Image' className='h-9 w-9 rounded-full' />
                        <span className='line-clamp-1'>{data.channelInfo.name}</span>
                    </a>
                </div>
                <div>
                    <div className='max-w-2xl line-clamp-2 text-sm text-gray-400'>
                        <p>{data.videoDescription}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
