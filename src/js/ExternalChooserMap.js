import {FlexMap} from '@flexio-oss/flex-types'
import {assertType} from '@flexio-oss/assert'
import {ExternalChooser} from './ExternalChooser'

/**
 * @type FlexMap<ExternalChooser>
 */
export class ExternalChooserMap extends FlexMap {
  _validate(v) {
    assertType(
      v instanceof ExternalChooser,
      '`v` should be ExternalChooser'
    )
  }
}
