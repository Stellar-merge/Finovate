export const transactions = [
  {
    id: 'TRX-001',
    amount: 1250.0,
    to: 'Apple Inc',
    type: 'expense',
    date: 'Today, 14:30',
    status: 'processed',
  },
  {
    id: 'TRX-002',
    amount: 4500.0,
    to: 'Salary',
    type: 'income',
    date: 'Yesterday, 09:00',
    status: 'processed',
  },
  {
    id: 'TRX-003',
    amount: 85.5,
    to: 'Starbucks',
    type: 'expense',
    date: 'Yesterday, 16:45',
    status: 'processed',
  },
  {
    id: 'TRX-004',
    amount: 210.0,
    to: 'Amazon AWS',
    type: 'expense',
    date: 'Oct 12, 10:15',
    status: 'processed',
  },
  {
    id: 'TRX-005',
    amount: 1500.0,
    to: 'Freelance Work',
    type: 'income',
    date: 'Oct 10, 11:20',
    status: 'processed',
  },
];

export const chartData = [
  { label: 'Jan', line1: 12400, line2: 9500 },
  { label: 'Feb', line1: 15800, line2: 11200 },
  { label: 'Mar', line1: 18200, line2: 13500 },
  { label: 'Apr', line1: 21200, line2: 16800 },
  { label: 'May', line1: 24500, line2: 18900 },
  { label: 'Jun', line1: 22800, line2: 21000 },
  { label: 'Jul', line1: 28500, line2: 23400 },
  { label: 'Aug', line1: 32400, line2: 25600 },
  { label: 'Sep', line1: 35800, line2: 28200 },
  { label: 'Oct', line1: 39015, line2: 31000 },
  { label: 'Nov', line1: 42500, line2: 34500 },
  { label: 'Dec', line1: 46278, line2: 38900 },
];

export const heroStats = {
  mainBalance: '$46,278',
  subStats: [
    { label: 'Your Money', value: '$80,609' },
    { label: 'Credit Limit', value: '$40,804' },
  ],
};

export const metricCards = [
  { title: 'Total Revenue', value: '$10,308' },
  { title: 'Total Expense', value: '$1,400' },
];

export const moneyFlowStats = [
  { label: 'Money on the start', value: '$46,278' },
  { label: 'Income', value: '$39,015', badge: { type: 'success', text: '12%' } },
  { label: 'Outcome', value: '$7,263', badge: { type: 'danger', text: '1.75' } },
];
