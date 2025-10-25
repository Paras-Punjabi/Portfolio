import {
  pgTable,
  uuid,
  varchar,
  text,
  jsonb,
  vector,
} from "drizzle-orm/pg-core";

export const projectsTable = pgTable("projects", {
  id: uuid().primaryKey().defaultRandom(),
  name: varchar({ length: 500 }).notNull(),
  description: text().notNull(),
  githubLink: varchar({ length: 500 }).notNull(),
  link: varchar({ length: 500 }).default(""),
});

export const documentsTable = pgTable("documents", {
  id: uuid().primaryKey().defaultRandom(),
  content: text(),
  metadata: jsonb(),
  embedding: vector({ dimensions: 3072 }),
});
