# Momentum — Local Persistence Patch (v1)

This patch adds **local saving** for your app's data using `localStorage`. It works offline and requires **no backend**.

## What's included
- `src/hooks/useLocalStorage.ts` — a tiny, reusable React hook.

## How to enable persistence in your app
You only need to change *one line* where each piece of data is created.

### Option A — If tasks/notes live in the individual components
Edit these files (one at a time). If you don't see them, search for them in your repo:
- `components/TodoList.tsx` (or similar)
- `components/Notes.tsx` (or similar)

1) Import the hook at the top of the file:
   ```ts
   import { useLocalStorage } from "../hooks/useLocalStorage"; // adjust path if file is nested
   ```

2) Find where state is created (examples):
   ```ts
   const [tasks, setTasks] = React.useState<Task[]>([]);
   const [notes, setNotes] = React.useState<string>(""); 
   // or: const [notes, setNotes] = React.useState<Note[]>([]);
   ```

3) Replace those lines with:
   ```ts
   const [tasks, setTasks] = useLocalStorage<Task[]>("momentum_tasks_v1", []);
   const [notes, setNotes] = useLocalStorage<string>("momentum_notes_v1", "");
   // or for array of notes:
   // const [notes, setNotes] = useLocalStorage<Note[]>("momentum_notes_v1", []);
   ```

That's it — from now on, edits persist automatically.

### Option B — If tasks/notes are created in `App.tsx` and passed down
1) Import the hook at the top of `App.tsx`:
   ```ts
   import { useLocalStorage } from "./src/hooks/useLocalStorage"; // adjust path according to your structure
   ```

2) Replace the `useState` declarations for tasks/notes with `useLocalStorage`:
   ```ts
   const [tasks, setTasks] = useLocalStorage<Task[]>("momentum_tasks_v1", []);
   const [notes, setNotes] = useLocalStorage<string>("momentum_notes_v1", "");
   ```

3) Keep passing `tasks`, `setTasks`, `notes`, `setNotes` to child components as before.

## Tips
- You can create multiple keys: `momentum_todos_v1`, `momentum_notes_v1`, `momentum_pomodoros_v1`, etc.
- To **clear** saved data: open devtools → Application → Local Storage → delete keys, or run in console:  
  `localStorage.removeItem("momentum_tasks_v1"); localStorage.removeItem("momentum_notes_v1");`
- Data is stored **per browser & device**. Your phone and laptop won't share data unless you add sync later.

## Verification checklist
1. Add a task; refresh the page — it should still be there.  
2. Write a note; refresh — it persists.  
3. Open in another tab — changes sync within a second.

---
If you want, I can wire this into specific files for you — just tell me where your tasks and notes state currently live (`App.tsx`, `TodoList.tsx`, `Notes.tsx`, etc.).
