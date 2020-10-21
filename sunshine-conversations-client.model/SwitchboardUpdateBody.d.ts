export default SwitchboardUpdateBody;
/**
 * The SwitchboardUpdateBody model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardUpdateBody
 * @version 9.0.1
 */
declare class SwitchboardUpdateBody {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>SwitchboardUpdateBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardUpdateBody} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardUpdateBody} The populated <code>SwitchboardUpdateBody</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns Whether the switchboard is enabled. Allows creating the switchboard in a disabled state so that messages don't get lost or misrouted during switchboard configuration. When a switchboard is disabled, integrations linked to the switchboard will receive all events.
         * @return {Boolean}
         */
    getEnabled(): boolean;
    /**
     * Sets Whether the switchboard is enabled. Allows creating the switchboard in a disabled state so that messages don't get lost or misrouted during switchboard configuration. When a switchboard is disabled, integrations linked to the switchboard will receive all events.
     * @param {Boolean} enabled Whether the switchboard is enabled. Allows creating the switchboard in a disabled state so that messages don't get lost or misrouted during switchboard configuration. When a switchboard is disabled, integrations linked to the switchboard will receive all events.
     */
    setEnabled(enabled: boolean): void;
    enabled: boolean;
    /**
         * Returns The id of the switchboard integration that will be given control when a new conversation begins. It will also be used for conversations that existed before the switchboard was enabled.
         * @return {String}
         */
    getDefaultSwitchboardIntegrationId(): string;
    /**
     * Sets The id of the switchboard integration that will be given control when a new conversation begins. It will also be used for conversations that existed before the switchboard was enabled.
     * @param {String} defaultSwitchboardIntegrationId The id of the switchboard integration that will be given control when a new conversation begins. It will also be used for conversations that existed before the switchboard was enabled.
     */
    setDefaultSwitchboardIntegrationId(defaultSwitchboardIntegrationId: string): void;
    defaultSwitchboardIntegrationId: string;
}
