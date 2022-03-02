import React from 'react';
import { Box, Text } from '@chakra-ui/react';

export function AboutMeSection() {
    return (
        <Box textAlign={'left'}>
            <Box backgroundColor={'#FFEAB2'} paddingStart={'10px'}>
                <Text fontWeight={'bold'} color={'#FF7A00'} fontSize={'1.5em'} textAlign={'left'}>About Me</Text>
            </Box>
            <Text>What's up ya'll! I'm Kyle and welcome to my... space...! I'm a software developer and data analyst currently diving into blockchain and smart contract development. I have experience building software applications from the ground up, from designing and building the back-end data models and data pipelines to designing and building out the front-end user-interface.</Text><Box height={'1em'}/>
            <Text>As a largely self-taught software developer (YouTube University and the University of the Internet), my tool belt is quite broad. On the data front, my tools of choice are python in Jupyter notebooks using pandas and scikit-learn, though here's still so much you can get done by just using Excel. To get and store data, I have the most experience with SQL and relational databases, though in my personal projects, I've largely used NoSQL databases like Firebase.</Text><Box height={'1em'}/>
            <Text>When it comes to software development, I'm most experienced using Flutter and Dart to build apps for mobile, web and desktop. I love the speed that dart and Flutter offers. I have also been building web3 apps using React. The rest of my web3/blockchain stack looks like this: Solidity (EVM FTW!), Hardhat and ethers.js.</Text><Box height={'1em'}/>
            <Text>Looking forward to building cool new things with cool new tech (and right now, the world of web3 is soooo, soooooo exciting)!</Text>
        </Box>
    );
}