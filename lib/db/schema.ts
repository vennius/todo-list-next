import { is } from "drizzle-orm";
import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const todosTable = sqliteTable('todo', {
  id: int('id').primaryKey({autoIncrement: true}),
  text: text('text').notNull(),
  isCompleted: int('is_completed').default(0).notNull(),
});
