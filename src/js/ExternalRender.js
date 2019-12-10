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
   * @param {ActionDispatcher<UpdateExternalRender, UpdateExternalRenderBuilder>} updateExternalRenderActionDispatcher
   * @return {ExternalRenderPublic}
   */
  register(changePropertyValueActionDispatcherSubscriber, updateExternalRenderActionDispatcher) {
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
  handlerName() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  ID() {
    throw new Error('should be override')
  }

  /**
   *
   * @param {FieldProperty} fieldProperty
   * @return {ExternalRenderInstancePublic}
   */
  buildRender(fieldProperty) {
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
  handlerName() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  externalRenderID() {
    throw new Error('should be override')
  }

  /**
   * @return {string}
   */
  ID() {
    throw new Error('should be override')
  }

  /**
   *
   * @param {Element} parentElement
   * @return {ExternalRenderInstancePublic}
   */
  mountInto(parentElement) {
    throw new Error('should be override')
  }

  remove() {
    throw new Error('should be override')
  }

}
