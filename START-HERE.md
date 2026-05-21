# How to run this site on Windows

## Use this folder (recommended)

```
C:\Users\mmena\marcos-mena-site
```

`npm install` often **fails** in the very long Claude cache path because Windows hits path-length limits and esbuild cannot install correctly. You may see:

```
npm error enoent spawn C:\WINDOWS\system32\cmd.exe
```

That error is misleading—the real issue is usually the **deep folder path**, not a missing `cmd.exe`.

## Commands

```powershell
cd C:\Users\mmena\marcos-mena-site
npm install
npm run dev
```

Open **http://localhost:4321**

## If you still get cmd.exe errors

1. Open **PowerShell as Administrator** (not from `C:\Windows\System32`).
2. Run:
   ```powershell
   [Environment]::SetEnvironmentVariable("COMSPEC", "C:\Windows\System32\cmd.exe", "User")
   ```
3. Close and reopen the terminal, then retry `npm install`.

## Production build

```powershell
npm run build
npm run preview
```
