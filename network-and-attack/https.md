# How HTTPS Works 
1. Client Requests a Secure Connection
When you enter a website URL that starts with https://, your browser initiates a secure connection to the web server.

2. Server Responds with a Digital Certificate
The server presents an SSL/TLS certificate issued by a Certificate Authority (CA). This certificate contains:

- The server's public key
- The website's domain name
- The certificate's expiration date
- The CA's digital signature
- Encryption method

3. Certificate Validation
The client (browser) verifies the certificate:

Checks if the certificate is issued by a trusted CA.
Ensures the certificate is not expired or revoked.
Confirms that the domain in the certificate matches the website.
If the certificate is valid, the process continues. Otherwise, the browser shows a security warning.

4. TLS Handshake (Key Exchange)
Once the certificate is validated, the client and server perform a TLS handshake to establish an encrypted session:

The client generates a random session key.
The session key is encrypted using the server’s public key (from the certificate) and sent to the server.
The server decrypts the session key using its private key.
Both parties now have the same session key for symmetric encryption.
5. Encrypted Communication
From this point on:

All data exchanged between the client and server is encrypted using the session key.
The encryption prevents third parties (like hackers or ISPs) from reading or modifying the data.
6. Secure Data Transmission
Now, all communication (e.g., form submissions, passwords, credit card details) is securely encrypted and transmitted.
