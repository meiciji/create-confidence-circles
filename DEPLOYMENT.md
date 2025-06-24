# Deploying to Vercel

This guide walks you through deploying your Confidence Through Creation nonprofit website to Vercel.

## ✅ Ready for Deployment

Your application is now configured and ready for Vercel deployment with:
- Fixed TailwindCSS PostCSS configuration
- All required dependencies installed
- Simplified static site deployment setup
- Working development server

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **GitHub Repository**: Push your code to GitHub

## Step 1: Database Setup

### Option A: Neon Database (Recommended)
1. Sign up at [neon.tech](https://neon.tech)
2. Create a new project
3. Copy the connection string from your dashboard

### Option B: Vercel Postgres
1. In your Vercel dashboard, go to Storage
2. Create a new Postgres database
3. Copy the connection string

## Step 2: Environment Variables

In your Vercel project settings, add these environment variables:

### Required:
- `DATABASE_URL`: Your PostgreSQL connection string
- `NODE_ENV`: Set to `production`

### Optional:
- `SESSION_SECRET`: Random string for session encryption
- `PORT`: Leave empty (Vercel handles this)

## Step 3: Deploy to Vercel

### Method 1: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

### Method 2: GitHub Integration
1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. Configure project settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist/public`
   - **Install Command**: `npm install`
   - **Root Directory**: Leave empty (use root)

### Important: Build Configuration
The project has been configured with:
- Root-level `package.json` with all dependencies
- Fixed PostCSS configuration for TailwindCSS
- Simplified API structure for Vercel serverless functions

## Step 4: Configure Database

After deployment, run database migrations:

```bash
# Install dependencies locally
npm install

# Set your DATABASE_URL environment variable
export DATABASE_URL="your_production_database_url"

# Push schema to production database
npm run db:push
```

## Step 5: Verify Deployment

1. Check that your site loads at the Vercel URL
2. Test navigation between pages
3. Verify API endpoints work (if you have backend functionality)

## Project Structure for Vercel

```
confidence-through-creation/
├── api/                    # Vercel serverless functions
│   └── index.ts           # API handler
├── client/                # Frontend React app
│   ├── src/
│   └── package.json
├── server/                # Backend code (runs serverless)
├── dist/                  # Build output
│   └── public/           # Static files served by Vercel
├── vercel.json           # Vercel configuration
└── package.json          # Root package.json
```

## Configuration Files

### vercel.json
- Configures build settings and routing
- Maps API routes to serverless functions
- Serves static files from dist/public

### api/index.ts
- Entry point for serverless backend
- Handles all API requests
- Integrates with Express routes

## Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Ensure TypeScript types are properly configured
- Verify build command works locally: `npm run build`

### Database Connection Issues
- Verify DATABASE_URL is correctly set in Vercel environment variables
- Ensure database allows connections from Vercel's IP ranges
- Test connection string locally first

### API Routes Don't Work
- Check that `/api/*` routes are configured in vercel.json
- Verify serverless function in `/api/index.ts` is properly set up
- Check Vercel function logs for errors

### Images/Assets Not Loading
- Ensure images are in `client/public/` directory
- Use relative paths: `/image.jpg` not `/public/image.jpg`
- Check that build output includes static assets

## Performance Optimization

1. **Enable Vercel Analytics**: Track page performance
2. **Configure Caching**: Set appropriate cache headers
3. **Optimize Images**: Use Vercel's image optimization
4. **Bundle Analysis**: Monitor bundle size

## Custom Domain

1. In Vercel dashboard, go to your project
2. Navigate to "Domains" tab
3. Add your custom domain
4. Configure DNS records as instructed

## Security

- All environment variables are encrypted
- HTTPS is enabled by default
- Consider adding security headers in vercel.json

Your nonprofit website will be live and scalable on Vercel's global CDN!