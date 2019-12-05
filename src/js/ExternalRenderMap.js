import {FlexMap} from '@flexio-oss/flex-types'
import {assertType} from '@flexio-oss/assert'
import {ExternalRender} from './ExternalRender'

/**
 * @type FlexMap<ExternalRender>
 */
export class ExternalRenderMap extends FlexMap {
  _validate(v) {
    assertType(
      v instanceof ExternalRender,
      '`v` should be ExternalRender'
    )
  }
}
