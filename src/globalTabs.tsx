import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MainContentLayout from '../src/mainContentLayout';
import Profile from '../src/profile';
import Skills from '../src/skills';
import Works from '../src/works';

import Toolbar from '@material-ui/core/Toolbar';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel=${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <MainContentLayout>{children}</MainContentLayout>}
    </div>
  );
};

const allyProps = (index: any) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

const useStyles = makeStyles({
  grow: {
    flexGrow: 1,
  },
  toolBar: {
    minHeight: 0,
  },
});

const GlobalTabs = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar color="inherit" position="sticky">
        <Toolbar className={classes.toolBar}>
          <Typography variant="subtitle2">N1koge's Portfolio</Typography>
          <Tabs
            className={classes.grow}
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            centered
          >
            <Tab label="Profile"></Tab>
            <Tab label="Skills"></Tab>
            <Tab label="Works"></Tab>
          </Tabs>
        </Toolbar>
      </AppBar>
      <TabPanel value={value} index={0} {...allyProps(0)}>
        <Profile />
      </TabPanel>
      <TabPanel value={value} index={1} {...allyProps(1)}>
        <Skills />
      </TabPanel>
      <TabPanel value={value} index={2} {...allyProps(2)}>
        <Works />
      </TabPanel>
    </div>
  );
};

export default GlobalTabs;
