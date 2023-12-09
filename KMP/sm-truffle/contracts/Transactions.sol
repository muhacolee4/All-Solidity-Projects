//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;
contract Transactions{
    uint256 transactionCount;
    event Transfer(address from,address receiver, uint amount, string message,uint256 timestamp,string keyword);
    struct TransferStruct{
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;

    }
    TransferStruct [] transactions;
    function addToBlockchain (address payable receiver,uint amount,string memory message,string memory keyword)public{
        //add tx to the block chain
        transactions.push(TransferStruct(msg.sender,receiver,amount,message,block.timestamp,keyword));

    }
    function getAllTransactions ()public view returns(TransferStruct[] memory){
        //get transaction from db
        return transactions;

    }
    function getAllTransactionCount()view public returns(uint){
        //get the tx count
        return transactionCount;

    }
}