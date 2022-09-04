<?php
$user = $_GET[ "user" ];
$title = $_GET[ "title" ];
$id = $_GET[ "id" ];
$m = $_GET[ "m" ];
$d = $_GET[ "d" ]; 
$c = $_GET[ "c" ];

$json = file_get_contents( "../test2.json" );
$sql = json_decode( $json, true );
$dsn = "pgsql:dbname=".$sql["dbname"].";host=".$sql["host"];
$pdo = new PDO( $dsn, $sql["user"], $sql["pass"] );

$a = 0;
if( $c == "a" ){
    $pdo -> query( "INSERT INTO cmpc".$user."( title, id, m, d ) VALUES ( '".$title."',".$id.",'".$m."','".$d."' )" );
}else if( $c == "d" ){
    $pdo -> query( "DELETE FROM cmpc".$user." WHERE title='".$title."' AND id=".$id );
}else if( $c == "ad" ){
    $pdo -> query( "DELETE FROM cmpc".$user." WHERE title='".$title."'" );
}else{
    $pdo -> query( "UPDATE cmpc".$user." SET m = '".$m."', d='".$d."' WHERE title = '".$title."' AND id = ".$id );
}

$pdo = null;

//localhost/DPMTM/rcvcmpc3.php?title=test&id=1&m=08&d=10&c=a&user=2020m0030
?>