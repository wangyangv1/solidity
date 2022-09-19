const { expect, assert } = require("chai")
const { ethers } = require("hardhat")

describe("SimpleStorage", function () {
    let SimpleStorage, SimpleStorageFactory
    beforeEach(async function () {
        SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
        SimpleStorage = await SimpleStorageFactory.deploy()
    })

    it("Should start with a favoriate number of 0", async function () {
        const currentValue = await SimpleStorage.retrieve()
        const expectedValue = "0"
        assert.equal(currentValue.toString(), expectedValue)
    })

    it("Call store function", async function () {
        const currentValue = await SimpleStorage.retrieve()
        await SimpleStorage.store(101)
        const upDateValue = await SimpleStorage.retrieve()

        assert.equal("101", upDateValue.toString())
    })
})
