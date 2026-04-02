export const DEFAULT_CLICKS_PER_DOSE = 70;

export const BRANDS = {
  ozempic: {
    label: 'Ozempic',
    pens: [
      { id: 'ozempic-025', label: '0,25 mg', fullDoseMg: 0.25 },
      { id: 'ozempic-05',  label: '0,5 mg',  fullDoseMg: 0.5  },
      { id: 'ozempic-1',   label: '1 mg',    fullDoseMg: 1.0  },
      { id: 'ozempic-2',   label: '2 mg',    fullDoseMg: 2.0  },
    ],
  },
  wegovy: {
    label: 'Wegovy',
    pens: [
      { id: 'wegovy-025', label: '0,25 mg', fullDoseMg: 0.25 },
      { id: 'wegovy-05',  label: '0,5 mg',  fullDoseMg: 0.5  },
      { id: 'wegovy-1',   label: '1 mg',    fullDoseMg: 1.0  },
      { id: 'wegovy-17',  label: '1,7 mg',  fullDoseMg: 1.7  },
      { id: 'wegovy-24',  label: '2,4 mg',  fullDoseMg: 2.4  },
    ],
  },
  poviztra: {
    label: 'Poviztra',
    pens: [
      { id: 'poviztra-025', label: '0,25 mg', fullDoseMg: 0.25 },
      { id: 'poviztra-05',  label: '0,5 mg',  fullDoseMg: 0.5  },
      { id: 'poviztra-1',   label: '1 mg',    fullDoseMg: 1.0  },
      { id: 'poviztra-17',  label: '1,7 mg',  fullDoseMg: 1.7  },
      { id: 'poviztra-24',  label: '2,4 mg',  fullDoseMg: 2.4  },
    ],
  },
  custom: {
    label: 'Personalizado',
    pens: [],
  },
};

export const BRAND_ORDER = ['ozempic', 'wegovy', 'poviztra', 'custom'];
