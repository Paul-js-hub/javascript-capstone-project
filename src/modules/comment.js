let url =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/c4bmiX6w9i77akNKO3FG/comments";

export const getComments = async (id) => {
  const response = await fetch(`${url}?item_id=${id}`);
  const comments = await response.json();
  return comments;
};

export const addComment = async (id, username, comment) => {
  await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      item_id: id,
      username,
      comment,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
};
