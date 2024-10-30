//SPDX-License-Identifier: UNLICENSED

pragma solidity 0.8.18;

contract simple{

    uint256  num;

    function store (uint256 fav ) public {
        num = fav;


    }
    struct Name {
        uint favouriteNumber;
        string name;
    }

    Name[] public names;

    function addperson (string memory _name, uint _favnumber) public {

        names.push(Name(_favnumber,_name));
        
    }


}