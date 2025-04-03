import express from 'express';
import { storage } from '../server/storage.js';
import { insertContactSchema } from '../shared/schema.js';

const app = express();
app.use(express.json());

// Contact form submission endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const validatedData = insertContactSchema.parse(req.body);
    const contact = await storage.createContact(validatedData);
    return res.status(201).json(contact);
  } catch (error) {
    console.error('Error creating contact:', error);
    return res.status(400).json({ error: 'Invalid contact data' });
  }
});

// Contacts list endpoint
app.get('/api/contacts', async (_req, res) => {
  try {
    const contacts = await storage.getContacts();
    return res.status(200).json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return res.status(500).json({ error: 'Error fetching contacts' });
  }
});

// Default route
app.get('/api', (_req, res) => {
  res.status(200).json({ message: 'API is running' });
});

// Export for Vercel serverless deployment
export default app;