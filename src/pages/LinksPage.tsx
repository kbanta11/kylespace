import React from 'react';
import { Box, Flex, Heading, Text, Image, Link, VStack, HStack, Center } from '@chakra-ui/react';
import linksData from '../data/links.json';

type LinkItem = {
  name: string;
  url: string;
  icon?: string;
  description?: string;
};

const MYSPACE_BLUE = '#007CEE';
const MYSPACE_DARK_BLUE = '#003E7E';
const PANEL_BG = '#FFFFFF';
const PAGE_BG = '#E6EEF7';

export function LinksPage() {
  const { profile, links } = linksData as {
    profile: { name: string; tagline: string; avatar: string };
    links: LinkItem[];
  };

  return (
    <Box
      minH='100vh'
      bg={PAGE_BG}
      bgImage="radial-gradient(circle at 20% 10%, rgba(0,124,238,0.15), transparent 40%), radial-gradient(circle at 80% 90%, rgba(255,182,193,0.25), transparent 40%)"
      fontFamily='Tahoma, Verdana, Geneva, sans-serif'
      pb={10}
    >
      {/* Top blue bar — matches kylespace header */}
      <Box bg={MYSPACE_BLUE} color='white' px={3} py={2}>
        <Flex maxW='720px' mx='auto' align='end' justify='space-between'>
          <Box>
            <Heading size='md' lineHeight='1'>kylespace</Heading>
            <Text fontSize='xs'>links ✶ projects ✶ vibes</Text>
          </Box>
          <Link
            href='/'
            fontSize='xs'
            textDecoration='underline'
            _hover={{ color: '#FFD700' }}
          >
            ← back to kylespace
          </Link>
        </Flex>
      </Box>

      {/* Profile panel */}
      <Center px={[3, 3, 0]} pt={6}>
        <Box w='full' maxW='520px'>
          <Box
            bg={PANEL_BG}
            border={`1px solid ${MYSPACE_DARK_BLUE}`}
            borderRadius='4px'
            overflow='hidden'
            boxShadow='0 4px 0 rgba(0,62,126,0.15)'
          >
            <Box bg={MYSPACE_BLUE} color='white' px={3} py={1}>
              <Text fontSize='xs' fontWeight='bold' letterSpacing='0.5px'>
                ♡ {profile.name.toUpperCase()} ♡
              </Text>
            </Box>
            <Flex p={4} gap={4} align='center' direction={['column', 'row']}>
              <Image
                src={profile.avatar}
                alt={profile.name}
                boxSize='96px'
                objectFit='cover'
                border={`2px solid ${MYSPACE_BLUE}`}
                borderRadius='4px'
                fallbackSrc='https://via.placeholder.com/96?text=:)'
              />
              <Box textAlign={['center', 'left']}>
                <Heading size='md' color={MYSPACE_DARK_BLUE} fontFamily='Tahoma, Verdana, sans-serif'>
                  {profile.name}
                </Heading>
                <Text fontSize='sm' color='gray.700' mt={1}>
                  {profile.tagline}
                </Text>
                <Text fontSize='xs' color='green.600' mt={2}>
                  ● online now
                </Text>
              </Box>
            </Flex>
          </Box>

          {/* Links panel */}
          <Box
            bg={PANEL_BG}
            border={`1px solid ${MYSPACE_DARK_BLUE}`}
            borderRadius='4px'
            mt={5}
            overflow='hidden'
            boxShadow='0 4px 0 rgba(0,62,126,0.15)'
          >
            <Box bg={MYSPACE_BLUE} color='white' px={3} py={1}>
              <Text fontSize='xs' fontWeight='bold' letterSpacing='0.5px'>
                ✶ TOP LINKS ✶
              </Text>
            </Box>
            <VStack spacing={0} align='stretch'>
              {links.length === 0 ? (
                <Box p={6} textAlign='center'>
                  <Text fontSize='sm' color='gray.500'>
                    no links yet — run <Box as='code' bg='gray.100' px={1}>npm run add-link</Box>
                  </Text>
                </Box>
              ) : (
                links.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.url}
                    isExternal
                    _hover={{ textDecoration: 'none', bg: '#F0F6FE' }}
                    borderTop={idx === 0 ? 'none' : '1px solid #E2E8F0'}
                  >
                    <HStack p={3} spacing={3}>
                      <Image
                        src={link.icon || `https://www.google.com/s2/favicons?domain=${new URL(link.url).hostname}&sz=128`}
                        alt={link.name}
                        boxSize='44px'
                        objectFit='contain'
                        bg='white'
                        border='1px solid #E2E8F0'
                        borderRadius='4px'
                        p='2px'
                        fallbackSrc='https://via.placeholder.com/44?text=?'
                      />
                      <Box flex='1' minW={0}>
                        <Text
                          fontWeight='bold'
                          color={MYSPACE_DARK_BLUE}
                          fontSize='sm'
                          isTruncated
                        >
                          {link.name}
                        </Text>
                        {link.description ? (
                          <Text fontSize='xs' color='gray.600' isTruncated>
                            {link.description}
                          </Text>
                        ) : (
                          <Text fontSize='xs' color='gray.500' isTruncated>
                            {new URL(link.url).hostname.replace(/^www\./, '')}
                          </Text>
                        )}
                      </Box>
                      <Text color={MYSPACE_BLUE} fontSize='lg' aria-hidden>›</Text>
                    </HStack>
                  </Link>
                ))
              )}
            </VStack>
          </Box>

          <Center mt={6}>
            <Text fontSize='xs' color='gray.500'>
              ✦ thanks for stopping by ✦
            </Text>
          </Center>
        </Box>
      </Center>
    </Box>
  );
}
