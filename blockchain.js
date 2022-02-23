var acc = undefined;
var connect = false;
//var web3 = new Web3(window.web3.currentProvider);
var web3 = new Web3(Web3.givenProvider);
web3.eth.getAccounts().then((accounts) => {
  acc = accounts[0];

  if (acc != undefined) {
    connect = true;
  }
});

function connecting() {
  if (!connect) {
    ethereum.request({
      method: 'eth_requestAccounts',
    });
  }
}

ethereum.on('accountsChanged', (accounts) => {
  window.location.reload();
});

const contractAddress = '0x1AABE4e6498cd95ffC734C2b53Fc0CC6e909Ea71';
const abiInterface = [
  {
    inputs: [
      {
        internalType: 'string',
        name: '_user',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_pass',
        type: 'string',
      },
    ],
    name: 'adduser',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'hariini',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_hariini',
        type: 'uint256',
      },
    ],
    name: 'jumlahsampahhariini',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'logins',
    outputs: [
      {
        internalType: 'bytes32',
        name: 'username',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: 'pass',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '_user',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_pass',
        type: 'string',
      },
    ],
    name: 'loginuser',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];
const maincontract = new web3.eth.Contract(abiInterface, contractAddress);
