var ajaxurl;
let setajaxurl = ( c ) => {
    /*
    let req = new XMLHttpRequest();
    let url = "";
    if( c == "local" ){
        url = "http://localhost/pmtm/local.json";
    }else{
        url = "https://webpmtm.herokuapp.com/heroku.json";
    }
    req.open("GET", url);
    req.onreadystatechange = function(){
        if(req.readyState == 4 && req.status == 200 ){
            let a = req.responseText;
            ajaxurl = eval( "("+ a + ")" );
            console.log( ajaxurl );
            return;
        }
    }
    req.send();*/
    if( c == "local" ){
        ajaxurl = {
            "log" : "http://localhost/app/log/",
            "login" : "http://localhost/app/login/",
            "main" : "http://localhost/app/main/",
            "tmsheet" : "http://localhost/app/tmsheet/"
        }
    }else{
        ajaxurl = {
            "log" : "https://webpmtm.herokuapp.com/log/",
            "login" : "https://webpmtm.herokuapp.com/login/",
            "main" : "https://webpmtm.herokuapp.com/main/",
            "tmsheet" : "https://webpmtm.herokuapp.com/tmsheet/"
        }
    }
}
setajaxurl( "remote" );