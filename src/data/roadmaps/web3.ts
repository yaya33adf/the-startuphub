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
          description: "Learn core blockchain concepts and principles",
          status: "required",
          skills: [
            "Blockchain Theory",
            "Cryptography",
            "Consensus Mechanisms",
            "Smart Contracts",
            "Web3.js"
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
          description: "Master smart contract development",
          status: "required",
          skills: [
            "Solidity",
            "Hardhat",
            "Truffle",
            "Testing",
            "Security Best Practices"
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
      title: "2. Advanced Web3 Development",
      steps: [
        {
          id: "dapp-development",
          title: "DApp Development",
          description: "Learn to build decentralized applications",
          status: "required",
          skills: [
            "React/Next.js",
            "Ethers.js",
            "IPFS",
            "Token Standards",
            "DeFi Protocols"
          ],
          resources: [
            {
              name: "Web3.js Documentation",
              url: "https://web3js.readthedocs.io"
            }
          ]
        },
        {
          id: "blockchain-scaling",
          title: "Blockchain Scaling & Security",
          description: "Advanced blockchain development concepts",
          status: "recommended",
          skills: [
            "Layer 2 Solutions",
            "Cross-chain Development",
            "Gas Optimization",
            "Security Auditing",
            "MEV Protection"
          ],
          resources: [
            {
              name: "OpenZeppelin Docs",
              url: "https://docs.openzeppelin.com"
            }
          ]
        }
      ]
    }
  ]
};