'use strict';

class GetContent{
    //definr thr file's url
    constructor(file){
        this.file=file;
    }

    getContent(func){
        var xhttp= new XMLHttpRequest();
        xhttp.onreadystatechange=function(){
            if(this.readyState==4 && this.status==200){
                func(this);
            }
        };
        xhttp.open('GET', this.file, true);
        xhttp.send(); 

    }

}

