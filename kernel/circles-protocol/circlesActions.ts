import { mnemonicToEntropy } from "bip39";
import Web3 from "web3";
import type { Account } from "web3-core";

import CirclesCore from '@circles/core';
import BN from "bn.js";

const ETHEREUM_NODE_WS = "wss://xdai.poanetwork.dev/wss";
const provider = new Web3.providers.WebsocketProvider(
  ETHEREUM_NODE_WS,
  {
    timeout: 30000,
    reconnect: {
      auto: true,
      delay: 5000,
      maxAttempts: 5,
      onTimeout: false
    },
    clientConfig: {
      keepalive: true,
      keepaliveInterval: 60000
    }
  }
);

const web3 = new Web3();
web3.setProvider(provider);




const core = new CirclesCore(web3, {
  // hubAddress: process.env.HUB_ADDRESS,
  // proxyFactoryAddress: process.env.PROXY_FACTORY_ADDRESS,
  // safeMasterAddress: process.env.SAFE_MASTER_ADDRESS,
  // apiServiceEndpoint: process.env.API_SERVICE_ENDPOINT,
  // graphNodeEndpoint: process.env.GRAPH_NODE_ENDPOINT,
  // relayServiceEndpoint: process.env.RELAY_SERVICE_ENDPOOINT,
  // subgraphName: process.env.SUBGRAPH_NAME,
  apiServiceEndpoint: process.env.API_SERVICE_EXTERNAL,
  graphNodeEndpoint: process.env.GRAPH_NODE_EXTERNAL,
  hubAddress: process.env.HUB_ADDRESS,
  proxyFactoryAddress: process.env.PROXY_FACTORY_ADDRESS,
  relayServiceEndpoint: process.env.RELAY_SERVICE_EXTERNAL,
  safeMasterAddress: process.env.SAFE_MASTER_ADDRESS,
  subgraphName: process.env.SUBGRAPH_NAME,
});

export class CirclesWrapper {
  static storeAccount(account: Account) {
    localStorage.setItem("account", JSON.stringify(account));
  }
  static restoreAccount(): Account | null {
    const account = localStorage.getItem("account");
    if (account)
      return JSON.parse(account);
    return null;
  }
  static safeOwnerFromKeyphrase(keyPhrase: string): Account {
    const restoredKey = mnemonicToEntropy(keyPhrase);
    const safeOwner = web3.eth.accounts.privateKeyToAccount(restoredKey);
    return safeOwner;
  }

  static async createSafeOwner() {
    return web3.eth.accounts.create();
  }

  static async createSafe(safeOwner: Account) {
    const nonce = new Date().getTime();
    const safeAddress = await core.safe.prepareDeploy(safeOwner, { nonce });
    return safeAddress;
  }

  static async addTrustLine(
    trustGivingSafeOwner: Account,
    trustGivingSafeAddress: string,
    trustReceivingSafeAddress: string,
    trustPercentage: number
  ) {
    let canSendToC = web3.utils.toChecksumAddress(trustGivingSafeAddress);
    let userC = web3.utils.toChecksumAddress(trustReceivingSafeAddress);

    // .. give user the permission to send their Token to you
    const trusted = await core.trust.addConnection(trustGivingSafeOwner, {
      canSendTo: canSendToC,
      user: userC,
      limitPercentage: trustPercentage
    });

    return trusted;
  }

  static async removeTrustLine(
    trustGivingSafeOwner: Account,
    trustGivingSafeAddress: string,
    trustReceivingSafeAddress: string
  ) {
    let canSendToC = web3.utils.toChecksumAddress(trustGivingSafeAddress);
    let userC = web3.utils.toChecksumAddress(trustReceivingSafeAddress);

    const untrusted = await core.trust.removeConnection(trustGivingSafeOwner, {
      canSendTo: canSendToC,
      user: userC,
    });

    return untrusted;
  }

  static async deploySafe(
    safeOwner: Account,
    safeAddress: string,
  ) {

    await core.safe.deploy(safeOwner, { safeAddress });
  }

  static async deployToken(
    safeOwner: Account,
    safeAddress: string) {
    await core.token.deploy(safeOwner, { safeAddress });
  }

  static async sendCircles(
    sendingSafeOwner: Account,
    sendingSafeAddress: string,
    receivingSafeAddress: string,
    amount: number
  ) {
    let receivingSafeAddressC = web3.utils.toChecksumAddress(receivingSafeAddress);
    let sendingSafeAddressC = web3.utils.toChecksumAddress(sendingSafeAddress);

    // .. give user the permission to send their Token to you
    return await core.token.transfer(sendingSafeOwner, {
      from: sendingSafeAddressC,
      to: receivingSafeAddressC,
      value: new BN(web3.utils.toWei(amount.toString(), "ether"))
    });
  }

  static async checkUbi(safeOwner: Account, safeAddress: string) {
    const payout = await core.token.checkUBIPayout(safeOwner, {
      safeAddress,
    });
    return payout;
  }

  static async requestUbi(safeOwner: Account, safeAddress: string) {
    const payout = await core.token.requestUBIPayout(safeOwner, safeAddress);
    return payout;
  }

  static async getSafeOwners(safeOwner: Account, safeAddress: string) {
    const owners = await core.safe.getOwners(safeOwner, {
      safeAddress,
    });

    return owners;
  }

  static async addSafeOwner(safeOwner: Account, safeAddress: string, otherSafeOwnerAddress: string) {
    await core.safe.addOwner(safeOwner, {
      safeAddress,
      ownerAddress: otherSafeOwnerAddress
    });
  }

  static async removeSafeOwner(safeOwner: Account, safeAddress: string, otherSafeOwnerAddress: string) {
    await core.safe.removeOwner(safeOwner, {
      safeAddress,
      ownerAddress: otherSafeOwnerAddress
    });
  }
}