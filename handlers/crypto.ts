export type CryptoGateway = {
    encryptClearText: (data: string) => string
    decryptHexText: (data: string) => string
}
