This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

### PlanetScale
Delete all mysql-* packages
```bash
sudo apt-get remove mysql*
```
Download & Install mysql-client 
```bash
sudo env DEBIAN_FRONTEND=noninteractive apt-get install -qq mysql-client default-libmysqlclient-dev
```
Download Planetscale CLI
```bash
wget https://github.com/planetscale/cli/releases/download/v0.175.0/pscale_0.175.0_linux_amd64.deb
```
Install Planetscale CLI
```bash
sudo dpkg -i pscale_0.175.0_linux_amd64.deb 
```
Login into your account
```bash
pscale auth login
```
Create new branch if it does not exist
```bash
pscale branch create <database name> <branch name>
```
connect to database
```bash
pscale connect <database name> <branch name> --port 3309
```
### Prisma 
- Open new terminal

Install Prisma client 
```bash
npm install @prisma/client
```
Install Prisma SDK as a dev dependency
```bash
npm install prisma --save-dev
```
Initialize Prisma
```bash
npx prisma init
```
Format Prisma Schema
```bash
npx prisma format
```
Push Changes
```bash
npx prisma db push
```
View database on Prisma studio GUI
```bash
npx prisma studio
```