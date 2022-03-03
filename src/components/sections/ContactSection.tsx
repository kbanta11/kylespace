import React from 'react';
import { Box, Text, Grid, 
    GridItem, Image, HStack, Link } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';
import { themeState } from '../../App';

export function ContactSection() {
    const theme = useRecoilValue(themeState);

    return (
        <Box textAlign={'left'} border={'1px'} borderColor={theme.contactBoxColor} backgroundColor={theme.contactBoxBgColor}>
            <Box backgroundColor={theme.contactBoxColor} paddingStart={'10px'}>
                <Text fontWeight={'bold'} color={theme.contactHeaderTextColor} fontSize={'1.5em'} textAlign={'left'}>Contacting Kyle Banta</Text>
            </Box>
            <Grid templateColumns={'repeat(2, 1fr)'} paddingStart={'8px'} paddingTop={'5px'} paddingBottom={'5px'} gap={4}>
                <GridItem colSpan={1}>
                    <HStack>
                        <Image src='/assets/icons/Mail.png' />
                        <Link href='mailto:kbantadevelopment@gmail.com'
                            fontWeight={'bold'} color={theme.contactLinkTextColor}
                        >email me</Link>
                    </HStack>
                </GridItem>
                <GridItem colSpan={1}>
                    <HStack>
                        <Image src='/assets/icons/Youtube.png' />
                        <Link href='https://web3van.com' isExternal
                            fontWeight={'bold'} color={theme.contactLinkTextColor}
                        >watch my web3 van</Link>
                    </HStack>
                </GridItem>
                <GridItem colSpan={1}>
                    <HStack>
                        <Image src='/assets/icons/LinkedIN.png' />
                        <Link href='https://linkedin.com/in/kylebanta.com' isExternal
                            fontWeight={'bold'} color={theme.contactLinkTextColor}
                        >view my LinkedIn</Link>
                    </HStack>
                </GridItem>
                <GridItem colSpan={1}>
                    <HStack>
                        <Image src='/assets/icons/Twitter.png' />
                        <Link href='https://twitter.com/kbanta11' isExternal
                            fontWeight={'bold'} color={theme.contactLinkTextColor}
                        >find me on Twitter</Link>
                    </HStack>
                </GridItem>
                <GridItem colSpan={1}>
                    <HStack>
                        <Image src='/assets/icons/Github.png' />
                        <Link href='https://github.com/kbanta11' isExternal
                            fontWeight={'bold'} color={theme.contactLinkTextColor}
                        >checkout my Github</Link>
                    </HStack>
                </GridItem>
            </Grid>
        </Box>
    );
}