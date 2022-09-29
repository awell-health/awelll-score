import type { InputType } from '../../../../../types/calculations.types'

export const EQ5D_5L_INPUTS: Array<InputType> = [
  {
    input_id: 'eq5d_5l_mobility',
    input_label: { nl: 'Mobiliteit', en: 'Mobility' },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 1,
          label: {
            nl: 'Ik heb geen problemen met lopen',
            en: 'I have no problems in walking about',
          },
        },
        {
          value: 2,
          label: {
            nl: 'Ik heb een beetje problemen met lopen',
            en: 'I have slight problems in walking about',
          },
        },
        {
          value: 3,
          label: {
            nl: 'Ik heb matige problemen met lopen',
            en: 'I have moderate problems in walking about',
          },
        },
        {
          value: 4,
          label: {
            nl: 'Ik heb ernstige problemen met lopen',
            en: 'I have severe problems in walking about',
          },
        },
        {
          value: 5,
          label: {
            nl: 'Ik ben niet in staat om te lopen',
            en: 'I am unable to walk about',
          },
        },
      ],
    },
    required: true,
  },
  {
    input_id: 'eq5d_5l_selfcare',
    input_label: { nl: 'Zelfzorg', en: 'Self-care' },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 1,
          label: {
            nl: 'Ik heb geen problemen met mijzelf wassen of aankleden',
            en: 'I have no problems washing or dressing myself',
          },
        },
        {
          value: 2,
          label: {
            nl: 'Ik heb een beetje problemen met mijzelf wassen of aankleden',
            en: 'I have slight problems washing or dressing myself',
          },
        },
        {
          value: 3,
          label: {
            nl: 'Ik heb matige problemen met mijzelf wassen of aankleden',
            en: 'I have moderate problems washing or dressing myself',
          },
        },
        {
          value: 4,
          label: {
            nl: 'Ik heb ernstige problemen met mijzelf wassen of aankleden',
            en: 'I have severe problems washing or dressing myself',
          },
        },
        {
          value: 5,
          label: {
            nl: 'Ik ben niet in staat mijzelf te wassen of aan te kleden',
            en: 'I am unable to wash or dress myself',
          },
        },
      ],
    },
    required: true,
  },
  {
    input_id: 'eq5d_5l_usual',
    input_label: {
      nl: 'Dagelijkse activiteiten (bijv. werk, studie, huishouden, gezins- en vrijetijdsactiviteiten)',
      en: 'Usual activities (e.g. work, study, housework, family or leisure activities)',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 1,
          label: {
            nl: 'Ik heb geen problemen met mijn dagelijkse activiteiten',
            en: 'I have no problems doing my usual activities',
          },
        },
        {
          value: 2,
          label: {
            nl: 'Ik heb een beetje problemen met mijn dagelijkse activiteiten',
            en: 'I have slight problems doing my usual activities',
          },
        },
        {
          value: 3,
          label: {
            nl: 'Ik heb matige problemen met mijn dagelijkse activiteiten ',
            en: 'I have moderate problems doing my usual activities',
          },
        },
        {
          value: 4,
          label: {
            nl: 'Ik heb ernstige problemen met mijn dagelijkse activiteiten',
            en: 'I have severe problems doing my usual activities',
          },
        },
        {
          value: 5,
          label: {
            nl: 'Ik ben niet in staat mijn dagelijkse activiteiten uit te voeren ',
            en: 'I am unable to do my usual activities',
          },
        },
      ],
    },
    required: true,
  },
  {
    input_id: 'eq5d_5l_pain',
    input_label: { nl: 'Pijn/ongemak', en: 'Pain/discomfort' },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 1,
          label: {
            nl: 'Ik heb geen pijn of ongemak',
            en: 'I have no pain or discomfort',
          },
        },
        {
          value: 2,
          label: {
            nl: 'Ik heb een beetje pijn of ongemak',
            en: 'I have slight pain or discomfort',
          },
        },
        {
          value: 3,
          label: {
            nl: 'Ik heb matige pijn of ongemak',
            en: 'I have moderate pain or discomfort',
          },
        },
        {
          value: 4,
          label: {
            nl: 'Ik heb ernstige pijn of ongemak',
            en: 'I have severe pain or discomfort',
          },
        },
        {
          value: 5,
          label: {
            nl: 'Ik heb extreme pijn of ongemak',
            en: 'I have extreme pain or discomfort',
          },
        },
      ],
    },
    required: true,
  },
  {
    input_id: 'eq5d_5l_anxiety',
    input_label: { nl: 'Angst/somberheid', en: 'Anxiety/depression' },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 1,
          label: {
            nl: 'Ik ben niet angstig of somber',
            en: 'I am not anxious or depressed',
          },
        },
        {
          value: 2,
          label: {
            nl: 'Ik ben een beetje angstig of somber',
            en: 'I am slightly anxious or depressed',
          },
        },
        {
          value: 3,
          label: {
            nl: 'Ik ben matig angstig of somber',
            en: 'I am moderately anxious or depressed',
          },
        },
        {
          value: 4,
          label: {
            nl: 'Ik ben erg angstig of somber',
            en: 'I am severely anxious or depressed',
          },
        },
        {
          value: 5,
          label: {
            nl: 'Ik ben extreem angstig of somber',
            en: 'I am extremely anxious or depressed',
          },
        },
      ],
    },
    required: true,
  },
  {
    input_id: 'eq5d_5l_vas',
    input_label: {
      nl: '- We willen weten hoe goed of slecht uw gezondheid VANDAAG is.\n- Deze meetschaal loopt van 0 tot 100.\n-100 staat voor de beste gezondheid die u zich kunt voorstellen. 0 staat voor de slechtste gezondheid die u zich kunt voorstellen.\n- Duid op de meetschaal aan hoe uw gezondheid VANDAAG is.',
      en: '- We would like to know how good or bad your health is TODAY.\n- This scale is numbered from 0 to 100\n- 100 means the best health you can imagine; 0 means the worst health you can imagine\n- Indicate on the scale how your health is TODAY.',
    },
    input_type: {
      type: 'number',
      component: 'slider',
      range: {
        min: {
          value: 0,
          label: {
            nl: 'De slechtste gezondheid die u zich kunt voorstellen',
            en: 'The worst health you can imagine',
          },
        },
        max: {
          value: 100,
          label: {
            nl: 'De beste gezondheid die u zich kunt voorstellen',
            en: 'The best health you can imagine',
          },
        },
      },
    },
    required: true,
  },
]
