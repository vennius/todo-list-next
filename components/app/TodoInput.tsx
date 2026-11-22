import { CornerDownLeft } from "lucide-react"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { todosTable } from "@/lib/db/schema";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export default function TodoInput() {
  async function addTodo(formData: FormData) {
    "use server"
    const todo = formData.get("todo");
    if (!todo) return;

    const newTodo: typeof todosTable.$inferInsert = {text: todo.toString()}
    await db.insert(todosTable).values(newTodo)
    revalidatePath("/")
  }

  return (
    <form className="w-sm" action={addTodo}>
      <div className="flex gap-2 items-center">
        <Input id="todo-input" placeholder="Enter new todo..." name="todo"/>
        <Button size={"icon"} type="submit"><CornerDownLeft /></Button>
      </div>
    </form>
  )
}
