import {FlexMap} from '@flexio-oss/flex-types'
import {assertType} from '@flexio-oss/assert'
import {ExternalChooserPublic} from './ExternalChooser'


/**
 * @type FlexMap<ExternalChooserPublic>
 */
export class ExternalChooserPublicMap extends FlexMap {
  _validate(v) {
    assertType(
      v instanceof ExternalChooserPublic,
      '`v` should be ExternalChooserPublic'
    )
  }
}
