<?php
$date = $_GET[ "date" ];
$user = $_GET[ "user" ];

$ls = "";
$title = "";

$json = file_get_contents( "../test2.json" );
$sql = json_decode( $json, true );
$dsn = "pgsql:dbname=".$sql["dbname"].";host=".$sql["host"];
$pdo = new PDO( $dsn, $sql["user"], $sql["pass"] );


$titlec = $pdo
->query( "SELECT COUNT(*) AS titlec FROM title".$user." WHERE dates=".$date )
->fetch( PDO::FETCH_ASSOC );
if( $titlec[ "titlec" ] > 0 ){
    $a = 0;
    $title1 = $pdo
    ->query( "SELECT title FROM title".$user." WHERE dates = ".$date )
    ->fetchall( PDO::FETCH_COLUMN );
    foreach( $title1 as $loop ){
        $title .= $loop.",";
    }
    $title = rtrim( $title, "," );
}else{
    $title .= "null";
}
$lsc = $pdo
->query( "SELECT COUNT(*) AS lsc FROM ls".$user." WHERE dates=".$date )
->fetch( PDO::FETCH_ASSOC );
if( $lsc[ "lsc" ] > 0 ){
    $ls1 = $pdo
    -> query( "SELECT ls FROM ls".$user." WHERE dates =".$date  )
    -> fetchall( PDO::FETCH_COLUMN );
    foreach( $ls1 as $loop ){
        $ls .= $loop.",";
    }
    $ls = rtrim( $ls, "," );
}else{
    $ls .= "null";
}

echo $ls."/".$title;

$pdo = null;

//localhost/DPMTM/sendtm5.php?date=20220827&user=2020m0030
?>