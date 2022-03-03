import React from 'react';
import { Box, Text, Image } from '@chakra-ui/react';
import { themeState } from  '../../App';
import { useRecoilValue } from 'recoil';

export function NameSection() {
    const theme = useRecoilValue(themeState);
    return (
        <Box textAlign={['center', 'center', 'left']}>
            <Text textColor={theme.nameColor} fontWeight={'bold'} fontSize={'2.5em'} textAlign={['center', 'center', 'left']}>Kyle Banta</Text>
            <Image src='/assets/images/headshot.jpg' 
                alt='ME!' 
                objectFit={'cover'} 
                boxSize={'300px'}
                margin={['0 auto', '0 auto', 0]}
            ></Image>
            <Text fontSize={'1.5em'} textColor={theme.moodTextColor} ><span style={{
                fontWeight: 'bold'
            }}>Mood: </span> Build sh*t. fast.</Text>
        </Box>
    );
}