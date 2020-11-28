import React from 'react';
import { PageProps } from 'gatsby';

import Title from '@/components/Title';

const Home: React.FC<PageProps> = () => (
  <main>
    <Title />
    <p>Testing Amplify Deployment via CDK</p>
  </main>
);

export default Home;
