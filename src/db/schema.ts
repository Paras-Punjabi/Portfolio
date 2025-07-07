import { pgTable, uuid, integer, varchar, text } from "drizzle-orm/pg-core";

export const projectsTable = pgTable("projects",{
    id:uuid().primaryKey().defaultRandom(),
    name:varchar({length:500}).notNull(),
    description:text().notNull(),
    githubLink:varchar({length:500}).notNull(),
    link:varchar({length:500}).default("")
}) 