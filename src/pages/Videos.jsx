import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query';
import ListCard from '../components/ListCard';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import LinearDeterminate from '../components/LinearDeterminate';

export default function Videos() {
  const {search} = useParams();
  const {youtube} = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos
  } = useQuery(['videos', search], () => youtube.keyword(search),
  {staleTime: 1000 * 60 * 1});
  
  return (
    <>
    {isLoading && <LinearDeterminate/>}
    {error && <p>Something Error</p>}
    {videos && <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4'>
      {videos.map((video) => <ListCard  key={video.id} video={video}/>)}
      </ul>}
    </>
  )
}
