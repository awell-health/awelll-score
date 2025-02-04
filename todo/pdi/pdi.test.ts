import { expect } from 'chai'

import { ZodError } from '../../errors'
import { execute_test_calculation } from '../../lib/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../lib/get_result_ids_from_calculation_output'
import { view_result } from '../../lib/view_result'
import { MISSING_STATUS } from '../../PARAMETERS'
import { CALCULATIONS } from '../calculation_library'
import { get_input_ids_from_calculation_blueprint } from '../shared_functions'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/pdi_test_responses'
import { PDI_INPUTS } from './definition'
import { pdi } from './pdi'

const pdi_calculation = execute_test_calculation(pdi)

describe('pdi', function () {
  it('pdi calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).toHaveProperty('pdi')
  })

  describe('basic assumptions', function () {
    const outcome = pdi_calculation(best_response)

    it('should have the expected result ids', function () {
      const EXPECTED_RESULT_IDS = ['PDI_INDEX']

      const configured_calculation_ids =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_ids).toEqual(EXPECTED_RESULT_IDS)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'Q01',
          'Q02',
          'Q03',
          'Q04',
          'Q05',
          'Q06',
          'Q07',
        ]

        const configured_input_ids =
          get_input_ids_from_calculation_blueprint(PDI_INPUTS)

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })
    })
  })

  describe('when an answer is below the expected range', function () {
    it('should throw an ZodError', function () {
      expect(() =>
        pdi_calculation({
          Q01: -1,
        }),
      ).toThrow(ZodError)
    })
  })

  describe('when an answer is above the expected range', function () {
    it('should throw an ZodError', function () {
      expect(() =>
        pdi_calculation({
          Q01: 12,
        }),
      ).toThrow(ZodError)
    })
  })

  describe('when there are non-numerical answers', function () {
    it('should throw an ZodError', function () {
      expect(() =>
        pdi_calculation({
          Q01: "I'm not a number",
        }),
      ).toThrow(ZodError)
    })
  })

  describe('when called with an empty response', function () {
    const outcome = pdi_calculation({})

    it('should return missing status for the score', function () {
      expect(outcome[0].status).toEqual(MISSING_STATUS)
    })
  })

  describe('score calculation', function () {
    describe('when called with the worst response', function () {
      const outcome = pdi_calculation(worst_response)

      it('should return the worst score', function () {
        const score = view_result('PDI_INDEX')(outcome)

        expect(score).toEqual(70)
      })
    })

    describe('when called with the best response', function () {
      const outcome = pdi_calculation(best_response)
      it('should return the best score', function () {
        const score = view_result('PDI_INDEX')(outcome)

        expect(score).toEqual(0)
      })
    })

    describe('when called with a median response', function () {
      const outcome = pdi_calculation(median_response)

      it('should return the median score', function () {
        const score = view_result('PDI_INDEX')(outcome)

        expect(score).toEqual(35)
      })
    })

    describe('when called with the random response', function () {
      const outcome = pdi_calculation(random_response)

      it('should return the exepected score', function () {
        const score = view_result('PDI_INDEX')(outcome)

        expect(score).toEqual(20)
      })
    })
  })
})
