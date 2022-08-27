function pmaddE(){
    em1.addEventListener( "mousedown",
    function(){
        console.log( "edit name" );
        pmtextbox.style.top = tmw+pp+"px";
        pmtextbox.style.left = pp+px2+px3+px4*2+"px";
        pmtextbox.value = "";
        pmtextbox.style.display = "block";
        pg = 2;
        console.log( "pg" );
    },
    false );

    em2.addEventListener( "mousedown",
    function(){
        console.log( "sort" );
        pmtextbox.style.top = tmw+pp+"px";
        pmtextbox.style.left = pp+px2+px3+px4*2+"px";
        pmtextbox.value = "";
        pmtextbox.style.display = "block";
        pg = 3;
    },
    false );

    em3.addEventListener( "mousedown",
    function(){
        console.log( "delete pm {" );
        let a = pmti.splice( nt, 1 );
        console.log( "pmti", pmti, "a", a );
        sendpm( 0, a, pmti, "d" );
        sendcmpc( a, 0, 0, 0, "ad" );
        if( nt >= pmti.length ){
            nt --;
        }
        rcvpm( pmti[nt], inn, rcvcmpc );
        console.log( "delete pm end }" );
    },
    false );

    pmtextbox.addEventListener( "keypress",
    function(e){
        console.log( "pg", pg );
        if( e.key === "Enter" ){
            if( pg == 2 ){
                if( pmtextbox.value != "" ){
                    console.log( "key press" );
                    pmtextbox.style.display = "none";
                    sendpm( nt, pmtextbox.value, pmti[ nt ], "en" );
                    pmti[nt] = pmtextbox.value;
                    pmtitle.innerText = pmti[nt];
                }
                pg = 0;
            }else if( pg == 3 ){
                pmtextbox.style.display = "none";
                let a = Number( pmtextbox.value );
                if( a != NaN && a >= 0 && a <= pmti.length ){
                    pmti.splice( a, 0, pmti[nt] );
                    if( a <= nt ){
                        pmti.splice( nt+1, 1 );
                        nt = a;
                    }else{
                        pmti.splice( nt, 1 );
                        nt = a-1;
                    }
                    sendpm( 0,0,pmti,"s" );
                }
                pg = 0;   
            }else if( pg == 4 ){
                pmtextbox.style.display = "none";
                if( pmtextbox.value != "" ){
                    console.log( "create pm" );
                    sendpm( pmti.length, "", pmtextbox.value, "n" );
                    nt = pmti.length;
                    pmti[pmti.length] = pmtextbox.value;
                    pmtitle.innerText = pmti[nt];
                    pcvs.clearRect( 0,0, 1500, 1000 );
                    for( let a = 0; a < 158; a ++ ){
                        form[a].value = "";
                        pm[a] = "";
                    }
                }
                pg = 0;
            }
            console.log( pg );
        }
    },
    false );

    form.addEventListener( "keypress",
    function(e){
        if( e.key === "Enter" ){
            let elm = document.getElementById( e.target.id );
            console.log( "press Enter", "value", elm.value, "nt", nt );
            sendpm( Number(e.target.id), elm.value, pmti[nt], "o" );
        }
    },
    false );

    document.body.addEventListener( "keypress",
    function(e){
        let k = Number(e.key);
        if( k != NaN ){
            if( pg2 == 7 ){
                if( kc < 2 ){
                    cmpc[ cfp*3+1 ] += k;
                    drowcmp();
                    kc++;
                    if( kc == 2 ){
                        sendcmpc( pmti[nt], cmpc[cfp*3], cmpc[cfp*3+1],cmpc[cfp*3+2], "e" );
                        kc = 0;
                        pg2 = 0;
                    }
                }
            }else if( pg2 == 8 ){
                if( kc < 2 ){
                    cmpc[ cfp*3+2 ] += k;
                    drowcmp();
                    kc++;
                    if( kc == 2 ){
                        sendcmpc( pmti[nt], cmpc[cfp*3], cmpc[cfp*3+1],cmpc[cfp*3+2], "e" );
                        kc = 0;
                        pg2 = 0;
                    }
                }
            }
        }
    },
    false );

    pmcvs.addEventListener( "click",
    function(e){
        console.log( "pmcvs.addE click {" )
        console.log( "pg", pg );
        if( pg == 0 ){
            pfp = setpfp( e.pageX, e.pageY );
            console.log( "pfp", pfp );
            let b = 0;
            console.log( "cmpc", cmpc );
            for( let a = 0; a < cmpc.length/3; a ++ ){
                if( cmpc[a*3] == pfp ){
                    cfp = a;
                    a = cmpc.length;
                    b ++;
                }
            }
            console.log( "b", b, "cfp", cfp );
            if( b == 0 ){
                form[pfp].focus();
            }else{

                ecmp( e.pageX, e.pageY );
            }
            
            
        }else if( pg == 6 ){
            pfp = setpfp( e.pageX, e.pageY );
            let b = 0;
            for( let a = 0; a < cmpc.length/3; a ++ ){
                if( pfp == cmpc[ a*3 ] ){
                    b ++ ;
                }
            }
            if( b == 0 ){
                cfp = cmpc.length/3;
                cmpc[cfp*3] = pfp;
                console.log( "nd", nd );
                let t = gettime2( nd );
                let m = t.getMonth()+1;
                let d = t.getDate();
                if( m < 10 ) m = "0"+m;
                if( d < 10 ) d = "0"+d;
                cmpc[cfp*3+1] = m;
                cmpc[cfp*3+2] = d;
                sendcmpc( pmti[nt], cmpc[cfp*3], cmpc[cfp*3+1], cmpc[cfp*3+2], "a" );
                
                drowcmp();
            }else{
                ecmp( e.pageX, e.pageY );
            }

        }
        console.log( "pmcvs.addE end }" );
    },
    false );


    btn0.addEventListener( "mousedown",
    function(){
        if( nt > 0 ){
            console.log( "nt minus" );
            
            nt --;
            console.log( "nt", nt );
            rcvpm( pmti[nt], inn, rcvcmpc );
        }
    },
    false );

    btn1.addEventListener( "mousedown",
    function(){
        if( nt < pmti.length-1 ){
            console.log( "nt plus" );
            
            nt ++;
            console.log( "nt", nt );
            rcvpm( pmti[nt], inn, rcvcmpc );
        }

    },
    false );

    btn2.addEventListener( "mousedown",
    function(){
        pmtextbox.style.top = tmw+pp+py3*0.5+ppp+1+"px";
        pmtextbox.style.left = pp+px2+px3+px4*2+py3+ppp*2+2+"px";
        pmtextbox.value = "";
        pmtextbox.style.display = "block";
        pg = 4;
    },
    false );

    btn3.addEventListener( "mousedown",
    function (e){
        console.log( "edit" );
        editmenu.style.left=pp+px2+px3+px4*2+"px";
        editmenu.style.top=e.pageY+"px";
        editmenu.style.display="block";
        pg = 1;
        cc = 0;
        console.log( "pg", pg );
    },
    false );

    btn4.addEventListener( "mousedown",
    function(){
        if( pg == 6 ){
            btn4.value = "チェックつける";
            pg = 0;
        }else{
            btn4.value = "終了";
            pg = 6;  
        }
    },
    false );

    pmcvs.addEventListener( "contextmenu",
    function(e){
        console.log( "pm ctxm" );
        pctxm.style.left=e.clientX+"px";
        pctxm.style.top=e.clientY+"px";
        pctxm.style.display="block";
        pfp = setpfp( e.pageX, e.pageY );
        for( let a = 0; a < cmpc.length/3; a ++ ){
            if( cmpc[a*3] == pfp ){
                cfp = a;
                a = cmpc.length;
            }
        }
        
        pg = 7;
    },
    false );

    pctxm1.addEventListener( "mousedown",
    function(){
        sendcmpc( pmti[nt], cmpc[cfp*3], "", "", "d" );
        cmpc.splice( cfp*3, 3 );
        console.log
        drowcmp( "d" );
    },
    false );

}

function ecmp( x, y ){
    let a = setpfp2( x, y );
    console.log( "a", a );
    if( a == 0 ){
        cmpc[ cfp*3+1 ] = "";
        pg2 = 7;
        console.log( "cmpc", cmpc );
    }else{
        cmpc[ cfp*3+2 ] = "";
        pg2 = 8;
        console.log( "cmpc", cmpc );
    }
}

function inn(){
    console.log( "inn" );
    for( let a = 0; a < 158; a ++ ){
        form[a].value = "";
        if( pm[a] != "" ){
            form[a].value = pm[a];
        }
    }
    pmtitle.innerText = pmti[nt];
}



function drowcmp( a ){
    console.log( "drowcmp{" );
    let x = Math.floor( pfp/13 );
    let y = pfp%13;

    pcvs.clearRect( x*px1, y*py2, px1, py2 );
    if( a != "d" ){
        pcvs.beginPath();
        pcvs.strokeStyle = "red";
        pcvs.lineWidth = 2;
        console.log( "x", x, "y", y );
        pcvs.moveTo( (x+1)*px1-1, y*py2 );
        pcvs.lineTo( x*px1, (y+1)*py2 );
        pcvs.stroke();
        pcvs.closePath();

        console.log( "font", px7*6 );
        pcvs.font = Math.floor( px7*6 )+"px serif";
        pcvs.fillStyle = "red";
        pcvs.fillText( cmpc[cfp*3+1], x*px1, y*py2+px7*5 );
        pcvs.fillText( cmpc[cfp*3+2], x*px1+px1-px7*7, (y+1)*py2 );
    }
    console.log( "drowcmp end }" );
}

function setpfp( x, y ){  //canvasのクリックをtextformに落とし込むためのfp設定
    console.log( "x", x, "y", y );
    x = x-pp;
    y = y-tmw-ph1;
    console.log( "x", x, "y", y );
    let a = Math.floor( x/px1 )*13;
    let b = Math.floor( y/py2 );
    return a+b;
}

function setpfp2( x, y ){
    let a = Math.floor( pfp/13 );
    let b = pfp%13;
    x = x-pp-a*px1;
    y = y-tmw-ph1-b*py2;
    if( y < py2-x/23*12 ){
        return 0;
    }else{
        return 1;
    }
}
