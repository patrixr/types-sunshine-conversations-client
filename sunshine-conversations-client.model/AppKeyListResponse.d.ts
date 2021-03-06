export default AppKeyListResponse;
/**
 * The AppKeyListResponse model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/AppKeyListResponse
 * @version 9.0.1
 */
declare class AppKeyListResponse {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>AppKeyListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AppKeyListResponse} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/AppKeyListResponse} The populated <code>AppKeyListResponse</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns List of returned keys.
         * @return {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/AppKey>}
         */
    getKeys(): Array<any>;
    /**
     * Sets List of returned keys.
     * @param {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/AppKey>} keys List of returned keys.
     */
    setKeys(keys: any): void;
    keys: any;
}
