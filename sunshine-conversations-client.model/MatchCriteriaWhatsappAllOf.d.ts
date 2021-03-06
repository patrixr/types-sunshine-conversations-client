export default MatchCriteriaWhatsappAllOf;
/**
 * The MatchCriteriaWhatsappAllOf model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteriaWhatsappAllOf
 * @version 9.0.1
 */
declare class MatchCriteriaWhatsappAllOf {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, phoneNumber: any): void;
    /**
     * Constructs a <code>MatchCriteriaWhatsappAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteriaWhatsappAllOf} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteriaWhatsappAllOf} The populated <code>MatchCriteriaWhatsappAllOf</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>MatchCriteriaWhatsappAllOf</code>.
     * The set of criteria used to determine the user&#39;s identity on a third-party channel.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteriaWhatsappAllOf
     * @param phoneNumber {String} The user’s phone number. It must contain the + prefix and the country code. Examples of valid phone numbers: +1 212-555-2368, +12125552368, +1 212 555 2368. Examples of invalid phone numbers: 212 555 2368, 1 212 555 2368.
     */
    constructor(phoneNumber: string);
    /**
         * Returns The channel type.
         * @return {String}
         */
    getType(): string;
    /**
     * Sets The channel type.
     * @param {String} type The channel type.
     */
    setType(type: string): void;
    type: string;
    /**
         * Returns The user’s phone number. It must contain the + prefix and the country code. Examples of valid phone numbers: +1 212-555-2368, +12125552368, +1 212 555 2368. Examples of invalid phone numbers: 212 555 2368, 1 212 555 2368.
         * @return {String}
         */
    getPhoneNumber(): string;
    /**
     * Sets The user’s phone number. It must contain the + prefix and the country code. Examples of valid phone numbers: +1 212-555-2368, +12125552368, +1 212 555 2368. Examples of invalid phone numbers: 212 555 2368, 1 212 555 2368.
     * @param {String} phoneNumber The user’s phone number. It must contain the + prefix and the country code. Examples of valid phone numbers: +1 212-555-2368, +12125552368, +1 212 555 2368. Examples of invalid phone numbers: 212 555 2368, 1 212 555 2368.
     */
    setPhoneNumber(phoneNumber: string): void;
    phoneNumber: string;
}
