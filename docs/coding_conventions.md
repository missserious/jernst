# Coding Conventions

This document outlines the main coding conventions for this project, including imports, hooks, component naming, TypeScript type usage, and folder structure.

---

## 1. Imports

Imports should be organized in logical groups for clarity and consistency. The recommended order is:

1. **External libraries** – packages from `node_modules` (e.g., `react`, `react-icons`, `axios`)
2. **React hooks** – `useState`, `useEffect`, etc.
3. **Custom hooks** – your own hooks from `/hooks/` or similar folders
4. **Data / Constants** – static data, JSON, or constants
5. **Types** – TypeScript types or interfaces
6. **Components** – internal UI components
7. **Styles** – CSS, SCSS, or Tailwind imports

### Example

```ts
// 1️⃣ External libraries
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5';

// 2️⃣ React hooks
import { useState } from 'react';

// 3️⃣ Custom hooks (if any)
// import { useMyCustomHook } from '../../hooks/useMyCustomHook';

// 4️⃣ Data / Constants
import skills from '../../data/data';

// 5️⃣ Types
import type {
  SkillSection as SkillSectionType,
  SkillGroup as SkillGroupType,
} from '../../data/data';

// 6️⃣ Components
import { Welcome } from './Welcome';
import { Education } from './Education';
import { ProfileImage } from './ProfileImage';

// 7️⃣ Styles (if any)
// import './Main.css';
```

## Tips / Notes

- Combine multiple imports from the same file whenever possible.
- Use `type` inline for TypeScript types rather than separate lines.
- Separate import groups with a blank line for readability.
- Alphabetical order within groups is recommended but optional.
- Custom hooks should always be grouped separately from React hooks.

---

## 2. Component Naming

- Components should use **PascalCase**: `SkillSection`, `ProfileImage`, etc.
- Components should follow the **single responsibility principle** — one component, one job.
- Small helper components used only internally can remain in the same file.
- Components should be reusable and modular whenever possible.

---

## 3. TypeScript Type Naming

- Only annotate types where necessary; avoid redundant type annotations.
- If a Type and Component share the same name, rename the type using a clear suffix:

```ts
type SkillSection as SkillSectionType
```
