import React, { FunctionComponent } from 'react';
import { Stack, VStack, Flex, Button } from '@chakra-ui/react'

import Title from './Title'
import Overview from './Overview';
import UstPanel from './UstPanel';
import LunaPanel from './LunaPanel';
import How from './How';
import TVL from './TVL';

const Dashboard: FunctionComponent = (props) => {
  return (
    <VStack 
      mt={'15px'} 
      px={{sm:'10px', md:'20px', lg:'110px'}}
      w={'100%'}
      spacing={'53px'}
    >
      <Title />
      <Overview/>
      <Stack 
        direction={{sm: 'column', md:'column', lg:'row'}}
        spacing={'56px'}
        w={'100%'}
      >
        <UstPanel />
        <LunaPanel />
      </Stack>
      <How />
      <TVL />
    </VStack>
  );
}
export default Dashboard;