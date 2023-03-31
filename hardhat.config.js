require('@nomicfoundation/hardhat-toolbox');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    goerli:{
      url: 'https://eth-goerli.g.alchemy.com/v2/zhPMn7BpmRD4s6bcgvY-IVj8bNkC6Jjv', // Add your Alchemy App Key
      accounts: ["7f46104107298c8c04934053249e5a48b1e410a5d8c1f458ee7e65ec00d45103"] //Add private key from Metamask
    }
  }
};
