require('@nomicfoundation/hardhat-toolbox');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    goerli:{
      url: 'https://eth-goerli.g.alchemy.com/v2/zhPMn7BpmRD4s6bcgvY-IVj8bNkC6Jjv',
      accounts: [""] //Add private key from Metamask
    }
  }
};
