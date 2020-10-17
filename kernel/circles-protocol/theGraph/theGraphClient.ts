import {GraphQLClient} from "graphql-request";
import {getSdk} from "./generated";

const client = new GraphQLClient(process.env.THE_GRAPH, {
  // credentials: "include"
});
export const theGraphClient = getSdk(client);