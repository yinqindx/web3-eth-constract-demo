import React from 'react'
import useIncentive from './hooks/useIncentive'

const App = () => {
  const earned = useIncentive()
  return <div>赚取的YAM：{earned}</div>
}

export default App
