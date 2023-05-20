# GDG Algiers GameJam 2023 Website

Hey Developer, thanks for taking the chance to be part of this project.

### Contribution guidelines to be FOLLOWED

- We're using **yarn** as package manager instead of *npm*. **DO NOT use npm**
- **All necessary** tailwind configurations(colors, screen breakpoints, fonts) are specified in `./tailwind.config.cjs`. **DO NOT change this file without notifying the project manager**.
- Issues are created for each section, assign to your self the desired section to work on.
- **First thing to do**
  - Clone the project
  - Install the dependencies: *run the command* `yarn`
  - >If you don't have yarn, make sure to install it globally using the command: npm install -g  yarn
  - Assign your-self the issue you want to work in
- **Follow the folder structure** (a folder tree is created for each section).
- Before start working on your section, **make sure** to create a branch following the convention: `feature/[section]/[your_name]`.e.g: `feature/hero/abdessamed`
- **DO NOT** change any thing related to the Layout(layout structure, section title component ...etc).
- Each section's images must be put inside its appropriate folder in the `public` folder. Ex: for hero section images: `/public/heroImages/[image-name]`
- **DO NOT FORGET** to implement the 3 different screen sizes
  - `sm` breakpoint for small screens
  - `lg` breakpoint for large screens (1280px)
  - `2xl`breakpoint for extra large screens(1920px)
- All necessary packages are installed(swiperjs).
- Consider providing good commit messages when pushing your code. **Pull requests containing random commit messages will be closed immediately**.
