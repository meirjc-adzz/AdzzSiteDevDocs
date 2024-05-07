---
title: Theme and Style documentation
description: A guide about Formatting Colors in the Color Scheme Table.
---

## Adding and Formatting Colors in the Color Scheme Table

Welcome to our documentation! This guide will walk you through the process of adding new colors to our color scheme table, including how to generate preview images using the Place-Hold.IT service. By following these guidelines, you can ensure that your additions are consistent with our project's standards.

## Color Scheme Table Format

Our color scheme table includes the following columns:

- **Color Name**: The name of the color as it will be referenced in the project.
- **Hex Code**: The hex code for the color.
- **Usage**: A description of how/where the color is used.
- **Preview**: A visual preview of the color.

## Steps to Add a New Color

### 1. Define Color Information

Ensure the color is not currently already in the table and that it does defined proprly in the `tailwind.config.js` file.
Make sure you have the color name, its hex code, and a description of its usage ready. Here’s what you need to prepare:

- **Color Name**: Choose a descriptive name.
- **Hex Code**: Include the hex code in backticks, e.g., `#FFFFFF`.
- **Usage**: Describe where and how this color will be used in the project.

### 2. Generate the Preview Image

We use the Place-Hold.IT service to generate preview images. Here's how to format the URL for the preview image:

- **Base URL**: `https://place-hold.it`
- **Dimensions**: Typically `128x36` for uniformity.
- **Background Color**: The hex code of the color without the `#`.
- **Text Color**: `FFFFFF` for dark backgrounds and `000000` for light backgrounds.
- **Text**: The color name in lowercase.
- **Additional Parameters**: Include `bold` and `fontsize=18` to ensure visibility.

Example URL structure:

```
https://place-hold.it/160x48/HEX/TEXTCOLOR?text=COLORNAME&bold&fontsize=18
```

Replace `HEX`, `TEXTCOLOR`, and `COLORNAME` with the appropriate values.

### 3. Add the Entry to the Markdown Table

Once you have all the information and the image URL, add a new row to the Markdown table. Use this format:

```markdown
| Color Name | #Hex Code | Usage Description | ![Color Name](Image URL) |
```

Here's an example entry:

```markdown
| Sunshine | `#FFDD00` | Used for highlights | ![sunshine](https://place-hold.it/160x48/FFDD00/000000?text=sunshine&bold&fontsize=18) |
```

## Guidelines for Using Place-Hold.IT

- **Dimensions**: Only the width is required, but you can specify height for non-square images.
- **Colors**: Specify the background, text, and shadow colors using hex codes.
- **Text**: Customize the placeholder text using the `&text=` parameter.
- **Formatting Options**: Use `&bold`, `&italic`, or both for text formatting.
- **Font Size**: Adjust the default font size with `&fontsize=` followed by the size number.

For more detailed usage and parameters, refer to the [Place-Hold.IT Documentation](https://place-hold.it).

## Conclusion

By adhering to these guidelines, you ensure that our color scheme table remains helpful and consistent for all project contributors. If you encounter any issues or have suggestions for improvement, please reach out to our team.

Thank you for contributing to our project's documentation!
