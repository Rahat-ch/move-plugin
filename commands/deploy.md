---
description: Help deploy Move modules to Movement network
---

# Deploy to Movement

Help with deploying Move modules to Movement blockchain.

**Usage:** `/move:deploy`

## Instructions

1. Check project is ready:
   - Verify Move.toml has correct `my_addr` set
   - Ensure code compiles: `movement move compile`
   - Run tests: `movement move test`

2. Ask user which network:
   - **Bardock Testnet** (recommended for testing)
   - **Mainnet** (production)

3. Network configuration:

   **Bardock Testnet (Chain ID: 250)**
   ```bash
   movement init --network testnet
   ```
   - RPC: `https://testnet.movementnetwork.xyz/v1`
   - Faucet: `https://faucet.movementnetwork.xyz/`
   - Explorer: `https://explorer.movementnetwork.xyz/?network=bardock+testnet`

   **Mainnet (Chain ID: 126)**
   ```bash
   movement init --network mainnet
   ```
   - RPC: `https://mainnet.movementnetwork.xyz/v1`
   - Explorer: `https://explorer.movementnetwork.xyz/?network=mainnet`

4. Offer to run or show commands:
   - "Should I run the deployment command, or just show you what to run?"

5. Deployment steps:
   ```bash
   # Initialize account (if not done)
   movement init --network <network>

   # Fund account on testnet
   # Visit: https://faucet.movementnetwork.xyz/

   # Deploy
   movement move publish --named-addresses my_addr=default
   ```

6. After deployment:
   - Show the deployed module address
   - Link to explorer to verify
   - Explain how to interact with the module

## Important

- Testnet deployments are free (use faucet)
- Mainnet requires MOVE tokens for gas
- Always test on Bardock first
