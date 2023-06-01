 let li = document.getElementsByClassName("li");

function sidebar_togle() {
    
    if(      sidebar.style.width=="200px"){
        sidebar.style.display='none';
        sidebar.style.width='0px';

    }
else{
    sidebar.style.display="block";
    sidebar.style.width="200px";
}
}







// APi works
// const url ="https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=98abe3df61b64134036181bcb03c602c"

function main(categorys) {
  

  const url =`https://gnews.io/api/v4/top-headlines?category=${categorys }"&lang=hi&country=in&max=10&apikey=98abe3df61b64134036181bcb03c602c`;



fetch(url).then((response)=>{
  return response.json();
}).then((data)=>{
console.log(url)
console.log(data)
  first_news.src=data.articles[0]['image'];
  // first_description.innerHTML =data.articles[1]['description']
  first_content.innerHTML =data.articles[0]['content']

  secound_news.src=data.articles[1]['image'];
  // secound_description.innerHTML =data.articles[2]['description']
  secound_content.innerHTML =data.articles[1]['content']

  third_news.src=data.articles[2]['image'];
  // third_description.innerHTML =data.articles[3]['description']
  third_content.innerHTML =data.articles[2]['content']

  forth_news.src=data.articles[3]['image'];
  // forth_description.innerHTML =data.articles[4]['description']
  forth_content.innerHTML =data.articles[3]['content']

  fifth_news.src=data.articles[4]['image'];
  // fifth_description.innerHTML =data.articles[5]['description']
  fifth_content.innerHTML =data.articles[4]['content']

  six_news.src=data.articles[5]['image'];
  // six_description.innerHTML =data.articles[6]['description']
  six_content.innerHTML =data.articles[5]['content']

  seven_news.src=data.articles[6]['image'];
  // seven_description.innerHTML =data.articles[7]['description']
  seven_content.innerHTML =data.articles[6]['content']

  eight_news.src=data.articles[7]['image'];
  // eight_description.innerHTML =data.articles[8]['description']
  eight_content.innerHTML =data.articles[7]['content']

  nine_news.src=data.articles[8]['image'];
  // nine_description.innerHTML =data.articles[9]['description']
  nine_content.innerHTML =data.articles[8]['content']

  ten_news.src=data.articles[9]['image'];
  // ten_description.innerHTML =data.articles[9]['description']
  ten_content.innerHTML =data.articles[9]['content']


})

}
main('sports')

