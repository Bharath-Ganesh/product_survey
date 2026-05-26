# Product Survey

Static survey page that saves responses to **your Google Sheet**. Deploy on Vercel and share the link with friends.

## 1. Connect Google Sheets (one-time, ~5 minutes)

### Create the sheet

1. Open [Google Sheets](https://sheets.google.com) and create a new spreadsheet (e.g. **Product Survey Responses**).
2. Keep the default first tab (Sheet1).

### Add the script

1. In the sheet: **Extensions → Apps Script**.
2. Delete any default code and paste the contents of [`google-apps-script/Code.gs`](google-apps-script/Code.gs).
3. Click **Save** (name the project e.g. `Product Survey`).

### Deploy as web app

1. Click **Deploy → New deployment**.
2. Click the gear icon → choose **Web app**.
3. Set:
   - **Execute as:** Me
   - **Who has access:** Anyone
4. Click **Deploy** and authorize when prompted.
5. Copy the **Web app URL** (looks like `https://script.google.com/macros/s/...../exec`).

### Link the survey to your sheet

1. Open `index.html` in this repo.
2. Set your URL:

```js
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/YOUR_ID/exec";
```

3. Commit and push (or redeploy on Vercel).

**Important:** If you change the script later, use **Deploy → Manage deployments → Edit → New version → Deploy**. The URL stays the same; only the version updates.

## 2. Deploy on Vercel

1. Repo: [github.com/Bharath-Ganesh/product_survey](https://github.com/Bharath-Ganesh/product_survey)
2. [vercel.com](https://vercel.com) → **Add New Project** → import the repo.
3. No build command needed → **Deploy**.
4. Share your Vercel URL.

After each change to `index.html`, push to `main` — Vercel redeploys automatically.

## 3. View and export your data

- Open your Google Sheet anytime — each submission is a new row.
- **File → Download → Microsoft Excel (.xlsx)** whenever you want an Excel file.
- You own the sheet: share access, filter, charts, backups — full control.

## Run locally

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080` (submissions still go to Google Sheets if `GOOGLE_SCRIPT_URL` is set).

## Sheet columns

| Column | Source |
|--------|--------|
| Submitted At | Timestamp |
| Name | Required |
| Location Country | Dropdown value |
| Location | Country or `Others: …` |
| Kerala App Interest | Yes / No / Maybe |
| Features | Comma-separated checkboxes |
| Current Handling | Question 3 |
| Other Feature Ideas | Free text |

## Volume (100–200 responses)

Google Sheets handles this easily on a free Google account. No Formspree limits.
