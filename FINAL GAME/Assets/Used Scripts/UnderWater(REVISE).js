#pragma strict

var waterLevel : float;
private var isUnderwater : boolean;
private var normalColor : Color;
private var underwaterColor : Color;
 var chMotor : CharacterMotor;

function Start () 
	{
		normalColor = new Color (0.5f, 0.5f, 0.5f, 0.5f);
        underwaterColor = new Color (0.22f, 0.65f, 0.77f, 0.5f);
        chMotor = GetComponent(CharacterMotor);
    }

function Update () 
	{
            if ((transform.position.y < waterLevel) != isUnderwater) 
			{
                isUnderwater = transform.position.y < waterLevel;
                if (isUnderwater) SetUnderwater ();
                if (!isUnderwater) SetNormal ();
            }
            
     }

function SetNormal () 
		{
            RenderSettings.fogColor = normalColor;
            RenderSettings.fogDensity = 0.002f;
            
        }
     
function SetUnderwater () 
		{
            RenderSettings.fogColor = underwaterColor;
            RenderSettings.fogDensity = 0.03f;
            chMotor.movement.gravity = 2;
            chMotor.movement.maxFallSpeed = 5;
            chMotor.movement.maxForwardSpeed = 4;
            chMotor.movement.maxSidewaysSpeed = 4;

        }