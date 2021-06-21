
export class UIOptionItem {
    value: string;
    label: string;
    disabled?: boolean = false;

    constructor(value: string, label: string){
        this.value = value;
        this.label = label; 
        this.disabled = false;
    }

}