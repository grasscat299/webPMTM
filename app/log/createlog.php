<?php
$log1 = $_POST[ "logs" ];
$log = preg_split( "/\//", $log1 );
$nof = glob( "logs/*" );
$fp = fopen( "logs/log".count($nof).".log", "w" );
foreach( $log as $gyou ){
    fputs( $fp, $gyou."\n" );
}
fclose( $fp );
echo "finish";
//localhost/test/createlog.php
?>