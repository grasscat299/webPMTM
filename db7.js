function send( item, c ){  //item, c=title or ls
    let req = new XMLHttpRequest();
    req.open("GET","http://localhost/DPMTM/rcvtm7.php?item="+item+"&c="+c+"&date="+gettime()+"&user="+user );
    req.onreadystatechange = function(){
        if(req.readyState == 4 && req.status == 200 ){
            console.log( "send()","item", item, "c", c );
            return;
        }
    }
    req.send();
}

function rcvtm( item, f1, f2, x1, x2, x3, cvs, n5, n4, n1, n2, n3, f3 ){  //item1=ls, item2=title
    let req = new XMLHttpRequest();
    req.open("GET","http://localhost/DPMTM/sendtm5.php?date="+ item+"&user="+user );
    req.onreadystatechange = function(){
        if(req.readyState == 4 && req.status == 200 ){
            console.log( "date", item );
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
            f1( dai, ls, title );
            f2( cvs, n5, n4, n1, n2, n3 );
            if( f3 != undefined ){
                f3();
            }
        }
    };
    req.send();
}

function sendpm( id, item1, t, c ){
    let req = new XMLHttpRequest();
    req.open("GET","http://localhost/DPMTM/rcvpm3.php?id="+id+"&name="+item1+"&title="+t+"&c="+c+"&user="+user );
    req.onreadystatechange = function(){
        if(req.readyState == 4 && req.status == 200 ){
            console.log( "sendpm()" );
            return;
        }
    };
    req.send();
}


function rcvpmtitle( f ){
    let req = new XMLHttpRequest();
    req.open("GET","http://localhost/DPMTM/sendpmtitle3.php?user="+user );
    req.onreadystatechange = function(){
        if(req.readyState == 4 && req.status == 200 ){
            console.log( "rcvpmtitle()" );
            let t = req.responseText;
            pmti = t.split( "," );
            console.log( "pmti", pmti );
            nt = pmti.length-1;
            if( f != undefined ){
                console.log( "rpt-f" );
                f( pmti[nt], inn, rcvcmpc );
            }
        }
    };
    req.send();
}

function rcvpm( t, f, f2 ){
    let req = new XMLHttpRequest();
    req.open("GET","http://localhost/DPMTM/sendpm3.php?title="+t+"&user="+user );
    req.onreadystatechange = function(){
        if(req.readyState == 4 && req.status == 200 ){
            console.log( "rcvpm()" );
            let res1 = req.responseText;
            pm = res1.split( "," );
            console.log( "pm", pm );
            if( f != undefined ){
                console.log( "rp-f" );
                f();
            }
            if( f2 != undefined ){
                console.log( "rp-f2" );
                f2( t );
            }
        }
    };
    req.send();
}

function sendcmpc( a, b, c, d, e ){
    let req = new XMLHttpRequest();
    req.open("GET","http://localhost/DPMTM/rcvcmpc3.php?title="+a+"&id="+b+"&m="+c+"&d="+d+"&c="+e+"&user="+user );
    req.onreadystatechange = function(){
        if(req.readyState == 4 && req.status == 200 ){
            console.log( "sendcmpc()" );
        }
    };
    req.send();
}

function rcvcmpc( a ){
    console.log( "a", a );
    let req = new XMLHttpRequest();
    req.open("GET","http://localhost/DPMTM/sendcmpc3.php?title="+a+"&user="+user );
    req.onreadystatechange = function(){
        if(req.readyState == 4 && req.status == 200 ){
            console.log( "rcvcmpc()" );
            let res = req.responseText;
            cmpc = [];
            if( res != "null" ){
                cmpc = res.split(",");
            }
            console.log( "cmpc", cmpc );
            pcvs.clearRect( 0,0, 1500, 1000 );
            for( let b = 0; b < cmpc.length/3; b ++ ){
                pfp = cmpc[b*3];
                cfp = b;
                drowcmp();
            }
            cfp = 0;
        }
    };
    req.send();
}