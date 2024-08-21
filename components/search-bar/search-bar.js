export const getSerchQuery = (e) => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const searchQuery = formData.get("query").replace(/\s+/g, " ").trim();
  form.reset();
  return searchQuery;
};
