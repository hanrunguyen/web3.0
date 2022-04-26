require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/_bX-Op_YSjo_AtTCcHScSXFccvGjsWQA',
      accounts: ['fc51c182da4a0376849f9a5ae90e96e62dee493287060277ee3745797e83905f']
    }
  }
}
