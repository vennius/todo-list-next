import { CornerDownLeft } from "lucide-react"
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function TodoInput() {
  return (
    <Field className="w-sm">
      <FieldLabel htmlFor="todo-input">Enter your todo</FieldLabel>
      <div className="flex gap-2 items-center">
        <Input id="todo-input" placeholder="Todo"/>
        <Button size={"icon"} type="submit"><CornerDownLeft /></Button>
      </div>
    </Field>
  )
}
