import React from 'react';
import { Box, Text, Grid, 
    GridItem, Image, HStack, Link } from '@chakra-ui/react';

export function ContactSection() {
    return (
        <Box textAlign={'left'} border={'1px'} borderColor={'#86D3FF'}>
            <Box backgroundColor={'#86D3FF'} paddingStart={'10px'}>
                <Text fontWeight={'bold'} color={'white'} fontSize={'1.5em'} textAlign={'left'}>Contacting Kyle Banta</Text>
            </Box>
            <Grid templateColumns={'repeat(2, 1fr)'} paddingStart={'8px'} paddingTop={'5px'} paddingBottom={'5px'} gap={4}>
                <GridItem colSpan={1}>
                    <HStack>
                        <Image src='/assets/icons/Mail.png' />
                        <Link href='mailto:kbantadevelopment@gmail.com'
                            fontWeight={'bold'} color={'blue.500'}
                        >email me</Link>
                    </HStack>
                </GridItem>
                <GridItem colSpan={1}>
                    <HStack>
                        <Image src='/assets/icons/Youtube.png' />
                        <Link href='https://web3van.com' isExternal
                            fontWeight={'bold'} color={'blue.500'}
                        >watch my web3 van</Link>
                    </HStack>
                </GridItem>
                <GridItem colSpan={1}>
                    <HStack>
                        <Image src='/assets/icons/LinkedIN.png' />
                        <Link href='https://web3van.com' isExternal
                            fontWeight={'bold'} color={'blue.500'}
                        >view my LinkedIn</Link>
                    </HStack>
                </GridItem>
                <GridItem colSpan={1}>
                    <HStack>
                        <Image src='/assets/icons/Twitter.png' />
                        <Link href='https://web3van.com' isExternal
                            fontWeight={'bold'} color={'blue.500'}
                        >find me on Twitter</Link>
                    </HStack>
                </GridItem>
                <GridItem colSpan={1}>
                    <HStack>
                        <Image src='/assets/icons/Github.png' />
                        <Link href='https://web3van.com' isExternal
                            fontWeight={'bold'} color={'blue.500'}
                        >checkout my Github</Link>
                    </HStack>
                </GridItem>
            </Grid>
        </Box>
    );
}