import { ENS } from "@ensdomains/ensjs";
import { ethers } from "ethers";
import { ALCHEMY_API_KEY } from "./defaults.js";

export const provider = new ethers.providers.JsonRpcProvider(
  "https://eth-mainnet.g.alchemy.com/v2/" + ALCHEMY_API_KEY
);

export const ENSInstance = new ENS();
await ENSInstance.setProvider(provider);
