import React from 'react';
import { Box, Text, Image, SimpleGrid, Stack,
 Link, Center } from '@chakra-ui/react';

export function TopProjectSection() {
    return (
        <Box textAlign={'left'}>
            <Box backgroundColor={'#FFEAB2'} paddingStart={'10px'}>
                <Text fontWeight={'bold'} color={'#FF7A00'} fontSize={'1.5em'} textAlign={'left'}>Kyle's Top Projects</Text>
            </Box>
            <SimpleGrid columns={[1,2]} spacing={'5px'} verticalAlign={'bottom'}>
                <Box verticalAlign={'bottom'}>
                    <Link href='https://robotrust.xyz' isExternal>
                        <Center>
                            <Stack fontSize={['14px', '16px', '18px']}>
                                <Text textAlign={'center'}>Robotrust.xyz</Text>
                                <Image textAlign={'center'} boxSize={['10em']} src='/assets/images/nevertrustarobot.png' />
                            </Stack>
                        </Center>
                    </Link>
                </Box>
                <Box verticalAlign={'bottom'}>
                    <Link href='https://perklapp.com' isExternal>
                        <Center>
                            <Stack  fontSize={['14px', '16px', '18px']}>
                                <Text textAlign={'center'}>Perkl</Text>
                                <Image boxSize={'10em'} src='/assets/images/logo.png' />
                            </Stack>
                        </Center>
                    </Link>
                </Box>
                <Box verticalAlign={'bottom'}>
                    <Link href='https://joincompany.io' isExternal>
                        <Center>
                            <Stack fontSize={['14px', '16px', '18px']}>
                                <Text textAlign={'center'}>The Company App</Text>
                                <Image boxSize={'10em'} src='/assets/images/icon.png' />
                            </Stack>
                        </Center>
                    </Link>
                </Box>
                <Box>
                    <Link href='https://klxtn.xyz' isExternal>
                        <Center>
                            <Stack fontSize={['14px', '16px', '18px']}>
                                <Text textAlign={'center'}>KLXTN.xyz</Text>
                                <Image boxSize={'10em'} src='/assets/images/klxtn.png' fit={'cover'}/>
                            </Stack>
                        </Center>
                    </Link>
                </Box>
            </SimpleGrid>
        </Box>
    );
}