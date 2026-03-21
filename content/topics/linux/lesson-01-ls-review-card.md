---
title: Lesson 01 Review Card - ls
created: 2026-03-21
tags: [linux, ls, review, flashcard]
---

# 1-Minute Review Card: `ls`

## Must Remember
- `ls` lists directory content.
- `-l` long format, `-a` all files, `-A` almost all.
- `-t` sort by time, `-S` sort by size, `-r` reverse.
- `-h` human readable size (for long format).
- `.` current directory, `..` parent directory.

## Option Style Rule
- `-` is for short option names: `-l`, `-a`, `-t`.
- `--` is for long option names: `--color=auto`, `--help`.
- This is not about single vs many arguments.
- You can pass many of either style:
  - `ls -la`
  - `ls --color=auto --time-style=iso`

## `-l` vs `-n`
- `ls -l` shows owner/group names (e.g., `root`, `testuser`).
- `ls -n` shows numeric owner/group IDs (UID/GID).

## Time Sort Reminder
- `ls -lt` -> sort/display by `mtime`.
- `ls -ltu` -> sort/display by `atime`.
- `ls -ltc` -> sort/display by `ctime`.

## Size Reminder
- `-s` shows allocated blocks column.
- `-S` sorts entries by size (largest first).
- Practical readable combo: `ls -lSh`.

## Formatting Reminder
- `ls -1` -> one entry per line.
- `ls -m` -> comma-separated list (same idea as `--format=commas`).
- `ls -lQ` -> quote file names.
- `--time-style=locale|iso|full-iso` changes date display in long listing.
- Use `-Q` when debugging weird names (spaces, tabs, leading/trailing spaces).

## 8 Essential Commands

```bash
ls
ls -l
ls -a
ls -al
ls -lt
ls -lS
ls -lh
ls --help
```

## Common Mistakes
- Mixing `-s` and `-S` (they are different).
- Forgetting hidden files when debugging (`ls -a`).
- Thinking UID means group (UID is user, GID is group).

## Self-check (30 seconds)
1. How do I list parent directory?
2. How do I show one file per line with quotes?
3. How do I print long list with human-readable sizes?

Answers:
1. `ls ..`
2. `ls -1Q`
3. `ls -lh`
