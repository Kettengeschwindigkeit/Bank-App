import { useCallback, useMemo, useState } from 'react'

export const useRedGroup = () => {
    const [channelName, setChannelName] = useState('RED Group')

    const getChannelName = useCallback(() => channelName, [channelName])

    return useMemo(() => ({ channelName, setChannelName, getChannelName }), []) 
}
