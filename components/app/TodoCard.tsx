import { Card } from "../ui/card";
import { db } from "@/lib/db";
import { todosTable } from "@/lib/db/schema";
import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";
import { cn } from "cn";
import { EditTodoDialog } from "./EditTodoDialog";
import DeleteTodo from "./DeleteTodo";
import MarkTodo from "./MarkTodo";

export default function TodoCard({ todo }: { todo: { id: number; text: string | null; isCompleted: number | null } }) {

  async function handleComplete() {
    "use server"
    const opposite: number = todo.isCompleted == 0 ? 1 : 0;
    await db.update(todosTable).set({isCompleted: opposite}).where(eq(todosTable.id, todo.id))
    revalidatePath("/")
  }

  async function handleDelete() {
    "use server"
    await db.delete(todosTable).where(eq(todosTable.id, todo.id))
    revalidatePath("/")
  }

  async function handleEdit(editedTodo: FormData) {
    "use server"
    const text = editedTodo.get("edited-todo")
    await db.update(todosTable).set({text: text?.toString()}).where(eq(todosTable.id, todo.id))
    revalidatePath("/")
  }

  return (
    <Card className="flex flex-row w-96 px-3 items-center justify-between">
      <div>
        <p className={cn(todo.isCompleted == 1 ? "line-through decoration-2" : "")}>{todo.text}</p>
      </div>
      <div className="flex gap-3">
        <MarkTodo todo={todo} handleComplete={handleComplete} />
        <EditTodoDialog text={todo.text} saveTodo={handleEdit} />
        <DeleteTodo handleDelete={handleDelete} />
      </div>
    </Card>
  );
}
