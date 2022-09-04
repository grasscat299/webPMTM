<?php
$user = $_GET[ "user" ];
$pass = $_GET[ "pass" ];

$json = file_get_contents( "../test2.json" );
$sql = json_decode( $json, true );
$dsn = "pgsql:dbname=".$sql["dbname"].";host=".$sql["host"];
$pdo = new PDO( $dsn, $sql["user"], $sql["pass"] );

$ac = $pdo
-> query( "select count(*) as ac from acount where username='".$user."'" )
-> fetch( PDO::FETCH_COLUMN );

if( $ac == 0 ){
    $pdo -> query( "insert into acount( username, pass ) values ( '".$user."', '".$pass."' )" );

    $pdo -> query( "create table cmpc".$user."( title text, id int, m text, d text )" );

    $pdo -> query( "create table ls".$user."( dates int, ls int )" );

    $pdo -> query( "create table title".$user."( dates int, title text )" );

    $pdo -> query( "create table pm".$user."( title text, id int, names text )" );

    $pdo -> query( "insert into pm".$user."(title, id, names) values( 'title', 0, 'ようこそ！' )" );

    echo "t";
}else{
    echo "f";
}



$pdo = null;



//localhost/DPMTM/acCre2.php?user=2020m0031&pass=asika1105
?>