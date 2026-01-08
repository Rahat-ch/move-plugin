# Move Plugin for Claude Code

Move smart contract development tools for Movement blockchain.

## Installation

Add the marketplace:
```bash
/plugin marketplace add Rahat-ch/move-plugin
```

Install the plugin:
```bash
/plugin install move
```

## Commands

| Command | Description |
|---------|-------------|
| `/move:new <template> <name>` | Scaffold a new Move project |
| `/move:explain` | Explain the current Move file |
| `/move:debug` | Parse compiler errors and suggest fixes |
| `/move:search <query>` | Search the Move framework |
| `/move:deploy` | Help with deployment to Movement |

### Templates

- `basic` - Simple module with init, entry, and view functions
- `fa` - Fungible Asset token with mint/burn/transfer
- `nft` - NFT collection with token minting

### Examples

```bash
# Create a new fungible asset project
/move:new fa my_token

# Search for object patterns
/move:search object

# Debug compiler errors
/move:debug
```

## MCP Tools

The plugin provides these tools to Claude:

- `scaffold_module` - Generate Move projects from templates
- `run_cli` - Execute Movement CLI commands
- `search_framework` - Search Move framework code
- `query_rpc` - Query Movement chain via RPC

## Move Expert Skill

The plugin includes a Move expert skill that automatically activates when:
- Working with `.move` files
- Discussing Move/Movement/Aptos concepts
- Debugging Move compiler errors
- Building smart contracts

## Requirements

- [Movement CLI](https://docs.movementnetwork.xyz/devs/movementcli) installed
- Node.js 18+

## Networks

**Bardock Testnet (Chain ID: 250)**
- RPC: `https://testnet.movementnetwork.xyz/v1`
- Faucet: `https://faucet.movementnetwork.xyz/`
- Explorer: `https://explorer.movementnetwork.xyz/?network=bardock+testnet`

**Mainnet (Chain ID: 126)**
- RPC: `https://mainnet.movementnetwork.xyz/v1`
- Explorer: `https://explorer.movementnetwork.xyz/?network=mainnet`

## License

Apache-2.0
