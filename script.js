console.log("Hello World");
var script = document.createElement('script');
script.type = "text/javascript";
url = "https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js";

if (script.readyState){  //IE
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" ||
                    script.readyState == "complete"){
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {  //Others
        script.onload = function(){
            callback();
        };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
