// SPDX-License-Identifier: MIT

pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    address public owner;

    constructor(address initialOwner) ERC20("TruffleTokenB", "TRUFFLEB") {
        _mint(initialOwner, 1000000 * 10 ** decimals());
        owner = initialOwner;
    }

    function mintToken(address account, uint256 amount) public {
        require(msg.sender == owner, "Not Owner");
        _mint(account, amount);
    }
}
