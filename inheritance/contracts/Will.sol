// SPDX-License-Identifier: MIT
pragma solidity >=0.8;
contract Will{
address owner;
bool deceased;
uint fortune;
constructor()payable {
    owner=msg.sender;
    fortune=msg.value;
    deceased=false;

}
modifier onlyOnwer {
    require(owner==msg.sender);
    _;
}
modifier mustBeDeceased{
    require(deceased==true);
    _;
}
address payable [] familyWallets;
mapping(address =>uint) inheritance;
function setInheritance(address payable  wallet, uint amount) public payable onlyOnwer {
    familyWallets.push(wallet);
    inheritance[wallet]=amount;

}
function payout() private mustBeDeceased{

    for(uint i=0;i<familyWallets.length;i++){
        familyWallets[i].transfer(inheritance[familyWallets[i]]);
    }
}
function setToDeceased() public  onlyOnwer{
    deceased=true;
    payout();
}

}