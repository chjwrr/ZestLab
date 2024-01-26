import { useEffect, useRef, useState } from 'react';
import './index.less'
import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useApprove } from '@/hooks/useTokenContract';
import { DOVART_CONTRACT_ADDRESSSES, TEST_CONTRACT_ADDRESSSES, TOX_ADDRESSSES, USDT_ADDRESSSES } from '@/Contract/addresses';
import { ApprovalState } from '@/Common';
import { useAccount, useSignMessage } from 'wagmi';
import _ from 'lodash'
import BigNumber from "bignumber.js";
import { useMutilCallTest, useNumberOfTokens, useSendTransaction } from '@/Contract';
import { parseUnits } from 'ethers';
import { useDOVARTContract, useProvider, useSigner } from '@/hooks/useContract';
import { Contract, ethers} from "ethers"
import DOVART_ABI from '@/ABI/DOVART.json'
import { publicClient } from '@/provider/Web3ModalProvider';
import { parseAbiItem } from 'viem'
import Skeletons, { SkeletonsText, SkeletonsImage } from '@/Components/Skeletons';

export default function HomePage() {
  const {open} = useWeb3Modal()
  const {address} = useAccount()
  const a = useMutilCallTest()
  const v = useNumberOfTokens()
  function onConnectWallet(){
    open && open()
  }
  const signer = useSigner()
  const provider = useProvider()
  const numberOfTokens = useNumberOfTokens()
  const DOVARTContract = useDOVARTContract(DOVART_CONTRACT_ADDRESSSES)
  const  sendTransaction = useSendTransaction()
  const isOn = useRef(false)

  useEffect(()=>{
    if (isOn.current)return
    console.log('--------------')
    const unwatch = publicClient.watchEvent({
      address: '0x2F295157735f9D7C53b2bE8Ff58F47AC63666861',
      event: parseAbiItem('event Transfer(address indexed from, address indexed to, uint256 value)'), 
      onLogs: logs => console.log('Transfer',logs)
    })
    const unwatch1 = publicClient.watchEvent({
      address: '0x2F295157735f9D7C53b2bE8Ff58F47AC63666861',
      event: parseAbiItem('event MintDOVArt(address account, uint256 _tokenID)'), 
      onLogs: logs => console.log('MintDOVArt==',logs)
    })

    isOn.current = true

    return ()=>{
      unwatch()
      unwatch1()
    }
  },[])
  function onMint() {
    if (!DOVARTContract)return
    sendTransaction.mutate({
      title:'Mint',
      func:DOVARTContract.mint,
      args:[],
      value:parseUnits('0.000001'), 
      onSuccess:()=>{
        
      }
    })
  }

  return (
    <div className='mainView'>
      <div className='mainContent'>
        <div className='box'>We believe that with the power of Web3, we can achieve a global shift towards sustainable living. We encourage everyone to join us in creating a more environmentally friendly, equitable, and sustainable future.</div>
      </div>
    </div>
  );
}
export async function clientLoader() {
  const data = await fetch('/api/data');
  return [1,2,3];
}