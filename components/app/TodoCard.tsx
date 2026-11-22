import { Trash, Pencil } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

export default function TodoCard({ todo }: { todo: { id: number; text: string } }) {
  return (
    <Card className="flex flex-row w-96 px-3 items-center justify-between">
      <div>
        <p>{todo.text}</p>
      </div>
      <div className="flex gap-3">
        <Dialog>
              <form>
            <DialogTrigger render={<Button size={"icon-sm"} variant={"noShadow"} className={"bg-amber-300"} />}><Pencil /></DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Edit Todo</DialogTitle>
                    <DialogDescription>
                      Make changes to your todo here. Click save when you&apos;re
                      done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4">
                    <div className="grid gap-3">
                      <Label htmlFor="todo-text">Edit Todo</Label>
                      <Input id="todo-text" name="text" defaultValue={todo.text} />
                    </div>
                  </div>
                  <DialogFooter>
                    <DialogClose render={<Button variant="neutral" />}>
                      Cancel
                    </DialogClose>
                    <Button type="submit">Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </form>
            </Dialog>
        <Button size={"icon-sm"} variant={"noShadow"} className={"bg-red-500"}>
          <Trash />
        </Button>
      </div>
    </Card>
  );
}
