export const helloWorld = (req: any, res: any) => {
  const { name } = req.query;
  res.send(`Hello ${name || 'World'}`);
};
