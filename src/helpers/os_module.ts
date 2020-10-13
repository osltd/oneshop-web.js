class OS {

    protected baseUrl? : string;

    constructor(_baseUrl?:string) {
        this.baseUrl = _baseUrl || "";
    }

}

export default OS;