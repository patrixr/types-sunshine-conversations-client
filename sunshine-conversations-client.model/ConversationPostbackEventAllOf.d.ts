export default ConversationPostbackEventAllOf;
/**
 * The ConversationPostbackEventAllOf model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ConversationPostbackEventAllOf
 * @version 9.0.1
 */
declare class ConversationPostbackEventAllOf {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>ConversationPostbackEventAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationPostbackEventAllOf} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationPostbackEventAllOf} The populated <code>ConversationPostbackEventAllOf</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationPostbackEventAllOfPayload}
         */
    getPayload(): any;
    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationPostbackEventAllOfPayload} payload
     */
    setPayload(payload: any): void;
    payload: any;
}
