let username,password,btn0;

$( function(){
    $( "#btn0" ).on( "mousedown", function(){
        console.log( "click" );
        username = $( "#username" ).val();
        password = $( "#password" ).val();
        acountCheck( username, password, openpage );
    });

    $( "#btn1" ).on( "mousedown", function(){
        console.log( "create user" );
        $( "#createAcount" ).css( 'display', 'block' );
    });

    $( "#btn2" ).on( "mousedown", function(){
        console.log( "created" );
        username = $( "#caUser" ).val();
        password = $( "#caPass" ).val();
        if( username != "" || password != "" ){
            createAcount( username, password, openpage );
        }

    })
});

function openpage(){
    console.log( "login!" );
    $("#sendpmtm").submit();
}

function acountCheck( user, pass, f1 ){
    /*
    let req = new XMLHttpRequest();
    req.open("GET",ajaxurl["login"]+"ac2.php?user="+user+"&pass="+pass );
    req.onreadystatechange = function(){
        if(req.readyState == 4 && req.status == 200 ){
            console.log( "user", user, "pass", pass );
            let res = req.responseText;
            console.log( "res", res );
            if( res == "t" ){
                f1();
            }else{
                $( "#login" ).text("ユーザー名かパスワードが間違っています");
            }
            
        }
    };
    req.send();
    */
    console.log( "acountcheck" );
    $.ajax({
        type: "POST",
        url: ajaxurl["login"]+"ac2.php",
        data:{ "user": user, "pass" : pass },
        dataType : "text"
    }).done( function( data ){
        console.log( "data", data );
        if( data == "t" ){
            f1();
        }else{

        }
    })
}

function createAcount( user, pass, f1 ){
    let req = new XMLHttpRequest();
    req.open("GET",ajaxurl["login"]+"acCre2.php?user="+user+"&pass="+pass );
    req.onreadystatechange = function(){
        if(req.readyState == 4 && req.status == 200 ){
            console.log( "user", user, "pass", pass );
            let res = req.responseText;
            console.log( "res", res );
            if( res == "t" ){
                f1();
            }else{
                $( "#create" ).text( "この名前はすでに使われています");
            }
            
        }
    };
    req.send();
}