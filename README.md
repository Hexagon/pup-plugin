**# @pup/plugin**

**Purpose:**

The cornerstone for developing custom Pup plugins.

**Usage**

Install the `@pup/plugin` and `@pup/api-client` packages within your plugin
project:

```bash
deno add @pup/plugin @pup/api-client
```

Then, extend the provided base classes and implement the necessary interfaces to
define your plugin's specific functionality.

**Example:**

```typescript
import { PupPluginImplementation } from "@pup/plugin";
import { PupRestClient } from "@pup/api-client";

export class PupPlugin extends PupPluginImplementation {
  private client: PupRestClient;

  constructor(
    config: PupPluginConfiguration,
    apiUrl: string,
    apiToken: string,
  ) {
    super(config, apiUrl, apiToken);

    // Setup the Pup rest client using the automatically supplied credentials
    this.client = new PupRestClient(apiUrl, apiToken);

    // Plugin identification metadata
    this.meta = {
      name: "My Custom Plugin",
      version: "1.0.0",
      api: "1.0.0", // The used version of @pup/plugin - for compatibility check
      repository: "https://github.com/my-user-or-org/my-pup-plugin",
    };
  }

  // Example usage of PupRestClient within your plugin:
  async fetchProcessData(): Promise<ApiProcessData[]> {
    const response = await this.client.getProcesses();

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Failed to fetch process data: ${response.status}`);
    }
  }

  // ... other plugin logic here
}
```

**License**

This package is released under the MIT License. See [LICENSE](./LICENSE) for
details.
