export const specialist = [
  {
    id: 1,
    name: "Dr. Rudy",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgpAXlwU5GVNw-WrWDoZfltd-2hoO8-Npj8g&usqp=CAU",
  },
  {
    id: 2,
    name: "Dr. José",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgpAXlwU5GVNw-WrWDoZfltd-2hoO8-Npj8g&usqp=CAU",
  },
  {
    id: 2,
    name: "Dr. Pedro",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgpAXlwU5GVNw-WrWDoZfltd-2hoO8-Npj8g&usqp=CAU",
  },
];

export const getSpecialist = async () => {
  return new Promise((resolve) =>
    setTimeout(resolve, 2000, { data: specialist, status: "success" })
  );
};
