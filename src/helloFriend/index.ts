export const helloFriend = (req, res) => {
  const { name } = req.query;
  res.send(`Hello ${name || 'Friend'}`);
};
