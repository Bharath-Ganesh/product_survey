# Product Survey

Static survey page for collecting product feedback. Submissions are sent to [Formspree](https://formspree.io/f/xeedrpdl).

## Deploy on Vercel (recommended)

1. Push this repo to GitHub: `git@github.com:Bharath-Ganesh/product_survey.git`
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. **Add New Project** → import `Bharath-Ganesh/product_survey`.
4. Leave defaults (framework: Other, no build command) and click **Deploy**.
5. Share the generated URL (e.g. `https://product-survey-xxx.vercel.app`).

No server or database required. Vercel serves `index.html` as a static site.

### Deploy via Vercel CLI

```bash
npm i -g vercel
cd product_survey
vercel
```

## Run locally

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080`

## Formspree volume (100–200 responses)

The free Formspree plan has monthly submission limits. For **100–200 responses**, confirm your plan supports that volume on the [Formspree pricing](https://formspree.io/plans) page and upgrade if needed.

## What gets submitted

| Field | Description |
|-------|-------------|
| `name` | Required |
| `location_country` | US, Germany, UK, Canada, UAE, Ireland, or Others |
| `location` | Country name (or `Others: <country>` when applicable) |
| `concierge_interest` | Yes / No / Maybe |
| `features` | Selected feature checkboxes |
| `current_handling` | How elder-care needs are handled today |
| `other_features` | Optional free text |
