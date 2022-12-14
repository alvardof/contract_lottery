/**
 * @type import('hardhat/config').HardhatUserConfig
 */


//npx hardhat test --network hardhat
require("dotenv").config();

// cSpell: disable next line
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("hardhat-deploy");
// cSpell: disable next line
require("solidity-coverage");
require("hardhat-gas-reporter");
require("hardhat-deploy-ethers");
require("chai");
require("@nomiclabs/hardhat-web3");

let mnemonic = process.env.MNEMONIC
  ? process.env.MNEMONIC
  : "test test test test test test test test test test test test";

module.exports = {
  networks: {
    hardhat: {
      // Uncomment these lines to use mainnet fork
      forking: {
        // ---- MAIN ---
        // url: `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_KEY}`,
        // blockNumber: 14585261,
        // ---- RINKEBy ---
        // url: `https://eth-rinkeby.alchemyapi.io/v2/${process.env.ALCHEMY_KEY}`,
        // blockNumber: 10527216,
        // ---- ROPSTEN ---
        url: `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_KEY}`, 
        blockNumber: 14691261,
      },
    },
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${process.env.ALCHEMY_KEY}`,
      accounts: {
        mnemonic,
      },
    },
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${process.env.ALCHEMY_KEY}`,
      accounts: {
        mnemonic,
      },
    },
    live: {
      url: `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_KEY}`,
      accounts: {
        mnemonic,
      },
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API,
  },
  namedAccounts: {
    deployer: 0,
    user: 1,
    user2: 2,
    user3: 3,
  },
  gasReporter: {
    currency: "USD",
    gasPrice: 50,
    enabled: false,//process.env.REPORT_GAS ? true : false,
    coinmarketcap: process.env.CMC_API_KEY,
    excludeContracts: ["mocks/"],
  },
  solidity: {
    compilers: [
      {
        version: "0.8.7",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  mocha: {
    timeout: 240000,
  },
};
