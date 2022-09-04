<?php
$id = $_GET["id"];
$name = $_GET["name"];
$title = $_GET["title"];
$c = $_GET[ "c" ];
$user = $_GET[ "user" ];

$json = file_get_contents( "../test2.json" );
$sql = json_decode( $json, true );
$dsn = "pgsql:dbname=".$sql["dbname"].";host=".$sql["host"];
$pdo = new PDO( $dsn, $sql["user"], $sql["pass"] );

if( $c == "n" ){    //create sheet
	$pdo -> query( "INSERT INTO pm".$user."( title, id, names ) VALUES( 'title', ".$id.", '".$title."') " );
}else if( $c == "en" ){ //edit sheetname    titleに元の名前 namesに新しい名前
	$pdo -> query( "UPDATE pm".$user." SET names = '".$name."' WHERE title = 'title' AND names = '".$title."'" );

	$pdo -> query( "UPDATE pm".$user." SET title = '".$name."' WHERE title = '".$title."'" );
}else if( $c == "s" ){  //sort

	$title1 = preg_split("/,/", $title );
	$name1 = $pdo
    -> query( "SELECT names FROM pm".$user." WHERE title= 'title' " )
    -> fetchall( PDO::FETCH_COLUMN );
    print_r( $name1 );
    foreach( $name1 as $loop ){
        echo( $loop );
        for( $a = 0; $a < count( $title1 ); $a ++ ){
            if( $loop == $title1[ $a ] ){
                echo $a;
                $pdo -> query( "UPDATE pm".$user." SET id = ".$a." WHERE title = 'title' AND names = '".$title1[$a]."'" );
                break;
            }
        }
    }
}else if( $c == "d" ){  //sheet delete
	$title1 = preg_split("/,/", $title );
	$pdo -> query( "DELETE FROM pm".$user." WHERE title='title'" );
	$pdo -> query( "DELETE FROM pm".$user." WHERE title='".$name."'" );
    $a = 0;
    for( $a = 0; $a < count( $title1); $a ++ ){
        $pdo -> query( "INSERT INTO pm".$user."( title, id, names ) VALUES( 'title',".$a.",'".$title1[$a]."' ) " );
    }
}else{  //add
	$pdo -> query( "DELETE FROM pm".$user." WHERE id=".$id." AND title='".$title."'" );

	if( $name != "" ){
		$pdo -> query( "INSERT INTO pm".$user."( title, id, names ) VALUES( '".$title."',".$id.",'".$name."' ) " );
	}
}
$pdo = null;
echo "php finish";



//localhost/DPMTM/rcvpm3.php?id=3&name=maru&title=202285~2022811,2022812~2022818,2022826~202291,まる&c=s
//localhost/DPMTM/rcvpm3.php?id=&name=&title=test&c=n&user=2020m0030
?>