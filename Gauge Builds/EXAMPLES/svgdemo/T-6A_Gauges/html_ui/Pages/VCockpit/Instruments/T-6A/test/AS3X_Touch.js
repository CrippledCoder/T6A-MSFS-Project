class dial extends BaseInstrument {
    constructor() {
        super();	
		this.dial = 0;
		this.path = "/Pages/VCockpit/Instruments/NavSystems/AS3X_Touch/"; // make dynamic?
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
    }
    Update() {
        super.Update();
		this.wrapper.innerHTML = this.dial; 
		this._updateSVG();
	}
    onInteractionEvent(_args) {
		if (_args[0].indexOf("INC")!=-1) {this.dial+=10};
		if (_args[0].indexOf("DEC")!=-1) {this.dial-=10};
    }

	_createSVG() {
        while (this.firstChild) {
            this.removeChild(this.firstChild);
        }

        this.root = document.createElementNS(Avionics.SVG.NS, "svg");
        this.root.setAttribute("width", "45%"); 
		this.root.setAttribute("height", "100%"); 
		this.root.setAttribute("viewBox", "0 0 50 530"); 
		this.root.setAttribute("overflow", "visible"); 
		this.appendChild(this.root);

		this.ImgPlate = document.createElementNS(Avionics.SVG.NS,'image');
		this.ImgPlate.setAttribute('height','289');
		this.ImgPlate.setAttribute('width','500');
        this.ImgPlate.setAttributeNS("http://www.w3.org/1999/xlink", "href",this.path+"plate.jpg");
		this.ImgPlate.setAttribute('x','0');
		this.ImgPlate.setAttribute('y','100');
		this.root.appendChild(this.ImgPlate);

		this.ImgPointer = document.createElementNS(Avionics.SVG.NS,'image');
		this.ImgPointer.setAttribute('height','150');
		this.ImgPointer.setAttribute('width','40');
        this.ImgPointer.setAttributeNS("http://www.w3.org/1999/xlink", "href",this.path+"pointer.jpg");
		this.ImgPointer.setAttribute('x','230');
		this.ImgPointer.setAttribute('y','250');
		this.root.appendChild(this.ImgPointer);
 	}	
	_updateSVG() {
		this.ImgPointer.setAttribute('transform','rotate('+this.dial+' 250 380)');
    }
}
registerInstrument("dial-element", dial);
