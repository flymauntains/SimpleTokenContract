
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
// const { network } = require("hardhat");
const { API_URL, PRIVATE_KEY } = process.env;
const mnemonicPhrase = process.env.MNEMONIC || 'test test test test test test test test test test test junk';
const mnemonicPassword = process.env.MNEMONIC_PASSWORD;
module.exports = {
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: false,
        runs: 200
      }
    }
  },

  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
      gasPrice: 900000
    },
  },
};
