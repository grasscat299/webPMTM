<?php
include_once( "showlog.html" );
$filecount = glob( "logs/*" );
$res = "";
foreach( $filecount as $gyou ){
    $res .= $gyou.",";
}
$res1 = rtrim( $res, "," );
echo '<script>let fileindex1 = "'.$res1.'"; var fileindex = fileindex1.split( "," ); </script>'
//localhost/app/log/showlog.php
?>
<script type="text/javascript" src="input_fileindex.js" ></script>