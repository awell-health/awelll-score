import type { CalculationType } from '../../../../api/shared/classes/Calculation'
import { BmiOutputSchema, BmiInputSchema } from './bmi.schema'
import { BMI_FORM_DATA } from './bmi_form'
import { round } from 'mathjs'

export const bmi_us: CalculationType<
  typeof BmiInputSchema,
  typeof BmiOutputSchema
> = {
  name: 'BMI (imperial)',
  readme_location: __dirname,
  inputSchema: BmiInputSchema,
  outputSchema: BmiOutputSchema,
  formData: BMI_FORM_DATA,
  calculate: ({ data }) => {
    const FEET_TO_INCHES_FACTOR = 12
    const US_BMI_FACTOR = 703

    const total_height_in_inches =
      data.height_feet * FEET_TO_INCHES_FACTOR + data.height_inches

    if (total_height_in_inches === 0 || data.weight_pounds === 0) {
      return {
        BMI: null,
      }
    }

    const BMI =
      (data.weight_pounds / total_height_in_inches ** 2) * US_BMI_FACTOR
    const ROUND_TO = 2
    const ROUNDED_BMI = round(BMI, ROUND_TO)

    return {
      BMI: ROUNDED_BMI,
    }
  },
}
