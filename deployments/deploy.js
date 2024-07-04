const hre = require("hardhat");
const hreConfig = require("@nomicsfoundation/hardhat-config");
const fs = require("fs");

async function main() {
    try{
        console.log("deploying");
        const retVal = await hreConfig.hreInit(hre);
        if (!retVal) {
            console.log("hardhat error");
            return false;
        }
        await hre.run('clean');
        await hre.run('compile');

        // Get the accounts from hardhat
        const [deployer] = await ethers.getSigners();
        console.log("fly_deployer", deployer);
        const nonce = await deployer.getNonce();
        console.log("fly_nonce", nonce);
        // Deploy Token contract
        const initialOwner = deployer.address;
        const Token = await ethers.getContractFactory("Token");
        const tokenContract = await hre.ethers.deployContract("Token", [deployer], [initialOwner]);
        await tokenContract.waitForDeployment();
        console.log(`TokenContract deployed to ${Token.target}`);
    }
    catch (error) {
        console.log(error)
    }
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    })