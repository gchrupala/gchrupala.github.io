/*
 * Dynamic Table of Contents script
 * by Matt Whitlock <http://www.whitsoftdev.com/>
 */

function createLink(href, innerHTML) {
    var a = document.createElement("a");
    a.setAttribute("href", href);
    a.innerHTML = innerHTML;
    return a;
}

function generateTOC(toc) {
    var i2 = 0, i3 = 0, i4 = 0;
    toc = toc.appendChild(document.createElement("ul"));
    
    var headers = document.getElementById('main').childNodes;
//    headers = headers.concat(document.getElementsByTagName('h3'),document.getElementsByTagName('h4'));
    for (var i = 0; i < headers.length; ++i) {
	var node = headers[i];
	var tagName = node.nodeName.toLowerCase();
	//	alert(tagName);
	// if (tagName == "h4") {
	//    ++i4;
	//    if (i4 == 1) toc.lastChild.lastChild.lastChild.appendChild(document.createElement("ul"));
	//    var section = i2 + "." + i3 + "." + i4;
	//    node.id = "section" + section;
	//    toc.lastChild.lastChild.lastChild.lastChild.appendChild(document.createElement("li")).appendChild(createLink("#section" + section, node.innerHTML));
	// }
	// else if (tagName == "h3") {
	//    ++i3, i4 = 0;
	//    if (i3 == 1) toc.lastChild.appendChild(document.createElement("ul"));
	//    var section = i2 + "." + i3;
	//    node.id = "section" + section;
	//    toc.lastChild.lastChild.appendChild(document.createElement("li")).appendChild(createLink("#section" + section, node.innerHTML));
	// }
	//else
	if (tagName == "h2") {
	    ++i2, i3 = 0, i4 = 0;
	    var section = i2;
	    node.id = "section" + section;
	    toc.appendChild(h2item = document.createElement("li")).appendChild(createLink("#section" + section, node.innerHTML));
	}
    }
}
