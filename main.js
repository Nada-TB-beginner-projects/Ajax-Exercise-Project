'use strict';

/****************************************variables******************************** */
const htmlBtn= document.getElementById('html');
const jsonBtn=document.getElementById('json');
const moviesBtn=document.getElementById('film');


/***************************************function************************************ */
// get the result
function getText(text){
    document.getElementById('affichage').innerHTML=text;
}

function parseJson(element){
    let response=JSON.parse(element);
    return response;
}

// get HTML content
function getHtml(xhttp){
    getText(JSON.parse(xhttp.responseText));
}


function getContact(xhttp){
    let response=parseJson(xhttp.response);
    response=response.map((val)=>{return "<li>"+ val.firstName +": " +val.phone +"</li>";});
    getText("<ul>"+response.join('')+"</ul>");
}

function getMovie(xhttp){
    let response=parseJson(xhttp.response);
    response=response.map((val)=>{return "<figure><img src=images/"+val.cover +"><figcaption>"+val.title+"</figaption></figure>"})
    getText("<div id='movies'>"+response.join(' ')+"</div>");

}

function showContent(file, func){
    let content= new GetContent(file);
    content.getContent(func);
}

/************************************event****************************************** */
htmlBtn.addEventListener('click', function(){
    showContent('html.php', getHtml);
});

jsonBtn.addEventListener('click', function(){
    showContent('json.php', getContact);

});

moviesBtn.addEventListener('click', function(){
    showContent('movies.php', getMovie);
})

