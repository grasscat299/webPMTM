<?php
$json = file_get_contents( "../test2.json" );
$sql = json_decode( $json, true );
$dsn = "pgsql:dbname=".$sql["dbname"].";host=".$sql["host"];
print_r( $sql );
$pdo = new PDO( $dsn, $sql["user"], $sql["pass"] );

$res = $pdo -> query( "select * from acount" )
-> fetchall( PDO::FETCH_ASSOC );

$pdo = null;

print_r( $res );
?>