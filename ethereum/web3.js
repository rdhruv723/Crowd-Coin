import Web3 from "web3";
 
let web3;

if(typeof window !== 'undefined'  && window.web3 !== 'undefined'){
    // we are in the browser and met mask is running
    window.ethereum.request({ method: "eth_requestAccounts" });
    web3 = new Web3(window.ethereum);
} else{
    // we are on the server or user nor running metamask
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/6681898cdacb4edd995daa9641d02e2d'
    );

    web3 = new Web3(provider);
}
 
export default web3; 