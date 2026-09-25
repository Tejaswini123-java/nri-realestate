# Navi Mumbai NRI Homes — Website

A 5-page Next.js 14 (App Router) real-estate portal built for NRIs investing in
Navi Mumbai, covering **Panvel, Kharghar, Seawoods-Nerul, Vashi-Sanpada and Ulwe**.

- **Pages:** Home, Properties, Locations, NRI Guide, Contact, Project details
  (`/projects/[slug]`), Thank You
- **Design:** Same gold/cream premium theme as your sample `mumbai-realestate`
  build, extended with a dark navy hero and 3D-tilt property cards.
- **Single-page navigation:** every project card opens its own page on
  **this** site at `/projects/<project-name>` in the **same window** — no
  external microsite, no new tab.
- **Popup lead form** appears 5 seconds after page load (once per browser
  session), collecting Name / Email / Phone (with a country-code selector) /
  Country.
- **Contact page form** and every **project page** collect the same fields
  plus a message, tagged with the project name when submitted from a project
  page.
- **Every submission** (popup or contact/project form):
  1. Saves to MongoDB (best-effort — a DB hiccup never blocks the lead).
  2. Is POSTed as JSON to your **CRM** (`CRM_API_URL`).
  3. Sends a **styled lead-summary email** (the same Name / Email / Phone /
     Country / Enquired For / Builder / Project / Lead Source / Page URL /
     Visitor IP table shown in your sample screenshot) to `MAIL_TO` via SMTP.
  4. Redirects the visitor to a dedicated **Thank You page**.

---

## 1. Project structure

```
nri-realestate/
├── app/
│   ├── page.js                 → Home
│   ├── properties/page.js      → Properties (all projects, filterable)
│   ├── projects/[slug]/page.js → One page per project (same-window detail page)
│   ├── locations/page.js       → Locations (deep-dive per locality)
│   ├── nri-guide/page.js       → NRI Guide (process, docs, FAQs)
│   ├── contact/page.js         → Contact (form + office info)
│   ├── thank-you/page.js       → Shown after any successful form submission
│   ├── api/leads/route.js      → Backend API: POST (DB + CRM + email) + GET leads
│   ├── layout.js               → Wraps every page with Navbar/Footer/Popup
│   └── globals.css
├── components/                 → Navbar, Footer, Hero, PropertyCard, forms, etc.
├── lib/
│   ├── properties.js           → All locations & project data (edit here)
│   ├── countryCodes.js         → Country-code list used by the phone selectors
│   ├── sendLead.js             → CRM POST + lead-summary email sender
│   └── dbConnect.js            → MongoDB connection helper
├── models/
│   └── Lead.js                 → Mongoose schema for form submissions
├── .env.local.example          → Copy to .env.local and fill in
└── package.json
```

---

## 2. Install & run locally

```bash
cd nri-realestate
npm install
cp .env.local.example .env.local   # then edit .env.local, see step 3
npm run dev
```

Open **http://localhost:3000**.

---

## 3. Connect the backend (MongoDB) — step by step

The frontend forms (`components/PopupForm.js` and `components/ContactForm.js`)
already call `POST /api/leads`, and `app/api/leads/route.js` already saves that
data to MongoDB using Mongoose. You only need to supply a database connection
string — no other wiring is required.

### Option A — MongoDB Atlas (free, recommended, works with any hosting)

1. Go to https://www.mongodb.com/cloud/atlas/register and create a free account.
2. Create a new **free (M0) cluster**.
3. Under **Database Access**, add a database user with a username/password.
4. Under **Network Access**, add IP address `0.0.0.0/0` (allow from anywhere) —
   or your hosting provider's specific IPs for tighter security.
5. Click **Connect → Drivers**, copy the connection string. It looks like:
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
6. Paste it into `.env.local` as `MONGODB_URI`, adding a database name before the `?`:
   ```
   MONGODB_URI=mongodb+srv://myuser:mypassword@cluster0.xxxxx.mongodb.net/nri-realestate?retryWrites=true&w=majority
   ```
7. Restart `npm run dev`.

### Option B — Local MongoDB (for development only)

1. Install MongoDB Community Edition: https://www.mongodb.com/try/download/community
2. Start it: `mongod` (default port 27017).
3. In `.env.local`:
   ```
   MONGODB_URI=mongodb://127.0.0.1:27017/nri-realestate
   ```

### Test it

1. Run `npm run dev`, open the site.
2. Wait 5 seconds — the popup form appears. Submit it.
3. Or go to `/contact` and submit the contact form.
4. Check MongoDB Atlas → **Browse Collections** → `nri-realestate` database →
   `leads` collection — your submission should appear there instantly.
5. You can also view submissions via the API directly (see next section).

---

## 3b. Connect the CRM + lead email

Open `.env.local` and fill in:

```
CRM_API_URL=https://your-crm.example.com/api/wordpress/leads

SMTP_HOST=smtp.hostinger.com
SMTP_PORT=587
SMTP_USER=noreply@yourdomain.in
SMTP_PASS=your-smtp-password
MAIL_FROM=noreply@yourdomain.in
MAIL_TO=you@example.com,sales@example.com
MAIL_SUBJECT=New Lead from Website
BUILDER_NAME=Your Company Name
SITE_URL=https://www.yourdomain.in
```

- **CRM_API_URL** — every submission is POSTed as JSON:
  `{ "Name", "Email", "Mobile no", "Requirement", "Page URL" }` — the same
  shape used by your reference PHP script.
- **SMTP_\* / MAIL_\*** — every submission also sends an HTML email to
  `MAIL_TO`, formatted as the same Name / Email / Phone / Country /
  Enquired For / Builder / Project / Lead Source / Page URL / Visitor IP
  table shown in your sample screenshot.
- Both are optional independently — if you leave `CRM_API_URL` blank, CRM
  sync is skipped; if you leave the SMTP vars blank, email is skipped. The
  form only ever fails for the visitor if **all three** (DB, CRM, email)
  fail.
- After saving, the visitor is redirected to `/thank-you`.

---

## 4. Viewing submitted leads

A lightweight, key-protected endpoint is included so you can check leads
without setting up a full admin panel:

1. In `.env.local`, set:
   ```
   ADMIN_API_KEY=choose-a-long-random-secret
   ```
2. Visit:
   ```
   http://localhost:3000/api/leads?key=choose-a-long-random-secret
   ```
   This returns all submissions as JSON, newest first.

For a real admin dashboard, either build a simple protected `/admin` page that
calls this same endpoint, or connect MongoDB Atlas's own **Data Explorer / Charts**
directly.

---

## 5. Editing property & location data

All properties and localities live in **one file**: `lib/properties.js`.
Every project entry has:

```js
{
  id, name, developer, location, localityLabel, type,
  priceRange, beds, area, possession, tag, tagColor,
  img,          // swap for your own hosted images (see step 6)
  url,          // kept for reference only — no longer used as a link target,
                // since clicking a project now opens /projects/<id> on this
                // same site instead of an external microsite (see step 8)
  highlights,   // 2-3 short bullet points
}
```

To add/remove a project or locality, edit that array/object — every page
(Home featured grid, Properties page, Locations page) pulls from this single
source automatically.

---

## 6. Using your own images

Right now the site uses royalty-free Unsplash images as placeholders so it
runs immediately. To use real photos from your project websites instead:

1. Save the images you want (hero shots, exterior renders, etc.) into
   `public/images/` in this project.
2. In `lib/properties.js`, change `img: 'https://images.unsplash.com/...'`
   to `img: '/images/your-file-name.jpg'`.
3. Do the same for `locations[].img` in the same file.

If you want to hot-link images directly from the developer microsites
instead of downloading them, just paste their image URL in — but make sure
you have the right to use that image, and note hot-linked images can break
if the source site changes its URLs.

---

## 7. Deploying

**Vercel (recommended, made by the creators of Next.js):**

1. Push this project to a GitHub repo.
2. Go to https://vercel.com → **New Project** → import the repo.
3. In **Environment Variables**, add `MONGODB_URI` (and `ADMIN_API_KEY` if used).
4. Deploy. Vercel builds and hosts the frontend **and** the `/api/leads`
   backend automatically — no separate backend server needed.

**Any Node hosting (Render, Railway, a VPS, etc.):**

```bash
npm run build
npm run start
```
Just make sure `MONGODB_URI` is set as an environment variable on that host.

---

## 8. Project pages (single-page navigation)

Every property card now links to its **own page on this site**, at
`/projects/<project-id>` (e.g. `/projects/godrej-varanya-kharghar`), opened
in the **same window** — nothing sends the visitor to an external microsite
or a new tab anymore. The `url` field still exists in `lib/properties.js`
for your own reference/records, but it is no longer used as a link target.

Each project page is generated automatically from the same `lib/properties.js`
data (image, price, beds, area, highlights, locality blurb) and includes its
own enquiry form, pre-tagged with that project's name so leads arrive
labelled correctly in the CRM/email/DB.

To add or edit a project, just edit `lib/properties.js` — its detail page,
its card on `/properties` and `/`, and its CRM/email tagging all update
automatically.
