
# CSRF (Cross-Site Request Forgery)

CSRF (Cross-Site Request Forgery) is a type of attack where a malicious website tricks a user's browser into making unauthorized requests to another website where the user is authenticated. This can lead to unintended actions being performed on behalf of the victim, such as changing account settings, transferring money, or deleting data.

1. CSRF Tokens (Synchronizer Token Pattern)
Generate a unique token for each user session and include it in forms or requests.
The server validates this token before processing the request.

2. SameSite Cookie Attribute
Set the SameSite attribute for cookies to prevent them from being sent with cross-site requests.
Example:
Set-Cookie: session=abc123; Secure; HttpOnly; SameSite=Strict

3. Use HTTP Headers for Verification
Require requests to include a specific custom header, such as X-Requested-With: XMLHttpRequest, which is not automatically sent by browsers in cross-site requests.

4. Enforce Same-Origin Policy (CORS)
Configure Cross-Origin Resource Sharing (CORS) to block cross-origin requests unless explicitly allowed.
Access-Control-Allow-Origin: https://trusted-site.com
Access-Control-Allow-Methods: POST, GET

6. Require Reauthentication for Critical Actions
Ask users to enter their password or perform multi-factor authentication (MFA) before executing sensitive operations like transferring money.

7. Use Cookie-Free Authentication for API Requests
Instead of relying on cookies for authentication, use tokens such as JWT (JSON Web Token) or OAuth access tokens, which must be included explicitly in the request headers.

8. Limit Session Lifetime and Use Secure Cookies


# XSS (Cross-Site Scripting)

XSS (Cross-Site Scripting) is a web security vulnerability that allows attackers to inject malicious scripts into web pages viewed by users. These scripts run in the user's browser and can steal cookies, hijack sessions, redirect users, or modify webpage content.

1. Use HttpOnly and Secure Cookies
The HttpOnly flag prevents JavaScript from accessing cookies, making it impossible for attackers to steal them using document.cookie.
The Secure flag ensures cookies are only sent over HTTPS.
Example (Express)
res.cookie("session", "secure-session-token", {
    httpOnly: true,  // Prevents JavaScript access
    secure: true,    // Requires HTTPS
    sameSite: "Strict"
});
Attackers CANNOT access session cookies with JavaScript.

2. Escape & Sanitize User Input
Never trust user input—always sanitize and escape data before displaying it.

document.body.innerHTML = "Welcome " + userInput;
Blocks script execution by removing <script> tags.

3. Use a CSP (Content Security Policy)
A CSP (Content Security Policy) restricts what JavaScript can be executed on a webpage.

Content-Security-Policy: default-src 'self'; script-src 'self'
default-src 'self' → Only allows scripts from the same domain.
script-src 'self' → Blocks inline scripts.
Blocks inline <script> injections from attackers.

4. Validate & Encode Input
Ensure user input is validated and encoded before inserting it into HTML.

Example (Safe Encoding)
Instead of:
document.write(userInput);
Use:
document.write(encodeURIComponent(userInput));
Converts special characters (<, >, ") into harmless text.

5. Avoid eval(), innerHTML, and document.write()
