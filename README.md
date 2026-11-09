# Shyam Builders

A responsive, static website for Shyam Builders Pty Ltd. It uses plain HTML, CSS and JavaScript, so there is no build step or package install required.

## Preview locally

From this folder, run:

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Deploy on Vercel

1. Create a GitHub repository and push the contents of this folder.
2. In Vercel, import the repository. Select **Other** as the framework preset; leave the build command empty and set the output directory to `.`.
3. Deploy. In Vercel, add your domain and follow the DNS instructions it provides.
4. In Hostinger hPanel, open the domain's DNS zone and add or update the records Vercel specifies. DNS may take some time to propagate.

The domain can remain registered with Hostinger while Vercel serves the website. Avoid changing nameservers unless Vercel specifically requires it; normally you only need the DNS records shown in Vercel.

## Deploy directly on Hostinger

Upload `index.html`, `css/`, `js/` and `assets/` into the domain's `public_html` directory using File Manager or FTP. Keep the directory structure intact.

## Contact form

The enquiry form opens a prefilled WhatsApp message addressed to `+61 434 084 368`. It does not store form submissions or require a backend.

## Before launch

- Replace the inspiration photography with Shyam Builders' own project photography when available.
- Confirm the services, service area and all company details are accurate before publishing.
- Connect the final domain in Vercel and verify the site on mobile after DNS is active.
