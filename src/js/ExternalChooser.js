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
   * @param {ActionDispatcher<ChangePropertyValue,ChangePropertyValueBuilder>} changePropertyValueActionDispatcher
   * @param {ActionDispatcher<OpenExternalChooser,OpenExternalChooserBuilder>} openExternalChooserActionDispatcher
   * @param {ComponentAtmosphereLayersPublicHandler} layersHandler
   * @return {string}
   */
  register(changePropertyValueActionDispatcher, openExternalChooserActionDispatcher, layersHandler) {
    throw new Error('should be override')
  }

  /**
   *
   * @param {string} token
   */
  remove(token) {
    throw new Error('should be override')
  }
}
