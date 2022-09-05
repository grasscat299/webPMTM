var ajaxurl;
let setajaxurl = ( c ) => {
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
    req.send();
}
setajaxurl( "local" );