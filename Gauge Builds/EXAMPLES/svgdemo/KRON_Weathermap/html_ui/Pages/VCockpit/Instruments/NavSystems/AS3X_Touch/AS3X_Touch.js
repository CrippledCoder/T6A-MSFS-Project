class dial extends BaseInstrument {
    constructor() {
        super();	
    }		

    get templateID() { return "dial"; }
	
    connectedCallback() {
        super.connectedCallback();
        this.wrapper = this.getChildById("gauge");
        this._createSVG();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
    }
    Init() {
        super.Init();
		this.x = -400; this.y = 0; this.zoom = 160;
    }
    Update() {
        super.Update();
		this.wrapper.innerHTML = this.dial; 

		var input = SimVar.GetSimVarValue("AILERON LEFT DEFLECTION PCT", "percent");
		if (Math.abs(input)>10) {this.x -= 10*Math.sign(input)};
		input = SimVar.GetSimVarValue("ELEVATOR DEFLECTION PCT", "percent");
		if (Math.abs(input)>10) {this.y -= 10*Math.sign(input)};
		var input = SimVar.GetSimVarValue("RUDDER DEFLECTION PCT", "percent");
		if (Math.abs(input)>10) {
			this.zoom += 5*Math.sign(input);
			this.x -= (this.zoom*0.1)*Math.sign(input);
			this.y -= (this.zoom*0.1)*Math.sign(input);
		};
		this.ImgPlate.setAttribute('x',this.x);
		this.ImgPlate.setAttribute('y',this.y);
		this.ImgPlate.setAttribute('width',this.zoom+"%");
		this.ImgPlate.setAttribute('height',this.zoom+"%");
	}

	_createSVG() {
        while (this.firstChild) {
            this.removeChild(this.firstChild);
        }

        this.root = document.createElementNS(Avionics.SVG.NS, "svg");
        this.root.setAttribute("width", "100%"); 
		this.root.setAttribute("height", "100%"); 
		this.root.setAttribute("viewBox", "0 0 0 100%"); 
		this.root.setAttribute("overflow", "visible"); 
		this.appendChild(this.root);

		this.ImgPlate = document.createElementNS(Avionics.SVG.NS,'image');
		this.ImgPlate.setAttribute('height','160%');
		this.ImgPlate.setAttribute('width','100%'); 
        this.ImgPlate.setAttributeNS("http://www.w3.org/1999/xlink", "href","https://weather.gc.ca/data/satellite/goes_enam_1070_100.jpg"); //
		this.ImgPlate.setAttribute('x','0');
		this.ImgPlate.setAttribute('y','0');
		this.root.appendChild(this.ImgPlate);
 	}	
}
registerInstrument("dial-element", dial);
