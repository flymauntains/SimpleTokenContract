// SPDX-License-Identifier: MIT
pragma solidity =0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    address public owner;

    constructor(address initialOwner) ERC20("TokenAAA", "AAA") {
        // Corrected calculation for initial supply
        _mint(initialOwner, 1000000 * 10 ** uint256(decimals()));
        owner = initialOwner;
    }

    function mintTokens(address account, uint256 amount) external {
        require(msg.sender == owner, "Not owner");
        _mint(account, amount);
    }
}
