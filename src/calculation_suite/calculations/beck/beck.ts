import { z } from 'zod'
import { CalculationType } from '../../../api/shared/classes/Calculation'
import { InputSchema, BECK_OUTPUT, BECK_INPUTS } from './definition'
import _ from 'lodash'

/**
 * The answer values of question 16 and 18 have to be standardized
 */
const RAW_ANSWER_TO_VALUE_DICT: Record<string, number> = {
  '0': 0,
  '1': 1, // 1a
  '2': 1, // 1b
  '3': 2, // 2a
  '4': 2, // 2b
  '5': 3, // 3a
  '6': 3, // 3b
}

const preprocess_beck_response = (
  beck_inputs_with_answers: z.infer<typeof InputSchema>
): Record<string, number> => {
  const QUESTIONS_TO_PREPROCESS = ['Q16', 'Q18']

  return _.mapValues(beck_inputs_with_answers, (val, key) => {
    if (QUESTIONS_TO_PREPROCESS.includes(key)) {
      const value_in_dict = RAW_ANSWER_TO_VALUE_DICT[String(val)]
      return value_in_dict
    }

    return val
  })
}

export const beck: CalculationType<typeof InputSchema, typeof BECK_OUTPUT> = {
  name: 'Beck Depression Inventory (BDI)',
  readme_location: __dirname,
  inputSchema: InputSchema,
  outputSchema: BECK_OUTPUT,
  formData: BECK_INPUTS,
  calculate: ({ data }) => {
    const preprocessed_data = preprocess_beck_response(data)
    const score = _.sum(Object.values(preprocessed_data))

    return {
      beck: score,
    }
  },
}
