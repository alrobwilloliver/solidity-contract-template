const HDWalletProvider = require("truffle-hdwallet-provider");
const mnemonic=""

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "1621576390420",
    },
    rinkeby: {
        provider: function() { 
         return new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${process.env.infuraAccessToken}`);
        },
        network_id: 4,
        gas: 4500000,
        gasPrice: 10000000000,
    }
  }
}
