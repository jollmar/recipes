import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const get: APIRoute = async ({ params }) => {
  const recipes = await getCollection("recipes");
  const recipe = recipes.find((recipe) => recipe.slug === params.slug);
  return {
    body: JSON.stringify(recipe?.data),
  };
};

export async function getStaticPaths() {
  const recipes = await getCollection("recipes");
  return recipes.map((recipe) => ({
    params: { slug: recipe.slug },
    props: recipe,
  }));
}
