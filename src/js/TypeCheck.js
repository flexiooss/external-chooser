import {ExternalChooser, ExternalChooserPublic} from './ExternalChooser'
import {assertType} from '@flexio-oss/assert'
import {ExternalChooserPublicMap} from './ExternalChooserPublicMap'
import {globalFlexioImport} from '@flexio-oss/global-import-registry'


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
   * @param {ExternalChooserPublic} inst
   * @return {boolean}
   */
  static isExternalChooserPublic(inst) {
    return inst instanceof ExternalChooserPublic
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
   * @param {ExternalChooserPublicMap} inst
   * @return {boolean}
   */
  static isExternalChooserPublicMap(inst) {
    return inst instanceof ExternalChooserPublicMap
  }

  /**
   *
   * @param {OpenExternalChooser} inst
   * @return {boolean}
   */
  static isOpenExternalChooser(inst) {
    return inst instanceof globalFlexioImport.io.flexio.resource_external_handler.actions.OpenExternalChooser
  }

  /**
   *
   * @param {OpenExternalChooser} inst
   * @throws {TypeError}
   */
  static assertIsOpenExternalChooser(inst) {
    assertType(TypeCheck.isOpenExternalChooser(inst), '`inst` should be OpenExternalChooser')
  }

}
