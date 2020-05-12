import React from 'react'
import logo from './logo.svg'
import './App.css'
import { ethers } from 'ethers'

async function testGetBalance() {
  // let url = 'https://rpc.tch.in.th'
  let url = 'https://rpc.gochain.io/'
  let provider = new ethers.providers.JsonRpcProvider(url)

  let address = '0x1F10C47A07BAc12eDe10270bCe1471bcfCEd4Baf'

  provider.getBalance(address).then((balance) => {
    // balance is a BigNumber (in wei); format is as a sting (in ether)
    let etherString = ethers.utils.formatEther(balance)

    console.log('Balance: ' + etherString)
  })
}

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => testGetBalance()}>testGetBalance</button>
      </header>
    </div>
  )
}

export default App
