import { type ContactMessage, type InsertContactMessage } from "@shared/schema";
import { db } from "./db";
import { contactMessages } from "@shared/schema";

export interface IStorage {
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

export class DatabaseStorage implements IStorage {
  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const [message] = await db!
      .insert(contactMessages)
      .values(insertMessage)
      .returning();
    return message;
  }
}

export class MemoryStorage implements IStorage {
  private messages: ContactMessage[] = [];
  private nextId = 1;

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const message: ContactMessage = {
      id: this.nextId++,
      name: insertMessage.name,
      email: insertMessage.email,
      phone: insertMessage.phone ?? null,
      company: insertMessage.company ?? null,
      message: insertMessage.message,
      createdAt: new Date(),
    };
    this.messages.push(message);
    console.log("[MemoryStorage] Contact message saved (not persisted):", message);
    return message;
  }
}

export const storage: IStorage = db ? new DatabaseStorage() : new MemoryStorage();