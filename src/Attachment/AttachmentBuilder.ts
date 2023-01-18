import { Stream } from "stream";
import { BufferResolvable, AttachmentData } from "../type";

/**
 * Represents an attachment builder
 */
export class AttachmentBuilder {
  public name: string
  public description?: string
  public contents: BufferResolvable | Stream
  public spoiler: boolean = true;
  /**
   * @param {AttachmentData} [data] Data ( nanme = required, description = not required, contents = required)
   */
  constructor(data: AttachmentData) {
    /**
     * The file associated with this attachment.
     * @type {BufferResolvable|Stream}
     */
    this.contents = data.contents;
    /**
     * The name of this attachment
     * @type {?string}
     */
    this.name = data.name;
    /**
     * The description of the attachment
     * @type {?string}
     */
    this.description = data.description;
  }

  /**
   * Sets the description of this attachment.
   * @param {string} description The description of the file
   * @returns {this} This attachment
   */
  setDescription(description: string) {
    this.description = description;
    return this;
  }

  /**
   * Sets the file of this attachment.
   * @param {BufferResolvable|Stream} attachment The file
   * @returns {this} This attachment
   */
  setFile(attachment : BufferResolvable | Stream) {
    this.contents = attachment;
    return this;
  }

  /**
   * Sets the name of this attachment.
   * @param {string} name The name of the file
   * @returns {this} This attachment
   */
  setName(name : string) {
    this.name = name;
    return this;
  }

  /**
   * Sets whether this attachment is a spoiler
   * @param {boolean} [spoiler=true] Whether the attachment should be marked as a spoiler
   * @returns {AttachmentBuilder} This attachment
   */
  setSpoiler(spoiler = true) {
    if (spoiler === this.spoiler) return this;

    if (!spoiler) {
      while (this.spoiler) {
        this.name = this.name!.slice('SPOILER_'.length);
      }
      return this;
    }
    this.name = `SPOILER_${this.name}`;
    return this;
  }

  toJSON() {
    return this;
  }

  build() {
    return this;
  }

  /**
   * Makes a new builder instance from a preexisting attachment structure.
   * @param {JSONEncodable<AttachmentPayload>} other The builder to construct a new instance from
   * @returns {AttachmentBuilder}
   */
  static from(other: AttachmentData) {
    return new AttachmentBuilder({
      name: other.name,
      description: other.description,
      contents: other.contents
    });
  }
}

/**
 * @external APIAttachment
 * @see {@link https://discord.com/developers/docs/resources/channel#attachment-object}
 */

/**
 * @typedef {Object} AttachmentData
 * @property {string} [name] The name of the attachment
 * @property {string} [description] The description of the attachment
 */