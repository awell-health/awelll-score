// @flow

import type { CalculationOutputDefinition } from '../../../../types/calculations.types'

export const PDI_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'PDI_INDEX',
    label: { en: 'Total score' },
    type: 'number'
  }
]
