const main = async () => {
    // const nft_token_contract = await hre.ethers.getContractFactory('MyToken');
    const nft_token_contract = await ethers.getContractFactory('MyToken');
    
    const contract_deployed_ = await nft_token_contract.deploy("0xFE3B557E8Fb62b89F4916B721be55cEb828dBd73");
    
    console.log('Contract deployed to:', await contract_deployed_.getAddress());
    
};
const runMain = async () => {
    try {
        await main()
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};
runMain();
