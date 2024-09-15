import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { getWeekPendingGoals } from "../../functions/get-week-pending-goals";

export const getWeekPendingGoalsRoute: FastifyPluginAsyncZod = async (
  app,
  _opts
) => {
  app.get("/pending-goals", async (request) => {
    const { pendingGoals } = await getWeekPendingGoals();

    return { pendingGoals };
  });
};
