// @flow

type SeverityType =
  | 'Healthy'
  | 'Low'
  | 'Mild'
  | 'Moderate'
  | 'Moderate-to-severe'
  | 'Severe'

export const YP_CORE_INTERPRATION_TABLE: {| [string]: SeverityType |} = {
  '0': 'Healthy',
  '1': 'Healthy',
  '2': 'Healthy',
  '3': 'Healthy',
  '4': 'Healthy',
  '5': 'Healthy',
  '6': 'Low',
  '7': 'Low',
  '8': 'Low',
  '9': 'Low',
  '10': 'Low',
  '11': 'Mild',
  '12': 'Mild',
  '13': 'Mild',
  '14': 'Mild',
  '15': 'Moderate',
  '16': 'Moderate',
  '17': 'Moderate',
  '18': 'Moderate',
  '19': 'Moderate',
  '20': 'Moderate-to-severe',
  '21': 'Moderate-to-severe',
  '22': 'Moderate-to-severe',
  '23': 'Moderate-to-severe',
  '24': 'Moderate-to-severe',
  '25': 'Severe',
  '26': 'Severe',
  '27': 'Severe',
  '28': 'Severe',
  '29': 'Severe',
  '30': 'Severe',
  '31': 'Severe',
  '32': 'Severe',
  '33': 'Severe',
  '34': 'Severe',
  '35': 'Severe',
  '36': 'Severe',
  '37': 'Severe',
  '38': 'Severe',
  '39': 'Severe',
  '40': 'Severe'
}
