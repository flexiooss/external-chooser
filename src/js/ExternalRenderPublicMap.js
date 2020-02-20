import {FlexMap} from '@flexio-oss/flex-types'
import {assertType} from '@flexio-oss/assert'
import {ExternalRenderPublic} from './ExternalRenderPublic'


/**
 * @extends FlexMap.<ExternalRenderPublic>
 * @type FlexMap.<ExternalRenderPublic>
 */
export class ExternalRenderPublicMap extends FlexMap {
  /**
   *
   * @param {ExternalRenderPublic} v
   * @private
   * @override
   */
  _validate(v) {
    assertType(
      v instanceof ExternalRenderPublic,
      '`v` should be ExternalRenderPublic'
    )
  }
}
