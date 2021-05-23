const HelloWorld = artifacts.require("HelloWorld");
module.exports = function(deployer, network, accounts) {
 deployer.deploy(HelloWorld,{from: accounts[0]});
};
