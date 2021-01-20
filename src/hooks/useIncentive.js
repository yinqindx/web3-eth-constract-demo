import { useEffect, useCallback, useState } from 'react'
import { getEarned } from '../yam-sdk/incentive'

const account = '0xaF1298e387D6AFc9BB2120343AB2358C7a3f7282'

const userIncentive = () => {
  const [earned, setEarned] = useState(0)
  const fetchEarned = useCallback(async () => {
    const data = await getEarned(account)
    setEarned(data)
  }, [account])


  useEffect(() => {
    let refreshInterval = setInterval(fetchEarned, 1000)
    return () => clearInterval(refreshInterval)
  }, [account])

  return earned
}

export default userIncentive
