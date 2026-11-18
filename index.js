/**
 * Host half of the theme switcher bundle.
 *
 * The whole capability lives in the browser: the Client half registers a
 * `settings.section` page and stacks a token-override layer on the live theme
 * service. No Host service, config, or storage is needed, so this row stays an
 * empty loader entry that keeps the bundle activatable.
 */
export function apply() {}
