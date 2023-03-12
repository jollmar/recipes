import { useStore } from "@nanostores/preact";
import { useEffect } from "preact/hooks";
import { servings } from "../store";

type Props = {
  servings: number;
};

export default function ServingsResizer(props: Props) {
  const $servings = useStore(servings);

  useEffect(() => {
    servings.set(props.servings);
  }, []);

  return (
    <div className="my-4 flex items-center gap-4">
      <button
        className="btn-sm btn btn-circle btn-outline"
        disabled={$servings === 1}
        onClick={() => servings.set($servings - 1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
        </svg>
      </button>
      <h3 className="text-xl">{$servings} portioner</h3>
      <button
        className="btn-sm btn btn-circle btn-outline"
        disabled={$servings === 12}
        onClick={() => servings.set($servings + 1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </div>
  );
}
