#pragma strict

function Start () {

}

function Update () {

}

var otherSkybox : Material;  // assign via inspector
 

function OnTriggerEnter(other : Collider)
 {
     if (other.tag == "Player1" && RenderSettings.skybox != otherSkybox)
          RenderSettings.skybox = otherSkybox;
 }