  var BreakPoint = 480;

    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
 
    if(w < 480){
        document.getElementById("card").className = "centerDiv";
    }
    else{
        document.getElementById("card").className = "centerDivMobile";
    }
