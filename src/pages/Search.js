import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Spinner from '../components/Spinner';
import { useAppDispatch, useAppSelector } from '../hooks/useApp';
import InfiniteScroll from 'react-infinite-scroll-component';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { clearVideos } from '../features/youtube/youtubeSlice';
import { getSearchPageVideos } from '../store/reducers/getSearchPageVideos';
import SearchCard from '../components/SearchCard';
import './Home.css';

export default function Search() {
    const navigate = useNavigate();
    const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);
    const dispatch = useAppDispatch();
    const videos = useAppSelector((state) => state.youtubeApp.videos);

    useEffect(() => {
        dispatch(clearVideos());
        if (searchTerm === "") navigate("/");
        else (
            dispatch(getSearchPageVideos(false))
        )
    }, [dispatch, navigate, searchTerm]);

    return (
        <div className='flex flex-col h-screen'>
            <div className='flex-none' style={{ height: '7.5vh' }}>
                <Navbar />
            </div>
            <div className='flex flex-grow overflow-hidden'>
                <Sidebar />
                <div className='flex-grow flex justify-center'>
                    {videos.length ? (
                        <div className='flex flex-col gap-5'>
                            <InfiniteScroll
                                dataLength={videos.length}
                                next={() => dispatch(getSearchPageVideos(true))}
                                hasMore={videos.length < 500}
                                loader={<Spinner />}
                                height='92.5vh'
                                style={{ overflow: 'hidden' }}
                            >
                                <div className='custom-scrollbar'>
                                    {videos.map((item) => (
                                            <SearchCard data={item} />
                                    ))}
                                </div>
                            </InfiniteScroll>
                        </div>
                    ) : (
                        <Spinner />
                    )}
                </div>
            </div>
        </div>
    );
}
