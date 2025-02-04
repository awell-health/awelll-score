import { type DefaultSubscaleType } from '../../../src/types/calculations.types'

const ALLOWED_ANSWERS = [
  { value: 0 },
  { value: 1 },
  { value: 2 },
  { value: 3 },
  { value: 4 },
]

//@ts-expect-error to do
const add_allowed_answers = input => ({
  ...input,
  type: { type: 'number', allowed_answers: ALLOWED_ANSWERS },
})

export const SCL90R_SUBSCALES: Array<DefaultSubscaleType> = [
  {
    id: 'SOMATIZATION',
    input_ids_in_subscale: [
      { input_id: 'Q01' },
      { input_id: 'Q04' },
      { input_id: 'Q12' },
      { input_id: 'Q27' },
      { input_id: 'Q40' },
      { input_id: 'Q42' },
      { input_id: 'Q48' },
      { input_id: 'Q49' },
      { input_id: 'Q52' },
      { input_id: 'Q53' },
      { input_id: 'Q56' },
      { input_id: 'Q58' },
    ].map(add_allowed_answers),
  },
  {
    id: 'OBSESSIVE_COMPULSIVE',
    input_ids_in_subscale: [
      { input_id: 'Q03' },
      { input_id: 'Q09' },
      { input_id: 'Q10' },
      { input_id: 'Q28' },
      { input_id: 'Q38' },
      { input_id: 'Q45' },
      { input_id: 'Q46' },
      { input_id: 'Q51' },
      { input_id: 'Q55' },
      { input_id: 'Q65' },
    ].map(add_allowed_answers),
  },
  {
    id: 'INTERPERSONAL_SENSITIVITY',
    input_ids_in_subscale: [
      { input_id: 'Q06' },
      { input_id: 'Q21' },
      { input_id: 'Q34' },
      { input_id: 'Q36' },
      { input_id: 'Q37' },
      { input_id: 'Q41' },
      { input_id: 'Q61' },
      { input_id: 'Q69' },
      { input_id: 'Q73' },
    ].map(add_allowed_answers),
  },
  {
    id: 'DEPRESSION',
    input_ids_in_subscale: [
      { input_id: 'Q05' },
      { input_id: 'Q14' },
      { input_id: 'Q15' },
      { input_id: 'Q20' },
      { input_id: 'Q22' },
      { input_id: 'Q26' },
      { input_id: 'Q29' },
      { input_id: 'Q30' },
      { input_id: 'Q31' },
      { input_id: 'Q32' },
      { input_id: 'Q54' },
      { input_id: 'Q71' },
      { input_id: 'Q79' },
    ].map(add_allowed_answers),
  },
  {
    id: 'ANXIETY',
    input_ids_in_subscale: [
      { input_id: 'Q02' },
      { input_id: 'Q17' },
      { input_id: 'Q23' },
      { input_id: 'Q33' },
      { input_id: 'Q39' },
      { input_id: 'Q57' },
      { input_id: 'Q72' },
      { input_id: 'Q78' },
      { input_id: 'Q80' },
      { input_id: 'Q86' },
    ].map(add_allowed_answers),
  },
  {
    id: 'HOSTILITY',
    input_ids_in_subscale: [
      { input_id: 'Q11' },
      { input_id: 'Q24' },
      { input_id: 'Q63' },
      { input_id: 'Q67' },
      { input_id: 'Q74' },
      { input_id: 'Q81' },
    ].map(add_allowed_answers),
  },
  {
    id: 'PHOBIC_ANXIETY',
    input_ids_in_subscale: [
      { input_id: 'Q13' },
      { input_id: 'Q25' },
      { input_id: 'Q47' },
      { input_id: 'Q50' },
      { input_id: 'Q70' },
      { input_id: 'Q75' },
      { input_id: 'Q82' },
    ].map(add_allowed_answers),
  },
  {
    id: 'PARANOID_IDEATION',
    input_ids_in_subscale: [
      { input_id: 'Q08' },
      { input_id: 'Q18' },
      { input_id: 'Q43' },
      { input_id: 'Q68' },
      { input_id: 'Q76' },
      { input_id: 'Q83' },
    ].map(add_allowed_answers),
  },
  {
    id: 'PSYCHOTICISM',
    input_ids_in_subscale: [
      { input_id: 'Q07' },
      { input_id: 'Q16' },
      { input_id: 'Q35' },
      { input_id: 'Q62' },
      { input_id: 'Q77' },
      { input_id: 'Q84' },
      { input_id: 'Q85' },
      { input_id: 'Q87' },
      { input_id: 'Q88' },
      { input_id: 'Q90' },
    ].map(add_allowed_answers),
  },
  {
    id: 'ADDITIONAL_ITEMS',
    input_ids_in_subscale: [
      { input_id: 'Q19' },
      { input_id: 'Q44' },
      { input_id: 'Q59' },
      { input_id: 'Q60' },
      { input_id: 'Q64' },
      { input_id: 'Q66' },
      { input_id: 'Q89' },
    ].map(add_allowed_answers),
  },
]
