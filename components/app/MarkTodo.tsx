import { Check, X } from "lucide-react";
import { Button } from "../ui/button";

type Props = {
  todo: {
    id: number;
    text: string | null;
    isCompleted: number | null;
  };
  handleComplete: () => void;
};

export default function MarkTodo({ todo, handleComplete }: Props) {
  return (
    <form action={handleComplete}>
      {todo.isCompleted == 0 ?
        <Button size={"icon-sm"} type="submit" variant={"noShadow"} className={"bg-green-400"}>
          <Check />
        </Button>
        :
        <Button size={"icon-sm"} type="submit" variant={"noShadow"} className={"bg-orange-400"}>
          <X />
        </Button>}
    </form>
  )
}
