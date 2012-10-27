// ==UserScript==
// @name          paliEditor
// @description	  pali special character and tipitaka tool center for tipitaka students.
// ==/UserScript==

/*        Copyright 2012 theY <palieditor@googlegroups.com>
        
        This program is free software; you can redistribute it and/or modify
        it under the terms of the BSD License.
        
        This program is distributed in the hope that it will be useful,
        but WITHOUT ANY WARRANTY; without even the implied warranty of
        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
        BSD License for more details.
*/

if ((location.host+"").indexOf("dhammawheel.com")>-1) {
	var txtArea=document.getElementById("message");
	var txtAreaPlace=document.getElementById("message-box");
} else {
	if (location.href.indexOf("edit")>-1 && location.href.indexOf("comment")==-1 ) {
		var txtArea=document.getElementById("edit-body-und-0-value");
		var txtAreaPlace=document.getElementById("edit-body");
	} else if (location.href.indexOf("add")>-1) {
		var txtArea=document.getElementById("edit-body-und-0-value");
		var txtAreaPlace=document.getElementById("body-add-more-wrapper");
		alert(txtArea+"--"+txtAreaPlace)
	} else {
		var txtArea=document.getElementById("edit-comment-body-und-0-value");
		var txtAreaPlace=document.getElementById("comment-body-add-more-wrapper");
	} 	

}
var shortcutKey="Alt";
var spclUpChar="ĀĪŪṄÑṬḌṆḶṂ".split("").concat([" ", "๏"]);
var spclLoChar="āīūṅñṭḍṇḷṃ".split("").concat([ "", ""]);
var nomlUpChar="AIUKCTDNLM".split("").concat(["Q", "W"]);;
var nomlLoChar=nomlUpChar.join("").toLowerCase().split("");
var spclChar=spclUpChar.concat(spclLoChar);
var nomlChar=nomlUpChar.concat(nomlLoChar);
//var spclCode=[65, 73, 85, 75, 67, 84, 68, 78, 76, 77];//on key up and upper of onkeypress
var spclCode=[65, 73, 85, 75, 67, 84, 68, 78, 76, 77,
	97, 105, 117, 107, 99, 116, 100, 110, 108, 109];
var charToolbar="";
var zNode       = document.createElement ('div');
var style="	width: 3.5em;height: 2em;";
for (i in spclUpChar) {
	charToolbar+='<input type="button" id="upSpclbox'+i+'" value="'+spclUpChar[i]+'" title="'+shortcutKey+'+Shift+'+nomlUpChar[i]+'" style="'+style+'" />';
	charToolbar+='<input type="button" id="loSpclbox'+i+'" value="'+spclLoChar[i]+'" title="'+shortcutKey+'+'+nomlLoChar[i]+'" style="'+style+'" />&nbsp;&nbsp;';	
	if (i==5) charToolbar+="<br />";
}    
zNode.innerHTML = "<br /><b>paliEditor option:</b> <br /><br />"+charToolbar+"<br /><br />Go to <a href='http://tipitakanews.org/sites/default/files/paliEditor.html' target='_blank' >full version</a> of paliEditor to use keyboard shortcut function, <br />between character insertion ability, and another tools, that I can't <br />include to this page.";
txtAreaPlace.appendChild (zNode);

document.getElementById("upSpclbox0").addEventListener("click", function(){txtArea.innerHTML+=spclUpChar[0];}, false);
document.getElementById("loSpclbox0").addEventListener("click", function(){txtArea.innerHTML+=spclLoChar[0];}, false);
document.getElementById("upSpclbox1").addEventListener("click", function(){txtArea.innerHTML+=spclUpChar[1];}, false);
document.getElementById("loSpclbox1").addEventListener("click", function(){txtArea.innerHTML+=spclLoChar[1];}, false);
document.getElementById("upSpclbox2").addEventListener("click", function(){txtArea.innerHTML+=spclUpChar[2];}, false);
document.getElementById("loSpclbox2").addEventListener("click", function(){txtArea.innerHTML+=spclLoChar[2];}, false);
document.getElementById("upSpclbox3").addEventListener("click", function(){txtArea.innerHTML+=spclUpChar[3];}, false);
document.getElementById("loSpclbox3").addEventListener("click", function(){txtArea.innerHTML+=spclLoChar[3];}, false);
document.getElementById("upSpclbox4").addEventListener("click", function(){txtArea.innerHTML+=spclUpChar[4];}, false);
document.getElementById("loSpclbox4").addEventListener("click", function(){txtArea.innerHTML+=spclLoChar[4];}, false);
document.getElementById("upSpclbox5").addEventListener("click", function(){txtArea.innerHTML+=spclUpChar[5];}, false);
document.getElementById("loSpclbox5").addEventListener("click", function(){txtArea.innerHTML+=spclLoChar[5];}, false);
document.getElementById("upSpclbox6").addEventListener("click", function(){txtArea.innerHTML+=spclUpChar[6];}, false);
document.getElementById("loSpclbox6").addEventListener("click", function(){txtArea.innerHTML+=spclLoChar[6];}, false);
document.getElementById("upSpclbox7").addEventListener("click", function(){txtArea.innerHTML+=spclUpChar[7];}, false);
document.getElementById("loSpclbox7").addEventListener("click", function(){txtArea.innerHTML+=spclLoChar[7];}, false);
document.getElementById("upSpclbox8").addEventListener("click", function(){txtArea.innerHTML+=spclUpChar[8];}, false);
document.getElementById("loSpclbox8").addEventListener("click", function(){txtArea.innerHTML+=spclLoChar[8];}, false);
document.getElementById("upSpclbox9").addEventListener("click", function(){txtArea.innerHTML+=spclUpChar[9];}, false);
document.getElementById("loSpclbox9").addEventListener("click", function(){txtArea.innerHTML+=spclLoChar[9];}, false);
document.getElementById("upSpclbox10").addEventListener("click", function(){txtArea.innerHTML+=spclUpChar[10];}, false);
document.getElementById("loSpclbox10").addEventListener("click", function(){txtArea.innerHTML+=spclLoChar[10];}, false);
document.getElementById("upSpclbox11").addEventListener("click", function(){txtArea.innerHTML+=spclUpChar[11];}, false);
document.getElementById("loSpclbox11").addEventListener("click", function(){txtArea.innerHTML+=spclLoChar[11];}, false);
