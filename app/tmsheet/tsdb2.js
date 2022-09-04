function rcvtm( f1, f2, f3, cvs, nd ){  //item1=ls, item2=title
    let req = new XMLHttpRequest();
    req.open("GET",ajaxurl["main"]+"sendtm5.php?date="+ gettime3( nd, "string" )+"&user="+user );
    req.onreadystatechange = function(){
        if(req.readyState == 4 && req.status == 200 ){
            let a = req.responseText;
            console.log( "a", a );
            let Item = a.split("/");
            console.log( Item );
            ls = [];
            title = [];
            if( Item[0] != "null" ){
                ls = Item[0].split( "," );
            }
            if( Item[1] != "null" ){
                title = Item[1].split( "," );
            }
            for( let a = 0; a < ls.length; a++ ){
                ls[a] = Number( ls[a] );
            }
            console.log( "ls", ls, "title", title );
            if( ls.length != 0 ){
                fp = ls.length/2;
            }else{
                fp=0;
            }
            console.log( "dai", dai ,"ls", ls, "title", title );
            f1();
            f2( cvs, gettime3( nd, "date"), nd, tsx1, tsy1 );
            f3();
        }
    };
    req.send();
}