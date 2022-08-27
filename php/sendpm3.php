<?php
$title = $_GET[ "title" ];
$user = $_GET[ "user" ];
$res = [];
for( $a = 0; $a < 158; $a ++ ){
    $res[$a] = "";
}
$json = file_get_contents( "test2.json" );
$sql = json_decode( $json, true );
$dsn = "pgsql:dbname=".$sql["dbname"].";host=".$sql["host"];
$pdo = new PDO( $dsn, $sql["user"], $sql["pass"] );

$names1 = $pdo
-> query( "SELECT names, id FROM pm".$user." WHERE title = '".$title."'"  )
-> fetchall( PDO::FETCH_ASSOC );
foreach( $names1 as $loop ){
    $res[ $loop["id"] ] = $loop["names"];
}
$res2="";
for( $a = 0; $a < 158; $a ++ ){
    $res2 .= $res[$a].",";
}
$res2 = substr( $res2, 0, -1 );

$pdo = null;
echo $res2;

//localhost/DPMTM/sendpm3.php?title=test3&user=2020m0030
?>