import { Index } from "@upstash/vector";

let index: Index | undefined;

// Created on first use: the Index constructor throws without a token, and
// self-hosted deployments run without the docs search index.
export const vectorIndex = new Proxy({} as Index, {
  get(_, property) {
    index ??= new Index({
      url: process.env.UPSTASH_VECTOR_REST_URL ?? "",
      token: process.env.UPSTASH_VECTOR_REST_TOKEN ?? "",
    });
    const value = Reflect.get(index, property);
    return typeof value === "function" ? value.bind(index) : value;
  },
});
