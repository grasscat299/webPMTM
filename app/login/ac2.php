<?php
$user = $_GET[ "user" ];
$pass = $_GET[ "pass" ];

$json = file_get_contents( "../test2.json" );
$sql = json_decode( $json, true );
$dsn = "pgsql:dbname=".$sql["dbname"].";host=".$sql["host"];
$pdo = new PDO( $dsn, $sql["user"], $sql["pass"] );

$cc = $pdo
-> query( "SELECT COUNT(*) AS cc FROM acount WHERE username = '".$user."' AND pass ='".$pass."'" )
-> fetch( PDO::FETCH_COLUMN );

$pdo = null;

if( $cc == 1 ){
    echo "t";
}else{
    echo "f";
}

//localhost/DPMTM/ac2.php?user=2020m0030&pass=asika1104
?>