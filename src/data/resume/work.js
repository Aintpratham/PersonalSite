/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Walmart',
    position: 'Omni Customer fulfillment Associate',
    startDate: '2025-05-03',
    summary: 'Part of the online order fulfillment and in-store customer experience team at Walmart. Responsible for bridging the gap between digital orders and physical retail execution.',
    highlights: [
      'Efficiently picked, packed, and staged online grocery and general merchandise orders.',
      'Provided direct customer support and resolved issues related to online order pickups.',
      'Maintained excellent inventory accuracy and adapted quickly during high-volume periods.',
    ],
  },
  {
    name: 'Kognitive Marketing',
    position: 'Sales Representative – PC Financial',
    startDate: '2025-03-01',
    endDate: '2025-05-01',
    summary: 'Worked as an on-site brand rep for President’s Choice Financial, promoting and registering customers for PC Mastercard through engaging face-to-face marketing.',
    highlights: [
      'Approached customers professionally and explained credit card features and benefits.',
      'Successfully met and exceeded weekly sign-up targets through strong communication skills.',
      'Gained deep understanding of financial product regulations and customer eligibility checks.',
    ],
  },
  {
    name: 'Walmart',
    position: 'Overnight Associate',
    startDate: '2023-09-23',
    endDate: '2025-05-02',
    summary: 'Worked night shifts in the general merchandise department, ensuring efficient restocking and cleanliness to prepare the store for next-day operations.',
    highlights: [
      'Managed fast-paced restocking of shelves and displays with attention to accuracy.',
      'Worked collaboratively with a small team to complete nightly planograms and tasks.',
      'Ensured safety standards and store appearance were upheld throughout each shift.',
    ],
  },

];

export default work;
