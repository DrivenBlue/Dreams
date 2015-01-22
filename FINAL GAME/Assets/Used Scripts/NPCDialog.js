var ShowGUI : boolean;

function OnTriggerEnter()
{
	ShowGUI = true;
}

function OnTriggerExit()
{
	ShowGUI = false;
}

function OnGUI()
{
   

if(ShowGUI == true){
	 
	 GUI.Label(new Rect(Screen.width/2 - 75, Screen.height - 100, 150, 30), "I am your friend");
	 
     
	}
}
	