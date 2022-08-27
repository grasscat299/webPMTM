<?php
$user = $_GET[ "user" ];

$json = file_get_contents( "test2.json" );
$sql = json_decode( $json, true );
$dsn = "pgsql:dbname=".$sql["dbname"].";host=".$sql["host"];
$pdo = new PDO( $dsn, $sql["user"], $sql["pass"] );

$title1 = $pdo
-> query( "SELECT names, id FROM pm".$user." WHERE title='title'" )
-> fetchall( PDO::FETCH_ASSOC );

$res=[];
foreach( $title1 as $loop ){
    $res[ $loop[ "id" ] ] = $loop[ "names" ];
}
$res2="";
foreach( $res as $a ){
    $res2 .= $a.",";
}
$res2 = rtrim( $res2, "," );

echo $res2;

$pdo = null;

//localhost/DPMTM/sendpmtitle3.php?user=2020m0030
?>