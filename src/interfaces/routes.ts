export default interface IRoute {
  path: string
  name: string
  exact: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: any
  props?: Record<string, unknown>
}
