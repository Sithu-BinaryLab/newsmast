declare module "*.jpg" {
  export default "" as string;
}
declare module "*.png" {
  export default "" as string;
}

interface Window {
  workbox: any;
  self: any;
}