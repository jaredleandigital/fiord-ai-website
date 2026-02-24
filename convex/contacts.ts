import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const submit = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    businessName: v.string(),
    industry: v.string(),
    message: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const id = await ctx.db.insert("contacts", {
      ...args,
      status: "new",
      createdAt: Date.now(),
    });
    return id;
  },
});

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("contacts")
      .withIndex("by_createdAt")
      .order("desc")
      .take(100);
  },
});
