import { Trash } from "lucide-react";
import { Button } from "../ui/button";

type Props = {
  handleDelete: (formData: FormData) => void;
};

export default function DeleteTodo({ handleDelete }: Props) {
  return (
    <form action={handleDelete} >
      <Button size={"icon-sm"} type="submit" variant={"noShadow"} className={"bg-red-500"}>
        <Trash />
      </Button>
    </form>
  );
}
