pragma solidity =0.4.24;

import "./implementation/Standard223Token.sol";

contract PWR is Standard223Token {
  
  modifier onlyOwner() {
    require(msg.sender == owner);
    _;
  }

  address owner;
  uint initialBalance;
  string public name;
  string public symbol;
  uint public decimals;
  mapping (uint=>string) public metadata;
  mapping (uint=>string) public publicMetadata;


  constructor() public {
    initialBalance = 18666666667;
    balances[msg.sender] = initialBalance;
    totalSupply = initialBalance;
    name = "PowerHash";
    symbol = "PWR";
    decimals = 18;
    owner = msg.sender;
  }
  function changeSymbol(string newSymbol) onlyOwner {
    symbol = newSymbol;
  }
  function changeName(string newName) onlyOwner {
    name = newName;
  }
  function setMetadata(uint key, string value) onlyOwner {
    metadata[key] = value;
  }
  function setPublicMetadata(uint key, string value) {
    publicMetadata[key] = value;
  }
}
