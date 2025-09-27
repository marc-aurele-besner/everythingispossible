export interface Slogan {
  id: string;
  text: string;
  createdAt: string;
  isNew?: boolean;
}

export interface NotificationHistory {
  id: string;
  sloganId: string;
  slogan: string;
  dispatchedAt: string;
  read: boolean;
}

export const mockSlogans: Slogan[] = [
  {
    id: '1',
    text: 'Drink gravity, it\'s zero calories.',
    createdAt: '2024-01-15T10:30:00Z',
  },
  {
    id: '2',
    text: 'Fly through deadlines, literally.',
    createdAt: '2024-01-15T11:15:00Z',
  },
  {
    id: '3',
    text: 'Eat the moon, it\'s vegan.',
    createdAt: '2024-01-15T12:00:00Z',
    isNew: true,
  },
  {
    id: '4',
    text: 'Trust your socks, they know the way.',
    createdAt: '2024-01-15T13:45:00Z',
  },
  {
    id: '5',
    text: 'Reality is optional; vibes are forever.',
    createdAt: '2024-01-15T14:30:00Z',
  },
  {
    id: '6',
    text: 'Befriend your coffee cup, it understands suffering.',
    createdAt: '2024-01-15T15:15:00Z',
  },
  {
    id: '7',
    text: 'Dance with your keyboard, make it sing.',
    createdAt: '2024-01-15T16:00:00Z',
  },
  {
    id: '8',
    text: 'Hug a cloud, it needs the emotional support.',
    createdAt: '2024-01-15T16:45:00Z',
  },
  {
    id: '9',
    text: 'Whisper secrets to your WiFi router.',
    createdAt: '2024-01-15T17:30:00Z',
  },
  {
    id: '10',
    text: 'Adopt a rainbow, teach it to be even more colorful.',
    createdAt: '2024-01-15T18:15:00Z',
  },
  {
    id: '11',
    text: 'Your imagination is a muscle, flex it wildly.',
    createdAt: '2024-01-15T19:00:00Z',
  },
  {
    id: '12',
    text: 'Sing opera to your houseplants, they crave drama.',
    createdAt: '2024-01-15T19:45:00Z',
  },
  {
    id: '13',
    text: 'Tickle the universe, make it giggle.',
    createdAt: '2024-01-15T20:30:00Z',
  },
  {
    id: '14',
    text: 'Become best friends with uncertainty.',
    createdAt: '2024-01-15T21:15:00Z',
  },
  {
    id: '15',
    text: 'Paint your dreams with invisible paint.',
    createdAt: '2024-01-15T22:00:00Z',
  },
  {
    id: '16',
    text: 'High-five the wind, it\'s been working hard.',
    createdAt: '2024-01-15T22:45:00Z',
  },
  {
    id: '17',
    text: 'Teach your shadow new dance moves.',
    createdAt: '2024-01-15T23:30:00Z',
  },
  {
    id: '18',
    text: 'Negotiate with gravity, demand better terms.',
    createdAt: '2024-01-16T00:15:00Z',
  },
  {
    id: '19',
    text: 'Compliment your reflection, it\'s having a tough day.',
    createdAt: '2024-01-16T01:00:00Z',
  },
  {
    id: '20',
    text: 'Challenge the ocean to a staring contest.',
    createdAt: '2024-01-16T01:45:00Z',
  },
];

export const mockNotificationHistory: NotificationHistory[] = [
  {
    id: 'n1',
    sloganId: '20',
    slogan: 'Challenge the ocean to a staring contest.',
    dispatchedAt: '2024-01-16T01:45:00Z',
    read: false,
  },
  {
    id: 'n2',
    sloganId: '19',
    slogan: 'Compliment your reflection, it\'s having a tough day.',
    dispatchedAt: '2024-01-16T01:00:00Z',
    read: true,
  },
  {
    id: 'n3',
    sloganId: '18',
    slogan: 'Negotiate with gravity, demand better terms.',
    dispatchedAt: '2024-01-16T00:15:00Z',
    read: true,
  },
  {
    id: 'n4',
    sloganId: '17',
    slogan: 'Teach your shadow new dance moves.',
    dispatchedAt: '2024-01-15T23:30:00Z',
    read: true,
  },
  {
    id: 'n5',
    sloganId: '16',
    slogan: 'High-five the wind, it\'s been working hard.',
    dispatchedAt: '2024-01-15T22:45:00Z',
    read: true,
  },
  {
    id: 'n6',
    sloganId: '15',
    slogan: 'Paint your dreams with invisible paint.',
    dispatchedAt: '2024-01-15T22:00:00Z',
    read: true,
  },
  {
    id: 'n7',
    sloganId: '14',
    slogan: 'Become best friends with uncertainty.',
    dispatchedAt: '2024-01-15T21:15:00Z',
    read: true,
  },
  {
    id: 'n8',
    sloganId: '13',
    slogan: 'Tickle the universe, make it giggle.',
    dispatchedAt: '2024-01-15T20:30:00Z',
    read: true,
  },
  {
    id: 'n9',
    sloganId: '12',
    slogan: 'Sing opera to your houseplants, they crave drama.',
    dispatchedAt: '2024-01-15T19:45:00Z',
    read: true,
  },
  {
    id: 'n10',
    sloganId: '11',
    slogan: 'Your imagination is a muscle, flex it wildly.',
    dispatchedAt: '2024-01-15T19:00:00Z',
    read: true,
  },
  {
    id: 'n11',
    sloganId: '10',
    slogan: 'Adopt a rainbow, teach it to be even more colorful.',
    dispatchedAt: '2024-01-15T18:15:00Z',
    read: true,
  },
  {
    id: 'n12',
    sloganId: '9',
    slogan: 'Whisper secrets to your WiFi router.',
    dispatchedAt: '2024-01-15T17:30:00Z',
    read: true,
  },
  {
    id: 'n13',
    sloganId: '8',
    slogan: 'Hug a cloud, it needs the emotional support.',
    dispatchedAt: '2024-01-15T16:45:00Z',
    read: true,
  },
  {
    id: 'n14',
    sloganId: '7',
    slogan: 'Dance with your keyboard, make it sing.',
    dispatchedAt: '2024-01-15T16:00:00Z',
    read: true,
  },
  {
    id: 'n15',
    sloganId: '6',
    slogan: 'Befriend your coffee cup, it understands suffering.',
    dispatchedAt: '2024-01-15T15:15:00Z',
    read: true,
  },
  {
    id: 'n16',
    sloganId: '5',
    slogan: 'Reality is optional; vibes are forever.',
    dispatchedAt: '2024-01-15T14:30:00Z',
    read: true,
  },
  {
    id: 'n17',
    sloganId: '4',
    slogan: 'Trust your socks, they know the way.',
    dispatchedAt: '2024-01-15T13:45:00Z',
    read: true,
  },
  {
    id: 'n18',
    sloganId: '3',
    slogan: 'Eat the moon, it\'s vegan.',
    dispatchedAt: '2024-01-15T12:00:00Z',
    read: true,
  },
  {
    id: 'n19',
    sloganId: '2',
    slogan: 'Fly through deadlines, literally.',
    dispatchedAt: '2024-01-15T11:15:00Z',
    read: true,
  },
  {
    id: 'n20',
    sloganId: '1',
    slogan: 'Drink gravity, it\'s zero calories.',
    dispatchedAt: '2024-01-15T10:30:00Z',
    read: true,
  },
];

export const getRandomSlogan = (): Slogan => {
  return mockSlogans[Math.floor(Math.random() * mockSlogans.length)];
};

export const formatTimeAgo = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) {
    return 'Just now';
  } else if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60);
    return `${minutes}m ago`;
  } else if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600);
    return `${hours}h ago`;
  } else {
    const days = Math.floor(diffInSeconds / 86400);
    return `${days}d ago`;
  }
};