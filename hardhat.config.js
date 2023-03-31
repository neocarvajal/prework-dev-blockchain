require('@nomicfoundation/hardhat-toolbox');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    goerli:{
      url: 'https://eth-goerli.g.alchemy.com/v2/zhPMn7BpmRD4s6bcgvY-IVj8bNkC6Jjv',
      accounts: ["3810c28c1f6dfbe2a6fae2b5c045483f087048946163a81b8db136897729ca19"]
    }
  }
};
