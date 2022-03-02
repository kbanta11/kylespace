import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid, GridItem, Text, Heading, Box, Center, Flex, HStack, Link, Select, Spacer } from '@chakra-ui/react';
import { NameSection } from './components/sections/NameSection';
import { ContactSection } from './components/sections/ContactSection';
import { TopProjectSection } from './components/sections/TopProjectSection';
import { AboutMeSection } from './components/sections/AboutMeSection';
import { InterestsSection } from './components/sections/InterestsSection';

function App() {
  return (
    <Center maxWidth={'100%'}>
      <Box>
        <Box backgroundColor={'#007CEE'} color={'white'} textAlign={'left'} verticalAlign={'bottom'} paddingStart={2}>
            <Flex alignItems={'end'} paddingBottom={'5px'}>
              <Box>
                <Heading>kylespace</Heading>
                <Text fontSize='medium'>a place for kyle.</Text>
              </Box>
              <Spacer />
              <Box paddingEnd={2} verticalAlign={'bottom'}>
                <Text fontSize={'small'}>Change Theme: </Text>
                  <Select size={'xs'} color={'black'} bg={'white'}>
                    <option value={'Regular'}>Regular</option>
                    <option value={'Surf\'s Up'}>Surf's Up</option>
                    <option value={'Titan Up'}>Titan Up</option>
                    <option value={'Nerd Mode'}>Nerd Mode</option>
                    <option value={'Let\'s Hike'}>Let's Hike</option>
                  </Select>
              </Box>
            </Flex>
        </Box>
        <Box paddingTop={'5px'} alignSelf={'center'} paddingStart={['10px', '10px', 0]} paddingEnd={['10px', '10px', 0]}>
          <Center>
            <Grid
              templateColumns='repeat(4, 1fr)'
              //templateRows='repeat(6, 1fr)'
              gap={4}
              maxWidth={['100%', '100%', '80vw']}
            >
              <GridItem colSpan={[4, 4, 2]} rowSpan={[1, 1, 2]}><NameSection /></GridItem>
              <GridItem colSpan={[4, 4, 2]} rowSpan={[1, 1, 2]}><TopProjectSection /></GridItem>
              <GridItem colSpan={[4, 4, 2]} rowSpan={1}><ContactSection /></GridItem>
              <GridItem colSpan={[4, 4, 2]} rowSpan={[1, 1, 2]}><AboutMeSection /></GridItem>
              <GridItem colSpan={[4, 4, 2]} rowSpan={[1, 1, 3]}><InterestsSection /></GridItem>
            </Grid>
          </Center>
        </Box>
      </Box>
    </Center>
  );
}

export default App;
