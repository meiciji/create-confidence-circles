// Vercel serverless function entry point
import { VercelRequest, VercelResponse } from '@vercel/node';
import express from 'express';
import { registerRoutes } from '../server/routes.js';

const app = express();

// Initialize routes
registerRoutes(app);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Handle the request using Express
  app(req, res);
}