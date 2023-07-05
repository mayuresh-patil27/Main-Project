require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/S0nDtfx33O5j10MY7bv4abGQA9YlKbSx',
      accounts: ['1ca0ef123ca65e5e490b333d6f88e8b97c68d08fef0705202e0780a00d9b8676'],
    },
  },
};