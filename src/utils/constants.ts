import { ChainDetail } from "@/types/chain";

export const DEFAULT_CHAIN_LOGO = "/logo/unknown-logo.png";

export const CHAIN_DETAIL: Record<string, ChainDetail> = {
  bsc: {
    name: "BSC Chain",
    logo: "/logo/binance.svg",
    isEvm: true,
    nativeCoin: "BNB",
    enableTotalTxn: true,
  },
  ethereum: {
    name: "Ethereum Chain",
    logo: "/logo/ethereum.svg",
    isEvm: true,
    nativeCoin: "ETH",
    enableTotalTxn: true,
  },
  polygon: {
    name: "Polygon Chain",
    logo: "/logo/polygon.svg",
    isEvm: true,
    nativeCoin: "MATIC",
    enableTotalTxn: true,
  },
  optimism: {
    name: "Optimism Chain",
    logo: "/logo/optimism.svg",
    isEvm: true,
    nativeCoin: "Ether",
    enableTotalTxn: true,
  },
  arbitrum: {
    name: "ArbitrumNova Chain",
    logo: "/logo/arbitrum.svg",
    isEvm: true,
    nativeCoin: "ETH",
    enableTotalTxn: true,
  },
  avalanche: {
    name: "AvalanceC Chain",
    isEvm: true,
    logo: "/logo/avalanche.svg",
    enableTotalTxn: true,
  },
  "arbitrum-nitro": {
    name: "ArbitrumNitro Chain",
    isEvm: true,
    enableTotalTxn: false,
  },
  fantom: {
    name: "Fantom Chain",
    logo: "/logo/fantom.svg",
    isEvm: true,
    nativeCoin: "FTM",
    enableTotalTxn: true,
  },
  // Non Evm chain
  solana: {
    name: "Solana Chain",
    isEvm: false,
    nativeCoin: "SOL",
    logo: "/logo/solana.svg",
    enableTotalTxn: true,
  },
  near: {
    name: "Near Chain",
    isEvm: false,
    logo: "/logo/near.svg",
    enableTotalTxn: false,
  },
  klaytn: {
    name: "Klaytn Chain",
    logo: "/logo/klaytn.svg",
    isEvm: false,
    nativeCoin: "KLAY",
    enableTotalTxn: false,
  },
};
