<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>web版PMTM</title>
        <link rel="stylesheet" href="tm1.css">
        <link rel="stylesheet" href="pm1.css">
        <?php
        if( isset( $_POST[ "user" ] ) ){
            $user = $_POST[ "user" ];
            echo '<script>
            var user;
            user = "'.$user.'";
            document.cookie = "user="+user; "max-age=86400";
            </script>';
        }else{
        }

        if( isset( $_POST[ "pass" ] ) ){
            $pass = $_POST[ "pass" ];
            echo '<script>var pass = "'.$pass.'";
            document.cookie = "pass="+pass; "max-age=86400";
            </script>';
        }else{
        }
        //localhost/pmtm/main/pmtm.php
        ?>
        <script type="text/javascript" src="load7.js"></script>
        <script type="text/javascript" src="tm12.js"></script>
        <script type="text/javascript" src="pm7.js"></script>
        <script type="text/javascript" src="db8.js"></script>
        <script type="text/javascript" src="page2.js"></script>
        <script type="text/javascript" src="../seturl.js"></script>
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    </head>
    <body>
        <div id="pagetop">
            <div id="home">
                <input type="button" value="home" id="btn5">
                <input type="text" id="textform">
            </div>
            <canvas style="border: 1px solid;" id="tmcanvas" width="960" height="250" oncontextmenu="return false;"></canvas>

        </div>

        <div id="pm">
            <form id="pmtextform">
                <script>
                    for( let a = 0; a < 158; a ++ ){
                        document.write( '<textarea id="'+a+'" class="pmform" ></textarea>' );
                    }
                </script>
            </form>
            
            <span id="pmtitle" class="txtf_c">title</span>
            <input type="button" value="前" id="btn0" class="txtf_c">
            <input type="button" value="次" id="btn1" class="txtf_c"> 
            <input type="button" value="新規作成" id="btn2" class="txtf_c">
            <input type="button" value="編集" id="btn3" class="txtf_c">
            <input type="button" value="チェックつける" id="btn4" class="txtf_c">
            <canvas id="pmcvs" oncontextmenu="return false;"></canvas>
        </div>

        <input type="text" id="pmtextbox"> 

        <div id="tmctxm">
            <ul>
                <li id="ctxm1">名前変更</li>
                <li id="ctxm2">削除</li>
            </ul>
        </div>

        <div id="editmenu">
            <ul>
                <li id="em1">名前変更</li>
                <li id="em2">並び変え</li>
                <li id="em3">削除</li>
            </ul>
        </div>

        <div id="pctxm">
            <ul>
                <li id="pctxm1">削除</li>
            </ul>
        </div>

        <div id="homemenu">
            <input type="button" value="close" id="btn6">
            <h1>homemunu</h1>
            <span>第</span>
            <input type="text" id="tsnum">
            <span>週のTMを見る</span>
            <input type="button" value="見る" id="btn7">
            <br>
            できなくなった事を書いてlog送信してください( ex )tmの予定を追加できなくなった 
            <input type="text" id="logtext" >
            <br>
            <input type="button" value="log送信" id="btn8">
        </div>
    </body>
</html>
<!-- localhost/test/pmtm1.html?2020m0030&asika1104 -->