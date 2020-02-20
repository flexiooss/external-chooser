/**
 * @interface
 */
export class ExternalRender {
  /**
   * @return {string}
   */
  name() {
    throw new Error('should be override')
  }

  /**
   *
   * @param {ActionDispatcher<PropertyValue, PropertyValueBuilder>} changePropertyValueActionDispatcher
   * @param {ComponentKeyboardShortCutPublic} keyboardShortCutComponent
   * @return {ExternalRenderPublic}
   */
  register(changePropertyValueActionDispatcher, keyboardShortCutComponent) {
    throw new Error('should be override')
  }

}


/**
 * @interface
 */
export class ExternalRenderPublic {
  /**
   * @return {string}
   */
  ID() {
    throw new Error('should be override')
  }

  /**
   *
   * @param {PropertyValue} propertyValue
   * @return {Element}
   */
  editableElementFor(propertyValue) {
    throw new Error('should be override')
  }

  /**
   *
   * @param {PropertyValue} propertyValue
   * @return {Element}
   */
  readableElementFor(propertyValue) {
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
