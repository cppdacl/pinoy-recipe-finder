const BASE = 'https://pinoy-recipe-finder-api.onrender.com/api';

export async function fetchRecipes() {
  const res = await fetch(`${BASE}/recipes`);
  if (!res.ok) throw new Error('Failed to fetch recipes');
  return res.json();
}

export async function fetchRecipe(id: number) {
  const res = await fetch(`${BASE}/recipes/${id}`);
  if (!res.ok) throw new Error('Recipe not found');
  return res.json();
}

export async function createRecipe(form: FormData) {
  const res = await fetch(`${BASE}/recipes`, { method: 'POST', body: form });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message ?? 'Failed to create recipe');
  }
  return res.json();
}

export async function updateRecipe(id: number, form: FormData) {
  const res = await fetch(`${BASE}/recipes/${id}`, { method: 'PUT', body: form });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message ?? 'Failed to update recipe');
  }
  return res.json();
}

export async function deleteRecipe(id: number) {
  const res = await fetch(`${BASE}/recipes/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Failed to delete recipe');
}