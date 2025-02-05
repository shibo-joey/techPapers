| Feature       | Session Storage     | Cookies           | Local Storage       |
|--------------|--------------------|------------------|--------------------|
| **Scope** | Per-tab/session | Shared across all tabs and windows of the same domain | Shared across all tabs and windows of the same domain |
| **Persistence** | Cleared when the tab or browser is closed | Can persist for a defined expiration time | Persists indefinitely unless manually cleared |
| **Size Limit** | ~5MB (browser-dependent) | 4KB per cookie (including metadata) | ~5MB (browser-dependent) |
| **Storage Location** | Stored in browser memory | Stored on both client and optionally sent to the server with requests | Stored in browser storage |
| **Accessibility** | Only accessible via JavaScript (`sessionStorage` API) | Accessible via JavaScript (`document.cookie`) and sent to the server with requests (unless `HttpOnly`) | Only accessible via JavaScript (`localStorage` API) |
| **Security** | Cannot be accessed by the server | Can be flagged as `HttpOnly`, `Secure`, `SameSite` to enhance security | Cannot be accessed by the server |
| **Usage** | Storing temporary data for a single session (e.g., form inputs, temporary UI state) | Storing small bits of user preferences, authentication tokens, tracking data | Storing persistent user preferences, cached data |
| **Data Type** | Only stores string values | Only stores string values | Only stores string values |
| **Expiration** | Automatically removed when the session ends | Can have a set expiration time (`Expires` or `Max-Age`) | Persists indefinitely until manually deleted |
| **Example Use Case** | Shopping cart items that disappear after the session | Authentication tokens (but not recommended for security reasons), language preferences | User settings, theme preferences, long-term saved form data |
