function page(){
    console.log( "page {" );
	log[log.length]='(page2.js)'+'page {';
    //tm
    //canvas数値設定
    wi = window.innerWidth - 2;
    wh = wi/23;
    wt = wi/8;
    wx = wi/184*153/96;
    wy = wi/23*2;
    bh = wh/2;
    hh = wy*2 - bh*2;
    dx = ( wh-2 )/4;
    dh = (hh-dx*4)/2+bh;
    font = wi/80;
    tmcvs.width = wi;
    tmcvs.height = wy*2;
    tmw = wy*2+2+wy/43*12;

    //page
    home.style.height = wy/43*12+"px";
    btn5.style.height = wy/43*12+"px";
    homemenu.style.width = wi/3+"px";
    homemenu.style.height = window.innerHeight+"px";

    //pm
    pw = window.innerWidth-17;
    pp = pw/594*21;
    py1 = pw/297*11;
    py2 = pw/297*12;
    py3 = py1*1.5;
    py4 = pw/297*7;
    px1 = pw/297*23;
    px2 = pw/3;
    px3 = pw/3;
    px4 = pw/297*5;
    px6 = py1/2
    px5 = pw-pp*2-px2-px3-px4*2-px6;
    px7 = px1/187*12;
    ph1 = pp+py3+py4;
    ppp = 5;
    pmblock.style.top = tmw+"px";
    pmcvs.style.top = ph1+"px";
    pmcvs.style.left = pp+"px";
    pmcvs.style.width = px1*12+"px";
    pmcvs.style.height = py2*13+"px";
    pmcvs.width = px1*12;
    pmcvs.height = py2*13;

    for( let a = 0; a < 158; a ++ ){
        let pmtextform = document.getElementById( a );
        if( a < 156 ){
            let x = Math.floor( a/13 );
            let y = a%13;
            pmtextform.style.top = ph1+py2*y+"px";
            pmtextform.style.left = pp+px1*x+"px";
            pmtextform.style.width = px1-12+"px";
            pmtextform.style.height = py2-12+"px";
        }else{
            if( a == 156 ){
                pmtextform.style.top = pp+"px";
                pmtextform.style.left = pp+"px";
                pmtextform.style.width = px2+"px";
                pmtextform.style.height = py3+"px";
            }else{
                pmtextform.style.top = pp+"px";
                pmtextform.style.left = pp+px2+px4+"px";
                pmtextform.style.width = px3+"px";
                pmtextform.style.height = py3+"px";
            }
        }
    }

    for( let a = 0; a < 5; a++ ){
        let btnelm = document.getElementById( "btn"+a );
        let t,l,w,h;
        if( a < 2 ){
            t = ( pw/297*210-py2*3)/2;
            w = pp;
            h = py2*3;
            if( a == 0 ){
                l = 0;
            }else{
                l = pw-pp;
            }
        }else if( a == 2 ){
            t = pp+py3*0.5+ppp+1;
            l = pp+px2+px3+px4*2;
            h = py3/2+ppp+1;
            w = h*2;
        }else if( a == 3 ){
            t = pp;
            l = pp+px2+px3+px4*2+px5;
            w = px6;
            h = py3/2;
        }else{
            t = pp+py3*0.5+ppp+1;
            l = pp+px2+px3+px4*3+(py3/2+ppp+1)*2
            h = py3/2+ppp+1;
            w = h*2;
        }
        btnelm.style.top = t+"px";
        btnelm.style.left = l+"px";
        btnelm.style.width = w+"px";
        btnelm.style.height = h+"px";
    }

    pmtitle.style.top = pp+"px";
    pmtitle.style.left = pp+px2+px3+px4*2+"px";
    pmtitle.style.fontSize = py3/2+"px";
    console.log( "}" );
	log[log.length]='(page2.js)'+'}';
}

function pageaddE(){
    console.log( "pageaddE {" )
	log[log.length]='(page2.js)'+'pageaddE {';
    btn5.addEventListener( "mousedown",
    function(){
        console.log( "click btn5" );
		log[log.length]='(page2.js)'+'click btn5';
        homemenu.style.display = "block";
    },
    false );

    btn6.addEventListener( "mousedown",
    function(){
        console.log( "click btn6" );
		log[log.length]='(page2.js)'+'click btn6';
        homemenu.style.display = "none";
    },
    false );

    btn7.addEventListener( "mousedown",
    function(){
        console.log( "click btn7" );
		log[log.length]='(page2.js)'+'click btn7';
        tsnum = document.getElementById( "tsnum" );
        window.open( ajaxurl["tmsheet"]+"tmsheet5.html?"+Number( tsnum.value )+"&"+user, "_blank" );
    },
    false );
    console.log( "}" );
	log[log.length]='(page2.js)'+'}';

    $( "#btn8" ).on( "click", 
        function(){
            let logs = "";
            logs += $( "#report" ).val()+"/";
            for( let loop of log ){
                logs += loop+"/";
            }
            console.log( "logs", logs );
            $.ajax({
                type: "POST",
                url: ajaxurl["log"]+"createlog.php",
                data:{ "logs": logs },
                dataType : "text"
            }).done( function( data ){
                console.log( "data", data );
            })
        }
    )
}
