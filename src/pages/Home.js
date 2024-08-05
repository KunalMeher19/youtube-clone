import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Spinner from '../components/Spinner';
import Card from '../components/Card';
import { useAppDispatch, useAppSelector } from '../hooks/useApp';
import { getHomePageVideos } from '../store/reducers/getHomePageVideos';
import InfiniteScroll from 'react-infinite-scroll-component';
import './Home.css';

export default function Home() {
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);

  useEffect(() => {
    dispatch(getHomePageVideos(false));
  }, [dispatch]);

  return (
    <div className='flex flex-col h-screen'>
      <div className='flex-none' style={{ height: '7.5vh' }}>
        <Navbar />
      </div>
      <div className='flex flex-grow overflow-hidden'>
        <Sidebar />
        <div className='flex-grow'>
          {videos.length ? (
            <InfiniteScroll
              dataLength={videos.length}
              next={() => dispatch(getHomePageVideos(true))}
              hasMore={videos.length < 500}
              loader={<Spinner />}
              height='92.5vh'
              style={{ overflow: 'hidden' }}
            >
              <div className='grid gap-y-24 gap-x-4 grid-cols-4 p-8 custom-scrollbar'>
                {videos.map((item) => (
                  <Card key={item.videoId} data={item} />
                ))}
              </div>
            </InfiniteScroll>
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </div>
  );
}
