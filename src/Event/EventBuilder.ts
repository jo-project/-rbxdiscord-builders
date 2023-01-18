type EventOptions = (client: any, ...args: any) => unknown

export class EventBuilder {
    public name: string = undefined!;
    public once: boolean = false;
    private callback: EventOptions = undefined!;
    public run: EventOptions = undefined!;

    constructor(once = false) {
        this.once = once;
    }

    /**
     * Set the event name
     * @param name Name of the event
     */
    setName(name : string) : this {
        this.name = name;
        return this;
    }

    /**
     * Set the event callback
     * @param callback Callback of the event
     * @returns 
     */
    setCallback(callback: EventOptions) : this {
        this.callback = callback;
        this.run = this.callback;
        return this;
    }
}