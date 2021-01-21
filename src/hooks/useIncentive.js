import { useEffect, useCallback, useState } from 'react'
import { getEarned } from '../yam-sdk/incentive'

const userIncentive = (account) => {
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
