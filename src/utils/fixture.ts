export function fixtureFactory<T extends {}>(defaults: T) {
  return (overrides: Partial<T> = {}) => ({ ...defaults, ...overrides });
}
