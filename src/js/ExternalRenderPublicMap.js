import {FlexMap} from '@flexio-oss/flex-types'
import {assertType} from '@flexio-oss/assert'
import {ExternalRenderPublic} from './ExternalRender'


/**
 * @type FlexMap<ExternalRenderPublic>
 */
export class ExternalRenderPublicMap extends FlexMap {
  _validate(v) {
    assertType(
      v instanceof ExternalRenderPublic,
      '`v` should be ExternalRenderPublic'
    )
  }
}
