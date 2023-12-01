pragma solidity ^0.8.0;
contract wills{
    address owner;
    uint fortune;
    bool deceased;
    constructor() payable public{
        fortune=msg.value;
        owner=msg.sender;
        deceased=false;


    }
    modifier onlyOwner() {
        require(owner==msg.sender);
        _;
    }
    modifier mustBeDeceased() {
        require(deceased==false);
        _;
    }
    address payable [] familyWallets;
    mapping (address=>uint) inheritance;
    function setInheritance(address payable wallet,uint amount) onlyOwner public{
        familyWallets.push(wallet);
        inheritance[wallet]=amount;
    }
    function payout () private payable mustBeDeceased{
        for (uint i=0; i<familyWallets.length; i++){
            familyWallets[i].transfer(inheritance[familyWallets[i]]);

        }

    }
    function trigger() public{
        deceased==true;
        payout();
    }

    



}