import Day from '../enums/days'

export default class Class {
    private _id = 0
    private _name = ""
    private _description = ""
    private _day = Day.monday
    private _color = "#FFF"

    constructor(name: string, description: string, day: Day, color: string, id?: number) {
        this.id = id
        this.name = name
        this.description = description
        this.day = day
        this.color = color
    }

    public get id() {
        return this._id
    }

    public set id(value: number | undefined) {
        if (!value || value < 1) {
            this._id = 1
            return
        }

        this._id = value
    }

    public get name() {
        return this._name
    }
    
    public set name(value : string) {
        if (!value) {
            this._name = "No Name";
            return
        }

        this._name = value;
    }
 
    
    public get description() {
        return this._description
    }

    
    public set description(value : string) {
        if (!value) {
            this._description = "No Description"
            return;
        }

        this._description = value;
    }

    
    public get day() {
        return this._day
    }

    public set day(value : Day) {
        this._day = value;
    }   

    public get color() {
        return this._color
    }

    public set color(value: string) {
        const regex = new RegExp("^#\\w{3,6}")

        if (!value || !regex.test(value)) {
            this._color = '#FFF';
            return;
        }

        this._color = value
    }
}