let servers = [
  { id: 1, name: "AWS", status: "working" },
  { id: 2, name: "Azure", status: "working" },
  { id: 3, name: "Render", status: "pending" },
  { id: 4, name: "Heroku", status: "working" },
];

export const getAll = (req, res) => {
  res.status(200).json(servers);
};
