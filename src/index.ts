
import algosdk from "algosdk";
import MyAlgoSession  from "../src/wallets/myalgo";
import { FundIN } from './app_client/fundin_client';

const myAlgo = new MyAlgoSession();
const algodClient = new algosdk.Algodv2('', "https://node.testnet.algoexplorerapi.io", '');
const indexerClient = new algosdk.Indexer('', "https://algoindexer.testnet.algoexplorerapi.io", '');

async function signer(txns: algosdk.Transaction[]) {
  const sTxns = await myAlgo.signTxns(txns)
  return sTxns.map((s: { blob: any; }) => s.blob)
}

export const connectWalletAction = async () => {
  console.log('hello world');
  
}