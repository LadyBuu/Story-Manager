# Story Organiser (OneDrive edition)

Static site: no server, no database, no secrets. Your library lives in your OneDrive at `Story Organiser/data.json`.
Word files are only read, never written. Prose is never stored.

## 1. Register the app (once, free)
Azure portal > Microsoft Entra ID > App registrations > New registration
- Name: Story Organiser
- Account type: personal accounts only (or "personal + work/school" if you'll sign in with either)
- Redirect URI: platform **Single-page application (SPA)**, value = the exact URL where you host this, e.g. `https://stories.example.com/` (add `http://localhost:8080/` too for testing)
- API permissions (delegated, Microsoft Graph): `User.Read`, `Files.ReadWrite`. No admin consent needed for personal accounts.
- Copy the Application (client) ID.

## 2. Configure
Paste the client ID into `config.js` (or into Settings > OneDrive on first run).

## 3. Host (HTTPS required for sign-in and install)
Upload this folder as-is to any static host: Azure Static Web Apps, Cloudflare Pages, Netlify, your own server.
To keep the page itself private, put it behind the host's access control (Cloudflare Access, Azure SWA auth, Netlify password). Not required for safety: the page holds no data.

## 4. Use
Open the URL on each device, sign in, choose your manuscript folder (Settings, or the OneDrive folder button). Install to the home screen for the app feel (iOS: Share > Add to Home Screen).
Sync reads new and changed .docx files, marks edited ones "changed", and shows the usual import review.

Test locally: `python3 -m http.server 8080` in this folder, then open http://localhost:8080/
