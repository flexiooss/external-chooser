import {ExternalChooser} from './ExternalChooser'
import {assertType} from '@flexio-oss/assert'
import {ExternalChooserMap} from './ExternalChooserMap'
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
   * @param {ExternalChooserMap} inst
   * @throws {TypeError}
   */
  static assertIsExternalChooserMap(inst) {
    assertType(TypeCheck.isExternalChooserMap(inst), '`inst` should be ExternalChooserMap')
  }

  /**
   *
   * @param {OpenExternalChooser} inst
   * @return {boolean}
   */
  static isOpenExternalChooser(inst) {
    return inst instanceof globalFlexioImport.io.flexio.external_chooser.actions.OpenExternalChooser
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
