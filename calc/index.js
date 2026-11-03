import land from './land.js';
import materials from './materials.js';
import cost from './cost.js';
import property from './property.js';
import energy from './energy.js';
import tools from './tools.js';

export const CATEGORIES = [
  { id: 'land', name: 'Land & Area', icon: 'land', hue: '#2f6b57', desc: 'Convert land units, measure plots and compare carpet and super built-up area.' },
  { id: 'materials', name: 'Building Materials', icon: 'brick', hue: '#c1502e', desc: 'Bricks, cement, sand, steel, concrete, tiles and paint quantities.' },
  { id: 'cost', name: 'Construction Cost & Budget', icon: 'cost', hue: '#3d5a80', desc: 'House cost, budget planning, interiors and rule-of-thumb estimates.' },
  { id: 'property', name: 'Property & Home Loan', icon: 'key', hue: '#7a3b69', desc: 'Stamp duty, total purchase cost, EMI, affordability and rental yield.' },
  { id: 'energy', name: 'Power, Solar & Water', icon: 'sun', hue: '#b8842a', desc: 'Electricity bills, solar, inverters, water tanks and rainwater harvesting.' },
  { id: 'tools', name: 'Home Tools', icon: 'ruler', hue: '#5d7a2f', desc: 'Unit conversion, AC sizing and roof area.' },
];
export const CALCS = [...land, ...materials, ...cost, ...property, ...energy, ...tools];
export const defaults = (c) => Object.fromEntries(c.inputs.map((i) => [i.id, i.def]));
