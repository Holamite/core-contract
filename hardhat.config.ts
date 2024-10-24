import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
import "dotenv/config";

const TEST_CORE_API_KEY_URL = process.env.TEST_CORE_API_KEY_URL;

const ACCOUNT_PRIVATE_KEY: string = process.env.ACCOUNT_PRIVATE_KEY || "";
const config: HardhatUserConfig = {
  solidity: "0.8.27",
  networks: {
    hardhat: {},
    core_testnet: {
      url: "https://rpc.test.btcs.network",

      accounts: [ACCOUNT_PRIVATE_KEY],
      chainId: 1115,
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};

export default config;
