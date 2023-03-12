import type { CollectionEntry } from "astro:content";
import { useState } from "preact/hooks";

type Props = {
  recipes: CollectionEntry<"recipes">[];
};
export default function Search(props: Props) {
  const [search, setSearch] = useState("");
  const searchResults = search
    ? props.recipes.filter(
        (recipe) =>
          recipe.slug.toLowerCase().includes(search.toLowerCase()) ||
          recipe.data.title.toLowerCase().includes(search.toLowerCase()) ||
          recipe.data.description.toLowerCase().includes(search.toLowerCase())
      )
    : [];
  return (
    <div className="dropdown dropdown-end">
      <div className="form-control">
        <div className="input-group">
          <input
            value={search}
            onInput={(e) => {
              setSearch(e.currentTarget.value);
            }}
            type="text"
            placeholder="Sök"
            className="input input-bordered input-sm"
          />
          <button className="btn btn-sm btn-secondary btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      {searchResults.length > 0 && (
        <ul
          tabIndex={0}
          className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4"
        >
          {searchResults.map((searchResult) => (
            <li key={searchResult.id}>
              <a href={`/recipes/${searchResult.slug}`}>
                {searchResult.data.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
