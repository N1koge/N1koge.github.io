import React from 'react';
import Box from '@material-ui/core/Box';

type MainContentProps = {
  children: React.ReactNode;
};

const MainContentLayout = ({ children }: MainContentProps) => {
  return (
    <Box p={3} bgcolor="white">
      <div>{children}</div>
    </Box>
  );
};

export default MainContentLayout;
