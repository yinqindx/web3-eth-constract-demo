import Web3 from 'web3'

export const provider = window.ethereum || 'https://mainnet.infura.io/v3/bef3d3ddb21b45f89f70b0a194ab541d'

const web3 = new Web3(provider)

export default web3
