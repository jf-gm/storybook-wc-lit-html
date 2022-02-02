declare module "*.jpg";

declare module "*.mdx" {
  const value: string; // markdown is just a string
  export default value;
}
