// SPDX-License-Identifier: MIT

pragma solidity >=0.8.18;

contract Counter {
    uint counter;

    constructor(uint _counter) {
        counter = _counter;
    }

    // función publica de visualización que retorna un contador
    function getCounter() public view returns(uint) { 
        return counter;
    }

    function setCounter(uint _count) public returns(uint) {
        return counter = _count;
    }

    // Función publica que incrementa el contador
    function increment() public {
        counter ++;
    }
}