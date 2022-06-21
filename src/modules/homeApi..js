const show = document.querySelector('.main-container');

const fetchData = async () => {
  const data = await fetch('https://api.tvmaze.com/search/shows?q=girls')
  let result = await data.json();
  let template = '';
  result.map((res) => {
    template += `
     
    `;
    show.innerText = template;
  });
  console.log(result);
};

export default fetchData;
