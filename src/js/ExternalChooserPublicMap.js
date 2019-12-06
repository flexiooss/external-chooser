import {FlexMap} from '@flexio-oss/flex-types'
import {assertType} from '@flexio-oss/assert'
import {ExternalChooserPublic} from './ExternalChooser'


/**
 * @extends FlexMap.<ExternalChooserPublic>
 * @type FlexMap.<ExternalChooserPublic>
 */
export class ExternalChooserPublicMap extends FlexMap {
  /**
   *
   * @param {ExternalChooserPublic} v
   * @private
   * @override
   */
  _validate(v) {
    assertType(
      v instanceof ExternalChooserPublic,
      '`v` should be ExternalChooserPublic'
    )
  }
}
