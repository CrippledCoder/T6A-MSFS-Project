class KX155A extends BaseInstrument {
    constructor() {
        super();
        this.radioIndex = 1;
    }
    get templateID() { return "KX155A"; }
    connectedCallback() {
        super.connectedCallback();
        this.comActiveFreq = this.getChildById("ComActiveFreq");
        this.comStandbyFreq = this.getChildById("ComStandbyFreq");
        this.navActiveFreq = this.getChildById("NavActiveFreq");
        this.navRightDisplay = this.getChildById("NavRightDisplay");
        var parsedUrl = new URL(this.getAttribute("Url"));
        let index = parsedUrl.searchParams.get("Index");
        if (index)
            this.radioIndex = parseInt(index);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
    }
    Init() {
        super.Init();
    }
    Update() {
        super.Update();
        if (this.CanUpdate()) {
            if (this.updateElectricity()) {
				if (this.radioIndex==1) {
					
					/**** EDIT THESE SIMVARS FOR TOP STACK ****/
					this.comActiveFreq.textContent = SimVar.GetSimVarValue("AILERON LEFT DEFLECTION PCT", "percent").toFixed(2); 
					this.comStandbyFreq.textContent = SimVar.GetSimVarValue("ELEVATOR DEFLECTION PCT", "percent").toFixed(2); 
					this.navActiveFreq.textContent = SimVar.GetSimVarValue("RUDDER DEFLECTION PCT", "percent").toFixed(2); 
					this.navRightDisplay.textContent = SimVar.GetSimVarValue("BRAKE INDICATOR", "position").toFixed(2); ; 
					
				} else {
					
					/**** EDIT THESE SIMVARS FOR BOTTOM STACK ****/
					this.comActiveFreq.textContent = SimVar.GetSimVarValue("GENERAL ENG THROTTLE LEVER POSITION:1", "percent").toFixed(0); 
					this.comStandbyFreq.textContent = SimVar.GetSimVarValue("PROP RPM:1", "rpm").toFixed(0); 
					this.navActiveFreq.textContent = SimVar.GetSimVarValue("PLANE ALTITUDE", "feet").toFixed(1); 
					this.navRightDisplay.textContent = SimVar.GetSimVarValue("PLANE ALT ABOVE GROUND", "feet").toFixed(1); 
					
				};
            }
        }
    }
   
}
registerInstrument("kx155a-element", KX155A);
//# sourceMappingURL=KX155A.js.map