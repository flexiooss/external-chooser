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
   * @return {ExternalRenderPublic}
   */
  register() {
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
   * @param {View, ExternalChooserOpenableFieldInterface , FormFieldEditableInterface ,FormFieldInterface} view
   * @return {Element}
   */
  editableElementFor(view) {
    throw new Error('should be override')
  }

  /**
   *
   * @param {View, ExternalChooserOpenableFieldInterface , FormFieldEditableInterface ,FormFieldInterface} view
   * @return {Element}
   */
  readableElementFor(view) {
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
