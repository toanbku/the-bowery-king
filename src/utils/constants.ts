import { ChainDetail } from "@/types/chain";

export const DEFAULT_CHAIN_LOGO = "/logo/unknown-logo.png";

export const CHAIN_DETAIL: Record<string, ChainDetail> = {
  bsc: {
    name: "BSC Chain",
    logo: "/logo/binance.webp",
    isEvm: true,
  },
  ethereum: {
    name: "Ethereum Chain",
    logo: "/logo/ethereum.webp",
    isEvm: true,
  },
  polygon: {
    name: "Polygon Chain",
    logo: "/logo/polygon.webp",
    isEvm: true,
  },
  optimism: {
    name: "Optimism Chain",
    logo: "/logo/optimism.webp",
    isEvm: true,
  },
  arbitrum: {
    name: "ArbitrumNova Chain",
    logo: "/logo/arbitrum.webp",
    isEvm: true,
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
  },
  // Non Evm chain
  solana: {
    name: "Solana Chain",
    isEvm: false,
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
