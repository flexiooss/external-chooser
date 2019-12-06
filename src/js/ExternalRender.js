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
   * @param {ActionDispatcher<PropertyValue, PropertyValueBuilder>} changePropertyValueActionDispatcherSubscriber
   * @return {ExternalRenderPublic}
   */
  register(changePropertyValueActionDispatcherSubscriber) {
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
   * @return {string}
   */
  handlerName() {
    throw new Error('should be override')
  }

  /**
   *
   * @param {OpenExternalHandler} openExternalHandler
   * @param {Element} parentElement
   * @return {ExternalRenderInstancePublic}
   */
  renderInto(openExternalHandler, parentElement) {
    throw new Error('should be override')
  }

  remove() {
    throw new Error('should be override')
  }

}


/**
 * @interface
 */
export class ExternalRenderInstancePublic {
  /**
   * @return {string}
   */
  ID() {
    throw new Error('should be override')
  }

  remove() {
    throw new Error('should be override')
  }

}
