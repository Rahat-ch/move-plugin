export interface CliInfo {
    cli: "movement" | "aptos" | null;
    version: string | null;
    versionValid: boolean;
    path: string | null;
}
export declare function parseVersion(output: string): string | null;
export declare function resolveCli(forceRefresh?: boolean): Promise<CliInfo>;
export declare function getCliBinary(info: CliInfo): string | null;
export declare function getInstallInstructions(platform?: string): string;
export declare function resetCliCache(): void;
