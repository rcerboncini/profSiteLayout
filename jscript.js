function adjheight(){/* used to adjust the height of left and right panel following the middle panel */
	document.getElementById('left').style.height = getComputedStyle(document.getElementById('middle'), null).height;
	document.getElementById('right').style.height = getComputedStyle(document.getElementById('middle'), null).height;
}

function pageshifter(current, other1, other2, other3) {/* increase or decrease parameters based on the number of pages in your site*/
  	document.getElementById(current).style.display = 'block';
  	document.getElementById(other1).style.display = 'none';
  	document.getElementById(other2).style.display = 'none';
  	document.getElementById(other3).style.display = 'none';
  }

function langchange() {/*add more languages if needed*/
  if (document.getElementById('langswitch').value == "PT") {
  	document.getElementById('PTmenu').style.display = 'block';
  	document.getElementById('lefttextPT').style.display = 'block';
  	document.getElementById('cvPT').style.display = 'block';
  	document.getElementById('profilePT').style.display = 'block';
  	document.getElementById('langtextPT').style.display = 'inline-block';
  	document.getElementById('footnotePT').style.display = 'block';
  	document.getElementById('ENmenu').style.display = 'none';
  	document.getElementById('lefttextEN').style.display = 'none';
  	document.getElementById('cvEN').style.display = 'none';
  	document.getElementById('profileEN').style.display = 'none';
  	document.getElementById('langtextEN').style.display = 'none';
  	document.getElementById('footnoteEN').style.display = 'none';

  	if (getComputedStyle(document.getElementById('aboutEN'), null).display == 'block') {
  		document.getElementById('aboutEN').style.display = 'none';
  		document.getElementById('aboutPT').style.display = 'block';
  	}

  	else if (getComputedStyle(document.getElementById('portEN'), null).display == 'block') {
  		document.getElementById('portEN').style.display = 'none';
  		document.getElementById('portPT').style.display = 'block';
  	}

  	else if (getComputedStyle(document.getElementById('codeEN'), null).display == 'block') {
  		document.getElementById('codeEN').style.display = 'none';
  		document.getElementById('codePT').style.display = 'block';
  	}

  	else if (getComputedStyle(document.getElementById('contEN'), null).display == 'block') {
  		document.getElementById('contEN').style.display = 'none';
  		document.getElementById('contPT').style.display = 'block';
  	}
  }
  			
  else if (document.getElementById('langswitch').value == "EN") {
   	document.getElementById('PTmenu').style.display = 'none';
  	document.getElementById('lefttextPT').style.display = 'none';
  	document.getElementById('cvPT').style.display = 'none';
  	document.getElementById('profilePT').style.display = 'none';
  	document.getElementById('langtextPT').style.display = 'none';
  	document.getElementById('footnotePT').style.display = 'none';
  	document.getElementById('ENmenu').style.display = 'block';
  	document.getElementById('lefttextEN').style.display = 'block';
  	document.getElementById('cvEN').style.display = 'block';
  	document.getElementById('profileEN').style.display = 'block';
  	document.getElementById('langtextEN').style.display = 'inline-block';
  	document.getElementById('footnoteEN').style.display = 'block';
  				
  	if (getComputedStyle(document.getElementById('aboutPT'), null).display == 'block') {
  		document.getElementById('aboutPT').style.display = 'none';
  		document.getElementById('aboutEN').style.display = 'block';
  	}

  	else if (getComputedStyle(document.getElementById('portPT'), null).display == 'block') {
  		document.getElementById('portPT').style.display = 'none';
  		document.getElementById('portEN').style.display = 'block';
  	}

  	else if (getComputedStyle(document.getElementById('codePT'), null).display == 'block') {
  		document.getElementById('codePT').style.display = 'none';
  		document.getElementById('codeEN').style.display = 'block';
  	}

  	else if (getComputedStyle(document.getElementById('contPT'), null).display == 'block') {
  		document.getElementById('contPT').style.display = 'none';
  		document.getElementById('contEN').style.display = 'block';
  	}
  }
}	