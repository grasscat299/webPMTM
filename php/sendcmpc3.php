<?php
$user = $_GET[ "user" ];
$title = $_GET[ "title" ];

$json = file_get_contents( "test2.json" );
$sql = json_decode( $json, true );
$dsn = "pgsql:dbname=".$sql["dbname"].";host=".$sql["host"];
$pdo = new PDO( $dsn, $sql["user"], $sql["pass"] );

$a = $pdo
-> query( "SELECT COUNT(*) AS cnt FROM cmpc".$user." WHERE title='".$title."'" )
-> fetch( PDO::FETCH_ASSOC );

$res="";
if( $a[ "cnt" ] > 0 ){
    $aryitem = $pdo
    -> query( "SELECT id, m, d FROM cmpc".$user." WHERE title = '".$title."'" )
    -> fetchall( PDO::FETCH_ASSOC );
    foreach( $aryitem as $loop ){
        $res .= $loop[ "id" ].",".$loop[ "m" ].",".$loop[ "d" ].",";
    }
    $res = rtrim( $res, ",");
}else{
    $res = "null";
}

echo $res;

$pdo = null;


//localhost/DPMTM/sendcmpc3.php?title=test3&user=2020m0030
?>