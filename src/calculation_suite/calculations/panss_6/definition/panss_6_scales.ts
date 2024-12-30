export type ScaleType = 'POSITIVE_SCALE' | 'NEGATIVE_SCALE'

export const PANNS_6_SCALES: Record<ScaleType, string[]> = {
  POSITIVE_SCALE: [
    'PANSS_6_Q01_DELUSIONS',
    'PANSS_6_Q02_CONCEPTUAL_DISORGANIZATIONS',
    'PANSS_6_Q03_HALLUCINATORY_BEHAVIOR',
  ],
  NEGATIVE_SCALE: [
    'PANSS_6_Q04_BLUNTED_AFFECT',
    'PANSS_6_Q05_PASSIVE_SOCIAL_WITHDRAWAL',
    'PANSS_6_Q06_LACK_OF_SPONTANEITY',
  ],
}
