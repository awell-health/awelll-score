import { EnumNumberInputType, ScoreInputSchemaType } from '../../../types'
import { z } from 'zod'

const type = {
  type: z
    .union([
      z.literal(0),
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
    ])
    .optional(),
  uiOptions: {
    options: [
      { value: 0, label: { en: 'Not at all', it: 'Per nulla' } },
      {
        value: 1,
        label: { en: 'Only occasionaly', it: 'Solo occasionalmente' },
      },
      { value: 2, label: { en: 'Sometimes', it: 'Ogni tanto' } },
      { value: 3, label: { en: 'Often', it: 'Spesso' } },
      {
        value: 4,
        label: { en: 'Most or all the time', it: 'Molto spesso o sempre' },
      },
    ],
  },
} satisfies EnumNumberInputType

const input_type_reversed = {
  type: z
    .union([
      z.literal(4),
      z.literal(3),
      z.literal(2),
      z.literal(1),
      z.literal(0),
    ])
    .optional(),
  uiOptions: {
    options: [
      { value: 4, label: { en: 'Not at all', it: 'Per nulla' } },
      {
        value: 3,
        label: { en: 'Only occasionaly', it: 'Solo occasionalmente' },
      },
      { value: 2, label: { en: 'Sometimes', it: 'Ogni tanto' } },
      { value: 1, label: { en: 'Often', it: 'Spesso' } },
      {
        value: 0,
        label: { en: 'Most or all the time', it: 'Molto spesso o sempre' },
      },
    ],
  },
} satisfies EnumNumberInputType

export const CORE_OM_INPUTS = {
  CORE_OM_Q01: {
    label: {
      it: 'Mi sono sentito terribilmente solo e isolato',
      en: 'Over the last week... I have felt terribly alone and isolated',
    },
    ...type,
  },
  CORE_OM_Q02: {
    label: {
      it: 'Mi sono sentito teso, ansioso o nervoso',
      en: 'Over the last week... I have felt tense, anxious or nervous',
    },
    ...type,
  },
  CORE_OM_Q03: {
    label: {
      it: 'Ho sentito di avere qualcuno a cui rivolgermi per ricevere un sostegno quando ne ho avuto bisogno',
      en: 'Over the last week... I have felt I have someone to turn to for support when needed ',
    },
    ...input_type_reversed,
  },
  CORE_OM_Q04: {
    label: {
      it: 'Mi sono sentito a posto con me stesso',
      en: 'Over the last week... I have felt O.K. about myself',
    },
    ...input_type_reversed,
  },
  CORE_OM_Q05: {
    label: {
      it: 'Mi sono sentito completamente privo di energia e di entusiasmo',
      en: 'Over the last week... I have felt totally lacking in energy and enthusiasm ',
    },
    ...type,
  },
  CORE_OM_Q06: {
    label: {
      it: 'Sono stato violento fisicamente verso altre persone',
      en: 'Over the last week... I have been physically violent to others',
    },
    ...type,
  },
  CORE_OM_Q07: {
    label: {
      it: 'Mi sono sentito capace di adattarmi in caso di difficoltà',
      en: 'Over the last week... I have felt able to cope when things go wrong',
    },
    ...input_type_reversed,
  },
  CORE_OM_Q08: {
    label: {
      it: 'Sono stato disturbato da malesseri, dolori o altri problemi fisici',
      en: 'Over the last week... I have been troubled by aches, pains or other physical problems',
    },
    ...type,
  },
  CORE_OM_Q09: {
    label: {
      it: 'Ho pensato a farmi del male',
      en: 'Over the last week... I have thought of hurting myself',
    },
    ...type,
  },
  CORE_OM_Q10: {
    label: {
      it: 'Non ho avuto la forza di parlare con le persone',
      en: 'Over the last week... Talking to people has felt too much for me',
    },
    ...type,
  },
  CORE_OM_Q11: {
    label: {
      it: 'La tensione e l’ansia mi hanno impedito di fare cose importanti',
      en: 'Over the last week... Tension and anxiety have prevented me doing important things',
    },
    ...type,
  },
  CORE_OM_Q12: {
    label: {
      it: 'Sono stato contento per le cose che ho fatto',
      en: 'Over the last week... I have been happy with the things I have done',
    },
    ...input_type_reversed,
  },
  CORE_OM_Q13: {
    label: {
      it: 'Sono stato disturbato da pensieri e stati d’animo indesiderati',
      en: 'Over the last week... I have been disturbed by unwanted thoughts and feelings',
    },
    ...type,
  },
  CORE_OM_Q14: {
    label: {
      it: 'Ho avuto voglia di piangere',
      en: 'Over the last week... I have felt like crying',
    },
    ...type,
  },
  CORE_OM_Q15: {
    label: {
      it: 'Ho provato panico o terrore',
      en: 'Over the last week... I have felt panic or terror',
    },
    ...type,
  },
  CORE_OM_Q16: {
    label: {
      it: 'Ho progettato di mettere fine alla mia vita',
      en: 'Over the last week... I made plans to end my life',
    },
    ...type,
  },
  CORE_OM_Q17: {
    label: {
      it: 'Mi sono sentito sopraffatto dai miei problemi',
      en: 'Over the last week... I have felt overwhelmed by my problems',
    },
    ...type,
  },
  CORE_OM_Q18: {
    label: {
      it: 'Ho avuto difficoltà ad addormentarmi o a mantenere il sonno',
      en: 'Over the last week... I have had difficulty getting to sleep or staying asleep',
    },
    ...type,
  },
  CORE_OM_Q19: {
    label: {
      it: 'Ho provato calore o affetto per qualcuno',
      en: 'Over the last week... I have felt warmth or affection for someone',
    },
    ...input_type_reversed,
  },
  CORE_OM_Q20: {
    label: {
      it: 'Mi è stato impossibile mettere da parte i miei problemi',
      en: 'Over the last week... My problems have been impossible to put to one side ',
    },
    ...type,
  },
  CORE_OM_Q21: {
    label: {
      it: 'Sono stato in grado di fare la maggior parte delle cose che dovevo fare',
      en: 'Over the last week... I have been able to do most things I needed to ',
    },
    ...input_type_reversed,
  },
  CORE_OM_Q22: {
    label: {
      it: 'Ho minacciato o intimorito qualcuno',
      en: 'Over the last week... I have threatened or intimidated another person ',
    },
    ...type,
  },
  CORE_OM_Q23: {
    label: {
      it: 'Mi sono sentito affranto o senza speranza',
      en: 'Over the last week... I have felt despairing or hopeless',
    },
    ...type,
  },
  CORE_OM_Q24: {
    label: {
      it: 'Ho pensato: “Sarebbe meglio essere morto”',
      en: 'Over the last week... I have thought it would be better if I were dead',
    },
    ...type,
  },
  CORE_OM_Q25: {
    label: {
      it: 'Mi sono sentito criticato da altre persone',
      en: 'Over the last week... I have felt criticised by other people',
    },
    ...type,
  },
  CORE_OM_Q26: {
    label: {
      it: 'Ho pensato di non avere amici',
      en: 'Over the last week... I have thought I have no friends',
    },
    ...type,
  },
  CORE_OM_Q27: {
    label: {
      it: 'Mi sono sentito infelic',
      en: 'Over the last week... I have felt unhappy ',
    },
    ...type,
  },
  CORE_OM_Q28: {
    label: {
      it: 'Sono stato turbato da immagini o ricordi indesiderati',
      en: 'Over the last week... Unwanted images or memories have been distressing me',
    },
    ...type,
  },
  CORE_OM_Q29: {
    label: {
      it: 'Mi sono sentito irritato mentre ero con altre persone',
      en: 'Over the last week... I have been irritable when with other people ',
    },
    ...type,
  },
  CORE_OM_Q30: {
    label: {
      it: 'Ho pensato che è mia la colpa dei problemi e delle difficoltà che ho',
      en: 'Over the last week... I have thought I am to blame for my problems and difficulties',
    },
    ...input_type_reversed,
  },
  CORE_OM_Q31: {
    label: {
      it: 'Mi sono sentito ottimista per il mio futuro',
      en: 'Over the last week... I have felt optimistic about my future',
    },
    ...input_type_reversed,
  },
  CORE_OM_Q32: {
    label: {
      it: 'Ho ottenuto ciò che volevo',
      en: 'Over the last week... I have achieved the things I wanted to',
    },
    ...input_type_reversed,
  },
  CORE_OM_Q33: {
    label: {
      it: 'Mi sono sentito umiliato o messo in imbarazzo da altre persone',
      en: 'Over the last week... I have felt humiliated or shamed by other people',
    },
    ...type,
  },
  CORE_OM_Q34: {
    label: {
      it: 'Mi sono fatto del male fisicamente o ho messo seriamente in pericolo la mia salute',
      en: 'Over the last week... I have hurt myself physically or taken dangerous risks with my health',
    },
    ...type,
  },
} satisfies ScoreInputSchemaType
