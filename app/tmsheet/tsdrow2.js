function drow( cvs, n5, n ){   //n=何行目か tsx1=周りの余白x tsy1=余白y n4=normal or ts

    if( n == 0 ){
        cvs.fillStyle = "#fff";
        cvs.fillRect( tsx1, tsy1+ha, wi, wy*2 );
    }
    
    TM( cvs, n5, n );

    //色付け
    /*
    cvs.fillStyle = "rgba(0,0,255,0.5)";
    for( let a = 0; a < 192; a ++ ){
        if( dai[a] != "" ){
            if( a < 96 ) cvs.fillRect( tsx1+wh+wx*a, tsy1+n*wy*2, wx, wy );
            else cvs.fillRect( tsx1+wh+wx*( a-96 ), tsy1+wy+n*wy*2, wx, wy);
        }
    }
    */
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
            cvs.moveTo( tsx1+wh+b*wx, tsy1+n*wy*2+ha );
            cvs.lineTo( tsx1+wh+b*wx, tsy1+wy+n*wy*2+ha );
        }else{
            console.log( "ls[a] > 96" );
            cvs.moveTo( tsx1+wh+( b-96 )*wx, tsy1+wy+n*wy*2+ha );
            cvs.lineTo( tsx1+wh+( b-96 )*wx, tsy1+wy*2+n*wy*2+ha );                
        }
        cvs.stroke();
        cvs.closePath();
    }
    for( let a = 0; a < ls.length/2; a ++ ){
        tategaki( title[a], ls[a*2], ls[a*2+1], cvs, n );
    }

    /*cvs2.toBlob( function(blob){
        tsdl.href = window.URL.createObjectURL( blob );
    })*/
}

function TM( cvs, n5, n ){ //n=何行目 n4=normal or ts tsx1=yohakuX tsy1=yohakuY n5=date
    console.log("TM() {");

    console.log( "n", n );

    //升目を描画
    cvs.strokeStyle = "black";
    cvs.beginPath();
    cvs.setLineDash( ["",""] );
    cvs.moveTo( tsx1+wh, tsy1+n*wy*2+ha );
    cvs.lineTo( tsx1+wh, tsy1+wy*2+n*wy*2+ha );
    cvs.moveTo( tsx1+wh+wx*96, tsy1+n*wy*2+ha );
    cvs.lineTo( tsx1+wh+wx*96, tsy1+wy*2+n*wy*2+ha );
    cvs.stroke();
    cvs.closePath();
    for( let a = 1; a < 24; a ++ ){
        //線を描画
        cvs.beginPath();
        cvs.setLineDash( [ 10, 10 ] );
        cvs.moveTo( tsx1+wh+a*wx*4, tsy1+n*wy*2+ha );
        cvs.lineTo( tsx1+wh+a*wx*4, tsy1+wy*2+n*wy*2+ha );
        cvs.stroke(); 
        cvs.closePath();
    }
    cvs.strokeStyle="rgba(128,128,128,0.5)"
    for( let a = 1; a < 48; a ++ ){
        if( a%2 == 1 ){
            cvs.beginPath();
            cvs.setLineDash( [ 5, 5 ] );
            cvs.moveTo( tsx1+wh+a*wx*2, tsy1+n*wy*2+ha );
            cvs.lineTo( tsx1+wh+a*wx*2, tsy1+wy*2+n*wy*2+ha );
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
        cvs.fillText( b, tsx1+wh+wx*(a-4)*4, tsy1+n*wy*2+wy+ha );
        
    }

    //横線を描画
    cvs.beginPath();
    cvs.strokeStyle = "black";
    cvs.setLineDash([]);
    cvs.globalAlpha = 1.0;

    cvs.moveTo( tsx1, tsy1+n*wy*2+ha );
    cvs.lineTo( tsx1+wi, tsy1+n*wy*2+ha );

    cvs.moveTo( tsx1, tsy1+n*wy*2+ha );
    cvs.lineTo( tsx1, tsy1+n*wy*2+wy*2+ha );

    cvs.moveTo( tsx1+wh, tsy1+wy+n*wy*2+ha );
    cvs.lineTo( tsx1+wi, tsy1+wy+n*wy*2+ha );

    cvs.moveTo( tsx1, tsy1+wy*2+n*wy*2+ha );
    cvs.lineTo( tsx1+wi, tsy1+wy*2+n*wy*2+ha );

    cvs.moveTo( tsx1+1+dx*4, tsy1+dh+n*wy*2+ha );
    cvs.lineTo( tsx1+1, tsy1+dh+dx*4+n*wy*2+ha );

    cvs.moveTo( tsx1+wi, tsy1+n*wy*2+ha );
    cvs.lineTo( tsx1+wi, tsy1+wy*2+n*wy*2+ha );

    cvs.moveTo( tsx1+wh+wx*96+tx, tsy1+n*wy*2+ha );
    cvs.lineTo( tsx1+wh+wx*96+tx, tsy1+wy+n*wy*2+ha );
    cvs.moveTo( tsx1+wh+wx*96+tx*2, tsy1+n*wy*2+ha );
    cvs.lineTo( tsx1+wh+wx*96+tx*2, tsy1+wy*2+n*wy*2+ha );
    cvs.moveTo( tsx1+wh+wx*96+tx*3, tsy1+n*wy*2+ha );
    cvs.lineTo( tsx1+wh+wx*96+tx*3, tsy1+wy+n*wy*2+ha );
    cvs.moveTo( tsx1+wh+wx*96+tx*4, tsy1+n*wy*2+ha );
    cvs.lineTo( tsx1+wh+wx*96+tx*4, tsy1+wy+n*wy*2+ha );
    cvs.moveTo( tsx1+wh+wx*96+tx*5, tsy1+n*wy*2+ha );
    cvs.lineTo( tsx1+wh+wx*96+tx*5, tsy1+wy+n*wy*2+ha );
    cvs.moveTo( tsx1+wh+wx*96, tsy1+wy*1.5+n*wy*2+ha );
    cvs.lineTo( tsx1+wi, tsy1+wy*1.5+n*wy*2+ha );
    cvs.moveTo( tsx1+wh+wx*96, tsy1+wy*0.5+n*wy*2+ha );
    cvs.lineTo( tsx1+wi, tsy1+wy*0.5+n*wy*2+ha );
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
    cvs.fillText( m, tsx1+1, tsy1+dh+dx*2+n*wy*2+ha );
    cvs.fillText( da, tsx1+1+dx*2, tsy1+dh+dx*4+n*wy*2+ha );
    cvs.fillText( Youbi[n5.getDay()], tsx1+1+dx, tsy1+bh+hh-dx+n*wy*2+ha );
    return;
}



function tategaki( text, xa, xb, cvs, n ){
    console.log( "tategaki()" );
    xa = Number( xa );
    xb = Number( xb );
    console.log( "text", text, "xa", xa, "xb", xb );

    cvs.fillStyle = "black";
    let a = text.split("");
    cvs.font = font+"px serif";
    let x, y;
    if( xa < 96 ){
        x = tsx1+wh+(xa*wx + (xb+1)*wx)/2-font/2;
        y = tsy1+n*wy*2+font+ha;
    }else{
        x = tsx1+wh+( ( xa-96 )*wx + ( ( xb-95 )*wx) )/2-font/2;
        y = n*wy*2+tsy1+wy+font+ha;
    } 
    for(let b = 0; b < a.length; b ++ ){
        cvs.fillText( a[b], x, y );
        y += font;
    }
}

function setdai(){   //v1=dai,v2=ls,v3=title
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