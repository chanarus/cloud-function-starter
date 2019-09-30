export const helloWorld = (req, res) => {
  const { name } = req.query;
  res.send(`Hello ${name || 'World'}`);
};
