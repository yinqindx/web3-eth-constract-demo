import React from 'react'
import useIncentive from './hooks/useIncentive'

const account = '0xaF1298e387D6AFc9BB2120343AB2358C7a3f7282'

const App = () => {
  const earned = useIncentive(account)
  return (
    <div>
      <h1>demo</h1>
      <h2>通过yam激励合约获取赚取的YAM</h2>
      <p>
        账号：
        <a href={`https://etherscan.io/address/${account}`} target="__blank">
          {account}
        </a>
      </p>
      <p>赚取的YAM：{earned}</p>
    </div>
  )
}

export default App
