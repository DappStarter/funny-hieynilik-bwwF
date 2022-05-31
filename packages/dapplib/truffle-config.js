require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid problem oppose venture story cruise nominee column harvest globe food gate'; 
let testAccounts = [
"0xa5a6fb5056884cdd3270429b89546971d51909837667ceb7b85176cf0221f6ec",
"0x71c2f3181e2e3d10c10146059bac24f8a548737587aacd9a3fdc0c4ca78c8707",
"0xf3126ff8c9ee931859a838dadc5bcae84b5322db0ce038aedd3ee91e89aa1e42",
"0x4e536dd3b163cda15c357e40a94453c2819c904359850b758307a64ec6571565",
"0x324ed4111eb7a7e8892c28b61972f38c77db75d7b6baee49d62d0b784eebdf63",
"0x50da8d354757579ef973c4ea665a78bc38b5e6f1df02df58e8613e5b8ea93018",
"0x946631d1f5e1b029bcce79fdb6aae6df8613c06a6a7574b7a208ef7661a93591",
"0x9e393a5b51b6e8afc62c3038d0a3668a45afff2d969129aa59ad10b03be3b13d",
"0xbafd980273c2a885f708193b280ff9e32f744f808c9985c41182809aa5803311",
"0xef4d85d7ccd3a4d69c569aadcf43698cf37f804b7c375d1d68f3212454a65724"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


