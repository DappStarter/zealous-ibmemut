require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney climb force ten fire note pitch ethics grace hill fringe gather'; 
let testAccounts = [
"0xf83334e79f24c311798a74472f1a470b7ad9ecacd7725428b2e341263b741fbf",
"0x5c2881e85826fdf3ce2901ae838b4af719b1aadb9582ccfc8c5356c6f73ad6f2",
"0x7c1e4fb6d9888e02131785219a2b44d47b117521561b668aa36b9af4ad3d08d2",
"0xa2e5d5405ae01ca40f467d86fd7c63912e377927c91ac798bc7dc25dcf5fc1c7",
"0xb5af15a91e63a21dc6524fa775168f4dfcb1346814a2b8395f9a91aa9a811201",
"0x73ab6b68c8bb229c7f709a5205145394a00ac4022742336daf1fe420efadb2b3",
"0x180c13ef576b3cbc2c6b5ae126fd5aa6074d955db2e8bbfdd5d8ecef84395ab1",
"0xcb1cda8f25618b26b64487127bcfe4e35a69e8ffce9d24ffc5a3f03fb474a0ec",
"0x41f17466396cd268705e645760f28f6c4d355383cbadd9a78f30b3e2d56feee0",
"0xd6bc8cbe17ab9660070dfd1acb76fa453badea0d1c28fd18eccad0c71ea538d2"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
