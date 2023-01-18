import { ChatInputCommandInteraction, Message, Client } from 'rbx-discord';

export type callback = (client: any, interaction: ChatInputCommandInteraction) => unknown;
export type legacyCallback = (client: any, message: Message, ...args: string[]) => unknown;

export class SharedCallback {
	public readonly callback!: callback;
	public readonly execute!: legacyCallback;

	setCallback(callback: any): this {
		Reflect.set(this, 'callback', callback);

		return this;
    }

	setExecution(callback: legacyCallback): this {
		Reflect.set(this, 'execute', callback)

		return this;
	}
}