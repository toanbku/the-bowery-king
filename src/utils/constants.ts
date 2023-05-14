import { ChainDetail } from "@/types/chain";

export const DEFAULT_CHAIN_LOGO = "/logo/unknown-logo.png";

export const CHAIN_DETAIL: Record<string, ChainDetail> = {
  bsc: {
    name: "BSC Chain",
    logo: "/logo/binance.webp",
    isEvm: true,
    nativeCoin: "BNB",
  },
  ethereum: {
    name: "Ethereum Chain",
    logo: "/logo/ethereum.webp",
    isEvm: true,
    nativeCoin: "ETH",
  },
  polygon: {
    name: "Polygon Chain",
    logo: "/logo/polygon.webp",
    isEvm: true,
    nativeCoin: "MATIC",
  },
  optimism: {
    name: "Optimism Chain",
    logo: "/logo/optimism.webp",
    isEvm: true,
    nativeCoin: "Ether",
  },
  arbitrum: {
    name: "ArbitrumNova Chain",
    logo: "/logo/arbitrum.webp",
    isEvm: true,
    nativeCoin: "ETH",
  },
  "avalanche-c": {
    name: "AvalanceC Chain",
    isEvm: true,
  },
  "arbitrum-nitro": {
    name: "ArbitrumNitro Chain",
    isEvm: true,
  },
  fantom: {
    name: "Fantom Chain",
    logo: "/logo/fantom.webp",
    isEvm: true,
    nativeCoin: "FTM",
  },
  // Non Evm chain
  solana: {
    name: "Solana Chain",
    isEvm: false,
    nativeCoin: "SOL",
  },
  near: {
    name: "Near Chain",
    isEvm: false,
  },
  klaytn: {
    name: "Klaytn Chain",
    logo: "/logo/klaytn.webp",
    isEvm: false,
  },
};
