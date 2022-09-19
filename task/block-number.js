const { task } = require("hardhat/config")

task("block-number", "Prints the current block number").setAction(
    async (taskAgrs, hre) => {
        const blockNumber = await hre.ethers.provider.getBlockNumber()
        console.log(`Curretn block number is:${blockNumber}`)
    }
)
