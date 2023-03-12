import { useStore } from "@nanostores/preact";
import { useEffect } from "preact/hooks";
import { servings } from "../store";

type Props = {
  servings: number;
};
export default function RecipeResizedAlert(props: Props) {
  const $servings = useStore(servings);

  useEffect(() => {
    servings.set(props.servings);
  }, []);

  if (!$servings || props.servings === $servings) {
    return null;
  }
  return (
    <div className="mt-4 alert alert-warning shadow-lg">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current flex-shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <span>Receptets antal portioner har ändrats</span>
      </div>
      <div className="flex-none">
        <button
          className="btn btn-sm btn-ghost"
          onClick={() => servings.set(props.servings)}
        >
          Återställ
        </button>
      </div>
    </div>
  );
}
