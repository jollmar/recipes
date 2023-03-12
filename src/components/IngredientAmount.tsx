import { useStore } from "@nanostores/preact";
import { useEffect } from "preact/hooks";
import type { z } from "zod";
import type { ingredientSchema } from "../content/config";
import { servings } from "../store";

type Props = {
  servings: number;
  ingredient: Pick<z.infer<typeof ingredientSchema>, "amount" | "suffix">;
};

export default function IngredientAmount(props: Props) {
  const $servings = useStore(servings);

  useEffect(() => {
    servings.set(props.servings);
  }, []);

  const multiplier = $servings / props.servings;

  return (
    <span>
      {(props.ingredient.amount * multiplier).toLocaleString("sv-SE", {
        maximumFractionDigits: 3,
      })}{" "}
      {props.ingredient.suffix}
    </span>
  );
}
