import { FC } from 'react'
import { Box, Center, Flex, Heading, IconButton, Text, useBoolean, useDisclosure } from '@chakra-ui/react'
import { ArrowRightIcon } from '@chakra-ui/icons'
import Balance from './Balance'
import TransferModal from './TransferModal'

export const user = {
    name: 'John Smith',
    balance: 8640
}

const Home: FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box bg='black' p='6'>
            <Box>
                <Text fontSize='xl' color='whiteAlpha.500'>Good morning!</Text>
                <Heading fontSize='2xl'>{user.name}</Heading>
            </Box>
            <Balance />

            <IconButton display='block' m='auto' mt={8} icon={<ArrowRightIcon />} variant='outline' colorScheme='white' aria-label='Transfer' fontSize='18px' onClick={onOpen} />

            <TransferModal isOpen={isOpen} onClose={onClose} />
        </Box>
    )
}

export default Home
