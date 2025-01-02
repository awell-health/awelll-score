import R from 'ramda'

import type { InputType } from '../../../src/types/calculations.types'
import { rawInputValueLens } from '../../../lib/calculation_variants/api/input/lenses'
import { MISSING_MESSAGE } from '../../../PARAMETERS'
import { is_numeric } from '../../../src/calculation_suite/calculations/shared_functions'

export const calculate_total_score = (
  inputs_with_answers: Array<InputType>,
): number | string => {
  const valid_item_scores = R.compose(
    R.filter(is_numeric),
    R.map(input => R.view(rawInputValueLens, input)),
  )(inputs_with_answers)

  if (valid_item_scores.length === 0) return MISSING_MESSAGE

  return R.sum(valid_item_scores)
}
