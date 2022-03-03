import React from 'react';
import './App.css';
import { atom, useRecoilValue, useSetRecoilState } from 'recoil'
import { Grid, GridItem, Text, Heading, Box, Center, Flex, Select, Spacer } from '@chakra-ui/react';
import { NameSection } from './components/sections/NameSection';
import { ContactSection } from './components/sections/ContactSection';
import { TopProjectSection } from './components/sections/TopProjectSection';
import { AboutMeSection } from './components/sections/AboutMeSection';
import { InterestsSection } from './components/sections/InterestsSection';
import { getTheme, ThemeFormat } from './components/themeFormatting';

export const themeState = atom({
  key: 'themeState',
  default: new ThemeFormat()
});

function App() {
  const theme = useRecoilValue(themeState);
  const setTheme = useSetRecoilState(themeState);

  const onChange =(event: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme((oldTheme) => getTheme( event.target.value) );
    console.log('New Theme: %s', event.target.value);
  };
  

  return (
    <Center maxWidth={'100%'}  bgImage={[theme.bgImgSmall, theme.bgImgSmall, theme.bgImg]} bgSize={'cover'} bgPos={'center center'}>
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
                  <Select size={'xs'} color={'black'} bg={'white'} value={theme.value} onChange={onChange}>
                    <option value={'regular'}>Regular</option>
                    <option value={'surfs-up'}>Surf's Up</option>
                    <option value={'titan-up'}>Titan Up</option>
                    <option value={'nerd-mode'}>Nerd Mode</option>
                    <option value={'lets-hike'}>Let's Hike</option>
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
