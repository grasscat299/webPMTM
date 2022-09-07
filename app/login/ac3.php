<?php
$user = $_POST[ "user" ];
$pass = $_POST[ "pass" ];

$json = file_get_contents( "../test2.json" );
$sql = json_decode( $json, true );
$dsn = "pgsql:dbname=".$sql["dbname"].";host=".$sql["host"];
$pdo = new PDO( $dsn, $sql["user"], $sql["pass"] );

$cc = $pdo
-> query( "SELECT COUNT(*) AS cc FROM acount WHERE username = '".$user."' AND pass ='".$pass."'" )
-> fetch( PDO::FETCH_COLUMN );

$pdo = null;

if( $cc == 1 ){
    echo '<script>var user = "'.$user.'"; var pass = "'.$pass.'";</script>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script><script type="text/javascript" src="../seturl.js"></script><script type="text/javascript" src="pageopen.js"></script>'
}else{
    echo "ログインできませんでした";
}

//localhost/DPMTM/ac2.php?user=2020m0030&pass=asika1104
?>
