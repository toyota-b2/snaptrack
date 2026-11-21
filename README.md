# SNAPTRACK

A GitHub Pages-ready, username-first Snapchat profile lookup **demo**.

## What it does
- Starts with `antonisssb` prefilled.
- Validates and displays the username entered.
- Clearly labels Snapscore, friends/followers and last-active information as unavailable.
- Uses no Snapchat password and does not attempt private account access.
- Responsive layout for mobile and desktop.

## Run locally
Open `index.html` in a browser, or run a local static server:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000.

## Publish with GitHub Pages
1. Create a GitHub repository named `snaptrack`.
2. Upload `index.html`, `style.css`, `app.js`, and `README.md` to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then save.
6. Wait for the Pages deployment and open the published URL shown there.

## Data and privacy
This is a frontend-only demo. A username search does not confirm that a Snapchat account exists. Snapchat does not expose private Snapscore, friend lists, or hidden last-active status through a general public username lookup. Do not add scraping, credential collection, or bypasses. If you later integrate a data provider, use documented APIs and only data the account owner has authorized.

## Customization
Change the default username in the `value` attribute of `#usernameInput` in `index.html`.
