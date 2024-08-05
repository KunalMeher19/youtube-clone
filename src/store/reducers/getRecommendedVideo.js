// src/store/reducers/getRecommendedVideo.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { parseRecommendedData } from "../../utils/parseRecommendedData";

const API_KEY = process.env.REACT_APP_YOUTUBE_DATA_API_KEY;

export const getRecommendedVideo = createAsyncThunk(
  "youtubeApp/getRecommendedVideo",
  async (videoId, { getState, rejectWithValue }) => {
    try {
      const {
        youtubeApp: {
          currentPlaying: {
            channelInfo: { id: channelId },
          },
        },
      } = getState();

      console.log('Fetching recommended videos for videoId:', videoId);
      console.log('API Key:', API_KEY);

      const url = `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoId}&type=video&part=snippet&maxResults=20&key=${API_KEY}`;

      console.log('API request URL:', url);

      const response = await axios.get(url);

      console.log('API response:', response);

      const items = response.data.items;
      const parsedData = await parseRecommendedData(items);

      return { parsedData };
    } catch (err) {
      if (err.response) {
        // Log detailed error information
        console.error('API request error:', {
          status: err.response.status,
          statusText: err.response.statusText,
          data: err.response.data,
        });
      } else {
        console.error('API request error:', err.message);
      }
      return rejectWithValue(err.response ? err.response.data : err.message);
    }
  }
);
