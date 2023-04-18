import { FC } from 'react'
import { Box, Center, Flex, Heading, Text } from '@chakra-ui/react'

const user = {
    name: 'John Smith',
    balance: 8640
}

const Home: FC = () => {
    return (
        <Box bg='black' p='6'>
            <Box>
                <Text fontSize='xl' color='whiteAlpha.500'>Good morning!</Text>
                <Heading fontSize='2xl'>{user.name}</Heading>
            </Box>
            <Box mt={4}>
                <Flex alignItems='center' justifyContent='center' direction='column'>
                    <Heading fontSize='5xl'>$ {user.balance}</Heading>
                    <Text fontSize='xl' color='whiteAlpha.500'>Balance</Text>
                </Flex>
            </Box>
        </Box>
    )
}

export default Home
