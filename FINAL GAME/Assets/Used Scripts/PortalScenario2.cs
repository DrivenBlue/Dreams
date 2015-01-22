using UnityEngine;
using System.Collections;

public class PortalScenario2 : MonoBehaviour {

	public GameObject otherPortal;
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}

	void OnTriggerEnter(Collider other){

		Application.LoadLevel (3); 
	}
}
