import { prisma } from "../helpers/utils.js";

export const index = async (_, res) => {
  try {
    let users = await prisma.user.findMany({
      select: { email: true, name: true },
    });
    return res.send({ data: { users } });
  } catch (error) {
    console.error("users", error);
    res.status(500).send({ error: `Cannot fetch users` });
  }
};

export const GetByID = async (req, reply) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.findMany({
      where: {
        id: Number(id),
      },
      select: { name: true, email: true },
    });
    return reply.send({ data: { user } });
  } catch (error) {
    reply.status(500).send(error);
  }
};

export const remove = async (req, reply) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.delete({
      where: {
        id: Number(id),
      },
    });
    reply.status(200).send(user);
  } catch (error) {
    reply.status(500).send(error);
  }
};

export const update = async (req, reply) => {
  const { id } = req.params;
  let data = {};

  if (req.body.name) {
    data.name = req.body.name;
  }

  if (req.body.email) {
    data.email = req.body.email;
  }

  try {
    const user = await prisma.user.update({
      where: { id: Number(id) },
      data: data,
    });
    return reply.status(200).send(user);
  } catch (error) {
    reply.status(500).send(error);
  }
};

export const updateAtributes = async (req, reply) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const movie = await prisma.user.update({
      where: { id: parseInt(id) },
      data,
    });
    reply.status(200).send(movie);
  } catch (error) {
    console.error(error);
    reply.status(500).send(error);
  }
};
