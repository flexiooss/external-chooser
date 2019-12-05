import {ExternalChooser} from './ExternalChooser'
import {assertType} from '@flexio-oss/assert'
import {ExternalChooserMap} from './ExternalChooserMap'
import {globalFlexioImport} from '@flexio-oss/global-import-registry'
import {ExternalRenderMap} from './ExternalRenderMap'
import {ExternalRender} from './ExternalRender'


export class TypeCheck {
  /**
   *
   * @param {ExternalChooser} inst
   * @return {boolean}
   */
  static isExternalChooser(inst) {
    return inst instanceof ExternalChooser
  }

  /**
   *
   * @param {ExternalChooser} inst
   * @throws {TypeError}
   */
  static assertIsExternalChooser(inst) {
    assertType(TypeCheck.isExternalChooser(inst), '`inst` should be ExternalChooser')
  }

  /**
   *
   * @param {ExternalChooserMap} inst
   * @return {boolean}
   */
  static isExternalChooserMap(inst) {
    return inst instanceof ExternalChooserMap
  }

  /**
   *
   * @param {ExternalRender} inst
   * @return {boolean}
   */
  static isExternalRender(inst) {
    return inst instanceof ExternalRender
  }

  /**
   *
   * @param {ExternalRender} inst
   * @throws {TypeError}
   */
  static assertIsExternalRender(inst) {
    assertType(TypeCheck.isExternalRender(inst), '`inst` should be ExternalRender')
  }

  /**
   *
   * @param {ExternalRenderMap} inst
   * @return {boolean}
   */
  static isExternalRenderMap(inst) {
    return inst instanceof ExternalRenderMap
  }

  /**
   *
   * @param {ExternalChooserMap} inst
   * @throws {TypeError}
   */
  static assertIsExternalChooserMap(inst) {
    assertType(TypeCheck.isExternalChooserMap(inst), '`inst` should be ExternalChooserMap')
  }

  /**
   *
   * @param {OpenExternalHandler} inst
   * @return {boolean}
   */
  static isOpenExternalHandler(inst) {
    return inst instanceof globalFlexioImport.io.flexio.resource_external_handler.actions.OpenExternalHandler
  }

  /**
   *
   * @param {OpenExternalHandler} inst
   * @throws {TypeError}
   */
  static assertIsOpenExternalChooser(inst) {
    assertType(TypeCheck.isOpenExternalHandler(inst), '`inst` should be OpenExternalHandler')
  }
}
