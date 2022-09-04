<?php
include_once( "pmtm1.html" );

if( isset( $_POST[ "user" ] ) ){
    $user = $_POST[ "user" ];
    echo '<script>
    var user;
    var pass;
    user = "'.$user.'";
    document.cookie = "user="+user; "max-age=86400";
    </script>';
}else{
    echo 
'
<script>
var user;
var pass;
let filecookie = document.cookie;
console.log( filecookie );
if( filecookie != "" ){
    let filecookie1 = filecookie.split( "; " );
    for( let ckie of filecookie1 ){
        let ckie1 =  ckie.split( "=" );
        if( ckie1[0] == "user" ){
            user = ckie1[1];
        }
    }
}
</script>';
}


if( isset( $_POST[ "pass" ] ) ){
    $pass = $_POST[ "pass" ];
    echo '<script>var pass = "'.$pass.'";
    document.cookie = "pass="+pass; "max-age=86400";
    </script>';
}else{
    echo 
'
<script>
if( filecookie != "" ){
    let filecookie1 = filecookie.split( "; " );
    console.log( filecookie1 );
    for( let ckie of filecookie1 ){
        let ckie1 =  ckie.split( "=" );
        if( ckie1[0] == "pass" ){
            pass = ckie1[1];
        }
    }
}
console.log( "user", user, "pass", pass );
</script>
';
}

//localhost/pmtm/main/pmtm.php
?>
<script type="text/javascript" src="load7.js"></script>