export default AppResponse;
/**
 * The AppResponse model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/AppResponse
 * @version 9.0.1
 */
declare class AppResponse {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>AppResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AppResponse} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/AppResponse} The populated <code>AppResponse</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns The app.
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/App}
         */
    getApp(): any;
    /**
     * Sets The app.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/App} app The app.
     */
    setApp(app: any): void;
    app: any;
}
