import "truffle/console.sol";
const Token = artifacts.require("Token");

module.exports = async function (deployer, network, accounts) {
    const initialOwner = accounts[2]; // You can specify any address as the initial owner
    await deployer.deploy(Token, initialOwner);
};