#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { CallToolRequestSchema, ListToolsRequestSchema, } from "@modelcontextprotocol/sdk/types.js";
import { scaffoldModule } from "./tools/scaffold.js";
import { runCli } from "./tools/cli.js";
import { searchFramework } from "./tools/search.js";
import { queryRpc } from "./tools/rpc.js";
const server = new Server({
    name: "move-mcp-server",
    version: "1.0.0",
}, {
    capabilities: {
        tools: {},
    },
});
server.setRequestHandler(ListToolsRequestSchema, async () => {
    return {
        tools: [
            {
                name: "scaffold_module",
                description: "Generate a new Move project from a template (basic, fa, nft)",
                inputSchema: {
                    type: "object",
                    properties: {
                        template: {
                            type: "string",
                            description: "Template type: basic, fa, or nft",
                            enum: ["basic", "fa", "nft"],
                        },
                        name: {
                            type: "string",
                            description: "Project name (lowercase, underscores allowed)",
                        },
                        path: {
                            type: "string",
                            description: "Output directory path (defaults to current directory)",
                        },
                    },
                    required: ["template", "name"],
                },
            },
            {
                name: "run_cli",
                description: "Execute a Movement CLI command (movement move compile, test, publish, etc.)",
                inputSchema: {
                    type: "object",
                    properties: {
                        command: {
                            type: "string",
                            description: "The CLI command to run (e.g., 'move compile', 'move test')",
                        },
                        cwd: {
                            type: "string",
                            description: "Working directory for the command",
                        },
                    },
                    required: ["command"],
                },
            },
            {
                name: "search_framework",
                description: "Search the Move framework code for patterns, functions, or modules",
                inputSchema: {
                    type: "object",
                    properties: {
                        query: {
                            type: "string",
                            description: "Search query (e.g., 'fungible_asset', 'object::create')",
                        },
                    },
                    required: ["query"],
                },
            },
            {
                name: "query_rpc",
                description: "Query Movement chain via RPC (account resources, module info, etc.)",
                inputSchema: {
                    type: "object",
                    properties: {
                        method: {
                            type: "string",
                            description: "RPC method: account, resource, module, events",
                            enum: ["account", "resource", "module", "events"],
                        },
                        address: {
                            type: "string",
                            description: "Account address to query",
                        },
                        resource_type: {
                            type: "string",
                            description: "Resource type (for resource method)",
                        },
                        module_name: {
                            type: "string",
                            description: "Module name (for module method)",
                        },
                        network: {
                            type: "string",
                            description: "Network: testnet or mainnet (defaults to testnet)",
                            enum: ["testnet", "mainnet"],
                        },
                    },
                    required: ["method", "address"],
                },
            },
        ],
    };
});
server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;
    try {
        switch (name) {
            case "scaffold_module": {
                const result = await scaffoldModule(args?.template, args?.name, args?.path);
                return { content: [{ type: "text", text: result }] };
            }
            case "run_cli": {
                const result = await runCli(args?.command, args?.cwd);
                return { content: [{ type: "text", text: result }] };
            }
            case "search_framework": {
                const result = await searchFramework(args?.query);
                return { content: [{ type: "text", text: result }] };
            }
            case "query_rpc": {
                const result = await queryRpc(args?.method, args?.address, args?.resource_type, args?.module_name, args?.network);
                return { content: [{ type: "text", text: result }] };
            }
            default:
                return { content: [{ type: "text", text: `Unknown tool: ${name}` }] };
        }
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        return { content: [{ type: "text", text: `Error: ${errorMessage}` }] };
    }
});
async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error("Move MCP Server running on stdio");
}
main().catch(console.error);
