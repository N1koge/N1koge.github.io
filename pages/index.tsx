import React from 'react';
import { NextPage } from 'next';
import Layout from '../src/layout';
import GlobalTabs from '../src/globalTabs';

const Portfolio: NextPage = () => {
  return (
    <React.Fragment>
      <Layout>
        <GlobalTabs></GlobalTabs>
      </Layout>
    </React.Fragment>
  );
};

export default Portfolio;
