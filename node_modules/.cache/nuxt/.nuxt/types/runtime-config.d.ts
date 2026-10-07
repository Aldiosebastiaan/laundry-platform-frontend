import { RuntimeConfig as UserRuntimeConfig, PublicRuntimeConfig as UserPublicRuntimeConfig } from 'nuxt/schema'
  interface SharedRuntimeConfig {
   app: {
      buildId: string,

      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   icon: {
      serverKnownCssClasses: Array<any>,
   },
  }
  interface SharedPublicRuntimeConfig {
   primevue: {
      usePrimeVue: boolean,

      autoImport: boolean,

      resolvePath: any,

      importPT: any,

      importTheme: any,

      loadStyles: boolean,

      options: {
         ripple: boolean,

         theme: {
            preset: {
               primitive: {
                  borderRadius: {
                     none: string,

                     xs: string,

                     sm: string,

                     md: string,

                     lg: string,

                     xl: string,
                  },

                  emerald: {
                     "50": string,

                     "100": string,

                     "200": string,

                     "300": string,

                     "400": string,

                     "500": string,

                     "600": string,

                     "700": string,

                     "800": string,

                     "900": string,

                     "950": string,
                  },

                  green: {
                     "50": string,

                     "100": string,

                     "200": string,

                     "300": string,

                     "400": string,

                     "500": string,

                     "600": string,

                     "700": string,

                     "800": string,

                     "900": string,

                     "950": string,
                  },

                  lime: {
                     "50": string,

                     "100": string,

                     "200": string,

                     "300": string,

                     "400": string,

                     "500": string,

                     "600": string,

                     "700": string,

                     "800": string,

                     "900": string,

                     "950": string,
                  },

                  red: {
                     "50": string,

                     "100": string,

                     "200": string,

                     "300": string,

                     "400": string,

                     "500": string,

                     "600": string,

                     "700": string,

                     "800": string,

                     "900": string,

                     "950": string,
                  },

                  orange: {
                     "50": string,

                     "100": string,

                     "200": string,

                     "300": string,

                     "400": string,

                     "500": string,

                     "600": string,

                     "700": string,

                     "800": string,

                     "900": string,

                     "950": string,
                  },

                  amber: {
                     "50": string,

                     "100": string,

                     "200": string,

                     "300": string,

                     "400": string,

                     "500": string,

                     "600": string,

                     "700": string,

                     "800": string,

                     "900": string,

                     "950": string,
                  },

                  yellow: {
                     "50": string,

                     "100": string,

                     "200": string,

                     "300": string,

                     "400": string,

                     "500": string,

                     "600": string,

                     "700": string,

                     "800": string,

                     "900": string,

                     "950": string,
                  },

                  teal: {
                     "50": string,

                     "100": string,

                     "200": string,

                     "300": string,

                     "400": string,

                     "500": string,

                     "600": string,

                     "700": string,

                     "800": string,

                     "900": string,

                     "950": string,
                  },

                  cyan: {
                     "50": string,

                     "100": string,

                     "200": string,

                     "300": string,

                     "400": string,

                     "500": string,

                     "600": string,

                     "700": string,

                     "800": string,

                     "900": string,

                     "950": string,
                  },

                  sky: {
                     "50": string,

                     "100": string,

                     "200": string,

                     "300": string,

                     "400": string,

                     "500": string,

                     "600": string,

                     "700": string,

                     "800": string,

                     "900": string,

                     "950": string,
                  },

                  blue: {
                     "50": string,

                     "100": string,

                     "200": string,

                     "300": string,

                     "400": string,

                     "500": string,

                     "600": string,

                     "700": string,

                     "800": string,

                     "900": string,

                     "950": string,
                  },

                  indigo: {
                     "50": string,

                     "100": string,

                     "200": string,

                     "300": string,

                     "400": string,

                     "500": string,

                     "600": string,

                     "700": string,

                     "800": string,

                     "900": string,

                     "950": string,
                  },

                  violet: {
                     "50": string,

                     "100": string,

                     "200": string,

                     "300": string,

                     "400": string,

                     "500": string,

                     "600": string,

                     "700": string,

                     "800": string,

                     "900": string,

                     "950": string,
                  },

                  purple: {
                     "50": string,

                     "100": string,

                     "200": string,

                     "300": string,

                     "400": string,

                     "500": string,

                     "600": string,

                     "700": string,

                     "800": string,

                     "900": string,

                     "950": string,
                  },

                  fuchsia: {
                     "50": string,

                     "100": string,

                     "200": string,

                     "300": string,

                     "400": string,

                     "500": string,

                     "600": string,

                     "700": string,

                     "800": string,

                     "900": string,

                     "950": string,
                  },

                  pink: {
                     "50": string,

                     "100": string,

                     "200": string,

                     "300": string,

                     "400": string,

                     "500": string,

                     "600": string,

                     "700": string,

                     "800": string,

                     "900": string,

                     "950": string,
                  },

                  rose: {
                     "50": string,

                     "100": string,

                     "200": string,

                     "300": string,

                     "400": string,

                     "500": string,

                     "600": string,

                     "700": string,

                     "800": string,

                     "900": string,

                     "950": string,
                  },

                  slate: {
                     "50": string,

                     "100": string,

                     "200": string,

                     "300": string,

                     "400": string,

                     "500": string,

                     "600": string,

                     "700": string,

                     "800": string,

                     "900": string,

                     "950": string,
                  },

                  gray: {
                     "50": string,

                     "100": string,

                     "200": string,

                     "300": string,

                     "400": string,

                     "500": string,

                     "600": string,

                     "700": string,

                     "800": string,

                     "900": string,

                     "950": string,
                  },

                  zinc: {
                     "50": string,

                     "100": string,

                     "200": string,

                     "300": string,

                     "400": string,

                     "500": string,

                     "600": string,

                     "700": string,

                     "800": string,

                     "900": string,

                     "950": string,
                  },

                  neutral: {
                     "50": string,

                     "100": string,

                     "200": string,

                     "300": string,

                     "400": string,

                     "500": string,

                     "600": string,

                     "700": string,

                     "800": string,

                     "900": string,

                     "950": string,
                  },

                  stone: {
                     "50": string,

                     "100": string,

                     "200": string,

                     "300": string,

                     "400": string,

                     "500": string,

                     "600": string,

                     "700": string,

                     "800": string,

                     "900": string,

                     "950": string,
                  },
               },

               semantic: {
                  typography: {
                     lineHeight: string,

                     fontFamily: string,

                     fontWeight: string,

                     fontSize: string,
                  },

                  transitionDuration: string,

                  focusRing: {
                     width: string,

                     style: string,

                     color: string,

                     offset: string,

                     shadow: string,
                  },

                  disabledOpacity: string,

                  iconSize: string,

                  anchorGutter: string,

                  primary: {
                     "50": string,

                     "100": string,

                     "200": string,

                     "300": string,

                     "400": string,

                     "500": string,

                     "600": string,

                     "700": string,

                     "800": string,

                     "900": string,

                     "950": string,

                     color: string,

                     contrastColor: string,

                     hoverColor: string,

                     activeColor: string,
                  },

                  formField: {
                     fontWeight: string,

                     fontSize: string,

                     paddingX: string,

                     paddingY: string,

                     sm: {
                        fontSize: string,

                        paddingX: string,

                        paddingY: string,
                     },

                     lg: {
                        fontSize: string,

                        paddingX: string,

                        paddingY: string,
                     },

                     borderRadius: string,

                     focusRing: {
                        width: string,

                        style: string,

                        color: string,

                        offset: string,

                        shadow: string,
                     },

                     transitionDuration: string,

                     background: string,

                     disabledBackground: string,

                     filledBackground: string,

                     filledHoverBackground: string,

                     filledFocusBackground: string,

                     borderColor: string,

                     hoverBorderColor: string,

                     focusBorderColor: string,

                     invalidBorderColor: string,

                     color: string,

                     disabledColor: string,

                     placeholderColor: string,

                     invalidPlaceholderColor: string,

                     floatLabelColor: string,

                     floatLabelFocusColor: string,

                     floatLabelActiveColor: string,

                     floatLabelInvalidColor: string,

                     iconColor: string,

                     shadow: string,
                  },

                  list: {
                     padding: string,

                     gap: string,

                     header: {
                        padding: string,
                     },

                     option: {
                        padding: string,

                        borderRadius: string,

                        fontWeight: string,

                        fontSize: string,

                        transitionDuration: string,

                        focusBackground: string,

                        selectedBackground: string,

                        selectedFocusBackground: string,

                        color: string,

                        focusColor: string,

                        selectedColor: string,

                        selectedFocusColor: string,

                        selectedFontWeight: string,

                        icon: {
                           color: string,

                           focusColor: string,
                        },
                     },

                     optionGroup: {
                        padding: string,

                        fontWeight: string,

                        fontSize: string,

                        background: string,

                        color: string,
                     },
                  },

                  content: {
                     borderRadius: string,

                     background: string,

                     hoverBackground: string,

                     borderColor: string,

                     color: string,

                     hoverColor: string,
                  },

                  mask: {
                     transitionDuration: string,

                     background: string,

                     color: string,
                  },

                  navigation: {
                     list: {
                        padding: string,

                        gap: string,
                     },

                     item: {
                        padding: string,

                        borderRadius: string,

                        gap: string,

                        focusBackground: string,

                        activeBackground: string,

                        color: string,

                        focusColor: string,

                        activeColor: string,

                        icon: {
                           size: string,

                           color: string,

                           focusColor: string,

                           activeColor: string,
                        },

                        label: {
                           fontWeight: string,

                           fontSize: string,
                        },

                        transitionDuration: string,
                     },

                     submenuLabel: {
                        padding: string,

                        fontWeight: string,

                        fontSize: string,

                        background: string,

                        color: string,
                     },

                     submenuIcon: {
                        size: string,

                        color: string,

                        focusColor: string,

                        activeColor: string,
                     },
                  },

                  overlay: {
                     select: {
                        borderRadius: string,

                        shadow: string,

                        background: string,

                        borderColor: string,

                        color: string,
                     },

                     popover: {
                        borderRadius: string,

                        padding: string,

                        shadow: string,

                        background: string,

                        borderColor: string,

                        color: string,
                     },

                     modal: {
                        borderRadius: string,

                        padding: string,

                        shadow: string,

                        background: string,

                        borderColor: string,

                        color: string,
                     },

                     navigation: {
                        shadow: string,
                     },
                  },

                  surface: {
                     0: string,

                     "50": string,

                     "100": string,

                     "200": string,

                     "300": string,

                     "400": string,

                     "500": string,

                     "600": string,

                     "700": string,

                     "800": string,

                     "900": string,

                     "950": string,
                  },

                  highlight: {
                     background: string,

                     focusBackground: string,

                     color: string,

                     focusColor: string,
                  },

                  text: {
                     color: string,

                     hoverColor: string,

                     mutedColor: string,

                     hoverMutedColor: string,
                  },
               },

               components: {
                  accordion: {
                     root: {
                        transitionDuration: string,
                     },

                     panel: {
                        borderWidth: string,

                        borderColor: string,
                     },

                     header: {
                        color: string,

                        hoverColor: string,

                        activeColor: string,

                        activeHoverColor: string,

                        padding: string,

                        fontWeight: string,

                        fontSize: string,

                        borderRadius: string,

                        borderWidth: string,

                        borderColor: string,

                        background: string,

                        hoverBackground: string,

                        activeBackground: string,

                        activeHoverBackground: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },

                        toggleIcon: {
                           color: string,

                           hoverColor: string,

                           activeColor: string,

                           activeHoverColor: string,
                        },

                        first: {
                           topBorderRadius: string,

                           borderWidth: string,
                        },

                        last: {
                           bottomBorderRadius: string,

                           activeBottomBorderRadius: string,
                        },
                     },

                     content: {
                        borderWidth: string,

                        borderColor: string,

                        background: string,

                        color: string,

                        padding: string,
                     },
                  },

                  autocomplete: {
                     root: {
                        background: string,

                        disabledBackground: string,

                        filledBackground: string,

                        filledHoverBackground: string,

                        filledFocusBackground: string,

                        borderColor: string,

                        hoverBorderColor: string,

                        focusBorderColor: string,

                        invalidBorderColor: string,

                        color: string,

                        disabledColor: string,

                        placeholderColor: string,

                        invalidPlaceholderColor: string,

                        shadow: string,

                        paddingX: string,

                        paddingY: string,

                        borderRadius: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },

                        transitionDuration: string,
                     },

                     overlay: {
                        background: string,

                        borderColor: string,

                        borderRadius: string,

                        color: string,

                        shadow: string,
                     },

                     list: {
                        padding: string,

                        gap: string,
                     },

                     option: {
                        focusBackground: string,

                        selectedBackground: string,

                        selectedFocusBackground: string,

                        color: string,

                        focusColor: string,

                        selectedColor: string,

                        selectedFocusColor: string,

                        padding: string,

                        borderRadius: string,

                        fontWeight: string,

                        fontSize: string,
                     },

                     optionGroup: {
                        background: string,

                        color: string,

                        fontWeight: string,

                        fontSize: string,

                        padding: string,
                     },

                     dropdown: {
                        width: string,

                        sm: {
                           width: string,
                        },

                        lg: {
                           width: string,
                        },

                        background: string,

                        hoverBackground: string,

                        activeBackground: string,

                        borderColor: string,

                        hoverBorderColor: string,

                        activeBorderColor: string,

                        color: string,

                        hoverColor: string,

                        activeColor: string,

                        borderRadius: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },

                     chip: {
                        borderRadius: string,

                        focusBackground: string,

                        focusColor: string,
                     },

                     emptyMessage: {
                        padding: string,
                     },
                  },

                  avatar: {
                     root: {
                        width: string,

                        height: string,

                        fontWeight: string,

                        fontSize: string,

                        background: string,

                        color: string,

                        borderRadius: string,
                     },

                     icon: {
                        size: string,
                     },

                     group: {
                        borderColor: string,

                        offset: string,
                     },

                     lg: {
                        width: string,

                        height: string,

                        fontSize: string,

                        icon: {
                           size: string,
                        },

                        group: {
                           offset: string,
                        },
                     },

                     xl: {
                        width: string,

                        height: string,

                        fontSize: string,

                        icon: {
                           size: string,
                        },

                        group: {
                           offset: string,
                        },
                     },
                  },

                  badge: {
                     root: {
                        borderRadius: string,

                        padding: string,

                        fontSize: string,

                        fontWeight: string,

                        minWidth: string,

                        height: string,
                     },

                     dot: {
                        size: string,
                     },

                     sm: {
                        fontSize: string,

                        minWidth: string,

                        height: string,
                     },

                     lg: {
                        fontSize: string,

                        minWidth: string,

                        height: string,
                     },

                     xl: {
                        fontSize: string,

                        minWidth: string,

                        height: string,
                     },

                     primary: {
                        background: string,

                        color: string,
                     },

                     secondary: {
                        background: string,

                        color: string,
                     },

                     success: {
                        background: string,

                        color: string,
                     },

                     info: {
                        background: string,

                        color: string,
                     },

                     warn: {
                        background: string,

                        color: string,
                     },

                     danger: {
                        background: string,

                        color: string,
                     },

                     contrast: {
                        background: string,

                        color: string,
                     },
                  },

                  blockui: {
                     root: {
                        borderRadius: string,
                     },
                  },

                  breadcrumb: {
                     root: {
                        padding: string,

                        background: string,

                        gap: string,

                        transitionDuration: string,
                     },

                     item: {
                        color: string,

                        hoverColor: string,

                        borderRadius: string,

                        gap: string,

                        icon: {
                           color: string,

                           hoverColor: string,

                           size: string,
                        },

                        label: {
                           fontWeight: string,

                           fontSize: string,
                        },

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },

                     separator: {
                        color: string,
                     },
                  },

                  button: {
                     root: {
                        borderRadius: string,

                        roundedBorderRadius: string,

                        gap: string,

                        paddingX: string,

                        paddingY: string,

                        iconOnlyWidth: string,

                        fontSize: string,

                        sm: {
                           fontSize: string,

                           paddingX: string,

                           paddingY: string,

                           iconOnlyWidth: string,
                        },

                        lg: {
                           fontSize: string,

                           paddingX: string,

                           paddingY: string,

                           iconOnlyWidth: string,
                        },

                        label: {
                           fontWeight: string,
                        },

                        raisedShadow: string,

                        focusRing: {
                           width: string,

                           style: string,

                           offset: string,
                        },

                        badgeSize: string,

                        transitionDuration: string,

                        primary: {
                           background: string,

                           hoverBackground: string,

                           activeBackground: string,

                           borderColor: string,

                           hoverBorderColor: string,

                           activeBorderColor: string,

                           color: string,

                           hoverColor: string,

                           activeColor: string,

                           focusRing: {
                              color: string,

                              shadow: string,
                           },
                        },

                        secondary: {
                           background: string,

                           hoverBackground: string,

                           activeBackground: string,

                           borderColor: string,

                           hoverBorderColor: string,

                           activeBorderColor: string,

                           color: string,

                           hoverColor: string,

                           activeColor: string,

                           focusRing: {
                              color: string,

                              shadow: string,
                           },
                        },

                        info: {
                           background: string,

                           hoverBackground: string,

                           activeBackground: string,

                           borderColor: string,

                           hoverBorderColor: string,

                           activeBorderColor: string,

                           color: string,

                           hoverColor: string,

                           activeColor: string,

                           focusRing: {
                              color: string,

                              shadow: string,
                           },
                        },

                        success: {
                           background: string,

                           hoverBackground: string,

                           activeBackground: string,

                           borderColor: string,

                           hoverBorderColor: string,

                           activeBorderColor: string,

                           color: string,

                           hoverColor: string,

                           activeColor: string,

                           focusRing: {
                              color: string,

                              shadow: string,
                           },
                        },

                        warn: {
                           background: string,

                           hoverBackground: string,

                           activeBackground: string,

                           borderColor: string,

                           hoverBorderColor: string,

                           activeBorderColor: string,

                           color: string,

                           hoverColor: string,

                           activeColor: string,

                           focusRing: {
                              color: string,

                              shadow: string,
                           },
                        },

                        help: {
                           background: string,

                           hoverBackground: string,

                           activeBackground: string,

                           borderColor: string,

                           hoverBorderColor: string,

                           activeBorderColor: string,

                           color: string,

                           hoverColor: string,

                           activeColor: string,

                           focusRing: {
                              color: string,

                              shadow: string,
                           },
                        },

                        danger: {
                           background: string,

                           hoverBackground: string,

                           activeBackground: string,

                           borderColor: string,

                           hoverBorderColor: string,

                           activeBorderColor: string,

                           color: string,

                           hoverColor: string,

                           activeColor: string,

                           focusRing: {
                              color: string,

                              shadow: string,
                           },
                        },

                        contrast: {
                           background: string,

                           hoverBackground: string,

                           activeBackground: string,

                           borderColor: string,

                           hoverBorderColor: string,

                           activeBorderColor: string,

                           color: string,

                           hoverColor: string,

                           activeColor: string,

                           focusRing: {
                              color: string,

                              shadow: string,
                           },
                        },
                     },

                     outlined: {
                        primary: {
                           hoverBackground: string,

                           activeBackground: string,

                           borderColor: string,

                           color: string,
                        },

                        secondary: {
                           hoverBackground: string,

                           activeBackground: string,

                           borderColor: string,

                           color: string,
                        },

                        success: {
                           hoverBackground: string,

                           activeBackground: string,

                           borderColor: string,

                           color: string,
                        },

                        info: {
                           hoverBackground: string,

                           activeBackground: string,

                           borderColor: string,

                           color: string,
                        },

                        warn: {
                           hoverBackground: string,

                           activeBackground: string,

                           borderColor: string,

                           color: string,
                        },

                        help: {
                           hoverBackground: string,

                           activeBackground: string,

                           borderColor: string,

                           color: string,
                        },

                        danger: {
                           hoverBackground: string,

                           activeBackground: string,

                           borderColor: string,

                           color: string,
                        },

                        contrast: {
                           hoverBackground: string,

                           activeBackground: string,

                           borderColor: string,

                           color: string,
                        },

                        plain: {
                           hoverBackground: string,

                           activeBackground: string,

                           borderColor: string,

                           color: string,
                        },
                     },

                     text: {
                        primary: {
                           hoverBackground: string,

                           activeBackground: string,

                           color: string,
                        },

                        secondary: {
                           hoverBackground: string,

                           activeBackground: string,

                           color: string,
                        },

                        success: {
                           hoverBackground: string,

                           activeBackground: string,

                           color: string,
                        },

                        info: {
                           hoverBackground: string,

                           activeBackground: string,

                           color: string,
                        },

                        warn: {
                           hoverBackground: string,

                           activeBackground: string,

                           color: string,
                        },

                        help: {
                           hoverBackground: string,

                           activeBackground: string,

                           color: string,
                        },

                        danger: {
                           hoverBackground: string,

                           activeBackground: string,

                           color: string,
                        },

                        contrast: {
                           hoverBackground: string,

                           activeBackground: string,

                           color: string,
                        },

                        plain: {
                           hoverBackground: string,

                           activeBackground: string,

                           color: string,
                        },
                     },

                     link: {
                        color: string,

                        hoverColor: string,

                        activeColor: string,
                     },
                  },

                  card: {
                     root: {
                        background: string,

                        borderRadius: string,

                        color: string,

                        shadow: string,
                     },

                     body: {
                        padding: string,

                        gap: string,
                     },

                     caption: {
                        gap: string,
                     },

                     title: {
                        fontSize: string,

                        fontWeight: string,
                     },

                     subtitle: {
                        color: string,

                        fontSize: string,

                        fontWeight: string,
                     },
                  },

                  carousel: {
                     root: {
                        transitionDuration: string,
                     },

                     content: {
                        gap: string,
                     },

                     indicatorList: {
                        padding: string,

                        gap: string,
                     },

                     indicator: {
                        width: string,

                        height: string,

                        borderRadius: string,

                        background: string,

                        hoverBackground: string,

                        activeBackground: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },
                  },

                  cascadeselect: {
                     root: {
                        background: string,

                        disabledBackground: string,

                        filledBackground: string,

                        filledHoverBackground: string,

                        filledFocusBackground: string,

                        borderColor: string,

                        hoverBorderColor: string,

                        focusBorderColor: string,

                        invalidBorderColor: string,

                        color: string,

                        disabledColor: string,

                        placeholderColor: string,

                        invalidPlaceholderColor: string,

                        shadow: string,

                        paddingX: string,

                        paddingY: string,

                        borderRadius: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },

                        transitionDuration: string,

                        sm: {
                           fontSize: string,

                           paddingX: string,

                           paddingY: string,
                        },

                        lg: {
                           fontSize: string,

                           paddingX: string,

                           paddingY: string,
                        },

                        fontWeight: string,

                        fontSize: string,
                     },

                     dropdown: {
                        width: string,

                        color: string,
                     },

                     overlay: {
                        background: string,

                        borderColor: string,

                        borderRadius: string,

                        color: string,

                        shadow: string,
                     },

                     list: {
                        padding: string,

                        gap: string,

                        mobileIndent: string,
                     },

                     option: {
                        focusBackground: string,

                        selectedBackground: string,

                        selectedFocusBackground: string,

                        color: string,

                        focusColor: string,

                        selectedColor: string,

                        selectedFocusColor: string,

                        selectedFontWeight: string,

                        padding: string,

                        borderRadius: string,

                        icon: {
                           color: string,

                           focusColor: string,

                           size: string,
                        },

                        fontWeight: string,

                        fontSize: string,
                     },

                     clearIcon: {
                        color: string,
                     },
                  },

                  checkbox: {
                     root: {
                        borderRadius: string,

                        width: string,

                        height: string,

                        background: string,

                        checkedBackground: string,

                        checkedHoverBackground: string,

                        disabledBackground: string,

                        filledBackground: string,

                        borderColor: string,

                        hoverBorderColor: string,

                        focusBorderColor: string,

                        checkedBorderColor: string,

                        checkedHoverBorderColor: string,

                        checkedFocusBorderColor: string,

                        checkedDisabledBorderColor: string,

                        invalidBorderColor: string,

                        shadow: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },

                        transitionDuration: string,

                        sm: {
                           width: string,

                           height: string,
                        },

                        lg: {
                           width: string,

                           height: string,
                        },
                     },

                     icon: {
                        size: string,

                        color: string,

                        checkedColor: string,

                        checkedHoverColor: string,

                        disabledColor: string,

                        sm: {
                           size: string,
                        },

                        lg: {
                           size: string,
                        },
                     },
                  },

                  chip: {
                     root: {
                        borderRadius: string,

                        paddingX: string,

                        paddingY: string,

                        gap: string,

                        transitionDuration: string,

                        background: string,

                        focusBackground: string,

                        color: string,
                     },

                     image: {
                        width: string,

                        height: string,
                     },

                     icon: {
                        size: string,

                        color: string,
                     },

                     label: {
                        fontWeight: string,

                        fontSize: string,
                     },

                     removeIcon: {
                        size: string,

                        color: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },
                  },

                  colorpicker: {
                     root: {
                        transitionDuration: string,
                     },

                     preview: {
                        width: string,

                        height: string,

                        borderRadius: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },

                     panel: {
                        shadow: string,

                        borderRadius: string,

                        background: string,

                        borderColor: string,
                     },

                     handle: {
                        color: string,
                     },
                  },

                  commandmenu: {
                     root: {
                        background: string,

                        borderColor: string,

                        borderRadius: string,

                        height: string,
                     },

                     header: {
                        padding: string,

                        background: string,

                        borderColor: string,
                     },

                     input: {
                        padding: string,

                        fontSize: string,

                        fontWeight: string,

                        color: string,

                        placeholderColor: string,
                     },

                     list: {
                        padding: string,
                     },

                     empty: {
                        padding: string,

                        color: string,
                     },

                     footer: {
                        padding: string,

                        background: string,

                        borderColor: string,
                     },
                  },

                  compare: {
                     root: {
                        borderRadius: string,
                     },

                     handle: {
                        background: string,

                        size: string,
                     },

                     indicator: {
                        size: string,

                        background: string,

                        borderRadius: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,
                        },

                        icon: {
                           color: string,

                           size: string,
                        },
                     },
                  },

                  confirmdialog: {
                     icon: {
                        size: string,

                        color: string,
                     },

                     content: {
                        gap: string,
                     },

                     message: {
                        color: string,

                        fontWeight: string,

                        fontSize: string,
                     },
                  },

                  confirmpopup: {
                     root: {
                        background: string,

                        borderColor: string,

                        color: string,

                        borderRadius: string,

                        shadow: string,

                        gutter: string,

                        arrowOffset: string,
                     },

                     content: {
                        padding: string,

                        gap: string,
                     },

                     icon: {
                        size: string,

                        color: string,
                     },

                     message: {
                        color: string,

                        fontWeight: string,

                        fontSize: string,
                     },

                     footer: {
                        gap: string,

                        padding: string,
                     },
                  },

                  contextmenu: {
                     root: {
                        background: string,

                        borderColor: string,

                        color: string,

                        borderRadius: string,

                        shadow: string,

                        transitionDuration: string,
                     },

                     list: {
                        padding: string,

                        gap: string,
                     },

                     item: {
                        focusBackground: string,

                        activeBackground: string,

                        color: string,

                        focusColor: string,

                        activeColor: string,

                        padding: string,

                        borderRadius: string,

                        gap: string,

                        icon: {
                           color: string,

                           focusColor: string,

                           activeColor: string,

                           size: string,
                        },

                        label: {
                           fontWeight: string,

                           fontSize: string,
                        },
                     },

                     submenu: {
                        mobileIndent: string,
                     },

                     submenuLabel: {
                        padding: string,

                        fontWeight: string,

                        fontSize: string,

                        background: string,

                        color: string,
                     },

                     submenuIcon: {
                        size: string,

                        color: string,

                        focusColor: string,

                        activeColor: string,
                     },

                     separator: {
                        borderColor: string,
                     },
                  },

                  datatable: {
                     root: {
                        transitionDuration: string,

                        borderColor: string,
                     },

                     header: {
                        background: string,

                        borderColor: string,

                        color: string,

                        borderWidth: string,

                        padding: string,

                        sm: {
                           padding: string,
                        },

                        lg: {
                           padding: string,
                        },
                     },

                     headerCell: {
                        background: string,

                        hoverBackground: string,

                        selectedBackground: string,

                        borderColor: string,

                        color: string,

                        hoverColor: string,

                        selectedColor: string,

                        gap: string,

                        padding: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },

                        sm: {
                           padding: string,
                        },

                        lg: {
                           padding: string,
                        },
                     },

                     columnTitle: {
                        fontWeight: string,

                        fontSize: string,
                     },

                     row: {
                        background: string,

                        hoverBackground: string,

                        selectedBackground: string,

                        color: string,

                        hoverColor: string,

                        selectedColor: string,

                        stripedBackground: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },

                     bodyCell: {
                        borderColor: string,

                        padding: string,

                        fontWeight: string,

                        fontSize: string,

                        selectedBorderColor: string,

                        sm: {
                           padding: string,
                        },

                        lg: {
                           padding: string,
                        },
                     },

                     footerCell: {
                        background: string,

                        borderColor: string,

                        color: string,

                        padding: string,

                        sm: {
                           padding: string,
                        },

                        lg: {
                           padding: string,
                        },
                     },

                     columnFooter: {
                        fontWeight: string,

                        fontSize: string,
                     },

                     footer: {
                        background: string,

                        borderColor: string,

                        color: string,

                        borderWidth: string,

                        padding: string,

                        sm: {
                           padding: string,
                        },

                        lg: {
                           padding: string,
                        },
                     },

                     dropPoint: {
                        color: string,
                     },

                     columnResizer: {
                        width: string,
                     },

                     resizeIndicator: {
                        width: string,

                        color: string,
                     },

                     sortIcon: {
                        color: string,

                        hoverColor: string,

                        size: string,
                     },

                     loadingIcon: {
                        size: string,
                     },

                     rowToggleButton: {
                        hoverBackground: string,

                        selectedHoverBackground: string,

                        color: string,

                        hoverColor: string,

                        selectedHoverColor: string,

                        size: string,

                        borderRadius: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },

                     filter: {
                        inlineGap: string,

                        overlaySelect: {
                           background: string,

                           borderColor: string,

                           borderRadius: string,

                           color: string,

                           shadow: string,
                        },

                        overlayPopover: {
                           background: string,

                           borderColor: string,

                           borderRadius: string,

                           color: string,

                           shadow: string,

                           padding: string,

                           gap: string,
                        },

                        rule: {
                           borderColor: string,
                        },

                        constraintList: {
                           padding: string,

                           gap: string,
                        },

                        constraint: {
                           focusBackground: string,

                           selectedBackground: string,

                           selectedFocusBackground: string,

                           color: string,

                           focusColor: string,

                           selectedColor: string,

                           selectedFocusColor: string,

                           separator: {
                              borderColor: string,
                           },

                           padding: string,

                           borderRadius: string,
                        },
                     },

                     paginatorTop: {
                        borderColor: string,

                        borderWidth: string,
                     },

                     paginatorBottom: {
                        borderColor: string,

                        borderWidth: string,
                     },

                     css: string,
                  },

                  dataview: {
                     root: {
                        borderColor: string,

                        borderWidth: string,

                        borderRadius: string,

                        padding: string,
                     },

                     header: {
                        background: string,

                        color: string,

                        borderColor: string,

                        borderWidth: string,

                        padding: string,

                        borderRadius: string,
                     },

                     content: {
                        background: string,

                        color: string,

                        borderColor: string,

                        borderWidth: string,

                        padding: string,

                        borderRadius: string,
                     },

                     footer: {
                        background: string,

                        color: string,

                        borderColor: string,

                        borderWidth: string,

                        padding: string,

                        borderRadius: string,
                     },

                     paginatorTop: {
                        borderColor: string,

                        borderWidth: string,
                     },

                     paginatorBottom: {
                        borderColor: string,

                        borderWidth: string,
                     },
                  },

                  datepicker: {
                     root: {
                        transitionDuration: string,
                     },

                     panel: {
                        background: string,

                        borderColor: string,

                        color: string,

                        borderRadius: string,

                        shadow: string,

                        padding: string,
                     },

                     header: {
                        background: string,

                        borderColor: string,

                        color: string,

                        padding: string,
                     },

                     title: {
                        gap: string,

                        fontWeight: string,

                        fontSize: string,
                     },

                     dropdown: {
                        width: string,

                        sm: {
                           width: string,
                        },

                        lg: {
                           width: string,
                        },

                        background: string,

                        hoverBackground: string,

                        activeBackground: string,

                        borderColor: string,

                        hoverBorderColor: string,

                        activeBorderColor: string,

                        color: string,

                        hoverColor: string,

                        activeColor: string,

                        borderRadius: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },

                     inputIcon: {
                        color: string,
                     },

                     selectMonth: {
                        hoverBackground: string,

                        color: string,

                        hoverColor: string,

                        padding: string,

                        borderRadius: string,

                        fontWeight: string,

                        fontSize: string,
                     },

                     selectYear: {
                        hoverBackground: string,

                        color: string,

                        hoverColor: string,

                        padding: string,

                        borderRadius: string,

                        fontWeight: string,

                        fontSize: string,
                     },

                     group: {
                        borderColor: string,

                        gap: string,
                     },

                     dayView: {
                        margin: string,
                     },

                     weekDay: {
                        padding: string,

                        fontWeight: string,

                        fontSize: string,

                        color: string,
                     },

                     date: {
                        fontWeight: string,

                        fontSize: string,

                        hoverBackground: string,

                        selectedBackground: string,

                        rangeSelectedBackground: string,

                        color: string,

                        hoverColor: string,

                        selectedColor: string,

                        rangeSelectedColor: string,

                        width: string,

                        height: string,

                        borderRadius: string,

                        padding: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },

                     monthView: {
                        margin: string,
                     },

                     month: {
                        padding: string,

                        borderRadius: string,
                     },

                     yearView: {
                        margin: string,
                     },

                     year: {
                        padding: string,

                        borderRadius: string,
                     },

                     buttonbar: {
                        padding: string,

                        borderColor: string,
                     },

                     timePicker: {
                        padding: string,

                        borderColor: string,

                        gap: string,

                        buttonGap: string,

                        color: string,

                        fontWeight: string,

                        fontSize: string,
                     },

                     today: {
                        background: string,

                        color: string,
                     },
                  },

                  dialog: {
                     root: {
                        background: string,

                        borderColor: string,

                        color: string,

                        borderRadius: string,

                        shadow: string,
                     },

                     header: {
                        padding: string,

                        gap: string,
                     },

                     title: {
                        fontSize: string,

                        fontWeight: string,
                     },

                     content: {
                        padding: string,
                     },

                     footer: {
                        padding: string,

                        gap: string,
                     },
                  },

                  divider: {
                     root: {
                        borderColor: string,
                     },

                     content: {
                        background: string,

                        color: string,
                     },

                     horizontal: {
                        margin: string,

                        padding: string,

                        content: {
                           padding: string,
                        },
                     },

                     vertical: {
                        margin: string,

                        padding: string,

                        content: {
                           padding: string,
                        },
                     },
                  },

                  dock: {
                     root: {
                        background: string,

                        borderColor: string,

                        padding: string,

                        borderRadius: string,
                     },

                     item: {
                        borderRadius: string,

                        padding: string,

                        size: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },
                  },

                  drawer: {
                     root: {
                        background: string,

                        borderColor: string,

                        color: string,

                        shadow: string,
                     },

                     header: {
                        padding: string,
                     },

                     title: {
                        fontSize: string,

                        fontWeight: string,
                     },

                     content: {
                        padding: string,
                     },

                     footer: {
                        padding: string,
                     },
                  },

                  editor: {
                     toolbar: {
                        background: string,

                        borderColor: string,

                        borderRadius: string,
                     },

                     toolbarItem: {
                        color: string,

                        hoverColor: string,

                        activeColor: string,
                     },

                     overlay: {
                        background: string,

                        borderColor: string,

                        borderRadius: string,

                        color: string,

                        shadow: string,

                        padding: string,
                     },

                     overlayOption: {
                        focusBackground: string,

                        color: string,

                        focusColor: string,

                        padding: string,

                        borderRadius: string,
                     },

                     content: {
                        background: string,

                        borderColor: string,

                        color: string,

                        borderRadius: string,
                     },
                  },

                  fieldset: {
                     root: {
                        background: string,

                        borderColor: string,

                        borderRadius: string,

                        color: string,

                        padding: string,

                        transitionDuration: string,
                     },

                     legend: {
                        background: string,

                        hoverBackground: string,

                        color: string,

                        hoverColor: string,

                        borderRadius: string,

                        borderWidth: string,

                        borderColor: string,

                        padding: string,

                        gap: string,

                        fontWeight: string,

                        fontSize: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },

                     toggleIcon: {
                        color: string,

                        hoverColor: string,
                     },

                     content: {
                        padding: string,
                     },
                  },

                  fileupload: {
                     root: {
                        background: string,

                        borderColor: string,

                        color: string,

                        borderRadius: string,

                        transitionDuration: string,
                     },

                     header: {
                        background: string,

                        color: string,

                        padding: string,

                        borderColor: string,

                        borderWidth: string,

                        borderRadius: string,

                        gap: string,
                     },

                     content: {
                        highlightBorderColor: string,

                        padding: string,

                        gap: string,
                     },

                     file: {
                        padding: string,

                        gap: string,

                        borderColor: string,

                        info: {
                           gap: string,
                        },
                     },

                     fileName: {
                        color: string,

                        fontWeight: string,

                        fontSize: string,
                     },

                     fileSize: {
                        color: string,

                        fontWeight: string,

                        fontSize: string,
                     },

                     fileList: {
                        gap: string,
                     },

                     progressbar: {
                        height: string,
                     },

                     basic: {
                        gap: string,
                     },
                  },

                  floatlabel: {
                     root: {
                        color: string,

                        focusColor: string,

                        activeColor: string,

                        invalidColor: string,

                        transitionDuration: string,

                        positionX: string,

                        positionY: string,

                        fontWeight: string,

                        fontSize: string,

                        active: {
                           fontSize: string,

                           fontWeight: string,
                        },
                     },

                     over: {
                        active: {
                           top: string,
                        },
                     },

                     in: {
                        input: {
                           paddingTop: string,

                           paddingBottom: string,
                        },

                        active: {
                           top: string,
                        },
                     },

                     on: {
                        borderRadius: string,

                        active: {
                           background: string,

                           padding: string,
                        },
                     },
                  },

                  galleria: {
                     root: {
                        borderWidth: string,

                        borderColor: string,

                        borderRadius: string,

                        transitionDuration: string,
                     },

                     navButton: {
                        background: string,

                        hoverBackground: string,

                        color: string,

                        hoverColor: string,

                        size: string,

                        gutter: string,

                        prev: {
                           borderRadius: string,
                        },

                        next: {
                           borderRadius: string,
                        },

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },

                     navIcon: {
                        size: string,
                     },

                     thumbnailsContent: {
                        background: string,

                        padding: string,
                     },

                     thumbnailNavButton: {
                        size: string,

                        borderRadius: string,

                        gutter: string,

                        hoverBackground: string,

                        color: string,

                        hoverColor: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },

                     thumbnailNavButtonIcon: {
                        size: string,
                     },

                     caption: {
                        background: string,

                        color: string,

                        padding: string,
                     },

                     indicatorList: {
                        gap: string,

                        padding: string,
                     },

                     indicatorButton: {
                        width: string,

                        height: string,

                        background: string,

                        hoverBackground: string,

                        activeBackground: string,

                        borderRadius: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },

                     insetIndicatorList: {
                        background: string,
                     },

                     insetIndicatorButton: {
                        background: string,

                        hoverBackground: string,

                        activeBackground: string,
                     },

                     closeButton: {
                        size: string,

                        gutter: string,

                        background: string,

                        hoverBackground: string,

                        color: string,

                        hoverColor: string,

                        borderRadius: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },

                     closeButtonIcon: {
                        size: string,
                     },
                  },

                  gallery: {
                     backdrop: {
                        background: string,
                     },

                     header: {
                        padding: string,

                        background: string,
                     },

                     footer: {
                        padding: string,

                        background: string,

                        borderColor: string,
                     },

                     item: {
                        transitionDuration: string,
                     },

                     action: {
                        size: string,

                        borderRadius: string,

                        color: string,

                        hoverBackground: string,

                        hoverColor: string,

                        disabledOpacity: string,

                        transitionDuration: string,

                        icon: {
                           size: string,
                        },
                     },

                     navigation: {
                        background: string,

                        size: string,

                        borderRadius: string,

                        color: string,

                        hoverBackground: string,

                        hoverColor: string,

                        offset: string,

                        transitionDuration: string,

                        icon: {
                           size: string,
                        },
                     },

                     thumbnail: {
                        size: string,

                        padding: string,

                        background: string,

                        borderRadius: string,

                        borderWidth: string,

                        hoverBorderColor: string,

                        activeBorderColor: string,

                        activeScale: string,

                        transitionDuration: string,
                     },

                     thumbnailContent: {
                        padding: string,
                     },
                  },

                  iconfield: {
                     icon: {
                        color: string,
                     },
                  },

                  iftalabel: {
                     root: {
                        color: string,

                        focusColor: string,

                        invalidColor: string,

                        transitionDuration: string,

                        positionX: string,

                        top: string,

                        fontWeight: string,

                        fontSize: string,
                     },

                     input: {
                        paddingTop: string,

                        paddingBottom: string,
                     },
                  },

                  image: {
                     root: {
                        transitionDuration: string,
                     },

                     preview: {
                        icon: {
                           size: string,
                        },

                        mask: {
                           background: string,

                           color: string,
                        },
                     },

                     toolbar: {
                        position: {
                           left: string,

                           right: string,

                           top: string,

                           bottom: string,
                        },

                        blur: string,

                        background: string,

                        borderColor: string,

                        borderWidth: string,

                        borderRadius: string,

                        padding: string,

                        gap: string,
                     },

                     action: {
                        hoverBackground: string,

                        color: string,

                        hoverColor: string,

                        size: string,

                        iconSize: string,

                        borderRadius: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },
                  },

                  imagecompare: {
                     handle: {
                        size: string,

                        hoverSize: string,

                        background: string,

                        hoverBackground: string,

                        borderColor: string,

                        hoverBorderColor: string,

                        borderWidth: string,

                        borderRadius: string,

                        transitionDuration: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },
                  },

                  inlinemessage: {
                     root: {
                        padding: string,

                        borderRadius: string,

                        gap: string,
                     },

                     text: {
                        fontWeight: string,
                     },

                     icon: {
                        size: string,
                     },

                     info: {
                        background: string,

                        borderColor: string,

                        color: string,

                        shadow: string,
                     },

                     success: {
                        background: string,

                        borderColor: string,

                        color: string,

                        shadow: string,
                     },

                     warn: {
                        background: string,

                        borderColor: string,

                        color: string,

                        shadow: string,
                     },

                     error: {
                        background: string,

                        borderColor: string,

                        color: string,

                        shadow: string,
                     },

                     secondary: {
                        background: string,

                        borderColor: string,

                        color: string,

                        shadow: string,
                     },

                     contrast: {
                        background: string,

                        borderColor: string,

                        color: string,

                        shadow: string,
                     },
                  },

                  inplace: {
                     root: {
                        padding: string,

                        borderRadius: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },

                        transitionDuration: string,
                     },

                     display: {
                        hoverBackground: string,

                        hoverColor: string,
                     },
                  },

                  inputchips: {
                     root: {
                        background: string,

                        disabledBackground: string,

                        filledBackground: string,

                        filledFocusBackground: string,

                        borderColor: string,

                        hoverBorderColor: string,

                        focusBorderColor: string,

                        invalidBorderColor: string,

                        color: string,

                        disabledColor: string,

                        placeholderColor: string,

                        shadow: string,

                        paddingX: string,

                        paddingY: string,

                        borderRadius: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },

                        transitionDuration: string,
                     },

                     chip: {
                        borderRadius: string,

                        focusBackground: string,

                        color: string,
                     },
                  },

                  inputcolor: {
                     root: {
                        borderColor: string,
                     },

                     area: {
                        borderRadius: string,
                     },

                     slider: {
                        borderRadius: string,

                        size: string,
                     },

                     handle: {
                        size: string,

                        borderColor: string,

                        borderWidth: string,

                        shadow: string,

                        transitionDuration: string,

                        focusRing: {
                           borderWidth: string,

                           borderColor: string,

                           outlineWidth: string,

                           outlineColor: string,

                           outlineOffset: string,
                        },
                     },

                     transparencyGrid: {
                        color: string,

                        background: string,

                        tileSize: string,
                     },

                     swatch: {
                        size: string,

                        borderRadius: string,
                     },
                  },

                  inputgroup: {
                     addon: {
                        background: string,

                        borderColor: string,

                        color: string,

                        borderRadius: string,

                        padding: string,

                        minWidth: string,

                        fontWeight: string,

                        fontSize: string,
                     },
                  },

                  inputnumber: {
                     root: {
                        transitionDuration: string,
                     },

                     button: {
                        width: string,

                        borderRadius: string,

                        verticalPadding: string,

                        background: string,

                        hoverBackground: string,

                        activeBackground: string,

                        borderColor: string,

                        hoverBorderColor: string,

                        activeBorderColor: string,

                        color: string,

                        hoverColor: string,

                        activeColor: string,
                     },
                  },

                  inputotp: {
                     root: {
                        gap: string,
                     },

                     input: {
                        width: string,

                        sm: {
                           width: string,
                        },

                        lg: {
                           width: string,
                        },
                     },
                  },

                  inputtags: {
                     root: {
                        background: string,

                        disabledBackground: string,

                        filledBackground: string,

                        filledHoverBackground: string,

                        filledFocusBackground: string,

                        borderColor: string,

                        hoverBorderColor: string,

                        focusBorderColor: string,

                        invalidBorderColor: string,

                        color: string,

                        disabledColor: string,

                        shadow: string,

                        paddingX: string,

                        paddingY: string,

                        borderRadius: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },

                        transitionDuration: string,

                        gap: string,
                     },

                     item: {
                        borderRadius: string,
                     },
                  },

                  inputtext: {
                     root: {
                        fontSize: string,

                        fontWeight: string,

                        background: string,

                        disabledBackground: string,

                        filledBackground: string,

                        filledHoverBackground: string,

                        filledFocusBackground: string,

                        borderColor: string,

                        hoverBorderColor: string,

                        focusBorderColor: string,

                        invalidBorderColor: string,

                        color: string,

                        disabledColor: string,

                        placeholderColor: string,

                        invalidPlaceholderColor: string,

                        shadow: string,

                        paddingX: string,

                        paddingY: string,

                        borderRadius: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },

                        transitionDuration: string,

                        sm: {
                           fontSize: string,

                           paddingX: string,

                           paddingY: string,
                        },

                        lg: {
                           fontSize: string,

                           paddingX: string,

                           paddingY: string,
                        },
                     },
                  },

                  knob: {
                     root: {
                        transitionDuration: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },

                     value: {
                        background: string,
                     },

                     range: {
                        background: string,
                     },

                     text: {
                        color: string,

                        fontSize: string,

                        fontWeight: string,
                     },
                  },

                  label: {
                     root: {
                        gap: string,

                        fontSize: string,

                        fontWeight: string,

                        textColor: string,

                        disabledOpacity: string,
                     },
                  },

                  listbox: {
                     root: {
                        background: string,

                        disabledBackground: string,

                        borderColor: string,

                        invalidBorderColor: string,

                        color: string,

                        disabledColor: string,

                        shadow: string,

                        borderRadius: string,

                        transitionDuration: string,
                     },

                     list: {
                        padding: string,

                        gap: string,

                        header: {
                           padding: string,
                        },
                     },

                     option: {
                        fontWeight: string,

                        fontSize: string,

                        focusBackground: string,

                        selectedBackground: string,

                        selectedFocusBackground: string,

                        color: string,

                        focusColor: string,

                        selectedColor: string,

                        selectedFocusColor: string,

                        selectedFontWeight: string,

                        padding: string,

                        borderRadius: string,

                        stripedBackground: string,
                     },

                     optionGroup: {
                        background: string,

                        color: string,

                        padding: string,

                        fontWeight: string,

                        fontSize: string,
                     },

                     checkmark: {
                        color: string,

                        gutterStart: string,

                        gutterEnd: string,
                     },

                     emptyMessage: {
                        padding: string,
                     },
                  },

                  megamenu: {
                     root: {
                        background: string,

                        borderColor: string,

                        borderRadius: string,

                        color: string,

                        gap: string,

                        verticalOrientation: {
                           padding: string,

                           gap: string,
                        },

                        horizontalOrientation: {
                           padding: string,

                           gap: string,
                        },

                        transitionDuration: string,
                     },

                     baseItem: {
                        borderRadius: string,

                        padding: string,
                     },

                     item: {
                        focusBackground: string,

                        activeBackground: string,

                        color: string,

                        focusColor: string,

                        activeColor: string,

                        padding: string,

                        borderRadius: string,

                        gap: string,

                        icon: {
                           color: string,

                           focusColor: string,

                           activeColor: string,

                           size: string,
                        },

                        label: {
                           fontWeight: string,

                           fontSize: string,
                        },
                     },

                     overlay: {
                        padding: string,

                        background: string,

                        borderColor: string,

                        borderRadius: string,

                        color: string,

                        shadow: string,

                        gap: string,
                     },

                     submenu: {
                        padding: string,

                        gap: string,
                     },

                     submenuLabel: {
                        padding: string,

                        fontWeight: string,

                        fontSize: string,

                        background: string,

                        color: string,
                     },

                     submenuIcon: {
                        size: string,

                        color: string,

                        focusColor: string,

                        activeColor: string,
                     },

                     separator: {
                        borderColor: string,
                     },

                     mobileButton: {
                        borderRadius: string,

                        size: string,

                        color: string,

                        hoverColor: string,

                        hoverBackground: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },
                  },

                  menu: {
                     root: {
                        background: string,

                        borderColor: string,

                        color: string,

                        borderRadius: string,

                        shadow: string,

                        transitionDuration: string,
                     },

                     list: {
                        padding: string,

                        gap: string,
                     },

                     item: {
                        focusBackground: string,

                        color: string,

                        focusColor: string,

                        padding: string,

                        borderRadius: string,

                        gap: string,

                        icon: {
                           color: string,

                           focusColor: string,

                           size: string,
                        },

                        label: {
                           fontWeight: string,

                           fontSize: string,
                        },
                     },

                     submenuLabel: {
                        padding: string,

                        fontWeight: string,

                        fontSize: string,

                        background: string,

                        color: string,
                     },

                     submenuIcon: {
                        size: string,

                        color: string,

                        focusColor: string,
                     },

                     separator: {
                        borderColor: string,
                     },
                  },

                  menubar: {
                     root: {
                        background: string,

                        borderColor: string,

                        borderRadius: string,

                        color: string,

                        gap: string,

                        padding: string,

                        transitionDuration: string,
                     },

                     baseItem: {
                        borderRadius: string,

                        padding: string,
                     },

                     item: {
                        focusBackground: string,

                        activeBackground: string,

                        color: string,

                        focusColor: string,

                        activeColor: string,

                        padding: string,

                        borderRadius: string,

                        gap: string,

                        icon: {
                           color: string,

                           focusColor: string,

                           activeColor: string,

                           size: string,
                        },

                        label: {
                           fontWeight: string,

                           fontSize: string,
                        },
                     },

                     submenu: {
                        padding: string,

                        gap: string,

                        background: string,

                        borderColor: string,

                        borderRadius: string,

                        shadow: string,

                        mobileIndent: string,

                        icon: {
                           size: string,

                           color: string,

                           focusColor: string,

                           activeColor: string,
                        },
                     },

                     separator: {
                        borderColor: string,
                     },

                     mobileButton: {
                        borderRadius: string,

                        size: string,

                        color: string,

                        hoverColor: string,

                        hoverBackground: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },
                  },

                  message: {
                     root: {
                        borderRadius: string,

                        borderWidth: string,

                        transitionDuration: string,
                     },

                     content: {
                        padding: string,

                        gap: string,

                        sm: {
                           padding: string,
                        },

                        lg: {
                           padding: string,
                        },
                     },

                     text: {
                        fontSize: string,

                        fontWeight: string,

                        sm: {
                           fontSize: string,
                        },

                        lg: {
                           fontSize: string,
                        },
                     },

                     icon: {
                        size: string,

                        sm: {
                           size: string,
                        },

                        lg: {
                           size: string,
                        },
                     },

                     closeButton: {
                        width: string,

                        height: string,

                        borderRadius: string,

                        focusRing: {
                           width: string,

                           style: string,

                           offset: string,
                        },
                     },

                     closeIcon: {
                        size: string,

                        sm: {
                           size: string,
                        },

                        lg: {
                           size: string,
                        },
                     },

                     outlined: {
                        root: {
                           borderWidth: string,
                        },
                     },

                     simple: {
                        content: {
                           padding: string,
                        },
                     },

                     info: {
                        background: string,

                        borderColor: string,

                        color: string,

                        shadow: string,

                        closeButton: {
                           hoverBackground: string,

                           focusRing: {
                              color: string,

                              shadow: string,
                           },
                        },

                        outlined: {
                           color: string,

                           borderColor: string,
                        },

                        simple: {
                           color: string,
                        },
                     },

                     success: {
                        background: string,

                        borderColor: string,

                        color: string,

                        shadow: string,

                        closeButton: {
                           hoverBackground: string,

                           focusRing: {
                              color: string,

                              shadow: string,
                           },
                        },

                        outlined: {
                           color: string,

                           borderColor: string,
                        },

                        simple: {
                           color: string,
                        },
                     },

                     warn: {
                        background: string,

                        borderColor: string,

                        color: string,

                        shadow: string,

                        closeButton: {
                           hoverBackground: string,

                           focusRing: {
                              color: string,

                              shadow: string,
                           },
                        },

                        outlined: {
                           color: string,

                           borderColor: string,
                        },

                        simple: {
                           color: string,
                        },
                     },

                     error: {
                        background: string,

                        borderColor: string,

                        color: string,

                        shadow: string,

                        closeButton: {
                           hoverBackground: string,

                           focusRing: {
                              color: string,

                              shadow: string,
                           },
                        },

                        outlined: {
                           color: string,

                           borderColor: string,
                        },

                        simple: {
                           color: string,
                        },
                     },

                     secondary: {
                        background: string,

                        borderColor: string,

                        color: string,

                        shadow: string,

                        closeButton: {
                           hoverBackground: string,

                           focusRing: {
                              color: string,

                              shadow: string,
                           },
                        },

                        outlined: {
                           color: string,

                           borderColor: string,
                        },

                        simple: {
                           color: string,
                        },
                     },

                     contrast: {
                        background: string,

                        borderColor: string,

                        color: string,

                        shadow: string,

                        closeButton: {
                           hoverBackground: string,

                           focusRing: {
                              color: string,

                              shadow: string,
                           },
                        },

                        outlined: {
                           color: string,

                           borderColor: string,
                        },

                        simple: {
                           color: string,
                        },
                     },
                  },

                  metergroup: {
                     root: {
                        borderRadius: string,

                        gap: string,
                     },

                     meters: {
                        background: string,

                        size: string,
                     },

                     label: {
                        gap: string,
                     },

                     labelMarker: {
                        size: string,
                     },

                     labelText: {
                        fontWeight: string,

                        fontSize: string,
                     },

                     labelIcon: {
                        size: string,
                     },

                     labelList: {
                        verticalGap: string,

                        horizontalGap: string,
                     },
                  },

                  multiselect: {
                     root: {
                        fontSize: string,

                        fontWeight: string,

                        background: string,

                        disabledBackground: string,

                        filledBackground: string,

                        filledHoverBackground: string,

                        filledFocusBackground: string,

                        borderColor: string,

                        hoverBorderColor: string,

                        focusBorderColor: string,

                        invalidBorderColor: string,

                        color: string,

                        disabledColor: string,

                        placeholderColor: string,

                        invalidPlaceholderColor: string,

                        shadow: string,

                        paddingX: string,

                        paddingY: string,

                        borderRadius: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },

                        transitionDuration: string,

                        sm: {
                           fontSize: string,

                           paddingX: string,

                           paddingY: string,
                        },

                        lg: {
                           fontSize: string,

                           paddingX: string,

                           paddingY: string,
                        },
                     },

                     dropdown: {
                        width: string,

                        color: string,
                     },

                     overlay: {
                        background: string,

                        borderColor: string,

                        borderRadius: string,

                        color: string,

                        shadow: string,
                     },

                     list: {
                        padding: string,

                        gap: string,

                        header: {
                           padding: string,
                        },
                     },

                     option: {
                        fontSize: string,

                        fontWeight: string,

                        focusBackground: string,

                        selectedBackground: string,

                        selectedFocusBackground: string,

                        color: string,

                        focusColor: string,

                        selectedColor: string,

                        selectedFocusColor: string,

                        selectedFontWeight: string,

                        padding: string,

                        borderRadius: string,

                        gap: string,
                     },

                     optionGroup: {
                        background: string,

                        color: string,

                        fontWeight: string,

                        fontSize: string,

                        padding: string,
                     },

                     chip: {
                        borderRadius: string,
                     },

                     clearIcon: {
                        color: string,
                     },

                     emptyMessage: {
                        padding: string,
                     },
                  },

                  navigationmenu: {
                     root: {
                        padding: string,

                        gap: string,
                     },

                     baseItem: {
                        padding: string,

                        borderRadius: string,

                        gap: string,

                        fontSize: string,

                        fontWeight: string,

                        color: string,

                        focusColor: string,

                        focusBackground: string,

                        activeColor: string,

                        activeBackground: string,

                        transitionDuration: string,
                     },
                  },

                  orderlist: {
                     root: {
                        gap: string,
                     },

                     controls: {
                        gap: string,
                     },
                  },

                  organizationchart: {
                     root: {
                        gutter: string,

                        transitionDuration: string,
                     },

                     node: {
                        background: string,

                        hoverBackground: string,

                        selectedBackground: string,

                        borderColor: string,

                        color: string,

                        selectedColor: string,

                        hoverColor: string,

                        padding: string,

                        toggleablePadding: string,

                        borderRadius: string,

                        fontSize: string,

                        fontWeight: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },

                     nodeToggleButton: {
                        background: string,

                        hoverBackground: string,

                        borderColor: string,

                        color: string,

                        hoverColor: string,

                        size: string,

                        borderRadius: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },

                        icon: {
                           size: string,
                        },
                     },

                     connector: {
                        color: string,

                        borderRadius: string,

                        height: string,
                     },
                  },

                  overlaybadge: {
                     root: {
                        outline: {
                           width: string,

                           color: string,
                        },
                     },
                  },

                  paginator: {
                     root: {
                        padding: string,

                        gap: string,

                        borderRadius: string,

                        background: string,

                        color: string,

                        transitionDuration: string,
                     },

                     navButton: {
                        background: string,

                        hoverBackground: string,

                        selectedBackground: string,

                        color: string,

                        hoverColor: string,

                        selectedColor: string,

                        width: string,

                        height: string,

                        borderRadius: string,

                        fontWeight: string,

                        fontSize: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },

                     currentPageReport: {
                        color: string,

                        fontWeight: string,

                        fontSize: string,
                     },

                     jumpToPageInput: {
                        maxWidth: string,
                     },
                  },

                  panel: {
                     root: {
                        background: string,

                        borderColor: string,

                        color: string,

                        borderRadius: string,
                     },

                     header: {
                        background: string,

                        color: string,

                        padding: string,

                        borderColor: string,

                        borderWidth: string,

                        borderRadius: string,
                     },

                     toggleableHeader: {
                        padding: string,
                     },

                     title: {
                        fontWeight: string,

                        fontSize: string,
                     },

                     content: {
                        padding: string,
                     },

                     footer: {
                        padding: string,
                     },
                  },

                  panelmenu: {
                     root: {
                        gap: string,

                        transitionDuration: string,
                     },

                     panel: {
                        background: string,

                        borderColor: string,

                        borderWidth: string,

                        color: string,

                        padding: string,

                        borderRadius: string,

                        first: {
                           borderWidth: string,

                           topBorderRadius: string,
                        },

                        last: {
                           borderWidth: string,

                           bottomBorderRadius: string,
                        },
                     },

                     item: {
                        focusBackground: string,

                        color: string,

                        focusColor: string,

                        gap: string,

                        padding: string,

                        borderRadius: string,

                        icon: {
                           color: string,

                           focusColor: string,

                           size: string,
                        },

                        label: {
                           fontWeight: string,

                           fontSize: string,
                        },
                     },

                     submenu: {
                        indent: string,
                     },

                     submenuIcon: {
                        color: string,

                        focusColor: string,
                     },
                  },

                  password: {
                     meter: {
                        background: string,

                        borderRadius: string,

                        height: string,
                     },

                     icon: {
                        color: string,
                     },

                     overlay: {
                        background: string,

                        borderColor: string,

                        borderRadius: string,

                        color: string,

                        padding: string,

                        shadow: string,
                     },

                     content: {
                        gap: string,
                     },

                     meterText: {
                        fontSize: string,

                        fontWeight: string,
                     },

                     strength: {
                        weakBackground: string,

                        mediumBackground: string,

                        strongBackground: string,
                     },
                  },

                  picklist: {
                     root: {
                        gap: string,
                     },

                     controls: {
                        gap: string,
                     },
                  },

                  popover: {
                     root: {
                        background: string,

                        borderColor: string,

                        color: string,

                        borderRadius: string,

                        shadow: string,

                        gutter: string,

                        arrowOffset: string,
                     },

                     content: {
                        padding: string,
                     },
                  },

                  progressbar: {
                     root: {
                        background: string,

                        borderRadius: string,

                        height: string,
                     },

                     value: {
                        background: string,
                     },

                     label: {
                        color: string,

                        fontSize: string,

                        fontWeight: string,
                     },
                  },

                  progressspinner: {
                     root: {
                        colorOne: string,

                        colorTwo: string,

                        colorThree: string,

                        colorFour: string,
                     },
                  },

                  radiobutton: {
                     root: {
                        width: string,

                        height: string,

                        background: string,

                        checkedBackground: string,

                        checkedHoverBackground: string,

                        disabledBackground: string,

                        filledBackground: string,

                        borderColor: string,

                        hoverBorderColor: string,

                        focusBorderColor: string,

                        checkedBorderColor: string,

                        checkedHoverBorderColor: string,

                        checkedFocusBorderColor: string,

                        checkedDisabledBorderColor: string,

                        invalidBorderColor: string,

                        shadow: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },

                        transitionDuration: string,

                        sm: {
                           width: string,

                           height: string,
                        },

                        lg: {
                           width: string,

                           height: string,
                        },
                     },

                     icon: {
                        size: string,

                        checkedColor: string,

                        checkedHoverColor: string,

                        disabledColor: string,

                        sm: {
                           size: string,
                        },

                        lg: {
                           size: string,
                        },
                     },
                  },

                  rating: {
                     root: {
                        gap: string,

                        transitionDuration: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },

                     icon: {
                        size: string,

                        color: string,

                        hoverColor: string,

                        activeColor: string,
                     },
                  },

                  ripple: {
                     root: {
                        background: string,
                     },
                  },

                  scrollarea: {
                     root: {
                        background: string,

                        borderColor: string,

                        borderRadius: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },

                     viewport: {
                        padding: string,
                     },

                     scrollbar: {
                        background: string,

                        margin: string,

                        size: string,

                        transitionDuration: string,
                     },

                     handle: {
                        background: string,
                     },

                     mask: {
                        fadeSize: string,
                     },
                  },

                  scrollpanel: {
                     root: {
                        transitionDuration: string,
                     },

                     bar: {
                        size: string,

                        borderRadius: string,

                        background: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },
                  },

                  select: {
                     root: {
                        fontSize: string,

                        fontWeight: string,

                        background: string,

                        disabledBackground: string,

                        filledBackground: string,

                        filledHoverBackground: string,

                        filledFocusBackground: string,

                        borderColor: string,

                        hoverBorderColor: string,

                        focusBorderColor: string,

                        invalidBorderColor: string,

                        color: string,

                        disabledColor: string,

                        placeholderColor: string,

                        invalidPlaceholderColor: string,

                        shadow: string,

                        paddingX: string,

                        paddingY: string,

                        borderRadius: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },

                        transitionDuration: string,

                        sm: {
                           fontSize: string,

                           paddingX: string,

                           paddingY: string,
                        },

                        lg: {
                           fontSize: string,

                           paddingX: string,

                           paddingY: string,
                        },
                     },

                     dropdown: {
                        width: string,

                        color: string,
                     },

                     overlay: {
                        background: string,

                        borderColor: string,

                        borderRadius: string,

                        color: string,

                        shadow: string,
                     },

                     list: {
                        padding: string,

                        gap: string,

                        header: {
                           padding: string,
                        },
                     },

                     option: {
                        fontSize: string,

                        fontWeight: string,

                        focusBackground: string,

                        selectedBackground: string,

                        selectedFocusBackground: string,

                        color: string,

                        focusColor: string,

                        selectedColor: string,

                        selectedFocusColor: string,

                        selectedFontWeight: string,

                        padding: string,

                        borderRadius: string,
                     },

                     optionGroup: {
                        background: string,

                        color: string,

                        fontWeight: string,

                        fontSize: string,

                        padding: string,
                     },

                     clearIcon: {
                        color: string,
                     },

                     checkmark: {
                        color: string,

                        gutterStart: string,

                        gutterEnd: string,
                     },

                     emptyMessage: {
                        padding: string,
                     },
                  },

                  selectbutton: {
                     root: {
                        borderRadius: string,

                        invalidBorderColor: string,
                     },
                  },

                  sidebar: {
                     root: {
                        borderColor: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },

                     layout: {
                        background: string,
                     },

                     header: {
                        padding: string,

                        gap: string,
                     },

                     footer: {
                        padding: string,

                        gap: string,
                     },

                     content: {
                        gap: string,
                     },

                     aside: {
                        padding: string,
                     },

                     panel: {
                        background: string,

                        color: string,

                        floatingBorderRadius: string,

                        floatingShadow: string,
                     },

                     group: {
                        padding: string,
                     },

                     groupLabel: {
                        padding: string,

                        height: string,

                        borderRadius: string,

                        fontSize: string,

                        fontWeight: string,

                        color: string,
                     },

                     groupAction: {
                        top: string,

                        right: string,

                        size: string,

                        borderRadius: string,

                        color: string,

                        focusColor: string,

                        focusBackground: string,

                        icon: {
                           size: string,
                        },
                     },

                     menu: {
                        gap: string,
                     },

                     menuButton: {
                        padding: string,

                        gap: string,

                        height: string,

                        borderRadius: string,

                        fontSize: string,

                        fontWeight: string,

                        color: string,

                        focusBackground: string,

                        focusColor: string,

                        activeBackground: string,

                        activeColor: string,

                        iconOnlyWidth: string,

                        withActionPaddingEnd: string,

                        icon: {
                           color: string,

                           focusColor: string,

                           size: string,
                        },
                     },

                     menuAction: {
                        top: string,

                        right: string,

                        width: string,

                        borderRadius: string,

                        color: string,

                        focusColor: string,

                        focusBackground: string,

                        icon: {
                           size: string,
                        },
                     },

                     menuBadge: {
                        top: string,

                        right: string,

                        height: string,

                        minWidth: string,

                        borderRadius: string,

                        padding: string,

                        fontSize: string,

                        fontWeight: string,

                        background: string,

                        borderColor: string,

                        color: string,
                     },

                     menuSub: {
                        paddingBlock: string,

                        gap: string,

                        indentMargin: string,

                        indentPadding: string,

                        collapsibleIndent: string,

                        collapsibleTopMargin: string,

                        collapsibleBorderRadius: string,
                     },

                     menuSubButton: {
                        padding: string,

                        gap: string,

                        height: string,

                        borderRadius: string,

                        fontSize: string,

                        fontWeight: string,

                        color: string,

                        focusBackground: string,

                        focusColor: string,

                        activeBackground: string,

                        activeColor: string,

                        icon: {
                           color: string,

                           focusColor: string,

                           size: string,
                        },
                     },

                     main: {
                        background: string,

                        floatingBackground: string,

                        insetBackground: string,

                        margin: string,

                        borderRadius: string,

                        shadow: string,
                     },
                  },

                  skeleton: {
                     root: {
                        borderRadius: string,

                        background: string,

                        animationBackground: string,
                     },
                  },

                  slider: {
                     root: {
                        transitionDuration: string,
                     },

                     track: {
                        background: string,

                        borderRadius: string,

                        size: string,
                     },

                     range: {
                        background: string,
                     },

                     handle: {
                        width: string,

                        height: string,

                        borderRadius: string,

                        background: string,

                        hoverBackground: string,

                        content: {
                           borderRadius: string,

                           background: string,

                           hoverBackground: string,

                           width: string,

                           height: string,

                           shadow: string,
                        },

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },
                  },

                  speeddial: {
                     root: {
                        gap: string,

                        transitionDuration: string,
                     },
                  },

                  splitbutton: {
                     root: {
                        borderRadius: string,

                        roundedBorderRadius: string,

                        raisedShadow: string,
                     },
                  },

                  splitter: {
                     root: {
                        background: string,

                        borderColor: string,

                        color: string,

                        transitionDuration: string,
                     },

                     gutter: {
                        background: string,
                     },

                     handle: {
                        size: string,

                        background: string,

                        borderRadius: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },
                  },

                  stepper: {
                     root: {
                        transitionDuration: string,
                     },

                     separator: {
                        background: string,

                        activeBackground: string,

                        margin: string,

                        size: string,
                     },

                     step: {
                        padding: string,

                        gap: string,
                     },

                     stepHeader: {
                        padding: string,

                        borderRadius: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },

                        gap: string,
                     },

                     stepTitle: {
                        color: string,

                        activeColor: string,

                        fontWeight: string,

                        fontSize: string,
                     },

                     stepNumber: {
                        background: string,

                        activeBackground: string,

                        borderColor: string,

                        activeBorderColor: string,

                        color: string,

                        activeColor: string,

                        size: string,

                        fontSize: string,

                        fontWeight: string,

                        borderRadius: string,

                        shadow: string,
                     },

                     steppanels: {
                        padding: string,
                     },

                     steppanel: {
                        background: string,

                        color: string,

                        padding: string,

                        indent: string,
                     },
                  },

                  steps: {
                     root: {
                        transitionDuration: string,
                     },

                     separator: {
                        background: string,
                     },

                     itemLink: {
                        borderRadius: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },

                        gap: string,
                     },

                     itemLabel: {
                        color: string,

                        activeColor: string,

                        fontWeight: string,
                     },

                     itemNumber: {
                        background: string,

                        activeBackground: string,

                        borderColor: string,

                        activeBorderColor: string,

                        color: string,

                        activeColor: string,

                        size: string,

                        fontSize: string,

                        fontWeight: string,

                        borderRadius: string,

                        shadow: string,
                     },
                  },

                  tabmenu: {
                     root: {
                        transitionDuration: string,
                     },

                     tablist: {
                        borderWidth: string,

                        background: string,

                        borderColor: string,
                     },

                     item: {
                        background: string,

                        hoverBackground: string,

                        activeBackground: string,

                        borderWidth: string,

                        borderColor: string,

                        hoverBorderColor: string,

                        activeBorderColor: string,

                        color: string,

                        hoverColor: string,

                        activeColor: string,

                        padding: string,

                        fontWeight: string,

                        margin: string,

                        gap: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },

                     itemIcon: {
                        color: string,

                        hoverColor: string,

                        activeColor: string,
                     },

                     activeBar: {
                        height: string,

                        bottom: string,

                        background: string,
                     },
                  },

                  tabs: {
                     root: {
                        transitionDuration: string,
                     },

                     tablist: {
                        borderWidth: string,

                        background: string,

                        borderColor: string,
                     },

                     tab: {
                        background: string,

                        hoverBackground: string,

                        activeBackground: string,

                        borderWidth: string,

                        borderColor: string,

                        hoverBorderColor: string,

                        activeBorderColor: string,

                        color: string,

                        hoverColor: string,

                        activeColor: string,

                        padding: string,

                        fontWeight: string,

                        fontSize: string,

                        margin: string,

                        gap: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },

                     tabpanel: {
                        background: string,

                        color: string,

                        padding: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },

                     navButton: {
                        background: string,

                        color: string,

                        hoverColor: string,

                        width: string,

                        shadow: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },

                     activeBar: {
                        height: string,

                        bottom: string,

                        background: string,
                     },
                  },

                  tabview: {
                     root: {
                        transitionDuration: string,
                     },

                     tabList: {
                        background: string,

                        borderColor: string,
                     },

                     tab: {
                        borderColor: string,

                        activeBorderColor: string,

                        color: string,

                        hoverColor: string,

                        activeColor: string,
                     },

                     tabPanel: {
                        background: string,

                        color: string,
                     },

                     navButton: {
                        background: string,

                        color: string,

                        hoverColor: string,

                        shadow: string,
                     },
                  },

                  tag: {
                     root: {
                        fontSize: string,

                        fontWeight: string,

                        padding: string,

                        gap: string,

                        borderRadius: string,

                        roundedBorderRadius: string,
                     },

                     icon: {
                        size: string,
                     },

                     primary: {
                        background: string,

                        color: string,
                     },

                     secondary: {
                        background: string,

                        color: string,
                     },

                     success: {
                        background: string,

                        color: string,
                     },

                     info: {
                        background: string,

                        color: string,
                     },

                     warn: {
                        background: string,

                        color: string,
                     },

                     danger: {
                        background: string,

                        color: string,
                     },

                     contrast: {
                        background: string,

                        color: string,
                     },
                  },

                  terminal: {
                     root: {
                        background: string,

                        borderColor: string,

                        color: string,

                        height: string,

                        padding: string,

                        borderRadius: string,

                        fontWeight: string,

                        fontSize: string,
                     },

                     prompt: {
                        gap: string,
                     },

                     commandResponse: {
                        margin: string,
                     },
                  },

                  textarea: {
                     root: {
                        fontSize: string,

                        fontWeight: string,

                        background: string,

                        disabledBackground: string,

                        filledBackground: string,

                        filledHoverBackground: string,

                        filledFocusBackground: string,

                        borderColor: string,

                        hoverBorderColor: string,

                        focusBorderColor: string,

                        invalidBorderColor: string,

                        color: string,

                        disabledColor: string,

                        placeholderColor: string,

                        invalidPlaceholderColor: string,

                        shadow: string,

                        paddingX: string,

                        paddingY: string,

                        borderRadius: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },

                        transitionDuration: string,

                        sm: {
                           fontSize: string,

                           paddingX: string,

                           paddingY: string,
                        },

                        lg: {
                           fontSize: string,

                           paddingX: string,

                           paddingY: string,
                        },
                     },
                  },

                  tieredmenu: {
                     root: {
                        background: string,

                        borderColor: string,

                        color: string,

                        borderRadius: string,

                        shadow: string,

                        transitionDuration: string,
                     },

                     list: {
                        padding: string,

                        gap: string,
                     },

                     item: {
                        focusBackground: string,

                        activeBackground: string,

                        color: string,

                        focusColor: string,

                        activeColor: string,

                        padding: string,

                        borderRadius: string,

                        gap: string,

                        icon: {
                           color: string,

                           focusColor: string,

                           activeColor: string,

                           size: string,
                        },

                        label: {
                           fontWeight: string,

                           fontSize: string,
                        },
                     },

                     submenu: {
                        mobileIndent: string,
                     },

                     submenuIcon: {
                        size: string,

                        color: string,

                        focusColor: string,

                        activeColor: string,
                     },

                     separator: {
                        borderColor: string,
                     },
                  },

                  timeline: {
                     event: {
                        minHeight: string,
                     },

                     horizontal: {
                        eventContent: {
                           padding: string,
                        },
                     },

                     vertical: {
                        eventContent: {
                           padding: string,
                        },
                     },

                     eventMarker: {
                        size: string,

                        borderRadius: string,

                        borderWidth: string,

                        background: string,

                        borderColor: string,

                        content: {
                           borderRadius: string,

                           size: string,

                           background: string,

                           insetShadow: string,
                        },
                     },

                     eventConnector: {
                        color: string,

                        size: string,
                     },
                  },

                  toast: {
                     root: {
                        width: string,

                        borderRadius: string,

                        borderWidth: string,

                        transitionDuration: string,

                        blur: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },

                     icon: {
                        size: string,

                        margin: string,
                     },

                     content: {
                        padding: string,

                        gap: string,
                     },

                     text: {
                        gap: string,
                     },

                     summary: {
                        fontWeight: string,

                        fontSize: string,
                     },

                     detail: {
                        fontWeight: string,

                        fontSize: string,
                     },

                     closeButton: {
                        width: string,

                        height: string,

                        borderRadius: string,

                        focusRing: {
                           width: string,

                           style: string,

                           offset: string,
                        },
                     },

                     closeIcon: {
                        size: string,
                     },

                     normal: {
                        background: string,

                        borderColor: string,

                        color: string,

                        detailColor: string,

                        shadow: string,

                        closeButton: {
                           hoverBackground: string,

                           focusRing: {
                              color: string,

                              shadow: string,
                           },
                        },
                     },

                     info: {
                        background: string,

                        borderColor: string,

                        color: string,

                        detailColor: string,

                        shadow: string,

                        closeButton: {
                           hoverBackground: string,

                           focusRing: {
                              color: string,

                              shadow: string,
                           },
                        },
                     },

                     success: {
                        background: string,

                        borderColor: string,

                        color: string,

                        detailColor: string,

                        shadow: string,

                        closeButton: {
                           hoverBackground: string,

                           focusRing: {
                              color: string,

                              shadow: string,
                           },
                        },
                     },

                     warn: {
                        background: string,

                        borderColor: string,

                        color: string,

                        detailColor: string,

                        shadow: string,

                        closeButton: {
                           hoverBackground: string,

                           focusRing: {
                              color: string,

                              shadow: string,
                           },
                        },
                     },

                     error: {
                        background: string,

                        borderColor: string,

                        color: string,

                        detailColor: string,

                        shadow: string,

                        closeButton: {
                           hoverBackground: string,

                           focusRing: {
                              color: string,

                              shadow: string,
                           },
                        },
                     },

                     secondary: {
                        background: string,

                        borderColor: string,

                        color: string,

                        detailColor: string,

                        shadow: string,

                        closeButton: {
                           hoverBackground: string,

                           focusRing: {
                              color: string,

                              shadow: string,
                           },
                        },
                     },

                     contrast: {
                        background: string,

                        borderColor: string,

                        color: string,

                        detailColor: string,

                        shadow: string,

                        closeButton: {
                           hoverBackground: string,

                           focusRing: {
                              color: string,

                              shadow: string,
                           },
                        },
                     },
                  },

                  togglebutton: {
                     root: {
                        padding: string,

                        borderRadius: string,

                        gap: string,

                        fontWeight: string,

                        fontSize: string,

                        background: string,

                        checkedBackground: string,

                        hoverBackground: string,

                        borderColor: string,

                        color: string,

                        hoverColor: string,

                        checkedColor: string,

                        checkedBorderColor: string,

                        disabledBackground: string,

                        disabledBorderColor: string,

                        disabledColor: string,

                        invalidBorderColor: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },

                        transitionDuration: string,

                        sm: {
                           fontSize: string,

                           padding: string,
                        },

                        lg: {
                           fontSize: string,

                           padding: string,
                        },
                     },

                     icon: {
                        color: string,

                        hoverColor: string,

                        checkedColor: string,

                        disabledColor: string,
                     },

                     content: {
                        padding: string,

                        borderRadius: string,

                        checkedBackground: string,

                        checkedShadow: string,

                        sm: {
                           padding: string,
                        },

                        lg: {
                           padding: string,
                        },
                     },
                  },

                  toggleswitch: {
                     root: {
                        width: string,

                        height: string,

                        borderRadius: string,

                        gap: string,

                        shadow: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },

                        borderWidth: string,

                        borderColor: string,

                        hoverBorderColor: string,

                        checkedBorderColor: string,

                        checkedHoverBorderColor: string,

                        invalidBorderColor: string,

                        transitionDuration: string,

                        slideDuration: string,

                        background: string,

                        disabledBackground: string,

                        hoverBackground: string,

                        checkedBackground: string,

                        checkedHoverBackground: string,
                     },

                     handle: {
                        borderRadius: string,

                        size: string,

                        background: string,

                        disabledBackground: string,

                        hoverBackground: string,

                        checkedBackground: string,

                        checkedHoverBackground: string,

                        color: string,

                        hoverColor: string,

                        checkedColor: string,

                        checkedHoverColor: string,
                     },
                  },

                  toolbar: {
                     root: {
                        background: string,

                        borderColor: string,

                        borderRadius: string,

                        color: string,

                        gap: string,

                        padding: string,
                     },
                  },

                  tooltip: {
                     root: {
                        maxWidth: string,

                        gutter: string,

                        shadow: string,

                        padding: string,

                        borderRadius: string,

                        fontWeight: string,

                        fontSize: string,

                        background: string,

                        color: string,
                     },
                  },

                  tree: {
                     root: {
                        background: string,

                        color: string,

                        padding: string,

                        gap: string,

                        indent: string,

                        transitionDuration: string,
                     },

                     node: {
                        padding: string,

                        borderRadius: string,

                        hoverBackground: string,

                        selectedBackground: string,

                        color: string,

                        hoverColor: string,

                        selectedColor: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },

                        gap: string,
                     },

                     nodeIcon: {
                        color: string,

                        hoverColor: string,

                        selectedColor: string,
                     },

                     nodeLabel: {
                        fontWeight: string,

                        selectedFontWeight: string,

                        fontSize: string,
                     },

                     nodeToggleButton: {
                        borderRadius: string,

                        size: string,

                        hoverBackground: string,

                        selectedHoverBackground: string,

                        color: string,

                        hoverColor: string,

                        selectedHoverColor: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },

                     loadingIcon: {
                        size: string,
                     },

                     filter: {
                        margin: string,
                     },

                     css: string,
                  },

                  treeselect: {
                     root: {
                        fontSize: string,

                        fontWeight: string,

                        background: string,

                        disabledBackground: string,

                        filledBackground: string,

                        filledHoverBackground: string,

                        filledFocusBackground: string,

                        borderColor: string,

                        hoverBorderColor: string,

                        focusBorderColor: string,

                        invalidBorderColor: string,

                        color: string,

                        disabledColor: string,

                        placeholderColor: string,

                        invalidPlaceholderColor: string,

                        shadow: string,

                        paddingX: string,

                        paddingY: string,

                        borderRadius: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },

                        transitionDuration: string,

                        sm: {
                           fontSize: string,

                           paddingX: string,

                           paddingY: string,
                        },

                        lg: {
                           fontSize: string,

                           paddingX: string,

                           paddingY: string,
                        },
                     },

                     dropdown: {
                        width: string,

                        color: string,
                     },

                     overlay: {
                        background: string,

                        borderColor: string,

                        borderRadius: string,

                        color: string,

                        shadow: string,
                     },

                     tree: {
                        padding: string,
                     },

                     emptyMessage: {
                        padding: string,
                     },

                     chip: {
                        borderRadius: string,
                     },

                     clearIcon: {
                        color: string,
                     },
                  },

                  treetable: {
                     root: {
                        transitionDuration: string,

                        borderColor: string,
                     },

                     header: {
                        background: string,

                        borderColor: string,

                        color: string,

                        borderWidth: string,

                        padding: string,
                     },

                     headerCell: {
                        background: string,

                        hoverBackground: string,

                        selectedBackground: string,

                        borderColor: string,

                        color: string,

                        hoverColor: string,

                        selectedColor: string,

                        gap: string,

                        padding: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },

                     columnTitle: {
                        fontWeight: string,

                        fontSize: string,
                     },

                     row: {
                        background: string,

                        hoverBackground: string,

                        selectedBackground: string,

                        color: string,

                        hoverColor: string,

                        selectedColor: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },

                     bodyCell: {
                        borderColor: string,

                        padding: string,

                        gap: string,

                        fontWeight: string,

                        fontSize: string,

                        selectedBorderColor: string,
                     },

                     footerCell: {
                        background: string,

                        borderColor: string,

                        color: string,

                        padding: string,
                     },

                     columnFooter: {
                        fontWeight: string,

                        fontSize: string,
                     },

                     footer: {
                        background: string,

                        borderColor: string,

                        color: string,

                        borderWidth: string,

                        padding: string,
                     },

                     columnResizer: {
                        width: string,
                     },

                     resizeIndicator: {
                        width: string,

                        color: string,
                     },

                     sortIcon: {
                        color: string,

                        hoverColor: string,

                        size: string,
                     },

                     loadingIcon: {
                        size: string,
                     },

                     nodeToggleButton: {
                        hoverBackground: string,

                        selectedHoverBackground: string,

                        color: string,

                        hoverColor: string,

                        selectedHoverColor: string,

                        size: string,

                        borderRadius: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },

                     paginatorTop: {
                        borderColor: string,

                        borderWidth: string,
                     },

                     paginatorBottom: {
                        borderColor: string,

                        borderWidth: string,
                     },

                     css: string,
                  },

                  virtualscroller: {
                     loader: {
                        mask: {
                           background: string,

                           color: string,
                        },

                        icon: {
                           size: string,
                        },
                     },
                  },
               },

               css: string,
            },

            options: {
               darkModeSelector: string,
            },
         },
      },

      components: Array<{

      }>,

      directives: Array<{

      }>,

      composables: Array<{

      }>,

      config: Array<{

      }>,

      services: Array<{

      }>,

      styles: Array<{

      }>,

      injectStylesAsString: Array<any>,

      injectStylesAsStringToTop: Array<string>,
   },
  }
declare module '@nuxt/schema' {
  interface RuntimeConfig extends UserRuntimeConfig {}
  interface PublicRuntimeConfig extends UserPublicRuntimeConfig {}
}
declare module 'nuxt/schema' {
  interface RuntimeConfig extends SharedRuntimeConfig {}
  interface PublicRuntimeConfig extends SharedPublicRuntimeConfig {}
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: UserRuntimeConfig
        }
      }