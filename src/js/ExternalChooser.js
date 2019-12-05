/**
 * @interface
 */
export class ExternalChooser {
  /**
   * @return {string}
   */
  name() {
    throw new Error('should be override')
  }

  /**
   *
   * @param {ActionDispatcher<PropertyValue, PropertyValueBuilder>} changePropertyValueActionDispatcher
   * @param {ActionDispatcher<OpenExternalHandler, OpenExternalHandlerBuilder>} openExternalChooserActionDispatcher
   * @param {ComponentAtmosphereLayersPublicHandler} layersHandler
   * @return {ExternalChooserPublic}
   */
  register(changePropertyValueActionDispatcher, openExternalChooserActionDispatcher, layersHandler) {
    throw new Error('should be override')
  }

}


/**
 * @interface
 */
export class ExternalChooserPublic {
  /**
   * @return {string}
   */
  ID() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  handlerName() {
    throw new Error('should be override')
  }

  remove() {
    throw new Error('should be override')
  }
}
