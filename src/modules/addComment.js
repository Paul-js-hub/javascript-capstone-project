const addComment = async (id, username, comment) => {
    await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/c4bmiX6w9i77akNKO3FG/comments',
      {
        method: 'POST',
        body: JSON.stringify({
          item_id:id,
          username,
          comment
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      },
    );
  };

  export default addComment;