import { FC } from 'react'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { user } from './Home'

const Balance: FC = () => {
    return (
        <Box pos='relative' width={'50%'} m='auto' mt={4}>
            <Flex pos='relative' alignItems='center' justifyContent='center' direction='column' zIndex={2}>
                <Heading fontSize='5xl'>$ {user.balance}</Heading>
                <Text fontSize='xl' color='whiteAlpha.500'>Balance</Text>
            </Flex>
            <Flex pos='absolute' alignItems='center' justifyContent='center' direction='column' w='full' h='full' top={-6} left={0} zIndex={1}>
                <Box pos='absolute' w={150} h={150} top={0} left={'20%'}>
                    <Box pos='absolute' w={100} h={100} top={6} left={-180} boxShadow='200px 0px 120px rgb(130 255 113 / 85%)' />
                </Box>
            </Flex>
        </Box>
    )
}

export default Balance
