import { VideoCard, ChannelCard } from './';
import { Stack, Box } from '@mui/material';

const Videos = ({ videos, direction }) => {
  if(!videos?.length) return 'Loading...';

  return (
    <Stack
      direction = {direction || 'row'} justifyContent = 'start' flexWrap = 'wrap' gap = {2}
    >
      {videos.map((item, idx) => (
        <Box key = {idx}>
          {item.id.videoId && <VideoCard video = {item} />}
          {item.id.channelId && <ChannelCard channelDetail = {item} />}
        </Box>
      ))}

    </Stack>
  )
}

export default Videos