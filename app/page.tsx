import TodoCard from "@/components/app/TodoCard";
import TodoInput from "@/components/app/TodoInput";
import { db } from "@/lib/db";
import { todosTable } from "@/lib/db/schema";

export default async function Todo() {
  const todos = await db.select().from(todosTable);

  return (
    <div className="w-screen p-2.5 flex flex-col gap-4 items-center justify-center">
      <TodoInput />
      {todos.map(todo => <TodoCard key={todo.id} todo={todo} />)}
    </div>
  )
}
