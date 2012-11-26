var menuNameStartseite = "startseite";

function home() {
	window.location.href = window.location.href.split("?")[0];
}

// Body onLoad
function init() {
	var menuName = getUrlParam(window.location.href, "menu");
	changeMenuTo(menuName);
}

// Redirect Kurz-URL
function redirect(menuName) {
	var req = window.location.href.split("?")[0];
	var parts = req.split("/");
	var file = parts[parts.length - 1];
	var newurl = req.substring(0, req.length - file.length) + "index.html?menu=" + menuName;
	location.replace(newurl);
}

// Klick auf Menu-Link
function showMenu(link) {
	var menuName = link.firstChild.data;
	changeMenuTo(menuName);
}

function changeMenuTo(menuName) {
	if (menuName == "") menuName = menuNameStartseite;
	
	// Text
	changeTextTo(menuName);
	
	// Image
	/* Deaktivierung des Content-Bildes
	var image = replaceUmlauts(menuName) + ".jpg";
	var imageUrl = "url('./images/" + image + "')";
	changeImageTo(imageUrl)
	*/
	
	// Menu
	activateMenu(menuName);
}

function changeTextTo(menuName) {
	var menuNodes = getMenuNodes();
	for (var i = 0; i < menuNodes.length; i++) {
		var curMenuNode = menuNodes[i];
		var curMenuName = curMenuNode.id;
		if (curMenuName == menuName) {
			curMenuNode.style.visibility = "visible";
			curMenuNode.style.display = "inline";
		} else {
			curMenuNode.style.visibility = "hidden";
			curMenuNode.style.display = "none";
		}
	}
}

function getMenuNodes() {
	var menuNodes = document.getElementsByClassName("menucontent");
	return menuNodes;
}

document.getElementsByClassName = function(cl) {
	var retnode = [];
	var myclass = new RegExp('\\b'+cl+'\\b');
	var elem = this.getElementsByTagName('*');
	for (var i = 0; i < elem.length; i++) {
		var classes = elem[i].className;
		if (myclass.test(classes)) retnode.push(elem[i]);
	}
	return retnode;
}

function replaceUmlauts(text) {
	var text = text.replace(/ä/g, "ae");
	var text = text.replace(/ö/g, "oe");
	var text = text.replace(/ü/g, "ue");
	var text = text.replace(/ß/g, "aa");
	var text = text.replace(/Ä/g, "Ae");
	var text = text.replace(/Ö/g, "Oe");
	var text = text.replace(/Ü/g, "Ue");
	return text;
}

function changeImageTo(imageUrl) {
	var imageNode = document.getElementById("contentimage");
	imageNode.style.backgroundImage = imageUrl;
}

function activateMenu(menuName) {
	// li - a - #text
	var menuListNode = document.getElementById("menu"); // UL
	var menuItems = menuListNode.childNodes; // LIs
	for (var i = 0; i < menuItems.length; i++) {
		if (menuItems[i].nodeType == 1) { // LI
			var actAnchor = menuItems[i].firstChild; // A
			var actAnchorHref = actAnchor.getAttribute("href")
			var actMenueName = getUrlParam(actAnchorHref, "menu");
			if (actMenueName == menuName) {
				menuItems[i].className = menuItems[i].className.replace(/inactive/g, "active");
				// showMenu-Aufrufe gehen nicht, wenn nur einmal ersetzt wird - keine Ahnung warum!
				menuItems[i].className = menuItems[i].className.replace(/inactive/g, "active");
			} else {
				//alert("act NOT found: " + actMenueName);
				menuItems[i].className = menuItems[i].className.replace(/active/g, "inactive");
			}
		}
	}
}

function getUrlParam(url, name) {
	var regexS = "[\\?&]"+name+"=([^&#]*)";
	var regex = new RegExp(regexS);
	var tmpURL = url;
	var results = regex.exec(tmpURL);
	if (results == null)
		return "";
	else
		return unescape(results[1]);
}

/*
 * Externe Hilfen
 */
function odump(object, depth, max){
  depth = depth || 0;
  max = max || 2;

  if (depth > max)
    return false;

  var indent = "";
  for (var i = 0; i < depth; i++)
    indent += "  ";

  var output = "";  
  for (var key in object){
    output += "<br />" + indent + key + ": ";
    switch (typeof object[key]){
      case "object": output += odump(object[key], depth + 1, max); break;
      case "function": output += "function"; break;
      default: output += object[key]; break;        
    }
  }
  return output;
}
