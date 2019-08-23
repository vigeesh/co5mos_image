function getData(url) {
		        var xhr = new XMLHttpRequest()
				xhr.onreadystatechange = function() {
	   			 	if (this.readyState === this.DONE) {
	        			console.log(this.status) // do something; the request has completed
	  			  }	
			    }
		        xhr.open("HEAD", url)
		        // xhr.overrideMimeType('application/json')
		        xhr.send()
		        if ((xhr.status === 200) || (xhr.status === 304 ))  {
		            
					return JSON.parse(xhr.responseText)
		        } else {
		            console.log(xhr.status)
		            return []
		        }

			}
									
function changeImage() {
    "use strict";
    if (document.getElementById("intensityimg").src === "http://www3.leibniz-kis.de/~vigeesh/simprogress/intensity.gif") {
        document.getElementById("intensityimg").src = "http://www3.leibniz-kis.de/~vigeesh/simprogress/intensity.png";
    } else {
        document.getElementById("intensityimg").src = "http://www3.leibniz-kis.de/~vigeesh/simprogress/intensity.gif";
    }
}
