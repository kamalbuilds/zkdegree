// @ts-nocheck
"use client"
import { ChakraProvider } from "@chakra-ui/react"

import WithSubnavigation from "@/components/Navbar"
import SmallWithSocial from "@/components/Footer"
import React from "react";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { polygonMumbai, polygonZkEvmTestnet } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

require("dotenv").config();

const { chains, publicClient } = configureChains(
  [polygonZkEvmTestnet, polygonMumbai],
  [alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My Polygon ID VC Gated dapp",
  projectId: process.env.NEXT_PUBLIC_APP_WALLET_CONNECT_ID,
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        <ChakraProvider>
          <WagmiConfig config={wagmiConfig}>
            <RainbowKitProvider chains={chains}>
          <div>
            <WithSubnavigation />
            {children}
            <SmallWithSocial/>
          </div>
            </RainbowKitProvider>
          </WagmiConfig>
        </ChakraProvider>
      </body>
    </html>
  )
}