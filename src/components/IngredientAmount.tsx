import { useStore } from "@nanostores/preact";
import { useEffect } from "preact/hooks";
import { portions } from "../store";

type Props = {
  portions: number;
  ingredient: {
    // todo use zod from config.ts
    amount: number;
    suffix: string;
  };
};

export default function IngredientAmount(props: Props) {
  const $portions = useStore(portions);

  useEffect(() => {
    portions.set(props.portions);
  }, []);

  const multiplier = $portions / props.portions;

  return (
    <span>
      {(props.ingredient.amount * multiplier).toLocaleString("sv-SE", {
        maximumFractionDigits: 3,
      })}{" "}
      {props.ingredient.suffix}
    </span>
  );
}
