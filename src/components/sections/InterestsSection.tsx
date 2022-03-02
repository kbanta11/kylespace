import React from 'react';
import { Box, Text, Grid, GridItem } from '@chakra-ui/react';

export function InterestsSection() {
    return (
        <Box textAlign={'left'} border={'1px'} borderColor={'#86D3FF'}>
            <Box backgroundColor={'#86D3FF'} paddingStart={'10px'}>
                <Text fontWeight={'bold'} color={'white'} fontSize={'1.5em'} textAlign={'left'}>
                    Kyle's Interests
                </Text>
            </Box>
            <Grid templateColumns={'repeat(4, 1fr)'} gap={1} paddingStart={1} paddingTop={1} paddingBottom={1} paddingEnd={1}>
                <GridItem colSpan={1} backgroundColor={'#C1E5FF'} paddingStart={1} textColor={'blue.500'}>
                    books
                </GridItem>
                <GridItem colSpan={3} backgroundColor={'#C1E5FF'} paddingStart={1} paddingEnd={1} paddingTop={1} paddingBottom={1}>
                    Reading a lot of blockchain books lately (I'd recommend The Infinite Machine for story and Token Economy for knowledge). Big fan of the James Reece series by Jack Carr! Loved the Alex Rider series growing up (and reading the new ones now that I know there's a TV show!). Read mostly non-fiction, listen to fiction.
                </GridItem>
                <GridItem colSpan={1} backgroundColor={'#C1E5FF'} paddingStart={1} textColor={'blue.500'}>
                    movies
                </GridItem>
                <GridItem colSpan={3} backgroundColor={'#C1E5FF'} paddingStart={1} paddingEnd={1} paddingTop={1} paddingBottom={1}>
                    Make it funny, action-packed or informative. Documentaries are definitely my favorite, then comedy. Not a fan of RomComs. (but honestly, don't really watch too many movies, except documentaries)
                </GridItem>
                <GridItem colSpan={1} backgroundColor={'#C1E5FF'} paddingStart={1} textColor={'blue.500'}>
                    television
                </GridItem>
                <GridItem colSpan={3} backgroundColor={'#C1E5FF'} paddingStart={1} paddingEnd={1} paddingTop={1} paddingBottom={1}>
                Again, comedies (South Park/Californication/Silicon Valley/Nathan for You, to name a few) and informative shows (docuseries like Planet Earth/Shark Tank/Mythbusters (or Junkyard Wars, anyone?) and really anything where I can learn about lesser-known topics). Mostly YouTube these days, though. Love to learn at YouTube University (Johnny Harris/ Jake Tran/ Graham Stephan/ Wendover Productions/ Logically Anwered/PolyMatter/RealLifeLore to name just a few)!
                </GridItem>
                <GridItem colSpan={1} backgroundColor={'#C1E5FF'} paddingStart={1} textColor={'blue.500'}>
                    music
                </GridItem>
                <GridItem colSpan={3} backgroundColor={'#C1E5FF'} paddingStart={1} paddingEnd={1} paddingTop={1} paddingBottom={1}>
                At this point, a little of basically anything. From chill acoustic folk to heavy metal. From blues to country to electronica. I'll go on kicks of Dirty Heads/Jack Johnson/Ben Howard-style tunes, kicks of Gary Clark Jr/Stevie Ray, kicks of Blue Scholars/Gangstarr and even kicks of The Monkees or Queen (who doesn't go on Queen kicks though?!?).
                </GridItem>
                <GridItem colSpan={1} backgroundColor={'#C1E5FF'} paddingStart={1} textColor={'blue.500'}>
                    who I'd like to meet
                </GridItem>
                <GridItem colSpan={3} backgroundColor={'#C1E5FF'} paddingStart={1} paddingEnd={1} paddingTop={1} paddingBottom={1}>
                So many people from history: Nikola Tesla, Alan Turing, Archimedes. Of the living, a few are Tim Ferriss, William Finnegan, Satoshi Nakamoto (ok, I'll settle for Vitalik since Satoshi is a mystery!) and Joe Rogan (so many wild guests he can draw from for conversation!). As athletes go (because what sports fan doesn't want to meet their favorite athletes?): Max Holloway, Derrick Henry and Eddie George, Kelly Slater.
                </GridItem>
            </Grid>
        </Box>
    );
}