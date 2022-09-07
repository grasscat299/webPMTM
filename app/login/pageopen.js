// フォームを動的に生成
let html = '<form id="postform" style="display:none;">';
html += '<input type="hidden" name=user value='+user+' >';
html += '<input type="hidden" name=pass value='+pass+' >';
html += '</form>';
$("body").append(html);

$('#temp_form').action = '../main/pmtm.php';
$('#temp_form').method = 'POST';
$('#temp_form').target = 'new_window';
$('#temp_form').submit();

// フォームを削除
$('#temp_form').remove();
