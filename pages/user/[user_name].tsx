import { GetStaticPaths, GetStaticProps } from "next";

/**
 * TODO: Our code is written in Typescript so create a type for the data param by inspecting the API response https://jsonplaceholder.typicode.com/users/
 * Typescript Docs: https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html#defining-types
 */
const User = ({ data }) => {
  /**
   * TODO: here you will have the data about a user from the API in the data object being passed from getStaticProps
   * This is where you will implement the user details card (requirements in README)
   * If the user is not found on API then NextJs will automatically route to a 404 page
   * To customise this page update the 404.tsx file to show a message if the user_name was not found. You will find further instructions in that file
   */
  return <p>Data name: {data.username}</p>; // TODO:
};

/**
 * This function fetches data from API https://jsonplaceholder.typicode.com/users/
 * and creates a static HTML page for every user object found
 * Your task is to fetch the data and iterate over each user object and create a path for each username.
 *
 * Helpful Docs: https://nextjs.org/docs/api-reference/data-fetching/get-static-paths
 * @returns paths
 */
export const getStaticPaths: GetStaticPaths = async () => {
  return { paths, fallback: false };
};

/**
 * This function fetches data for that path (usually only for that path)
 * However the users mock api can not fetch by name so you must grab all the data
 * from the api again https://jsonplaceholder.typicode.com/users/
 * and return only the data for the user_name in the url which will be passed in the context object
 *
 * Helpful Docs: https://nextjs.org/docs/api-reference/data-fetching/get-static-props
 * @param context
 * @returns data
 */
export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: { data },
  };
};

export default User;
