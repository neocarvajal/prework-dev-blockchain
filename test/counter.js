const { expect } = require("chai");
const { ethers } = require("hardhat");

describe('Counter Contract', () => {
    it('Should increment the counter', async () => {
        const Counter = await ethers.getContractFactory('Counter');
        const counter = await Counter.deploy(0);
        await counter.increment();
        const updatedCounter = counter.getCounter();

        expect(updatedCounter).to.equal(1);
    });

    it('Should set counter to any number asigned', async () => {
        const Counter = await ethers.getContractFactory('Counter');
        const counter = await Counter.deploy(0);

        const setCounter = await counter.setCounter(1);

        expect(setCounter).to.equal(1);
    })
});