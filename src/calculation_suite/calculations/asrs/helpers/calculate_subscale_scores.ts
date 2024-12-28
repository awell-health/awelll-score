import R from 'ramda'

import { ASRS_SUBSCALES, type SubscaleType } from '../definition/asrs_subscales'
import { ASRS_INPUTS, InputSchema } from '../definition'
import { z } from 'zod'
import _ from 'lodash'

export const calculate_subscale_scores = (
  inputs_with_answers: z.infer<typeof InputSchema>,
  subscale: SubscaleType
): number | null => {
  const INPUT_IDS_NEEDED_FOR_SCORING = ASRS_SUBSCALES[subscale]

  const inputs_in_subscale = _.pick(
    inputs_with_answers,
    INPUT_IDS_NEEDED_FOR_SCORING
  )

  const standardized_input_scores = _.map(inputs_in_subscale, (_i, key) => {
    const input_definition = ASRS_INPUTS.find(
      inputDef => inputDef.input_id === key
    )

    if (input_definition === undefined || _i === undefined) return null

    if (input_definition.positive_scores.includes(_i)) return 1

    return 0
  }).filter(v => v !== null)

  if (standardized_input_scores.length === 0) return null

  return R.sum(standardized_input_scores as number[])
}
