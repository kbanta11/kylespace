import React from 'react';
import { Box, Text, Image } from '@chakra-ui/react';

export function NameSection() {
    return (
        <Box textAlign={['center', 'center', 'left']}>
            <Text fontWeight={'bold'} fontSize={'2.5em'} textAlign={['center', 'center', 'left']}>Kyle Banta</Text>
            <Image src='/assets/images/headshot.jpg' 
                alt='ME!' 
                objectFit={'cover'} 
                boxSize={'300px'}
                margin={['0 auto', '0 auto', 0]}
            ></Image>
            <Text fontSize={'1.5em'}><span style={{
                fontWeight: 'bold'
            }}>Mood: </span> Energized</Text>
        </Box>
    );
}