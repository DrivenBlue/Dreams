using UnityEngine;
using System.Collections;

public class StepThroughPortal : MonoBehaviour {

	//public GameObject otherPortal;
	
	void Start () {
	
	}

	void Update () {
	
	}

	void OnTriggerEnter(Collider other) {

		if (other.tag == "Player0") {
			Application.LoadLevel (1);
						//other.transform.position = otherPortal.transform.position + otherPortal.transform.forward * 1;
						//other.transform.rotation = other.transform.rotation;

	}
}
}