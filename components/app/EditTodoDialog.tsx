"use client";

import { useState } from "react";
import { Pencil } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

type Props = {
  text: string | null;
  saveTodo: (formData: FormData) => Promise<void>;
};

export function EditTodoDialog({ text, saveTodo }: Props) {
  const [open, setOpen] = useState(false);

  async function handleSubmit(formData: FormData) {
    await saveTodo(formData);
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <Button size="icon-sm" variant="noShadow" className="bg-amber-300" />
        }
      >
        <Pencil />
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Todo</DialogTitle>
          <DialogDescription>
            Make changes to your todo here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>

        <form action={handleSubmit}>
          <div className="grid gap-4 mb-5">
            <div className="grid gap-3">
              <Label htmlFor="todo-text">Edit Todo</Label>
              <Input
                id="todo-text"
                name="edited-todo"
                defaultValue={text ?? ""}
              />
            </div>
          </div>

          <DialogFooter>
            <DialogClose render={<Button variant="neutral" />}>
              Cancel
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
