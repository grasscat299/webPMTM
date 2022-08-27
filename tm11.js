function setarea( np ){
    console.log( "setarea {" );
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
    console.log( "a!=", np+b );
    if( np != 95 && np != 191 ){
        for( let a = sp; a != np+b && c < 96; a += b ){
            console.log( "setarea()-a", a );
            console.log( "dai", dai[a+v], "key", key, "a", a, "v", v );

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
                arb = a-b;
                a = np;
                console.log( "a", a );
            }
            c ++;
        }
    }
    console.log( "arb", arb, "sp", sp  );
    console.log( "fp", fp );
    if( tg == "a" ){
        ls[fp*2] = Math.min( sp, arb );
        ls[fp*2+1] = Math.max( sp, arb );
    }else if( tg == "er" ){
        ls[fp*2] = arb;
    }else if( tg == "el" ){
        ls[fp*2+1] = arb;
    }
    console.log( "}" );
    return "t";
}

function drow( cvs, n5, n4, n, n2, n3 ){   //n=何行目か n2=周りの余白x n3=余白y n4=normal or ts
    if( n == undefined ) n = 0;
    if( n2 == undefined ) n2 = 0;
    if( n3 == undefined ) n3 = 0;
    if( n4 == undefined ) n4 = "normal";

    if( n == 0 ){
        cvs.fillStyle = "#fff";
        cvs.fillRect( n2, n3, wi, wy*2 );
    }
    
    TM( cvs, n, n2, n3, n4, n5 );

    cvs.fillStyle = "rgba(0,0,255,0.5)";
    for( let a = 0; a < 192; a ++ ){
        if( dai[a] != "" ){
            if( a < 96 ) cvs.fillRect( n2+wh+wx*a, n3+n*wy*2, wx, wy );
            else cvs.fillRect( n2+wh+wx*( a-96 ), n3+wy+n*wy*2, wx, wy);
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
            console.log( "ls[a] < 96" );
            cvs.moveTo( n2+wh+b*wx, n3+n*wy*2 );
            cvs.lineTo( n2+wh+b*wx, n3+wy+n*wy*2 );
        }else{
            console.log( "ls[a] > 96" );
            cvs.moveTo( n2+wh+( b-96 )*wx, n3+wy+n*wy*2 );
            cvs.lineTo( n2+wh+( b-96 )*wx, n3+wy*2+n*wy*2 );                
        }
        cvs.stroke();
        cvs.closePath();
    }
    for( let a = 0; a < ls.length/2; a ++ ){
        tategaki( title[a], ls[a*2], ls[a*2+1], cvs, n, n2, n3 );
    }

    /*cvs2.toBlob( function(blob){
        tsdl.href = window.URL.createObjectURL( blob );
    })*/
}

function TM( cvs, n, n2, n3, n4, n5 ){ //n=何行目 n4=normal or ts n2=yohakuX n3=yohakuY n5=date
    console.log("TM() {");

    console.log( "n", n );

    //升目を描画
    cvs.strokeStyle = "black";
    cvs.beginPath();
    cvs.setLineDash( ["",""] );
    cvs.moveTo( n2+wh, n3+n*wy*2 );
    cvs.lineTo( n2+wh, n3+wy*2+n*wy*2 );
    cvs.moveTo( n2+wh+wx*96, n3+n*wy*2 );
    cvs.lineTo( n2+wh+wx*96, n3+wy*2+n*wy*2 );
    cvs.stroke();
    cvs.closePath();
    for( let a = 1; a < 24; a ++ ){
        //線を描画
        cvs.beginPath();
        cvs.setLineDash( [ 10, 10 ] );
        cvs.moveTo( n2+wh+a*wx*4, n3+n*wy*2 );
        cvs.lineTo( n2+wh+a*wx*4, n3+wy*2+n*wy*2 );
        cvs.stroke(); 
        cvs.closePath();
    }
    cvs.strokeStyle="rgba(128,128,128,0.5)"
    for( let a = 1; a < 48; a ++ ){
        if( a%2 == 1 ){
            cvs.beginPath();
            cvs.setLineDash( [ 5, 5 ] );
            cvs.moveTo( n2+wh+a*wx*2, n3+n*wy*2 );
            cvs.lineTo( n2+wh+a*wx*2, n3+wy*2+n*wy*2 );
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
        cvs.fillText( b, n2+wh+wx*(a-4)*4, n3+n*wy*2+wy );
        
    }

    //横線を描画
    cvs.beginPath();
    cvs.strokeStyle = "black";
    cvs.setLineDash([]);
    cvs.globalAlpha = 1.0;

    cvs.moveTo( n2, n3+n*wy*2 );
    cvs.lineTo( n2+wi, n3+n*wy*2 );

    cvs.moveTo( n2, n3+n*wy*2 );
    cvs.lineTo( n2, n3+n*wy*2+wy*2 );

    cvs.moveTo( n2+wh, n3+wy+n*wy*2 );
    cvs.lineTo( n2+wi, n3+wy+n*wy*2 );

    cvs.moveTo( n2, n3+wy*2+n*wy*2 );
    cvs.lineTo( n2+wi, n3+wy*2+n*wy*2 );

    cvs.moveTo( n2+1+dx*4, n3+dh+n*wy*2 );
    cvs.lineTo( n2+1, n3+dh+dx*4+n*wy*2 );
    if( n4 == "normal" ){
        cvs.moveTo( n2, n3+bh );
        cvs.lineTo( n2+wh, n3+bh );
        cvs.moveTo( n2, n3+bh+hh );
        cvs.lineTo( n2+wh, n3+bh+hh );
    }
    cvs.stroke();

    cvs.fillStyle="black";
    cvs.font = dx*2 + "px serif";

    let m = n5.getMonth()+1;
    let da = n5.getDate();
    if( m < 10 ){
        m = "0"+m;
    }
    if( da < 10 ){
        da = "0"+da;
    }
    cvs.fillText( m, n2+1, n3+dh+dx*2+n*wy*2 );
    cvs.fillText( da, n2+1+dx*2, n3+dh+dx*4+n*wy*2 );
    cvs.fillText( Youbi[n5.getDay()], n2+1+dx, n3+bh+hh-dx+n*wy*2 );
    return;
}



function tategaki( text, xa, xb, cvs, n, n2, n3 ){
    console.log( "tategaki()" );
    xa = Number( xa );
    xb = Number( xb );
    console.log( "text", text, "xa", xa, "xb", xb );

    cvs.fillStyle = "black";
    let a = text.split("");
    cvs.font = font+"px serif";
    let x, y;
    if( xa < 96 ){
        x = n2+wh+(xa*wx + (xb+1)*wx)/2-font/2;
        y = n*wy*2+font;
    }else{
        x = n2+wh+( ( xa-96 )*wx + ( ( xb-95 )*wx) )/2-font/2;
        y = n*wy*2+n3+wy+font;
    } 
    for(let b = 0; b < a.length; b ++ ){
        cvs.fillText( a[b], x, y );
        y += font;
    }
}

function setdai( v1, v2, v3 ){   //v1=dai,v2=ls,v3=title
    for( let a = 0; a < 192; a ++ ){
        v1[a] = "";
    }
    for( let b = 0; b < v2.length/2; b ++ ){
        for( let a = 0; a < 192; a ++ ){
            if( v2[b*2] <= a && v2[b*2+1] >= a ){
                
                v1[ a ] = v3[b];
            }
        }
    }
    console.log( "dai", v1, "ls", v2, "title", v3 );
    console.log( "fp", fp );
    return;
}

function setfp( b ){
    for( let a = 0; a < ls.length/2; a ++ ){
        if( ls[a*2] <= b && ls[a*2+1] >= b ){
            return a;
        }
    }
    return "null";
}

function settp( x, y ){
    if( x <= wh ){
        if( y <= bh ){
            return 192;
        }else if( y >= bh+hh ){
            return 193;
        }
    }else if( x > wh && x < wh+wx*96 ){
        if( y < wy ){
            console.log((x-wh)/wx );
            return Math.floor( (x-wh)/wx );
        }else{
            return Math.floor( (x-wh)/wx ) + 96;
        }
    }else{
        if( y < wy/2 ){
            console.log( "maru" );
            return Math.floor( (x-wh-wx*96)/wt )+193;
        }else if( y < wy ){
            console.log( "maru2" );
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

function gettime(){ //時間データ
    console.log( "nd", nd );
    let nt2 = new Date();
    nt2.setDate( nt2.getDate() + nd );
    let ny = nt2.getFullYear();
    let nmo = nt2.getMonth()+1;
    let nd1 = nt2.getDate();
    if( nmo < 10 ) nmo = "0"+nmo;
    if( nd1 < 10 ) nd1 = "0"+nd1;
    return String(ny) + String(nmo) + String(nd1);
}

function gettime2( a ){
    console.log( "nd", a );
    let nt2 = new Date();
    nt2.setDate( nt2.getDate() + a );
    return nt2;
}

function setwy2( a ){
    return a%wy*2;
}

//前日のTMを見る
function backdate(){
    nd --;
    if( nd > -99 ){
        rcvtm( gettime(), setdai, drow, dai, ls, title, tcvs, gettime2(nd) );
    }
}

//明日のＴＭを見る
function nextdate(){
    nd ++;
    if( nd < 99 ){
        rcvtm( gettime(), setdai, drow, dai, ls, title, tcvs, gettime2(nd) );
    }
}

function tmaddE(){
    //右クリック検知
    tmcvs.addEventListener('contextmenu',
    function (e){
        if( tg == "n" ){
            console.log( "contextmenu" );
            ctxm.style.left=e.clientX+"px";
            ctxm.style.top=e.clientY+"px";
            ctxm.style.display="block";
            tp = settp( e.offsetX, e.offsetY );
            tg = "c";
        }
        console.log( "tg", tg );
    },
    false );

    //名前変更
    ctxm1.addEventListener( "mousedown",
    function(){
        console.log( "ctxm1 click" );
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
            console.log( "a", a, "b", b );
            textform.style.top = a + "px";
            textform.style.left = b + "px";
            textform.value = "";
            textform.style.display = "block";
        }
    },
    false );

    //削除
    ctxm2.addEventListener( "mousedown",
    function(){
        console.log( "tg", tg );
        if( tg == "c" ){
            fp = setfp( tp );
            if( fp != "null" ){
                ls.splice( fp*2, 2 );
                title.splice( fp, 1 );
            }
            tg = "n";
            send( ls, "ls" );
            send( title, "title" );
            setdai( dai, ls, title );
            drow( tcvs, gettime2( nd ) );
        }  
    },
    false );

    //canvas内でのmousedown検知
    tmcvs.addEventListener( "mousedown", 
    function(e){
        console.log( "cvs mousedown" );
        if( tg == "n" && e.button == 0 ){
            wy2 = setwy2( e.offsetY );  //上から何行目のTMか
            tp = settp( e.offsetX, e.offsetY );
            console.log( "tp", tp );
            if( tp < 192 ){
                if( dai[ tp ] == "" ){
                    console.log( "dai", dai, "ls", ls, "title", title  );
                    sp = tp;
                    tg = "a";
                    title[ fp ] = "UNNAMED";
                }else{
                    let a = e.offsetX - tp%96*wx-wh;
                    if( a < 5 && dai[ tp-1 ] != dai[ tp ]){
                        console.log( "a < 5" );
                        tg = "er";
                        fp = setfp( tp );
                        sp = ls[fp*2+1];
                    }else if( dai[ tp+1 ] != dai[ tp ] ){
                        console.log( "a >= 5" );
                        tg = "el";
                        fp = setfp( tp );
                        sp = ls[fp*2];
                    }         
                }
                let a = setarea( tp );
                console.log( a );
                if( a == "t" ){
                    setdai( dai, ls, title );
                    drow( tcvs, gettime2( nd ) );
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
    },
    false )

    //canvas内でのmouseup検知
    tmcvs.addEventListener( "mouseup",
    function(){
        if( tg == "a" || tg == "er" || tg == "el" ){
            fp = ls.length/2;
            tg = "n";
            send( ls, "ls", nd );
            send( title, "title", nd );
        }
        sp = 0;
        console.log( "fp", fp );
        
    },
    false );

    //mousemove検知
    tmcvs.addEventListener( "mousemove",
    function(e){
        if( tg == "a" || tg == "er" || tg == "el" ){
            tp = settp( e.offsetX, e.offsetY);
            if( tp > 191 ){
                tp = 191;
            }
            console.log( "tp", tp );
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
                let a = setarea( tp );
                if( a == "t" ){
                    setdai( dai, ls, title );
                    drow( tcvs, gettime2(nd) );
                }
                
            }
            dtp = tp;
        }
    },
    false );

    //名前変更時のtextformにおいてENter検知
    textform.addEventListener( "keypress",
    function(e){
        if( tg == "w" ){
            if( e.key === "Enter" ){
                console.log( "press Enter", textform.value );
                console.log( "fp", fp );
                textform.style.display = "none";
                title[fp] = textform.value;
                send( title, "title" );
                setdai( dai, ls, title );
                drow( tcvs, gettime2( nd ) );
                console.log( "dai", dai );
                tg = "n";
                fp = ls.length/2;
            }
        }   
    },
    false );
}