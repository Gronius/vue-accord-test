const data = [
  {
    id: 1,
    content: "Lorem ipsum is placeholder text used to preview layouts.",
  },
  {
    id: 2,
    content: "Lorem ipsum is placeholder text used to preview layouts.",
  },
  {
    id: 3,
    content: "Lorem ipsum is placeholder text used to preview layouts.",
  },
  {
    id: 4,
    content: "Lorem ipsum is placeholder text used to preview layouts.",
  },
];

export const getData = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data.find((item) => item.id === id).content);
    }, 80);
  });
};
