let startday = 87;
let Month = [31,28,31,30,31,30,31,31,30,31,30,31];
let Youbi = ["日","月","火","水","木","金","土"];
let syuu, targetd; //何週か
let url = document.location.search;

let tscvs1,tscvs,tstitle,tsdl,tsctxm,tsctxm1,tsctxm2,tstxtbox;
let tsbtn0;
let wx=0,wy=0,wh=0,wt=0,wi=0,bh=0,hh=0,dx=0,dh=0,tsx1=0,tsy1=0,tsx2=0,tsy2=0,ha=0,tx=0,ty=0,ax1=0,ax2=0,ay1=0,ay2=0,ay3=0,ay4=0;
let ls=[],title=[],dai=[];
for( let a = 0; a < 7; a ++ ){
    ls[a]=[];
    title[a]=[];
}

let tscc=0;
let tam=0,tad=0,tam2=0,tad2=0;
let tg = "n";
let fp=0,tp=0,sp=0,nd=0;
let btp=0, bnd=0;
let user;

window.addEventListener( "load",
function(){
    tscvs1 = document.getElementById("tmsheetcvs");
    tscvs = tscvs1.getContext( "2d" );
    tstitle = document.getElementById( "tstitle" );
    tsdl = document.getElementById( "tsdl" );
    tsctxm = document.getElementById( "tsctxm" );
    tsctxm1 = document.getElementById( "tsctxm1" );
    tsctxm2 = document.getElementById( "tsctxm2" );
    tstxtbox = document.getElementById( "tstxtbox" );
    tsbtn0 = document.getElementById( "tsbtn0" );
    

    let result = url.replace( /^\?/ , "" );
    let result2 = result.split( "&" );
    syuu = Number( result2[0] );
    user = result2[1];
    tsdl.download = "第"+syuu+"週TM.jpg"
    tstitle.innerText = "第"+syuu+"週";

    targetd = (syuu-1)*7+startday;
    console.log( "targetd", targetd );

    //tam,tad設定
    for( let a = 0; a < 12; a ++ ){
        if( targetd <= 0 ){
            tam = a;
            break;
        }else{
            tad = targetd;
            targetd -= Month[a];
        }
    }
    console.log( "tam", tam, "tad", tad );
    
    settscvs();
    rcvtm( setdai, drow, tsroop, tscvs, 0 );

    /*
    tscvs1.addEventListener( "mousedown",
    function(e){
        console.log( "cvsmousedown" );
        console.log( "button", e.button );
        if( tg == "n" && e.button == 0 ){
            console.log( "right click" );
            nd = setwy2( e.offsetY );  //上から何行目のTMか
            tp = settp( e.offsetX, e.offsetY );
            if( bnd != nd ){
                console.log( "nd chenge" );
                fp = ls[nd].length/2;
                setdai( dai, ls[nd], title[nd] );
            }
            console.log( "tp", tp );
            if( tp < 192 ){
                let a = "";
                if( dai[ tp ] == "" ){
                    console.log( "dai", dai, "ls", ls, "title", title  );
                    sp = tp;
                    tg = "a";
                    title[nd][ fp ] = "UNNAMED";
                    a = setarea( tp );
                }else{
                    let a = e.offsetX - (tp%96)*wx-wh-tsx1;
                    if( a < 5 && dai[ tp-1 ] != dai[ tp ]){
                        console.log( "a < 5" );
                        tg = "er";
                        fp = setfp( tp );
                        sp = ls[nd][fp*2+1];
                        a = setarea( tp );
                    }else if( dai[ tp+1 ] != dai[ tp ] ){
                        console.log( "a >= 5" );
                        tg = "el";
                        fp = setfp( tp );
                        sp = ls[nd][fp*2];
                        a = setarea( tp );
                    }         
                }
                console.log( "a", a, "tp", tp, "sp", sp, "fp", fp, "tg", tg  );
                if( a == "t" ){
                    setdai( dai, ls[nd], title[nd] );
                    drow( tscvs, gettime3( nd ), "ts", nd, tsx1, tsy1 );
                }
                
            }else if( tp >= 194 && tp <=203 ){

            }else if( tp < 206 ){

            }else{

            }
            bnd = nd;
        }
        
    },
    false );

    
    tscvs1.addEventListener( "mousemove",
    function(e){
        if( tg == "a" || tg == "er" || tg == "el" ){
            tp = settp( e.offsetX, e.offsetY );
            
            if( tp > 191 ){
                tp = 191;
            }
            console.log( "tp", tp );
            if( btp != tp ){
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
                    setdai( dai, ls[nd], title[nd] );
                    drow( tscvs, gettime3(nd), "ts", nd, tsx1, tsy1 );
                }
                
            }
            btp = tp;
        }
    },
    false );

    tscvs1.addEventListener( "mouseup",
    function(){
        if( tg == "a" || tg == "er" || tg == "el" ){
            fp = ls[nd].length/2;
            tg = "n";
            sp = 0;
            sendtm( ls[nd], "ls" );
            sendtm( title[nd], "title" );
            console.log( "fp", fp );
            console.log( "mouseup" );
        }
        
    },
    false );

    //右クリック検知
    tscvs1.addEventListener('contextmenu',
    function (e){
        tp = settp( e.offsetX, e.offsetY );
        if( tg == "n" && tp < 192 ){
            console.log( "ctxm" );
            tsctxm.style.left=e.clientX+"px";
            tsctxm.style.top=e.clientY+"px";
            tsctxm.style.display="block";
            nd = setwy2( e.offsetY );
            bnd = nd;
            fp = setfp( tp );
        }
        console.log( "tg", tg );
    },
    false );

    //名前変更
    tsctxm1.addEventListener( "mousedown",
    function(){
        console.log( "tsctxm1 click" );
        if( fp != "null" ){
            tg = "w";
            let x = 0;
            let y = 0;
            if( tp < 96 ){
                x = tsx1+wh+ls[nd][fp*2+1]*wx+1;
                y = tsy1+nd*wy*2+wy*0.75;
            }else if( tp >= 96 && tp < 192 ){
                x = tsx1+wh+(ls[nd][fp*2+1]-96)*wx+1
                y = tsy1+nd*wy*2+wy*1.75;
            }
            tstxtbox.style.top = y + "px";
            tstxtbox.style.left = x + "px";
            tstxtbox.value = "";
            tstxtbox.style.display = "block";
        }
    },
    false );

    //削除
    tsctxm2.addEventListener( "mousedown",
    function(){
        if( fp != "null" ){
            ls[nd].splice( fp*2, 2 );
            title[nd].splice( fp, 1 );
        }
        
        sendtm( ls[nd], "ls" );
        sendtm( title[nd], "title" );
        
        setdai( dai, ls[nd], title[nd] );
        drow( tscvs, gettime3( nd ), "ts", nd, tsx1, tsy1 );
    },
    false );

    document.body.addEventListener( "click",
    function(){
        tsctxm.style.display = "none";
        if( tg == "w" ){
            tstxtbox.focus();
        }
    },
    false );

    tstxtbox.addEventListener( "keypress",
    function(e){
        if( e.key === "Enter" ){
            tstxtbox.style.display = "none";
            title[nd][fp] = tstxtbox.value;
            sendtm( title[nd], "title" );
            setdai( dai, ls[nd], title[nd] );
            drow( tscvs, gettime3( nd ), "ts", nd, tsx1, tsy1 );
            tg = "n";
            fp = ls[nd].length/2;
        }
    },
    false );
    */
    tsbtn0.addEventListener( "mousedown",
    function(){
        tscvs1.toBlob( function(blob){
            tsdl.href = window.URL.createObjectURL( blob );
        })
    },
    false );
    
},
false );



function tsroop(){
    console.log( "tsroop {")
    tscc++;
    console.log( "tscc", tscc );
    if( tscc < 7 ){
        rcvtm( setdai, drow, tsroop, tscvs, tscc );
    }
    console.log( "}" );
}

function settscvs(){
    console.log( "settmcvs(){" );
    console.log( "innerwidth", window.innerWidth );
    wi = window.innerWidth - 39;
    tsx1 = wi/210*20;
    tsy1 = wi/210*19;
    tsx2 = wi/210*5;
    tsy2 = wi/210*9;
    ha = wi/210*11;
    ay1 = wi/210*5;
    ay2 = wi/210*24;
    ay3 = ay2/2;
    ax2 = wi/210*16;
    wi -= tsx1+tsx2;
    ax1 = wi-ax2*2;
    ay4 = ay2/3;

    wh = wi/184*8;
    wx = wi/184*153/96;
    wy = wi/23*2;
    bh = wh/2;
    hh = wy*2 - bh*2;
    dx = ( wh-2 )/4;
    dh = (hh-dx*4)/2+bh;
    tx = wi/184*23/5;
    ty = wy/2;
    font = wi/80;
    
    tscvs1.width = wi+tsx1+tsx2;
    tscvs1.height = ha+wy*2*7+tsy1+tsy2+ay1+ay2;
    tscvs1.style.width = wi+tsx1+tsx2+"px";
    tscvs1.style.height = ha+wy*2*7+tsy1+tsy2+ay1+ay2+"px";
    console.log( "}" );
    tscvs.fillStyle = "#fff";
    tscvs.fillRect( 0, 0, wi+tsx1+tsx2, wy*14+tsy1+ha+ay1+ay2+tsy2 );

    tscvs.beginPath();
    tscvs.setLineDash( ["",""]);
    tscvs.moveTo( tsx1, tsy1 );
    tscvs.lineTo( tsx1, tsy1+ha );

    tscvs.moveTo( tsx1, tsy1 );
    tscvs.lineTo( tsx1+wi, tsy1 );

    tscvs.moveTo( tsx1+wi, tsy1 );
    tscvs.lineTo( tsx1+wi, tsy1+ha );

    tscvs.moveTo( tsx1, tsy1+ha );
    tscvs.lineTo( tsx1+wi, tsy1+ha );

    tscvs.moveTo( tsx1, tsy1+ha+wy*2*7+ay1 );
    tscvs.lineTo( tsx1+wi, tsy1+ha+wy*2*7+ay1 );
    tscvs.lineTo( tsx1+wi, tsy1+ha+wy*2*7+ay1+ay2 );
    tscvs.lineTo( tsx1, tsy1+ha+wy*2*7+ay1+ay2 );
    tscvs.lineTo( tsx1, tsy1+ha+wy*2*7+ay1 );

    tscvs.moveTo( tsx1+ax1, tsy1+ha+wy*2*7+ay1 );
    tscvs.lineTo( tsx1+ax1, tsy1+ha+wy*2*7+ay1+ay2 );

    tscvs.moveTo( tsx1+ax1+ax2, tsy1+ha+wy*2*7+ay1 );
    tscvs.lineTo( tsx1+ax1+ax2, tsy1+ha+wy*2*7+ay1+ay2 );

    tscvs.moveTo( tsx1+ax1, tsy1+ha+wy*2*7+ay1+ay3 );
    tscvs.lineTo( tsx1+wi, tsy1+ha+wy*2*7+ay1+ay3 );

    tscvs.stroke();
    tscvs.closePath();

    tscvs.beginPath();
    tscvs.setLineDash( [ 5, 5 ] );

    tscvs.moveTo( tsx1*1.05, tsy1+ha+wy*2*7+ay1+ay4 );
    tscvs.lineTo( tsx1*0.95+ax1, tsy1+ha+wy*2*7+ay1+ay4 );

    tscvs.moveTo( tsx1*1.05, tsy1+ha+wy*2*7+ay1+ay4*2 );
    tscvs.lineTo( tsx1*0.95+ax1, tsy1+ha+wy*2*7+ay1+ay4*2 );

    tscvs.stroke();
    tscvs.closePath();
}

function gettime3( n, c ){
    let nt = new Date( 2022, tam-1, tad );
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