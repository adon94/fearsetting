let nextThingId = 2;
let nextBenefitId = 2;
let nextCostId = 2;

export const editDecision = item => ({
  type: 'EDIT_DECISION',
  item,
});
export const addThing = () => ({
  type: 'ADD_THING',
  id: nextThingId++,
});

export const editThing = item => ({
  type: 'EDIT_THING',
  item,
});

export const editPrevent = item => ({
  type: 'EDIT_PREVENT',
  item,
});

export const editRepair = item => ({
  type: 'EDIT_REPAIR',
  item,
});

export const addBenefit = () => ({
  type: 'ADD_BENEFIT',
  id: nextBenefitId++,
});

export const editBenefit = item => ({
  type: 'EDIT_BENEFIT',
  item,
});

export const addCost = () => ({
  type: 'ADD_COST',
  id: nextCostId++,
});

export const editCost = payload => ({
  type: 'EDIT_COST',
  payload,
});
