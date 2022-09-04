function send( item, c ){  //item, c=title or ls
    console.log( "send {" );
	log[log.length]='(db8.js)'+'send {';
    let req = new XMLHttpRequest();
    req.open("GET",ajaxurl["main"]+"rcvtm7.php?item="+item+"&c="+c+"&date="+gettime()+"&user="+user );
    req.onreadystatechange = function(){
        if(req.readyState == 4 && req.status == 200 ){
            console.log( "item", item, "c", c );
			log[log.length]='(db8.js)'+'item'+item+'c'+c;
            console.log( "}" );
			log[log.length]='(db8.js)'+'}';
            return;
        }
    }
    req.send();
}

function rcvtm( n, cvs ){  //item1=ls, item2=title
    console.log( "rcvtm {" );
	log[log.length]='(db8.js)'+'rcvtm {';
    let req = new XMLHttpRequest();
    req.open("GET",ajaxurl["main"]+"sendtm5.php?date="+ gettime( n, "string" )+"&user="+user );
    req.onreadystatechange = function(){
        if(req.readyState == 4 && req.status == 200 ){
            let a = req.responseText;
            let Item = a.split("/");
            console.log( "item", Item );
			log[log.length]='(db8.js)'+'item'+Item;
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
			log[log.length]='(db8.js)'+'ls'+ls+'title'+title;
            if( ls.length != 0 ){
                fp = ls.length/2;
            }else{
                fp=0;
            }
            console.log( "dai", dai ,"ls", ls, "title", title );
			log[log.length]='(db8.js)'+'dai'+dai+'ls'+ls+'title'+title;
            setdai();
            drow( cvs, gettime( n, "data" ) );
            console.log( "}" );
			log[log.length]='(db8.js)'+'}';
            return;
        }
    };
    req.send();
}

function sendpm( id, item1, t, c ){
    console.log( "sendpm {");
	log[log.length]='(db8.js)'+'sendpm {';
    let req = new XMLHttpRequest();
    req.open("GET",ajaxurl["main"]+"rcvpm3.php?id="+id+"&name="+item1+"&title="+t+"&c="+c+"&user="+user );
    req.onreadystatechange = function(){
        if(req.readyState == 4 && req.status == 200 ){
            console.log( "id", id, "item1", item1, "t", t, "c", c );
			log[log.length]='(db8.js)'+'id'+id+'item1'+item1+'t'+t+'c'+c;
            console.log( "sendpm end}" );
			log[log.length]='(db8.js)'+'sendpm end}';
            return;
        }
    };
    req.send();
}


function rcvpmtitle( f ){
    console.log( "rcvpmtitle {");
	log[log.length]='(db8.js)'+'rcvpmtitle {';
    let req = new XMLHttpRequest();
    req.open("GET",ajaxurl["main"]+"sendpmtitle3.php?user="+user );
    req.onreadystatechange = function(){
        if(req.readyState == 4 && req.status == 200 ){
            let t = req.responseText;
            pmti = t.split( "," );
            console.log( "pmti", pmti );
			log[log.length]='(db8.js)'+'pmti'+pmti;
            nt = pmti.length-1;
            if( f != undefined ){
                console.log( "rpt-f" );
				log[log.length]='(db8.js)'+'rpt-f';
                f( pmti[nt], inn, rcvcmpc );
            }
            console.log( "rcvpmtitle end }");
			log[log.length]='(db8.js)'+'rcvpmtitle end }';
        }
    };
    req.send();
}

function rcvpm( t, f, f2 ){
    console.log( "rcvpm {" );
	log[log.length]='(db8.js)'+'rcvpm {';
    let req = new XMLHttpRequest();
    req.open("GET",ajaxurl["main"]+"sendpm3.php?title="+t+"&user="+user );
    req.onreadystatechange = function(){
        if(req.readyState == 4 && req.status == 200 ){
            console.log( "t", t );
			log[log.length]='(db8.js)'+'t'+t;
            let res1 = req.responseText;
            pm = res1.split( "," );
            console.log( "pm", pm );
			log[log.length]='(db8.js)'+'pm'+pm;
            if( f != undefined ){
                console.log( "rp-f" );
				log[log.length]='(db8.js)'+'rp-f';
                f();
            }
            if( f2 != undefined ){
                console.log( "rp-f2" );
				log[log.length]='(db8.js)'+'rp-f2';
                f2( t );
            }
            console.log( "}" );
			log[log.length]='(db8.js)'+'}';
        }
    };
    req.send();
}

function sendcmpc( a, b, c, d, e ){
    console.log( "sendcmpc {" );
	log[log.length]='(db8.js)'+'sendcmpc {';
    let req = new XMLHttpRequest();
    req.open("GET",ajaxurl["main"]+"rcvcmpc3.php?title="+a+"&id="+b+"&m="+c+"&d="+d+"&c="+e+"&user="+user );
    req.onreadystatechange = function(){
        if(req.readyState == 4 && req.status == 200 ){
            console.log( "sendcmpc end }" );
			log[log.length]='(db8.js)'+'sendcmpc end }';
        }
    };
    req.send();
}

function rcvcmpc( a ){
    console.log( "rcvcmpc {" );
	log[log.length]='(db8.js)'+'rcvcmpc {';
    console.log( "a", a );
	log[log.length]='(db8.js)'+'a'+a;
    let req = new XMLHttpRequest();
    req.open("GET",ajaxurl["main"]+"sendcmpc3.php?title="+a+"&user="+user );
    req.onreadystatechange = function(){
        if(req.readyState == 4 && req.status == 200 ){
            console.log( "rcvcmpc()" );
			log[log.length]='(db8.js)'+'rcvcmpc()';
            let res = req.responseText;
            cmpc = [];
            if( res != "null" ){
                cmpc = res.split(",");
            }
            console.log( "cmpc", cmpc );
			log[log.length]='(db8.js)'+'cmpc'+cmpc;
            pcvs.clearRect( 0,0, 1500, 1000 );
            for( let b = 0; b < cmpc.length/3; b ++ ){
                pfp = cmpc[b*3];
                cfp = b;
                drowcmp();
            }
            cfp = 0;
            console.log( "rcvcmpc end }" );
			log[log.length]='(db8.js)'+'rcvcmpc end }';
        }
    };
    req.send();
}
