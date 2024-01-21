import React from "react";
import { Stack, Box } from "@mui/material";

import { VideoCard, ChanelCard } from "../components/index";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return "Loading...";

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >
      {videos.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChanelCard chanelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
