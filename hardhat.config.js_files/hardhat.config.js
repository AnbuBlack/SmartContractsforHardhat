require("@nomicfoundation/hardhat-toolbox");
require('@openzeppelin/hardhat-upgrades');
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
          sepolia: {
            url: `https://sepolia.infura.io/v3/INFURA_API_KEY`,
            accounts: [SEPOLIA_PRIVATE_KEY]
          },
          NAME_OF_BESU_NETWORK_ON_METAMASK: {
                url: `JSONRPC-ADDRESS_FOR_BESU_NODE`,
                chainId: 1337,
                accounts: ["PRIVATE_KEY_FROM_METAMASK_ACCOUNT"]
              }
        }
};
