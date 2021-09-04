export class Tank {
    label: String;
    tier: String; 
    type: String; 
    nation: String; 
    category: String; 
    dpm: number; 
    speed: number; 
    frontalArmor: number;
    healthPoints: number; 
    gunDepression: number; 
    silverAlpha: number;
    goldAlpha: number;
    heAlpha: number;
    
    
    constructor(label: String, tier: String,type: String, nation: String, category: String, dpm: number, speed: number,frontalArmor: number, healthPoints: number, gunDepression: number, silverAlpha: number, goldAlpha: number, heAlpha: number) {
        this.label = label;
        this.tier = tier;
        this.type = type;
        this.nation = nation;
        this.category = category;
        this.dpm = dpm;
        this.speed = speed;
        this.frontalArmor = frontalArmor;
        this.healthPoints = healthPoints;
        this.gunDepression = gunDepression;
        this.silverAlpha = silverAlpha;
        this.goldAlpha = goldAlpha;
        this.heAlpha = heAlpha;
    }
}
