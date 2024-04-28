/**
 * Common base classes and interfaces related to the plugin feature of Pup
 *
 * @file      @pup/plugin/mod.ts
 * @license   MIT
 */

/**
 * User configuration of a Pup plugin
 */
export interface PluginConfiguration {
  url: string;
  options?: unknown;
}

/**
 * Metadata of a Pup plugin
 */
export interface PluginMetadata {
  name: string;
  version: string;
  api: string;
  repository: string;
}

/**
 * Every Pup Plugin should extend this Class
 */
export class PluginImplementation {
  public meta = {
    name: "unset",
    version: "unset",
    api: "unset",
    repository: "unset",
  };
  constructor(
    _config: PluginConfiguration,
    _apiUrl: string,
    _apiToken: string,
  ) {}
  /**
   * Pup will periodically send new api tokens
   *
   * Make sure to override this and receive the new tokens
   */
  public async refreshApiToken(_apiToken: string): Promise<unknown> {
    return await false;
  }
  /**
   * Default implemetation of the cleanup function
   */
  public async cleanup(): Promise<unknown> {
    return await false;
  }
}
