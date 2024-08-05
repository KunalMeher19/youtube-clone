import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/useApp";
import { getVideoDetails } from "../store/reducers/getVideoDetails";
import { getRecommendedVideo } from "../store/reducers/getRecommendedVideo";
import Navbar from "../components/Navbar";
import Spinner from "../components/Spinner";

export default function Watch() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const currentPlaying = useAppSelector(
    (state) => state.youtubeApp.currentPlaying
  );

  const recommendedVideo = useAppSelector(
    (state) => state.youtubeApp.recommendedVideo
  );

  useEffect(() => {
    if (id) {
      dispatch(getVideoDetails(id))
        .unwrap()
        .then(() => setLoading(false))
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    } else {
      navigate("/");
    }
  }, [id, navigate, dispatch]);

  useEffect(() => {
    if (currentPlaying && id) dispatch(getRecommendedVideo(id));
  }, [currentPlaying, dispatch, id]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {currentPlaying && currentPlaying?.videoId === id && (
        <div className="max-h-screen overflow-hidden">
          <div>
            <Navbar />
          </div>
          <div>
            <div>
              <div>
                <div className="px-12 py-7 ">
                  <iframe
                    src={`https://www.youtube.com/embed/${id}?autoplay=1`}
                    frameBorder="0"
                    width="1020"
                    height="550"
                    allowFullScreen
                    title="Youtube Player"
                    className="rounded-xl"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="mt-8 px-12">
              <h2 className="text-2xl font-bold mb-4">Recommended Videos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {recommendedVideo.map((video) => (
                  <div key={video.videoId} className="flex flex-col mb-4">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover rounded-lg mb-2"
                    />
                    <div className="flex flex-col">
                      <h3 className="text-lg font-semibold">{video.title}</h3>
                      <p className="text-sm text-gray-600">{video.channelName}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
