import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useYoutubeApi } from '../context/YoutubeApiContext'
import ListCard from './ListCard';

export default function RelatedVideos({id}) {
    const {youtube} = useYoutubeApi();
    const {
      isLoading,
      error,
      data: videos
    } = useQuery(['related', id], () => youtube.relateVideos(id),
    {staleTime: 1000 * 60 * 5});
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something Error</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <ListCard key={video.id} video={video} type='list'/>
          ))}
      </ul>)}
    </>
  )
}
