import web3 from './web3'
import INCENTIVE_JSON from './contracts/incentive.json'
import { INCENTIVE as INCENTIVE_ADDRESS } from './constant'

const INCENTIVE_CONTRACT = new web3.eth.Contract(INCENTIVE_JSON.abi)

INCENTIVE_CONTRACT.options.address = INCENTIVE_ADDRESS

export const getEarned = async (account) => {
  const earned = await INCENTIVE_CONTRACT.methods.earned(account).call()
  return earned
}

export default INCENTIVE_CONTRACT
