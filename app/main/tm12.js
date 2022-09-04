function setarea( np ){
    console.log( "setarea {" );
	log[log.length]='(tm12.js)'+'setarea {';
    let b = 0;
    
    if( sp < 96 ){
        if( np >= 96 ) np = np-96;
    }else{
        if( np < 96 ) np = np+96;
    }
    let arb = np;
    if( sp <= np ){
        b = 1;
    }else{
        b = -1;
    }
    let key = 0;
    let c = 0;
    console.log( "np", np );
	log[log.length]='(tm12.js)'+'np'+np;
    console.log( "a!=", np+b );
	log[log.length]='(tm12.js)'+'a!='+np;
    if( np != 95 && np != 191 ){
        for( let a = sp; a != np+b && c < 96; a += b ){
            console.log( "setarea()-a", a );
			log[log.length]='(tm12.js)'+'setarea()-a'+a;
            console.log( "dai", dai[a+v], "key", key, "a", a, "v", v );
			log[log.length]='(tm12.js)'+'dai'+dai+'key'+key+'a'+a+'v'+v;

            for( let d = 0; d < ls.length/2; d ++ ){
                if( a >= ls[d*2] && a <= ls[d*2+1] && d != fp ){
                    key = 1;
                    d = ls.length;
                }
            }

            if( key == 1 ){
                if( a == sp ){
                    return "f";
                }
                console.log( "setarea-eror" );
				log[log.length]='(tm12.js)'+'setarea-eror';
                arb = a-b;
                a = np;
                console.log( "a", a );
				log[log.length]='(tm12.js)'+'a'+a;
            }
            c ++;
        }
    }
    console.log( "arb", arb, "sp", sp  );
	log[log.length]='(tm12.js)'+'arb'+arb+'sp'+sp;
    console.log( "fp", fp );
	log[log.length]='(tm12.js)'+'fp'+fp;
    if( tg == "a" ){
        ls[fp*2] = Math.min( sp, arb );
        ls[fp*2+1] = Math.max( sp, arb );
    }else if( tg == "er" ){
        ls[fp*2] = arb;
    }else if( tg == "el" ){
        ls[fp*2+1] = arb;
    }
    console.log( "}" );
	log[log.length]='(tm12.js)'+'}';
    return "t";
}

function drow( cvs, n5 ){   //cvs, n5 = date
    console.log( "drow" );
	log[log.length]='(tm12.js)'+'drow';
    cvs.fillStyle = "#fff";
    cvs.fillRect( 0, 0, wi, wy*2 );
    
    TM( cvs, n5 );

    cvs.fillStyle = "rgba(0,0,255,0.5)";
    for( let a = 0; a < 192; a ++ ){
        if( dai[a] != "" ){
            if( a < 96 ) cvs.fillRect( wh+wx*a, 0, wx, wy );
            else cvs.fillRect( wh+wx*( a-96 ), wy, wx, wy);
        }
    }

    cvs.strokeStyle = "black";
    let b = 0;
    for( let a = 0; a < ls.length; a ++ ){
        cvs.beginPath();
        if( a%2 == 0 ){
            b = ls[a];
        }else{
            b = ls[a]+1;
        }
        if( ls[a] < 96 ){
            cvs.moveTo( wh+b*wx, 0 );
            cvs.lineTo( wh+b*wx, wy );
        }else{
            cvs.moveTo( wh+( b-96 )*wx, wy );
            cvs.lineTo( wh+( b-96 )*wx, wy*2 );                
        }
        cvs.stroke();
        cvs.closePath();
    }
    for( let a = 0; a < ls.length/2; a ++ ){
        tategaki( title[a], ls[a*2], ls[a*2+1], cvs );
    }
}

function TM( cvs, n5 ){ //n=何行目 n4=normal or ts n2=yohakuX n3=yohakuY n5=date
    console.log( "TM" );
	log[log.length]='(tm12.js)'+'TM';
    //升目を描画
    cvs.strokeStyle = "black";
    cvs.beginPath();
    cvs.setLineDash( ["",""] );
    cvs.moveTo( wh, 0 );
    cvs.lineTo( wh, wy*2 );
    cvs.moveTo( wh+wx*96, 0 );
    cvs.lineTo( wh+wx*96, wy*2 );
    cvs.stroke();
    cvs.closePath();
    for( let a = 1; a < 24; a ++ ){
        //線を描画
        cvs.beginPath();
        cvs.setLineDash( [ 10, 10 ] );
        cvs.moveTo( wh+a*wx*4, 0 );
        cvs.lineTo( wh+a*wx*4, wy*2 );
        cvs.stroke(); 
        cvs.closePath();
    }
    cvs.strokeStyle="rgba(128,128,128,0.5)"
    for( let a = 1; a < 48; a ++ ){
        if( a%2 == 1 ){
            cvs.beginPath();
            cvs.setLineDash( [ 5, 5 ] );
            cvs.moveTo( wh+a*wx*2, 0 );
            cvs.lineTo( wh+a*wx*2, wy*2 );
            cvs.stroke();
            cvs.closePath();
        }
    }
    cvs.font = wy/10+"px serif"
    cvs.fillStyle = "black";
    for( let a = 4; a < 28; a ++ ){
        let b=0;
        if( a > 24 ){
            b = a-24;
        }else{
            b = a;
        }
        cvs.fillText( b, wh+wx*(a-4)*4, wy );
        
    }

    //横線を描画
    cvs.beginPath();
    cvs.strokeStyle = "black";
    cvs.setLineDash([]);
    cvs.globalAlpha = 1.0;

    cvs.moveTo( 0, 0 );
    cvs.lineTo( wi, 0 );

    cvs.moveTo( 0, 0 );
    cvs.lineTo( 0, wy*2 );

    cvs.moveTo( wh, wy );
    cvs.lineTo( wi, wy );

    cvs.moveTo( 0, wy*2 );
    cvs.lineTo( wi, wy*2 );

    cvs.moveTo( 1+dx*4, dh );
    cvs.lineTo( 1, dh+dx*4 );

    cvs.moveTo( 0, bh );
    cvs.lineTo( wh, bh );
    cvs.moveTo( 0, bh+hh );
    cvs.lineTo( wh, bh+hh );
    cvs.stroke();

    cvs.fillStyle="black";
    cvs.font = dx*2 + "px serif";

    let m = n5.getMonth()+1;
    let da = n5.getDate();
    m = ( "0"+m ).slice( -2 );
    da = ( "0"+da ).slice( -2 );

    cvs.fillText( m, 1, dh+dx*2 );
    cvs.fillText( da, 1+dx*2, dh+dx*4);
    cvs.fillText( Youbi[n5.getDay()], 1+dx, bh+hh-dx );
    return;
}



function tategaki( text, xa, xb, cvs ){
    console.log( "tategaki" );
	log[log.length]='(tm12.js)'+'tategaki';
    cvs.fillStyle = "black";
    let a = text.split("");
    cvs.font = font+"px serif";
    let x, y;
    if( xa < 96 ){
        x = wh+(xb+1+xa)*wx/2-font/2;
        y = font;
    }else{
        x = wh+( ( xa-96 )*wx + ( ( xb-95 )*wx) )/2-font/2;
        y = wy+font;
    } 
    for(let b = 0; b < a.length; b ++ ){
        cvs.fillText( a[b], x, y );
        y += font;
    }
}

function setdai(){   //v1=dai,v2=ls,v3=title
    console.log( "setdai" );
	log[log.length]='(tm12.js)'+'setdai';
    for( let a = 0; a < 192; a ++ ){
        dai[a] = "";
    }
    for( let b = 0; b < ls.length/2; b ++ ){
        for( let a = 0; a < 192; a ++ ){
            if( ls[b*2] <= a && ls[b*2+1] >= a ){
                dai[ a ] = title[b];
            }
        }
    }
    return;
}

function setfp( b ){
    console.log( "setfp {" );
	log[log.length]='(tm12.js)'+'setfp {';
    for( let a = 0; a < ls.length/2; a ++ ){
        if( ls[a*2] <= b && ls[a*2+1] >= b ){
            console.log( "}" );
			log[log.length]='(tm12.js)'+'}';
            return a;
        }
    }
    console.log( "}" );
	log[log.length]='(tm12.js)'+'}';
    return "null";
}

function settp( x, y ){
    console.log( "setfp" );
	log[log.length]='(tm12.js)'+'setfp';
    if( x <= wh ){
        if( y <= bh ){
            return 192;
        }else if( y >= bh+hh ){
            return 193;
        }
    }else if( x > wh && x < wh+wx*96 ){
        if( y < wy ){
            console.log((x-wh)/wx );
			log[log.length]='(tm12.js)'+(x-wh)/wx;
            return Math.floor( (x-wh)/wx );
        }else{
            return Math.floor( (x-wh)/wx ) + 96;
        }
    }else{
        if( y < wy/2 ){
            console.log( "maru" );
			log[log.length]='(tm12.js)'+'maru';
            return Math.floor( (x-wh-wx*96)/wt )+193;
        }else if( y < wy ){
            console.log( "maru2" );
			log[log.length]='(tm12.js)'+'maru2';
            return Math.floor( (x-wh-wx*96)/wt )+198;
        }else if( x >= wh+wx*96+wt*2 ){
            if( y < wy*1.5 ){
                return 204;
            }else{
                return 205;
            }
        }else{
            return 206;
        }
    }
}

function gettime( n, c ){   //n=nd c=string or data
    let nt = new Date();
    nt.setDate( nt.getDate() + n );
    if( c == "string" ){
        let ny = nt.getFullYear();
        let nmo = nt.getMonth()+1;
        let nd1 = nt.getDate();
        nmo = ("0"+nmo).slice( -2 );
        nd1 = ("0"+nd1).slice( -2 );
        return String(ny) + String(nmo) + String(nd1);
    }else{
        return nt;
    }
}

//前日のTMを見る
function backdate(){
    console.log( "backdate" );
	log[log.length]='(tm12.js)'+'backdate';
    nd --;
    if( nd > -99 ){
        rcvtm( nd, tcvs );
    }
}

//明日のＴＭを見る
function nextdate(){
    console.log( "nextdate" );
	log[log.length]='(tm12.js)'+'nextdate';
    nd ++;
    if( nd < 99 ){
        rcvtm( nd, tcvs );
    }
}

function tmaddE(){
    //右クリック検知
    tmcvs.addEventListener('contextmenu',
    function (e){
        console.log( "tmcvs ctxmenu {" );
		log[log.length]='(tm12.js)'+'tmcvs ctxmenu {';
        if( tg == "n" ){
            console.log( "contextmenu" );
			log[log.length]='(tm12.js)'+'contextmenu';
            ctxm.style.left=e.clientX+"px";
            ctxm.style.top=e.clientY+"px";
            ctxm.style.display="block";
            tp = settp( e.offsetX, e.offsetY );
            tg = "c";
        }
        console.log( "tg", tg, "tp", tp );
		log[log.length]='(tm12.js)'+'tg'+tg+'tp'+tp;
        console.log( "}" );
		log[log.length]='(tm12.js)'+'}';
    },
    false );

    //名前変更
    ctxm1.addEventListener( "mousedown",
    function(){
        console.log( "ctxm1 click {" );
		log[log.length]='(tm12.js)'+'ctxm1 click {';
        fp = setfp( tp );
        if( fp != "null" && tg == "c" ){
            tg = "w";
            let a = 0;
            let b = 0;
            if( tp < 96 ){
                a = wy*0.75;
                b = wh+ls[fp*2+1]*wx+1;
            }else if( tp >= 96 && tp < 192 ){
                a = wy*1.75;
                b = wh+(ls[fp*2+1]-96)*wx+1
            }
            textform.style.top = a + "px";
            textform.style.left = b + "px";
            textform.value = "";
            textform.style.display = "block";  
        }
        console.log( "tg", tg, "fp", fp, "tp", tp );
		log[log.length]='(tm12.js)'+'tg'+tg+'fp'+fp+'tp'+tp;
        console.log( "}" );
		log[log.length]='(tm12.js)'+'}';
    },
    false );

    //削除
    ctxm2.addEventListener( "mousedown",
    function(){
        console.log( "ctxm2 click {" );
		log[log.length]='(tm12.js)'+'ctxm2 click {';
        console.log( "tg", tg );
		log[log.length]='(tm12.js)'+'tg'+tg;
        if( tg == "c" ){
            fp = setfp( tp );
            if( fp != "null" ){
                ls.splice( fp*2, 2 );
                title.splice( fp, 1 );
            }
            tg = "n";
            send( ls, "ls" );
            send( title, "title" );
            setdai();
            drow( tcvs, gettime( nd, "data" ) );
        }
        console.log( "tg", tg, "fp", fp );
		log[log.length]='(tm12.js)'+'tg'+tg+'fp'+fp;
        console.log( "}" );
		log[log.length]='(tm12.js)'+'}';
    },
    false );

    //canvas内でのmousedown検知
    tmcvs.addEventListener( "mousedown", 
    function(e){
        console.log( "cvs mousedown {" );
		log[log.length]='(tm12.js)'+'cvs mousedown {';
        console.log( "tg", tg );
		log[log.length]='(tm12.js)'+'tg'+tg;
        if( tg == "n" && e.button == 0 ){
            tp = settp( e.offsetX, e.offsetY );
            console.log( "tp", tp );
			log[log.length]='(tm12.js)'+'tp'+tp;
            if( tp < 192 ){
                if( dai[ tp ] == "" ){
                    sp = tp;
                    tg = "a";
                    title[ fp ] = "UNNAMED";
                }else{
                    let a = e.offsetX - tp%96*wx-wh;
                    if( a < 5 && dai[ tp-1 ] != dai[ tp ]){
                        console.log( "a < 5" );
						log[log.length]='(tm12.js)'+'a < 5';
                        tg = "er";
                        fp = setfp( tp );
                        sp = ls[fp*2+1];
                    }else if( dai[ tp+1 ] != dai[ tp ] ){
                        console.log( "a >= 5" );
						log[log.length]='(tm12.js)'+'a >= 5';
                        tg = "el";
                        fp = setfp( tp );
                        sp = ls[fp*2];
                    }         
                }
                console.log( "sp", sp, "tg", tg, "fp", fp );
				log[log.length]='(tm12.js)'+'sp'+sp+'tg'+tg+'fp'+fp;
                console.log( "dai", dai, "ls", ls, "title", title );
				log[log.length]='(tm12.js)'+'dai'+dai+'ls'+ls+'title'+title;
                let a = setarea( tp );
                console.log( "a", a );
				log[log.length]='(tm12.js)'+'a'+a;
                if( a == "t" ){
                    setdai();
                    drow( tcvs, gettime( nd, "data" ) );
                }
                
            }else if( tp == 192 ){
                backdate();
            }else if( tp == 193 ){
                nextdate();
            }else if( tp >= 194 && tp <=203 ){

            }else if( tp < 206 ){

            }else{

            }
        }
        console.log( "}" );
		log[log.length]='(tm12.js)'+'}';
    },
    false )

    //canvas内でのmouseup検知
    tmcvs.addEventListener( "mouseup",
    function(){
        console.log( "cvs mouseup {" );
		log[log.length]='(tm12.js)'+'cvs mouseup {';
        console.log( "tg", tg );
		log[log.length]='(tm12.js)'+'tg'+tg;
        if( tg == "a" || tg == "er" || tg == "el" ){
            fp = ls.length/2;
            tg = "n";
            send( ls, "ls", nd );
            send( title, "title", nd );
        }
        sp = 0;
        console.log( "fp", fp, "tg", tg, "sp", sp );
		log[log.length]='(tm12.js)'+'fp'+fp+'tg'+tg+'sp'+sp;
        console.log( "}" );
		log[log.length]='(tm12.js)'+'}';
    },
    false );

    //mousemove検知
    tmcvs.addEventListener( "mousemove",
    function(e){
        if( tg == "a" || tg == "er" || tg == "el" ){
            console.log( "cvs mousemove {" )
			log[log.length]='(tm12.js)'+'cvs mousemove {';
            tp = settp( e.offsetX, e.offsetY);
            if( tp > 191 ){
                tp = 191;
            }
            console.log( "dtp", dtp );
			log[log.length]='(tm12.js)'+'dtp'+dtp;
            if( dtp != tp ){
                
                if( tg == "er" ){
                    if( tp > sp ){
                        tp = sp;
                    }
                }else if( tg == "el"){
                    if( tp < sp ){
                        tp = sp;
                    }
                }
                console.log( "tp", tp , "tg", tg );
				log[log.length]='(tm12.js)'+'tp'+tp+'tg'+tg;
                let a = setarea( tp );
                if( a == "t" ){
                    setdai();
                    drow( tcvs, gettime(nd, "data") );
                }
                
            }
            dtp = tp;
            console.log( "}" );
			log[log.length]='(tm12.js)'+'}';
        }   
    },
    false );

    //名前変更時のtextformにおいてENter検知
    textform.addEventListener( "keypress",
    function(e){
        if( tg == "w" ){
            if( e.key === "Enter" ){
                console.log( "press Enter{" );
				log[log.length]='(tm12.js)'+'press Enter{';
                console.log( "fp", fp );
				log[log.length]='(tm12.js)'+'fp'+fp;
                textform.style.display = "none";
                title[fp] = textform.value;
                send( title, "title" );
                setdai();
                drow( tcvs, gettime( nd, "data" ) );
                tg = "n";
                fp = ls.length/2;
                console.log( "tg", tg, "fp", fp );
				log[log.length]='(tm12.js)'+'tg'+tg+'fp'+fp;
                console.log( "}" );
				log[log.length]='(tm12.js)'+'}';
            }
        }   
    },
    false );
}
