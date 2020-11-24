---
title: Developer Accessibility Guidelines
subtitle: To ensure that we are building the best possible products that work for everyone, we need to consider accessibility at every stage.
category: guidelines
---

# Accessible mixins for web

Within Backpack there are a number of Sass mixins available for use to enable content to be more accessible.

[`bpk-hidden`](https://backpack.github.io/sassdoc/#mixin-bpk-hidden)

Used to hide visually and from screen readers.

[`bpk-visually-hidden`](https://backpack.github.io/sassdoc/#mixin-bpk-visually-hidden)

Hide only visually, but have it available for screen readers. [Learn more &raquo;](http://snook.ca/archives/html_and_css/hiding-content-for-accessibility)

[`bpk-visually-hidden--focusable`](https://backpack.github.io/sassdoc/#mixin-bpk-visually-hidden--focusable)

Modifies the `bpk-visually-hidden` mixin to allow the element to be focusable when navigated to via the keyboard. [Learn more &raquo;](https://www.drupal.org/node/897638)

[`bpk-invisible`](https://backpack.github.io/sassdoc/#mixin-bpk-invisible)

Hide visually and from screen readers, but maintain layout.

# Color

### **Why**

If travellers have customised their device settings to suit their needs, we need to respect their preferences. 

### **Who**
- Low vision
- Colour blindness
- Other vision impairments
- Cognitive impairments that affect vision, like dyslexia
- Extreme conditions, like bright sunlight

### **How**

Use platform standards and respect system settings, like dark mode and reduce transparency for example.

### **Tips**
- Design for dark mode option
- Prefer system settings to custom settings

### **Tests**

Enable dark mode and reduced transparency, and make sure your products respond in the right way. 

# Text

## Size

### **Why**

Being able to read the copy on a page is the most important part of interacting with a product.

### **Who**
- Low vision
- Other vision impairments
- Extreme conditions, like bright sunlight

### **How**

Make default text sizes large enough for the majority of people to see without having to zoom in.

### **Do / Don't**

- Do use text that's `11pt` or larger with high enough colour contrast to the background 
- Don't use text smaller than `11pt`

### **Tips**
- Minimum text size = `11pt`
- When text is smaller than `18pt` or `14pt` bold ('font-size-base' and below), make sure the contrast ratio is at least 4.5:1
View Colour Pairings chart
- When text is larger or equal to `18pt` or `14pt` bold ('font-size-lg' and above), make sure the contrast ratio is at least 3:1
View Colour Pairings chart

### **Tests**
- Use ['Stark' plugin](https://www.getstark.co/0) in Sketch or Figma to check colour contrast.
- Use a [standalone colour contrast checker](https://developer.paciellogroup.com/resources/contrastanalyser/).

## Labels

### **Why**

Field labels help travellers understand what information they need to input.

### **Who**
- Everyone

### **How**

Make sure form labels are provided and linked to the input they describe.

### **Do / Don't**

- Do place field labels next to the field
- Don't use placeholder text in place of form fields if it disappears

### **Tips**

- Web: Use the HTML `for` attribute to link the label and input field
- Mobile: Provide a suitable label to the input component

### **Tests**

- Web: Click on the form label and check that the input is focused – if linked properly, this will happen
- Mobile: Use a screen reader to check that the field is accurately described when focus is on the label

## Hint text

### **Why**

Hint text can help travellers enter the correct information first time, but making it disappear can be confusing.

### **Who**
- Low vision
- Dementia
- Dyslexia
- Learning difficulties
- Other cognitive impairments

### **How**

Make sure hint text doesn't ever disappear.

### **Do / Don't**

- Do use hint text that's always visible
- Don't make hint text disappear

### **Tips**
- Placeholders within fields should be avoided
- No hint text should ever disappear
- Use the HTML `aria-describedby` attribute to connect the input field to the hint element

### **Tests**
- Check the hint text is always visible during input into the field
- Use a screen reader to select the field, and check that the hint is read out when the field is selected

## Error messages

### **Why**

To help travellers enter their details correctly and proceed, we should help them correct their errors.

### **Who**
- Everyone

### **How**

Every invalid form field should appear obviously invalid, and be accompanied by a message explaining what's wrong.

### **Do / Don't**
- Do provide clear error messages next to the field
- Don't leave the traveller guessing or confused

### **Tips**
- Don't rely on colour alone to show the invalid state
- Include a message that clearly helps the traveller correct the error
- Remove the error message when the traveller has rectified the error, and not before
- To help users enter text correctly, consider using auto suggests

### **Tests**
- Enter multiple invalid inputs, checking the relevant error appears at the right time and it's clear to see
- Use a screen reader to select the field, and verify that the error message is read out when the field is selected

# Images

## ALT text

### **Why**

ALT text describes an image so that people unable to see it can still consume the content.

### **Who**
- Screen reader users
- Slow connections

### **How**

Every non-decorative image should have ALT text describing its content. Purely decorative images should be hidden from screen readers.

### **Do / Don't**

- Do provide ALT text when the image adds to the understanding of the page
- Don't add ALT text when images are decorative only
- Do provide clear, concise ALT text to describe images
- Don't do nothing – either provide ALT text or use ALT text = "" to avoid the file name being read out

### **Tips**
- Accurately describe the image in a concise way
- Keep the description straight forward, and avoid phrases like "an image of..."
- Hide decorative images from screen readers using `ALT text = ""`
- Hide images that are already described, like a search icon inside a search button

### **Tests**

Use a screen reader to check that images are properly labelled/hidden.

# Structure

## Landmarks

### **Why**

Using "landmarks" allows screen reader users to quickly understand the content of a page and skip to the section they want. It also helps robots understand the page, improving SEO.

### **Who**
- Screen reader users
- Robots (eg search engines)

### **How**

Use platform components to layout screens to help non-visual users understand page structure. If necessary provide additional roles to generic components to tell screen readers about the layout.

### **Do / Don't**

- Do use platform components to layout screens

### **Tips**
- Web
  - Use landmark components such as navigation, banner, main, sections, footer
  - Sparingly apply landmark roles when the role cannot be inferred from the component type
- App
  - Use `Navigation` or `TabBar` components and roles to signify landmarks on the screen

### **Tests**

Use a screen reader to verify that landmark roles are correctly assigned.

## Headings

### **Why**
Using "headings" allows screen reader users to quickly understand the content of a page and skip to the section they want. It also helps robots understand the page, improving SEO.

### **Who**
- Screen reader users
- Robots (eg search engines)

### **How**

Use Headings #H1 to #H4 to structure a page to help screen reader users understand section hierarchy. 

### **Do / Don't**

- Do use Heading tags on all headings

### **Tips**
- Use an appropriate Heading element instead of simply styling a paragraph to look like a heading
- Heading copy should clearly describe the content underneath it
- Headings can be hidden if not beneficial to sighted users
- Note that the screen reader will read 'heading level 1' for example, after reading the actual heading

### **Tests**

Use a screen reader and select "headings" mode from the rotor. Check that all headings are found.

## Page titles

### **Why**

Web users switching between multiple tabs will find it helpful to see a description of the tab in their browser.

### **Who**
- All web users

### **How**

Provide page titles in a consistent format across the site, for example, `Page name | Section - Site name`

### **Do / Don't**
- Do use consistently formatted page titles

### **Tests**

Look at browser tabs to check that page titles exist and are accurate.

## Language annotations

### **Why**

This helps screen readers and audio describers know which language content is written in.

### **Who**
- Screen reader users
- Robots (eg search engines)

### **How**

Annotate screens with the language they are written in. If a different language is used for some elements, they should be individually annotated.

### **Do / Don't**
- Do use the `lang` tag

### **Tests**
- Check HTML to make sure the `lang` tag is present
- Use a screen reader and check that content is read in the correct language

# Navigation and interaction

## Keyboard/alternative input

### **Why**

Many travellers interact with websites and apps using a keyboard, switch, or alternative set up, instead of using a mouse or touching a screen.

### **Who**
- Reduced mobility / dexterity
- Screen reader users
- Keyboard / switch / alternative set ups
- Voice input users
- Power users

### **How**

Make sure all interactive elements can be tabbed to in a predictable order, and activated without using a mouse or touching a screen.

### **Do / Don't**
- Do allow all interactive elements to be reached in a logical order
- Don't miss out interactive elements or use an unpredictable order
- Do give users control, no matter how they are interacting 
- Don't rely on using a mouse or touching a screen 

### **Tips**
- Non-functional elements should not be focusable
- Always provide an alternative to gesture-based interactions
- The tabbing order should be left-to-right, top-to-bottom (or equivalent for RTL languages)
- Focus indicators should clearly show which interactive element is highlighted
- Ensure focus is never trapped inside any elements
- Annotate elements with a `live` attribute if they appear on the screen to inform the user of something (eg an alert) – doing this will make sure their attention is drawn to it, and will focus it automatically

### **Tests**
- Disable your trackpad, and see how usable your product is using these shortcuts:
  - `Tab` to progress through links and controls
  - `Shift-tab` to reverse
  - `Enter` to follow links
  - `Space` to select form controls (eg tick boxes)
  - Arrows for radio-buttons/tabs

## Focus indicators

### **Why**

If a traveller is navigating a page using a keyboard or alternative input, a focus indicator shows which element is highlighted.

### **Who**
- Reduced mobility or dexterity
- Screen reader users
- Keyboard/switch/alternative set ups
- Voice input users
- Power users

### **How**

All interactive elements should have a clear focused state that's easy to see against all backgrounds.

### **Do / Don't**
- Do use focus indicators that contrast well against all backgrounds
- Don't use focus indicators that contrast poorly against the background

### **Tips**
- Make focus indicators have a colour contrast ratio of at least 3:1 between the background and the element. [See colour pairing chart](/guidelines/colors/#section_pairings)
- All interactive elements should be clearly outlined by a focus indicator when they are highlighted
- Apps tend to use built in focus indicators that work well

### **Tests**
- Disable your trackpad and check that focus indicators are always visible when tabbing through the screen

# Magnification

### **Why**

Some people may struggle to see content unless they are able to magnify it.

### **Who**
- Low vision
- Other visual impairments
- Tired or strained eyes
- Users of localised content

### **How**
- Web: Allow users to zoom to 400% without losing content or functionality
- App: Respect system text size preferences without losing content or functionality

### **Do / Don't**
- Do use good responsive design
- Don't use elements that won't zoom well, like sticky footers

### **Tips**
- "Sticky" UI can make parts of the screen inaccessible, especially on smaller screens
- Web: Use responsive layout
- App: Use `autolayout`

### **Tests**
- Magnify content up to 400% and check that all elements are still visible and operational across all devices and all screen sizes

# Animation

## Reduce motion

### **Why**

A traveller might enable "reduce motion" to help them use a product without distractions. Others may enable it to prolong their battery life.

### **Who**
- Autism
- Dyslexia
- Cognitive impairment
- Users with poor battery

### **How**
Respect the system setting for "reduce motion". Use softer transitions, don't auto-advance content, and pause animations/videos by default.

### **Do / Don't**
- Do use soft transitions
- Don't use high motion transitions
- Do allow users to control motion themselves

### **Tips**
- If "reduce motion" is enabled, animate elements in with a smooth fade transition or no transition at all instead of using motion
- Content should not change or auto-advance without explicit user intent
- Animations and videos should have a pause option – media should only play automatically if "reduce motion" is not enabled

### **Tests**
- Enable the "reduced motion" system setting and make sure your product responds appropriately

# ARIA labels and patterns

## ARIA labels

### **Why**

Providing suitable ARIA annotations makes it easier for screen reader users to understand a widget without having to piece together clues.

### **Who**
- Screen reader users
- Robots (eg search engines)

### **How**

Use sparingly. Add appropriate ARIA labels and roles on elements that should be read out by a screen reader. Hide elements that don't add value on their own.

### **Do / Don't**
- Do label groups of elements together if they should be treated as a single element
- Don't make a screen reader read related elements separately

### **Tips**
- Only use ARIA labels and roles when they make the UI more understandable
- Often elements don't need any extra labels or roles, so they shouldn't be added
- Use aria-live on widgets that have a changing state, like a progress bar
- Prefer `aria-live="polite"` to `aria-live="assertive"` unless the update should interrupt the user immediately
- Use aria-expanded on toggles (eg menu toggles) to indicate whether they are open or closed
- Use the HTML `for` attribute to link the label and input field
- Use the HTML `aria-describedby` attribute to connect the input field to the hint element
- If the role can't be inferred from the component type, add a role to make it clearer, like `button`, `tab` or `menuitem`

### **Tests**
- Listen to the content using a screen reader to make sure it makes sense

## ARIA patterns

### **Why**

Providing suitable ARIA annotations makes it easier for screen reader users to understand a widget without having to piece together clues.

### **Who**
- Screen reader users
- Robots (eg search engines)

### **How**

If you have a complex component, check whether it fits into a defined pattern from the [ARIA Authoring Practises](https://www.w3.org/TR/wai-aria-practices-1.2/). 

Examples include Accordions, Breadcrumbs, Sliders, Carousels and Alerts.
