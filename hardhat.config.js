require('@nomicfoundation/hardhat-toolbox');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    goerli:{
      url: '', // Add your Alchemy App Key
      accounts: [""] //Add private key from Metamask
    }
  }
};
