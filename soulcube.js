function handleVideo()
{
	var vidHolder = document.getElementsByClassName("videoBlock");
	for (var i = 0; i < vidHolder.length; i ++)
	{		
		if  (vidHolder[i] != undefined)
		{
            

            var iframe = vidHolder[i].getElementsByClassName("iframe")[0];
            var resolution = parseInt(iframe.getBoundingClientRect()["height"] ) / parseInt(iframe.getBoundingClientRect()["width"]);
            console.log(resolution);
			if (iframe != undefined)
			{
                console.log((vidHolder[i].offsetWidth * resolution) + "px");
                console.log(vidHolder[i].offsetWidth + "px");

                var percent = 0.9;

                iframe.style.width = (vidHolder[i].offsetWidth * percent)  + "px";
                iframe.style.height = (vidHolder[i].offsetWidth * resolution * percent) + "px"; 

                //vidHolder[i].style.height = (vidHolder[i].offsetWidth * resolution) + "px"; 
			}
			lastVideoWidth = vidHolder[i].offsetWidth;
		}
	}
}

// on-resize
window.addEventListener("resize", handleVideo);
handleVideo();