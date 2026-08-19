This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Adding a Progress Update

Progress updates are stored in `src/data/progress.ts`. To add a new update:

1. Open `src/data/progress.ts` and add a new object to the `progressEntries` array.
2. Give the update a unique numeric `id`. Do not reuse an existing ID.
3. Set `date` using the `YYYY-MM-DD` format. Updates are displayed newest first automatically, so no manual reordering is required.
4. Add a short, descriptive `title` and a clear `description` explaining what was completed, decided, or learned.
5. Add every contributing team member to `members`. The available names are `Selina`, `Andrew`, `Mable`, and `Treasure`.
6. Keep the trailing comma after the final property and place the new entry before the example comment at the end of the array.

Example:

```ts
{
	id: 5,
	date: "2026-08-26",
	title: "A8 log investigation",
	description:
		"Reviewed the available A8 controller archives and documented the initial log structure, timestamp formats, and event types.",
	members: ["Selina", "Mable"],
},
```

After adding an update, run `npm run lint` and check the progress page at [http://localhost:3000/progress](http://localhost:3000/progress) to confirm the date, description, and contributor badges appear correctly.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
