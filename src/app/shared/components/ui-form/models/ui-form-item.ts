import { UIInputType } from "./input-type";
import { UIOptionItem } from "./ui-option-item";

/**
 * @description
 * Define type input with parameters
 * Text, Number, Select, Textarea, Checkbox,
 * Radio Buttom, Date or File
 * ```
 * ```
 */
export class UIFormItem {
    /**
     * Name of item inside the FormGroup
     */
    name: string;
    /**
     * Can choose text, number, select, checkbox, radio button
     * or text area
     */
    type: UIInputType;
    /**
     * Label of Form Item, you can use a json value of transalate.
     * Ex.
     *      
     */
    label: string;
    required?: boolean = true;
    regex?: string;
    /**
     * Number type min value
     */
    min?: number;
    /**
     * Number type max value
     */
    max?: number;
    /**
     * Text or Textarea type min length value
     */
    minLength?: number;
    /**
     * Text or Textarea type max length value
     */
    maxLength?: number;
    /**
     * Select type avalible items to select
     */
    optionItems?: UIOptionItem[] = [];
    /**
     * Textarea number of rows
     */
    rows?: number = 4;
    disabled?: boolean = false;
    errorRegexMsg?: string = '';
    value?: string = '';
    help?: string;

    constructor({
        name,
        type,
        label,
        regex,
        required
    }:{
        name: string;
        type?: UIInputType;
        label?: string;
        regex?: string;
        required?: boolean;
    } ){
        this.name = name;
        this.type = type || UIInputType.TEXT;
        this.label = label || '';
        this.regex = regex || '';
        this.required = required || false;
    }
}