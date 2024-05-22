import { Registry } from "@/registry/schema"

const ui: Registry = [
  {
    name: "breadcrumbs",
    type: "components:ui",
    dependencies: ["react-aria-components"],
    registryDependencies: ["button"],
    files: ["ui/breadcrumbs.tsx"],
  },
  {
    name: "button",
    type: "components:ui",
    dependencies: ["react-aria-components", "class-variance-authority"],
    files: ["ui/button.tsx"],
  },
  {
    name: "calendar",
    type: "components:ui",
    dependencies: ["react-aria-components"],
    registryDependencies: ["button"],
    files: ["ui/calendar.tsx"],
  },
  {
    name: "checkbox",
    type: "components:ui",
    dependencies: ["react-aria-components"],
    registryDependencies: ["label"],
    files: ["ui/checkbox.tsx"],
  },
  {
    name: "color",
    type: "components:ui",
    dependencies: ["react-aria-components"],
    files: ["ui/color.tsx"],
  },
  {
    name: "combobox",
    type: "components:ui",
    dependencies: ["react-aria-components"],
    files: ["ui/combobox.tsx"],
  },
  {
    name: "date-picker",
    type: "components:ui",
    dependencies: ["react-aria-components"],
    registryDependencies: ["button", "popover"],
    files: ["ui/date-picker.tsx"],
  },
  {
    name: "dialog",
    type: "components:ui",
    dependencies: ["react-aria-components", "class-variance-authority"],
    files: ["ui/dialog.tsx"],
  },
  {
    name: "dropzone",
    type: "components:ui",
    dependencies: ["react-aria-components"],
    files: ["ui/dropzone.tsx"],
  },
  {
    name: "input",
    type: "components:ui",
    dependencies: ["react-aria-components"],
    files: ["ui/input.tsx"],
  },
  {
    name: "label",
    type: "components:ui",
    dependencies: ["react-aria-components", "class-variance-authority"],
    files: ["ui/label.tsx"],
  },
  {
    name: "link",
    type: "components:ui",
    dependencies: ["react-aria-components", "class-variance-authority"],
    registryDependencies: ["button"],
    files: ["ui/link.tsx"],
  },
  {
    name: "menu",
    type: "components:ui",
    dependencies: ["react-aria-components"],
    files: ["ui/menu.tsx"],
  },
  {
    name: "meter",
    type: "components:ui",
    dependencies: ["react-aria-components"],
    files: ["ui/meter.tsx"],
  },
  {
    name: "popover",
    type: "components:ui",
    dependencies: ["react-aria-components"],
    files: ["ui/popover.tsx"],
  },
  {
    name: "progress",
    type: "components:ui",
    dependencies: ["react-aria-components"],
    files: ["ui/progress.tsx"],
  },
  {
    name: "radio-group",
    type: "components:ui",
    dependencies: ["react-aria-components"],
    registryDependencies: ["label"],
    files: ["ui/radio-group.tsx"],
  },
  {
    name: "searchfield",
    type: "components:ui",
    dependencies: ["react-aria-components"],
    files: ["ui/searchfield.tsx"],
  },
  {
    name: "select",
    type: "components:ui",
    dependencies: ["react-aria-components"],
    files: ["ui/select.tsx"],
  },
  {
    name: "separator",
    type: "components:ui",
    dependencies: ["react-aria-components"],
    files: ["ui/separator.tsx"],
  },
  {
    name: "slider",
    type: "components:ui",
    dependencies: ["react-aria-components"],
    files: ["ui/slider.tsx"],
  },
  {
    name: "switch",
    type: "components:ui",
    dependencies: ["react-aria-components"],
    files: ["ui/switch.tsx"],
  },
  {
    name: "tabs",
    type: "components:ui",
    dependencies: ["react-aria-components"],
    files: ["ui/tabs.tsx"],
  },
  {
    name: "textarea",
    type: "components:ui",
    dependencies: ["react-aria-components"],
    files: ["ui/textarea.tsx"],
  },
  {
    name: "toggle",
    type: "components:ui",
    dependencies: ["react-aria-components", "class-variance-authority"],
    files: ["ui/toggle.tsx"],
  },
  {
    name: "tooltip",
    type: "components:ui",
    dependencies: ["react-aria-components"],
    files: ["ui/tooltip.tsx"],
  },
]

const example: Registry = [
  {
    name: "breadcrumbs-demo",
    type: "components:example/breadcrumbs",
    registryDependencies: ["breadcrumbs"],
    files: ["example/breadcrumbs/breadcrumbs-demo.tsx"],
  },
  {
    name: "breadcrumbs-dropdown",
    type: "components:example/breadcrumbs",
    registryDependencies: ["breadcrumbs"],
    files: ["example/breadcrumbs/breadcrumbs-dropdown.tsx"],
  },
  {
    name: "breadcrumbs-disabled",
    type: "components:example/breadcrumbs",
    registryDependencies: ["breadcrumbs"],
    files: ["example/breadcrumbs/breadcrumbs-disabled.tsx"],
  },
  {
    name: "breadcrumbs-ellipsis",
    type: "components:example/breadcrumbs",
    registryDependencies: ["breadcrumbs"],
    files: ["example/breadcrumbs/breadcrumbs-ellipsis.tsx"],
  },
  {
    name: "breadcrumbs-separator",
    type: "components:example/breadcrumbs",
    registryDependencies: ["breadcrumbs"],
    files: ["example/breadcrumbs/breadcrumbs-separator.tsx"],
  },
  {
    name: "breadcrumbs-items",
    type: "components:example/breadcrumbs",
    registryDependencies: ["breadcrumbs"],
    files: ["example/breadcrumbs/breadcrumbs-items.tsx"],
  },
  {
    name: "button-demo",
    type: "components:example/button",
    registryDependencies: ["button"],
    files: ["example/button/button-demo.tsx"],
  },
  {
    name: "button-ghost",
    type: "components:example/button",
    registryDependencies: ["button"],
    files: ["example/button/button-ghost.tsx"],
  },
  {
    name: "button-icon",
    type: "components:example/button",
    registryDependencies: ["button"],
    files: ["example/button/button-icon.tsx"],
  },
  {
    name: "button-link",
    type: "components:example/button",
    registryDependencies: ["button"],
    files: ["example/button/button-link.tsx"],
  },
  {
    name: "button-loading",
    type: "components:example/button",
    registryDependencies: ["button"],
    files: ["example/button/button-loading.tsx"],
  },
  {
    name: "button-press",
    type: "components:example/button",
    registryDependencies: ["button"],
    files: ["example/button/button-press.tsx"],
  },
  {
    name: "button-secondary",
    type: "components:example/button",
    registryDependencies: ["button"],
    files: ["example/button/button-secondary.tsx"],
  },
  {
    name: "button-with-icon",
    type: "components:example/button",
    registryDependencies: ["button"],
    files: ["example/button/button-with-icon.tsx"],
  },
  {
    name: "button-outline",
    type: "components:example/button",
    registryDependencies: ["button"],
    files: ["example/button/button-outline.tsx"],
  },
  {
    name: "button-destructive",
    type: "components:example/button",
    registryDependencies: ["button"],
    files: ["example/button/button-destructive.tsx"],
  },
  {
    name: "calendar-demo",
    type: "components:example/calendar",
    registryDependencies: ["calendar"],
    files: ["example/calendar/calendar-demo.tsx"],
  },
  {
    name: "checkbox-demo",
    type: "components:example/checkbox",
    registryDependencies: ["checkbox"],
    files: ["example/checkbox/checkbox-demo.tsx"],
  },
  {
    name: "checkbox-disabled",
    type: "components:example/checkbox",
    registryDependencies: ["checkbox"],
    files: ["example/checkbox/checkbox-disabled.tsx"],
  },
  {
    name: "checkbox-group-demo",
    type: "components:example/checkbox",
    registryDependencies: ["checkbox"],
    files: ["example/checkbox/checkbox-group-demo.tsx"],
  },
  {
    name: "checkbox-indeterminate",
    type: "components:example/checkbox",
    registryDependencies: ["checkbox"],
    files: ["example/checkbox/checkbox-indeterminate.tsx"],
  },
  {
    name: "checkbox-readonly",
    type: "components:example/checkbox",
    registryDependencies: ["checkbox"],
    files: ["example/checkbox/checkbox-readonly.tsx"],
  },
  {
    name: "checkbox-with-text",
    type: "components:example/checkbox",
    registryDependencies: ["checkbox"],
    files: ["example/checkbox/checkbox-with-text.tsx"],
  },
  {
    name: "color-area",
    type: "components:example/color",
    registryDependencies: ["color"],
    files: ["example/color/color-area.tsx"],
  },
  {
    name: "color-slider",
    type: "components:example/color",
    registryDependencies: ["color"],
    files: ["example/color/color-slider.tsx"],
  },
  {
    name: "color-swatch-picker",
    type: "components:example/color",
    registryDependencies: ["color"],
    files: ["example/color/color-swatch-picker.tsx"],
  },
  {
    name: "color-wheel",
    type: "components:example/color",
    registryDependencies: ["color"],
    files: ["example/color/color-wheel.tsx"],
  },
  {
    name: "combobox-basic",
    type: "components:example/combobox",
    registryDependencies: ["combobox"],
    files: ["example/combobox/combobox-basic.tsx"],
  },
  {
    name: "combobox-demo",
    type: "components:example/combobox",
    registryDependencies: ["combobox"],
    files: ["example/combobox/combobox-demo.tsx"],
  },
  {
    name: "combobox-dynamic",
    type: "components:example/combobox",
    registryDependencies: ["combobox"],
    files: ["example/combobox/combobox-dynamic.tsx"],
  },
  {
    name: "combobox-link",
    type: "components:example/combobox",
    registryDependencies: ["combobox"],
    files: ["example/combobox/combobox-link.tsx"],
  },
  {
    name: "combobox-section",
    type: "components:example/combobox",
    registryDependencies: ["combobox"],
    files: ["example/combobox/combobox-section.tsx"],
  },
  {
    name: "date-picker-demo",
    type: "components:example/datepicker",
    registryDependencies: ["datepicker"],
    files: ["example/datepicker/date-picker-demo.tsx"],
  },
  {
    name: "date-picker-range-demo",
    type: "components:example/datepicker",
    registryDependencies: ["datepicker"],
    files: ["example/datepicker/date-picker-range-demo.tsx"],
  },
  {
    name: "date-picker-with-presets",
    type: "components:example/datepicker",
    registryDependencies: ["datepicker"],
    files: ["example/datepicker/date-picker-with-presets.tsx"],
  },
  {
    name: "dialog-alert-demo",
    type: "components:example/dialog",
    registryDependencies: ["dialog"],
    files: ["example/dialog/dialog-alert-demo.tsx"],
  },
  {
    name: "dialog-close-button",
    type: "components:example/dialog",
    registryDependencies: ["dialog"],
    files: ["example/dialog/dialog-close-button.tsx"],
  },
  {
    name: "dialog-demo",
    type: "components:example/dialog",
    registryDependencies: ["dialog"],
    files: ["example/dialog/dialog-demo.tsx"],
  },
  {
    name: "dialog-sheet",
    type: "components:example/dialog",
    registryDependencies: ["dialog"],
    files: ["example/dialog/dialog-sheet.tsx"],
  },
  {
    name: "dropzone-demo",
    type: "components:example/dropzone",
    registryDependencies: ["dropzone"],
    files: ["example/dropzone/dropzone-demo.tsx"],
  },
  {
    name: "dropzone-file",
    type: "components:example/dropzone",
    registryDependencies: ["dropzone"],
    files: ["example/dropzone/dropzone-file.tsx"],
  },
  {
    name: "file-trigger-button-demo",
    type: "components:example/file-trigger",
    registryDependencies: ["button"],
    files: ["example/file-trigger/file-trigger-button-demo.tsx"],
  },
  {
    name: "input-demo",
    type: "components:example/input",
    registryDependencies: ["input"],
    files: ["example/input/input-demo.tsx"],
  },
  {
    name: "input-disabled",
    type: "components:example/input",
    registryDependencies: ["input"],
    files: ["example/input/input-disabled.tsx"],
  },
  {
    name: "input-file",
    type: "components:example/input",
    registryDependencies: ["input"],
    files: ["example/input/input-file.tsx"],
  },
  {
    name: "label-demo",
    type: "components:example/label",
    registryDependencies: ["label"],
    files: ["example/label/label-demo.tsx"],
  },
  {
    name: "link-demo",
    type: "components:example/link",
    registryDependencies: ["link"],
    files: ["example/link/link-demo.tsx"],
  },
  {
    name: "link-variants",
    type: "components:example/link",
    registryDependencies: ["link"],
    files: ["example/link/link-variants.tsx"],
  },
  {
    name: "dropdown-menu-basic",
    type: "components:example/menu",
    registryDependencies: ["menu"],
    files: ["example/menu/dropdown-menu-basic.tsx"],
  },
  {
    name: "dropdown-menu-sub-dynamic",
    type: "components:example/menu",
    registryDependencies: ["menu"],
    files: ["example/menu/dropdown-menu-sub-dynamic.tsx"],
  },
  {
    name: "dropdown-menu-checkboxes",
    type: "components:example/menu",
    registryDependencies: ["menu"],
    files: ["example/menu/dropdown-menu-checkboxes.tsx"],
  },
  {
    name: "dropdown-menu-demo",
    type: "components:example/menu",
    registryDependencies: ["menu"],
    files: ["example/menu/dropdown-menu-demo.tsx"],
  },
  {
    name: "dropdown-menu-dynamic",
    type: "components:example/menu",
    registryDependencies: ["menu"],
    files: ["example/menu/dropdown-menu-dynamic.tsx"],
  },
  {
    name: "dropdown-menu-link",
    type: "components:example/menu",
    registryDependencies: ["menu"],
    files: ["example/menu/dropdown-menu-link.tsx"],
  },
  {
    name: "dropdown-menu-radio-group",
    type: "components:example/menu",
    registryDependencies: ["menu"],
    files: ["example/menu/dropdown-menu-radio-group.tsx"],
  },
  {
    name: "dropdown-menu-section",
    type: "components:example/menu",
    registryDependencies: ["menu"],
    files: ["example/menu/dropdown-menu-section.tsx"],
  },
  {
    name: "meter-demo",
    type: "components:example/meter",
    registryDependencies: ["meter"],
    files: ["example/meter/meter-demo.tsx"],
  },
  {
    name: "meter-value",
    type: "components:example/meter",
    registryDependencies: ["meter"],
    files: ["example/meter/meter-value.tsx"],
  },
  {
    name: "popover-demo",
    type: "components:example/popover",
    registryDependencies: ["popover"],
    files: ["example/popover/popover-demo.tsx"],
  },
  {
    name: "popover-position",
    type: "components:example/popover",
    registryDependencies: ["popover"],
    files: ["example/popover/popover-position.tsx"],
  },
  {
    name: "progress-demo",
    type: "components:example/progress",
    registryDependencies: ["progress"],
    files: ["example/progress/progress-demo.tsx"],
  },
  {
    name: "progress-value",
    type: "components:example/progress",
    registryDependencies: ["progress"],
    files: ["example/progress/progress-value.tsx"],
  },
  {
    name: "radio-group-demo",
    type: "components:example/radio",
    registryDependencies: ["radio-group"],
    files: ["example/radio/radio-group-demo.tsx"],
  },
  {
    name: "radio-group-orientation",
    type: "components:example/radio",
    registryDependencies: ["radio-group"],
    files: ["example/radio/radio-group-orientation.tsx"],
  },
  {
    name: "searchfield-demo",
    type: "components:example/searchfield",
    registryDependencies: ["searchfield"],
    files: ["example/searchfield/searchfield-demo.tsx"],
  },
  {
    name: "searchfield-disabled",
    type: "components:example/searchfield",
    registryDependencies: ["searchfield"],
    files: ["example/searchfield/searchfield-disabled.tsx"],
  },
  {
    name: "select-demo",
    type: "components:example/select",
    registryDependencies: ["select"],
    files: ["example/select/select-demo.tsx"],
  },
  {
    name: "select-disabled",
    type: "components:example/select",
    registryDependencies: ["select"],
    files: ["example/select/select-disabled.tsx"],
  },
  {
    name: "select-dynamic",
    type: "components:example/select",
    registryDependencies: ["select"],
    files: ["example/select/select-dynamic.tsx"],
  },
  {
    name: "select-links",
    type: "components:example/select",
    registryDependencies: ["select"],
    files: ["example/select/select-links.tsx"],
  },
  {
    name: "select-sections",
    type: "components:example/select",
    registryDependencies: ["select"],
    files: ["example/select/select-sections.tsx"],
  },
  {
    name: "separator-demo",
    type: "components:example/separator",
    registryDependencies: ["separator"],
    files: ["example/separator/separator-demo.tsx"],
  },
  {
    name: "slider-demo",
    type: "components:example/slider",
    registryDependencies: ["slider"],
    files: ["example/slider/slider-demo.tsx"],
  },
  {
    name: "slider-value",
    type: "components:example/slider",
    registryDependencies: ["slider"],
    files: ["example/slider/slider-value.tsx"],
  },
  {
    name: "slider-vertical",
    type: "components:example/slider",
    registryDependencies: ["slider"],
    files: ["example/slider/slider-vertical.tsx"],
  },
  {
    name: "switch-demo",
    type: "components:example/switch",
    registryDependencies: ["switch"],
    files: ["example/switch/switch-demo.tsx"],
  },
  {
    name: "switch-disabled",
    type: "components:example/switch",
    registryDependencies: ["switch"],
    files: ["example/switch/switch-disabled.tsx"],
  },
  {
    name: "switch-readonly",
    type: "components:example/switch",
    registryDependencies: ["switch"],
    files: ["example/switch/switch-readonly.tsx"],
  },
  {
    name: "tabs-demo",
    type: "components:example/tabs",
    registryDependencies: ["tabs"],
    files: ["example/tabs/tabs-demo.tsx"],
  },
  {
    name: "textarea-demo",
    type: "components:example/textarea",
    registryDependencies: ["textarea"],
    files: ["example/textarea/textarea-demo.tsx"],
  },
  {
    name: "textarea-disabled",
    type: "components:example/textarea",
    registryDependencies: ["textarea"],
    files: ["example/textarea/textarea-disabled.tsx"],
  },
  {
    name: "textarea-with-button",
    type: "components:example/textarea",
    registryDependencies: ["textarea"],
    files: ["example/textarea/textarea-with-button.tsx"],
  },
  {
    name: "textarea-with-label",
    type: "components:example/textarea",
    registryDependencies: ["textarea"],
    files: ["example/textarea/textarea-with-label.tsx"],
  },
  {
    name: "textarea-with-text",
    type: "components:example/textarea",
    registryDependencies: ["textarea"],
    files: ["example/textarea/textarea-with-text.tsx"],
  },
  {
    name: "textfield-demo",
    type: "components:example/textfield",
    registryDependencies: ["textfield"],
    files: ["example/textfield/textfield-demo.tsx"],
  },
  {
    name: "textfield-desc",
    type: "components:example/textfield",
    registryDependencies: ["textfield"],
    files: ["example/textfield/textfield-desc.tsx"],
  },
  {
    name: "textfield-textarea",
    type: "components:example/textfield",
    registryDependencies: ["textfield"],
    files: ["example/textfield/textfield-textarea.tsx"],
  },
  {
    name: "toggle-demo",
    type: "components:example/toggle",
    registryDependencies: ["toggle"],
    files: ["example/toggle/toggle-demo.tsx"],
  },
  {
    name: "toggle-disabled",
    type: "components:example/toggle",
    registryDependencies: ["toggle"],
    files: ["example/toggle/toggle-disabled.tsx"],
  },
  {
    name: "toggle-lg",
    type: "components:example/toggle",
    registryDependencies: ["toggle"],
    files: ["example/toggle/toggle-lg.tsx"],
  },
  {
    name: "toggle-outline",
    type: "components:example/toggle",
    registryDependencies: ["toggle"],
    files: ["example/toggle/toggle-outline.tsx"],
  },
  {
    name: "toggle-sm",
    type: "components:example/toggle",
    registryDependencies: ["toggle"],
    files: ["example/toggle/toggle-sm.tsx"],
  },
  {
    name: "toggle-with-text",
    type: "components:example/toggle",
    registryDependencies: ["toggle"],
    files: ["example/toggle/toggle-with-text.tsx"],
  },
  {
    name: "tooltip-demo",
    type: "components:example/tooltip",
    registryDependencies: ["tooltip"],
    files: ["example/tooltip/tooltip-demo.tsx"],
  },
  {
    name: "tooltip-position",
    type: "components:example/tooltip",
    registryDependencies: ["tooltip"],
    files: ["example/tooltip/tooltip-position.tsx"],
  },
]

export const registry: Registry = [...ui, ...example]
