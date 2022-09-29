import type { CalculationOutputDefinition } from '../../../../types/calculations.types'

export const QOL_STOMA_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'QOL_STOMA',
    label: { en: 'Total score' },
    type: 'number',
  },
]
