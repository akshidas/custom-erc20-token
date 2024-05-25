const CustomToken = artifacts.require("CustomToken");

module.exports = (deployer) => {
    deployer.deploy(CustomToken, "Sreelakshmi Token", "ST", 10000000000000);
};
