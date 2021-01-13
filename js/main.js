/*const links = [
	{
	    label: "Week1 notes",
		url: "week1/index.html"
		
	}
  ]*/
  
  function loadIndex() { 
	 
	 // instead of using a static JSON object (which is commented out above) 
	 //a dynamic one is created here
	  var jsonArray = new Array();
	   
	  for (i=0; i < 14; i++) {

		  var jsonObject = new Object();
		  if ((i + 1) < 10 ){
			 var weekNumber = "0" + (i + 1);
		  }
		  else
			 var weekNumber = "" + (i + 1);
		  
		  jsonObject.label =  "Week " + (i +1) + " notes";
		  jsonObject.url = "week" + weekNumber + "/index.html";
		  jsonArray.push(jsonObject);
		  
	  }
	 
	 
	 //eventually, if a jason object is passed through from elsehwere it can just replace links
	 var links = JSON.parse(JSON.stringify(jsonArray));
	 
	  var htmlforList = "";
	  
	  for(i = 0; i < 14; i ++) {
		 var thisLink = "<li><a href =\"" + links[i].url + "\">" + links[i].label + "</a></li><br>\n";   
	     htmlforList += thisLink
	   
	  }
	  
	  document.getElementById("index").innerHTML =  htmlforList;
	  
  }
  
 