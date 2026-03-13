const demoID = document.getElementById('demo');

demoID.style.border = "1px solid purple";

const demoClass = document.getElementsByClassName('demo');
for(i=0;i< demoClass.length;i++){
    demoClass[i].style.border = '2px dashed orange';
}
const articleTag = document.getElementsByTagName('article');
for(i=0;i< articleTag.length;i++){
    articleTag[i].style.border = '2px dashed blue';
}

const demoQuery = document.querySelector('#Demo-query');
demoQuery.style.border = '1px solid red'

const demoQueryAll = document.querySelectorAll('.demo-query-all');
