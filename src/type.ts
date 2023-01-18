export enum ButtonColors {
    /** PRIMARY - 1 */
    BLURPLE = 1,
    /** SECONDARY - 2 */
    GREY    = 2,
    /** SUCCESS - 3 */
    GREEN   = 3,
    /** DANGER - 4 */
    RED     = 4,
    /** LINK - 5 */
    URL     = 5
}

export type BufferResolvable = Buffer | string;
export type AttachmentData = {
    name: string,
    description: string
    contents: BufferResolvable
}