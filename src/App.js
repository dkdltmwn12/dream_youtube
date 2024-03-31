
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Videos from './pages/Videos';
import VideoDetails from './pages/VideoDetails';
import 'tailwindcss/tailwind.css'
import Root from './pages/Root';
import { YoutubeApiProvider } from './context/YoutubeApiContext';

const router = createBrowserRouter([{
  path: '/',
  element: <Root/>,
  errorElement: <p>Not Found</p>,
  children: [
    {index: true, element: <Videos/>},
    {path: '/result', element: <Videos/>},
    {path: '/result/:search', element: <Videos/>},
    {path: '/result/watch/:videoId', element: <VideoDetails/>}
  ]}
]);


const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <YoutubeApiProvider>
      <RouterProvider router={router}>
      </RouterProvider>
      <ReactQueryDevtools initialIsOpen={false}/>
      </YoutubeApiProvider>
    </QueryClientProvider>
  );
}

export default App;
