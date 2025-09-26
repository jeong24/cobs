const { ethers } = require('ethers');
const provider = new ethers.providers.JsonRpcProvider('https://bsc-dataseed.binance.org/');

const contractAddress = '0x1620EB180aAeEc91412b86d3EEb57a4bB16AcF44';
const contractABI = /* 위의 JSON 붙여넣기 */;

const contract = new ethers.Contract(contractAddress, contractABI, provider);
