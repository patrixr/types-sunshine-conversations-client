export default Apple;
/**
 * The Apple model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Apple
 * @version 9.0.1
 */
declare class Apple {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, type: any, businessId: any, apiSecret: any, mspId: any): void;
    /**
     * Constructs a <code>Apple</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Apple} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Apple} The populated <code>Apple</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>Apple</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Apple
     * @extends module:sunshine-conversations-client/sunshine-conversations-client.model/Integration
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/Integration
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/AppleAllOf
     * @param type {String} The type of integration.
     * @param businessId {String} Apple Business Chat ID.
     * @param apiSecret {String} Your Apple API secret which is tied to your Messaging Service Provider.
     * @param mspId {String} Your Messaging Service Provider ID.
     */
    constructor(type: string, businessId: string, apiSecret: string, mspId: string);
    /**
         * Returns The type of integration.
         * @return {String}
         */
    getType(): string;
    /**
     * Sets The type of integration.
     * @param {String} type The type of integration.
     */
    setType(type: string): void;
    type: string;
    /**
         * Returns Apple Business Chat ID.
         * @return {String}
         */
    getBusinessId(): string;
    /**
     * Sets Apple Business Chat ID.
     * @param {String} businessId Apple Business Chat ID.
     */
    setBusinessId(businessId: string): void;
    businessId: string;
    /**
         * Returns Your Apple API secret which is tied to your Messaging Service Provider.
         * @return {String}
         */
    getApiSecret(): string;
    /**
     * Sets Your Apple API secret which is tied to your Messaging Service Provider.
     * @param {String} apiSecret Your Apple API secret which is tied to your Messaging Service Provider.
     */
    setApiSecret(apiSecret: string): void;
    apiSecret: string;
    /**
         * Returns Your Messaging Service Provider ID.
         * @return {String}
         */
    getMspId(): string;
    /**
     * Sets Your Messaging Service Provider ID.
     * @param {String} mspId Your Messaging Service Provider ID.
     */
    setMspId(mspId: string): void;
    mspId: string;
}
