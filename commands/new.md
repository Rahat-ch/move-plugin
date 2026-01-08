---
description: Scaffold a new Move project from templates (basic, fa, nft)
---

# New Move Project

Create a new Move project for Movement blockchain using the specified template.

**Usage:** `/move:new <template> <name>`

**Templates:**
- `basic` - Basic module with init and entry functions
- `fa` - Fungible Asset with mint/burn/transfer
- `nft` - NFT Collection with token objects

**Arguments:**
- `$1` - Template type (basic, fa, nft)
- `$2` - Project name

## Instructions

1. Use the `scaffold_module` MCP tool with:
   - `template`: $1 (or "basic" if not specified)
   - `name`: $2 (required)

2. Generate the full project structure:
   - `Move.toml` with Movement defaults and `my_addr` placeholder
   - `sources/` with main module
   - `tests/` with basic test file
   - `scripts/` for deployment
   - `README.md` with project info
   - `.gitignore` for Move projects

3. After scaffolding, explain:
   - How to configure `my_addr` in Move.toml
   - How to compile: `movement move compile`
   - How to test: `movement move test`
   - How to deploy: `movement move publish`

## Networks

- **Bardock Testnet** (Chain ID: 250): `https://testnet.movementnetwork.xyz/v1`
- **Mainnet** (Chain ID: 126): `https://mainnet.movementnetwork.xyz/v1`
