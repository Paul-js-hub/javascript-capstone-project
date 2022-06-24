import commentCounter from './test/counter.js';

describe('these are the comments total', () => {
  test('It should return the length of 3', () => {
    const comments = [
      {
        id: 1,
        username: 'Paul',
        comment: 'Love it!',
      },
      {
        id: 2,
        username: 'Winnie',
        comment: 'Awesome!',
      },
      {
        id: 3,
        username: 'Onchera',
        comment: 'Kaboom!',
      },
    ];
    expect(commentCounter(comments)).toBe(3);
  });

  test('It should return the length of 5', () => {
    const comments = [
      {
        id: 1,
        username: 'Paul',
        comment: 'Love it!',
      },
      {
        id: 2,
        username: 'Winnie',
        comment: 'Awesome!',
      },
      {
        id: 3,
        username: 'Onchera',
        comment: 'Kaboom!',
      },
      {
        id: 4,
        username: 'Hezbon',
        comment: 'Awesome',
      },
      {
        id: 5,
        username: 'Edube',
        comment: 'My show always!',
      },
    ];
    expect(commentCounter(comments)).toBe(5);
  });
});