// not for use in the real app
var items = $('.temporary-stuff > a');
var N = 1592;
var counter = 0;
var classification = [ "bun-ri", "sei-tai", "shi-kou", "kou-ka", "i-hyou", "reki-shou", "se-sou", "doku-sou", "ren-kan", "ban-gai" ];

var i = 0;

var interval = setInterval(function() {
  // replace this with N-2
  if(i > 5) clearInterval(interval);

  $.ajax({
    url: 'http://1000ya.isis.ne.jp/' + fourDigitsString(i+1) + '.html',
    type: 'GET',
    dataType: 'html',
    success: function(data) {
      var j = (N-1)-i;
      var author = items[j*3+0].text;
      var title  = items[j*3+1].text;
      var classificationName = classificationString(items[j*3+2].children[0].currentSrc.substring(40, 42));

      $('#sample').append(data.responseText);
      var links = $('.goth.ref-keydata')[0].children;
      var keywordLength = $('.ref-keyword')[0].children.length;
      var keywords = $('.ref-keyword')[0].innerText;
      var linksArray = [];
      var keywordsArray = [];
      for (var k=0; k<links.length; k++) {
        linksArray.push(links[k].children[0].innerText.substring(0,4));
      }
      for (k=0; k<keywordLength; k++) {
        keywordsArray.push(keywords.split('\n')[k]);
      }
      console.log(author);
      console.log(title);
      console.log(classificationName);
      console.log(linksArray);
      console.log(keywordsArray);

      $('#sample').replaceWith('<div id="sample" hidden="true"></div>');
      i++;
    }
  });

}, 10000);

/*
for (var i=0; i<2; i++) {
  console.log(i)
  $.ajax({
    url: 'http://1000ya.isis.ne.jp/' + fourDigitsString(i+1) + '.html',
    type: 'GET',
    dataType: 'html',
    success: function(data) {
      var j = (N-1)-i;
      var author = items[j*3+0].text;
      var title  = items[j*3+1].text;
      var classificationName = classificationString(items[j*3+2].children[0].currentSrc.substring(40, 42));

      $('#sample').append(data.responseText);
      var links = $('.goth.ref-keydata')[0].children;
      var keywordLength = $('.ref-keyword')[0].children.length;
      var keywords = $('.ref-keyword')[0].innerText;
      var linksArray = [];
      var keywordsArray = [];
      for (var k=0; k<links.length; k++) {
        linksArray.push(links[k].children[0].innerText.substring(0,4));
      }
      for (k=0; k<keywordLength; k++) {
        keywordsArray.push(keywords.split('\n')[k]);
      }
      console.log(author);
      console.log(title);
      console.log(classificationName);
      console.log(linksArray);
      console.log(keywordsArray);
      $('#sample').replaceWith('<div id="sample" hidden="true"></div>');
    }
  });
}

// Fetch Author Name
for (var i=0; i<items.length; i++) {
  if(i%3 === 0) {
    // console.log(items[i].text);
  }
}

// Fetch Book Title
for (var i=0; i<items.length; i++) {
  if(i%3 === 1) {
    // console.log(items[i].text);
  }
}

// Fetch Classification
for (var i=0; i<items.length; i++) {
  if(i%3 === 2) {
    var iruka_id = items[i].children[0].currentSrc.substring(40, 42);
    //console.log(classificationString(iruka_id));
  }
}
*/

// utils below

function classificationString(id) {
  if (id === "01") return classification[0];
  if (id === "02") return classification[1];
  if (id === "03") return classification[2];
  if (id === "04") return classification[3];
  if (id === "05") return classification[4];
  if (id === "06") return classification[5];
  if (id === "07") return classification[6];
  if (id === "08") return classification[7];
  if (id === "09") return classification[8];
  if (id === "10") return classification[9];
}


function fourDigitsString(value) {
	if( value > 999) {
		return String(value);
	} else if ( value > 99) {
		return "0" + String(value);
	} else if ( value > 9 ) {
		return "00" + String(value);
	} else if ( value > 0 ) {
		return "000" + String(value);
	} else {
		return;
	}
}
