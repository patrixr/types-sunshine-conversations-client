export default AndroidUpdateAllOf;
/**
 * The AndroidUpdateAllOf model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/AndroidUpdateAllOf
 * @version 9.0.1
 */
declare class AndroidUpdateAllOf {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>AndroidUpdateAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AndroidUpdateAllOf} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/AndroidUpdateAllOf} The populated <code>AndroidUpdateAllOf</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns Your server key from the fcm console.
         * @return {String}
         */
    getServerKey(): string;
    /**
     * Sets Your server key from the fcm console.
     * @param {String} serverKey Your server key from the fcm console.
     */
    setServerKey(serverKey: string): void;
    serverKey: string;
    /**
         * Returns Your sender id from the fcm console.
         * @return {String}
         */
    getSenderId(): string;
    /**
     * Sets Your sender id from the fcm console.
     * @param {String} senderId Your sender id from the fcm console.
     */
    setSenderId(senderId: string): void;
    senderId: string;
    /**
         * Returns Allows users to create more than one conversation on the android integration.
         * @return {Boolean}
         */
    getCanUserCreateMoreConversations(): boolean;
    /**
     * Sets Allows users to create more than one conversation on the android integration.
     * @param {Boolean} canUserCreateMoreConversations Allows users to create more than one conversation on the android integration.
     */
    setCanUserCreateMoreConversations(canUserCreateMoreConversations: boolean): void;
    canUserCreateMoreConversations: boolean;
}
