import TodoCard from "@/components/app/TodoCard";
import TodoInput from "@/components/app/TodoInput";

export default function Todo() {
  const tempTodos = [{ id: 1, text: "Test todo 1" }, { id: 2, text: "Test todo 2" }, { id: 3, text: "Test todo 3" }]
  return (
    <div className="w-screen p-2.5 flex flex-col gap-4 items-center justify-center">
      <TodoInput />
      {tempTodos.map(todo => <TodoCard key={todo.id} todo={todo} />)}
    </div>
  )
}
