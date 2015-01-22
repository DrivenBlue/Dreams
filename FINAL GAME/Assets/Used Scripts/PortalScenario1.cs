using UnityEngine;
using System.Collections;

public class PortalScenario1 : MonoBehaviour {
		
		public GameObject otherPortal;
		
		void Start () {
			
		}
		
		void Update () {
			
		}
		
		void OnTriggerEnter(Collider other) {
			
			Application.LoadLevel (2); 
		}

}
