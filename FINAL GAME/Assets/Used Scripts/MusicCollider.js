#pragma strict



function OnTriggerEnter(collider: Collider){
    
    if (collider.tag == "Player"){
    
            audio.Play();
    }else {
        
        audio.Stop();
    }
}