walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;
	
	var tagName = node.tagName ? node.tagName.toLowerCase() : "";
	if (tagName == 'input' || tagName == 'textarea') {
		return;
	}
	if (node.classList && node.classList.contains('ace_editor')) {
		return;
	}

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bA Mask\b/g, "Pants");
	v = v.replace(/\bA mask\b/g, "Pants");
	v = v.replace(/\ba Mask\b/g, "Pants");
	v = v.replace(/\ba mask\b/g, "pants");

  // this one has to come second, so it doesn't block the first
  v = v.replace(/\bMask\b/g, "Pants");
	v = v.replace(/\bmask\b/g, "pants");

  v = v.replace(/\bMasks\b/g, "Pants");
	v = v.replace(/\bmasks\b/g, "pants");

  v = v.replace(/\bAnti-Mask\b/g, "Anti-Pants");
	v = v.replace(/\bAnti-mask\b/g, "Anti-pants");
	v = v.replace(/\banti-Mask\b/g, "anti-Pants");
	v = v.replace(/\banti-mask\b/g, "anti-pants");

  v = v.replace(/\bMask Mandate\b/g, "Pants Mandate");
	v = v.replace(/\bMask mandate\b/g, "Pants mandate");
	v = v.replace(/\bmask Mandate\b/g, "pants Mandate");
	v = v.replace(/\bmask mandate\b/g, "pants mandate");
	
	textNode.nodeValue = v;
}


