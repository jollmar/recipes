import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
const recipes = await getCollection("recipes");

export const get: APIRoute = async ({ params }) => {
  const recipe = recipes.find((recipe) => recipe.slug === params.slug);
  return {
    body: JSON.stringify(recipe?.data),
  };
};

export async function getStaticPaths() {
  return recipes.map((recipe) => ({
    params: { slug: recipe.slug },
    props: recipe,
  }));
}
