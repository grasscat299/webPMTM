<?php

$item1 = $_GET["item"];
$c = $_GET["c"];
$date = $_GET["date"];
$user = $_GET[ "user" ];
$nasi = 0;
if( $item1 != "" ){
    $item = preg_split("/,/", $item1 );
}else{
    $nasi = 1;
}

$json = file_get_contents( "test2.json" );
$sql = json_decode( $json, true );
$dsn = "pgsql:dbname=".$sql["dbname"].";host=".$sql["host"];
$pdo = new PDO( $dsn, $sql["user"], $sql["pass"] );

if( $pdo == null ){
    echo "error";
}

if( $c == "title" ){
    if( $nasi != 1 ){
        $pdo -> query( "DELETE FROM title".$user." WHERE dates=".$date );
        for( $a = 0; $a < count( $item ); $a ++ ){
            $pdo -> query( "INSERT INTO title".$user."( dates, title ) VALUES( ".$date.",'".$item[$a]."' )" );
        }
    }

}else if( $c == "ls" ){
    if( $nasi != 1 ){
        $pdo -> query( "DELETE FROM ls".$user." WHERE dates=".$date );
        for( $a = 0; $a < count( $item ); $a ++ ){
            $pdo -> query( "INSERT INTO ls".$user."( dates, ls ) VALUES( ".$date.", ".$item[$a]." )" );
        }
    }
}
$pdo = null;
echo "php finish";

//localhost/DPMTM/rcvtm7.php?item=test&c=title&date=20220826&user=2020m0030
?>