import { type User, type InsertUser, type Contact, type InsertContact } from "@shared/schema";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact methods
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
}

export class MemStorage implements IStorage {
  private users: User[] = [];
  private contacts: Contact[] = [];
  private userId = 1;
  private contactId = 1;

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.find(user => user.id === id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const newUser: User = {
      id: this.userId++,
      ...insertUser
    };
    this.users.push(newUser);
    return newUser;
  }
  
  // Contact methods
  async createContact(contactData: InsertContact): Promise<Contact> {
    const newContact: Contact = {
      id: this.contactId++,
      name: contactData.name,
      email: contactData.email,
      subject: contactData.subject,
      message: contactData.message,
      createdAt: new Date()
    };
    this.contacts.push(newContact);
    return newContact;
  }
  
  async getContacts(): Promise<Contact[]> {
    return [...this.contacts].sort((a, b) => 
      new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );
  }
}

export const storage = new MemStorage();
