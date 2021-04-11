export const config = {
    frameWidth: 25,
    totalPixels: 625,
    totalFrames: 8,
    infoContract: "con_pw_info_3",
    masterContract: "con_pw_master_3",
    networkType: "testnet",
    currencySymbol: "DTAU",
    domainName: "https://localhost",
    //blockExplorer: "http://localhost:1337",
    blockExplorer: "https://testnet.lamden.io",
    masternode: "https://testnet-master-1.lamden.io"
}


export const stampLimits = (()=>{
    let stampValues = {}
    stampValues[config.masterContract] = {
        sell_thing: 90,
        like_thing: 90,
        transfer: 105,
        prove_ownership: 95
    }
    stampValues['currency'] = {
        approve: 25
    }
    return stampValues
})()