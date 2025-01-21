import { JobRoadmap } from "@/types/roadmap";

export const web3Roadmap: JobRoadmap = {
  title: "Web3 Developer Roadmap",
  description: "A comprehensive guide to becoming a Web3 Developer",
  sections: [
    {
      title: "1. Blockchain Fundamentals",
      steps: [
        {
          id: "blockchain-basics",
          title: "Blockchain Basics",
          description: "Understand blockchain technology fundamentals",
          status: "required",
          skills: [
            "Distributed Systems",
            "Cryptography",
            "Consensus Mechanisms",
            "Smart Contracts",
            "Tokenomics"
          ],
          resources: [
            {
              name: "Ethereum Documentation",
              url: "https://ethereum.org/developers"
            }
          ]
        },
        {
          id: "smart-contracts",
          title: "Smart Contract Development",
          description: "Learn to write and deploy smart contracts",
          status: "required",
          skills: [
            "Solidity",
            "Web3.js",
            "Ethers.js",
            "Hardhat",
            "Testing"
          ],
          resources: [
            {
              name: "Solidity Documentation",
              url: "https://docs.soliditylang.org"
            }
          ]
        }
      ]
    },
    {
      title: "2. DApp Development",
      steps: [
        {
          id: "dapp-frontend",
          title: "DApp Frontend",
          description: "Build decentralized application frontends",
          status: "required",
          skills: [
            "React",
            "Web3 Libraries",
            "Wallet Integration",
            "State Management",
            "UI/UX for Web3"
          ],
          resources: [
            {
              name: "Web3.js Documentation",
              url: "https://web3js.readthedocs.io"
            }
          ]
        }
      ]
    }
  ]
};