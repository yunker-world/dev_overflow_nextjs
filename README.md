This is a clone of 'Stack Overflow' bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **Database:** [MongoDB](https://www.mongodb.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Authentication:** [Clerk](https://clerk.com/)
- **Form:** [React Hook Form](https://react-hook-form.com/)
- **Validation:** [Zod](https://zod.dev/)

## Running Locally

1. Clone the repository

   ```bash
   git clone https://github.com/yunker-world/bug-tracker.git
   ```

2. Install dependencies using npm

   ```bash
   npm install
   ```

3. Copy the `.env.example` to `.env` and update the variables.

   ```bash
   cp .env.example .env
   ```

4. Push the database schema

   ```bash
   npx prisma db push
   ```

5. Start the development server

   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
