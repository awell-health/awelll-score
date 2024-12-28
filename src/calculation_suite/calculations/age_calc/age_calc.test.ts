import { expect } from 'chai'
import moment from 'moment'

import { CALCULATIONS } from '../calculation_library'
import { age_calc } from './age_calc'
import { Calculation } from '../../../api/shared/classes/Calculation'

const calculate_age = new Calculation(age_calc)

describe('age_calc', function () {
  it('age_calc calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.have.property('age_calc')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = ['date_of_birth']

      const configured_calculation_input_ids = Object.keys(
        calculate_age.inputSchema.shape
      )

      expect(configured_calculation_input_ids).to.have.members(
        EXPECTED_CALCULATION_INPUT_IDS
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = calculate_age.calculate({
      payload: { date_of_birth: '1993-11-30' },
    })

    it('should return 1 calculation result', function () {
      expect(Object.keys(outcome)).to.have.length(1)
    })

    it('should have the expected calculation id', function () {
      const EXPECTED_CALCULATION_ID = ['AGE']
      const configured_calculation_id = Object.keys(outcome)

      expect(configured_calculation_id).to.eql(EXPECTED_CALCULATION_ID)
    })
  })

  describe('each calculated score shall include the correct formula and output the correct result', function () {
    it('should return correct result age', function () {
      const dob = '1993-11-30'

      const result = calculate_age.calculate({
        payload: { date_of_birth: '1993-11-30' },
      })

      const EXPECTED_AGE = moment().diff(dob, 'years')

      expect(result.AGE).to.eql(EXPECTED_AGE)
    })
  })
})
