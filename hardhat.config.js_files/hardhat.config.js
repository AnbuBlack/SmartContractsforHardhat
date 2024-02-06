require("@nomicfoundation/hardhat-toolbox");
require('@openzeppelin/hardhat-upgrades');
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
          sepolia: {
            url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
            accounts: [SEPOLIA_PRIVATE_KEY]
          },
          BesuQBFT: {
                url: `http://220.149.235.84:8545`,
                chainId: 1337,
                accounts: [Besu_IBFT2_PK_ACC]
              }
        }
};
